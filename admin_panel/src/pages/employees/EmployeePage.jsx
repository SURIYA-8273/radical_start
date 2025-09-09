
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../components/modals/DeleteModal';
import axios from 'axios';
import { toast } from 'react-toastify';
import { config } from '../../config/config';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
};

const EmployeePage = () => {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const tableHeader = [
        "Employee Name",
        "Employee ID",
        "Department",
        "Designation",
        "Project",
        "Type",
        "Status",
        "Action"
    ];

    const [search, setSearch] = useState("");


    const handleSearch = (e) => setSearch(e.target.value);


    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchEmployees(search);
        }, 400);

        return () => clearTimeout(delayDebounce);
    }, [search]);


    const fetchEmployees = async (query = "") => {
        setLoading(true)
        try {
            const res = await axios.get(`${config.BASE_URL}/api/employees`, {
                params: { search: query }
            });
            if (res.data.message == "Employees retrieved successfully") {
                setEmployees(res.data.data || []);
            }

        } catch (err) {
            console.error("Error fetching employees:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleSelectedId = (id) => {
        setSelectedId(id);
        setIsOpen(true)
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${config.BASE_URL}/api/employees/${id}`
            );
            if (res.data.message == "Employee deleted successfully") {
                toast.success("Employee deleted successfully")
                setIsOpen(false);
                fetchEmployees();
            }
        } catch (err) {
            console.error("Error uploading employee:", err);
        }
    };



    return (
        <div className='w-full p-6'>

            <div className='flex justify-between pb-10 flex-col sm:flex-col md:flex-row lg:flex-row gap-y-5'>
                <h1 className='text-[27px] font-bold'>Employee</h1>
                <div className='flex gap-3 flex-row sm:flex-row '>
                    <div className='w-full sm:w-[230px] max-w-[230px] min-w-0 border border-gray-300 flex items-center justify-around px-2 py-3 rounded-xl font-medium'>
                        <div className=''><CiSearch size={22} /></div>
                        <input value={search} onChange={handleSearch} type="text" className='outline-none pl-2 w-full' placeholder='Search' />
                    </div>
                    <div onClick={() => navigate("/employee/create")} className='w-full  sm:w-[230px] max-w-[230px] min-w-0 hover:cursor-pointer bg-blue-500 flex items-center justify-around px-2 py-3 rounded-xl text-white font-medium'>
                        <IoIosAddCircleOutline size={25} />
                        <p className='text-[12px]'>Add New Employee</p>
                    </div>
                </div>
            </div>


            <div className='w-full overflow-auto rounded-lg border border-gray-300'>
                <table className='w-full'>
                    <thead className='border-b border-gray-300'>
                        <tr>
                            {
                                tableHeader.map((data, index) => {
                                    return <th key={index} className='font-normal text-[15px] text-left p-2 text-gray-500'>{data}</th>

                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading &&
                            <tr className='h-[200px]'>
                                <td
                                    colSpan={tableHeader.length}
                                    className="text-center p-6 text-gray-900 font-bold text-xl"
                                >
                                    <ClipLoader
                                        color={"#ffffff"}
                                        loading={loading}
                                        cssOverride={override}
                                        size={60}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                </td>
                            </tr>
                        }
                        {
                            !loading && employees.length === 0 ? (
                                <tr className='h-[200px]'>
                                    <td
                                        colSpan={tableHeader.length}
                                        className="text-center p-6 text-gray-900 font-bold text-xl"
                                    >
                                        No Records Found
                                    </td>
                                </tr>
                            ) :
                                employees.map((data) => {
                                    return <tr key={data.id}>
                                        <td className='p-2 text-[15px] text-gray-700 flex items-center gap-2'><div>
                                            <img src={data.profile_image || "/src/assets/profileImage.jpg"} alt="" height={30} width={30} className='rounded-full' />
                                        </div>{data.name}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.employee_id}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.department}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.designation}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.project_name}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.type}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.status}</td>
                                        <td className='p-2 text-[15px] text-gray-700 flex gap-3'>
                                            <div className='hover:cursor-pointer'> <FaRegEye size={23} onClick={() => navigate("/employee/view", { state: { employeeData: data } })} /></div>
                                            <div className='hover:cursor-pointer'><CiEdit size={23} onClick={() => navigate("/employee/edit", { state: { employeeData: data } })} />
                                            </div><div className='hover:cursor-pointer'> <MdDeleteOutline size={23} onClick={() => handleSelectedId(data.id)} /></div>
                                        </td>
                                    </tr>
                                })
                        }

                    </tbody>
                </table>
            </div>
            {
            }
            {
                isOpen && <DeleteModal isOpen={isOpen} handleDelete={() => handleDelete(selectedId)} setIsOpen={setIsOpen} />
            }
        </div>
    )
}

export default EmployeePage