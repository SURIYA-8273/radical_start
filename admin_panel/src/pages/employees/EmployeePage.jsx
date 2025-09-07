import { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../components/modals/DeleteModal';

const EmployeePage = () => {

    const navigate = useNavigate();

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

    const employees = [
        {
            name: "John Doe",
            id: "EMP001",
            department: "Marketing",
            designation: "Developer",
            project: "Admin Panel",
            type: "online",
            status: "permanent",
        },
        {
            name: "Jane Smith",
            id: "EMP002",
            department: "HR",
            designation: "Developer",
            project: "Recruitment Drive",
            type: "online",
            status: "permanent",
        },
        {
            name: "Michael Johnson",
            id: "EMP003",
            department: "Marketing",
            designation: "Developer",
            project: "Budget Planning",
            type: "online",
            status: "permanent",
        },
        {
            name: "Emily Brown",
            id: "EMP004",
            department: "Marketing",
            designation: "Manager",
            project: "Website Redesign",
            type: "online",
            status: "permanent",
        },
        {
            name: "David Wilson",
            id: "EMP005",
            department: "HR",
            designation: "Manager",
            project: "Cloud Migration",
            type: "online",
            status: "permanent",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = () => {
        console.log("Item Deleted");
        setIsOpen(false);
    };

    return (
        <div className='w-full p-6'>

            <div className='flex justify-between pb-10'>
                <h1 className='text-[27px] font-bold'>Employee</h1>

                <div className='flex gap-3'>

                    <div className='w-[230px] border border-gray-300 flex items-center justify-around px-2 py-3 rounded-xl font-medium'>
                        <div className=''><CiSearch size={22} /></div>
                        <input type="text" className='outline-none pl-2' placeholder='Search' />
                    </div>


                    <div onClick={() => navigate("/employee/create")} className='w-[230px] hover:cursor-pointer bg-blue-500 flex items-center justify-around px-2 py-3 rounded-xl text-white font-medium'>
                        <IoIosAddCircleOutline size={25} />
                        <p>Add New Employee</p>
                    </div>

                </div>
            </div>

            <div className='w-full overflow-auto rounded-lg border border-gray-300'>

                <table className='w-full  '>
                    <thead className='border-b border-gray-300'>
                        <tr>
                            {
                                tableHeader.map((data) => {
                                    return <th className='font-normal text-[15px] text-left p-2 text-gray-500'>{data}</th>

                                })
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {
                            employees.length === 0 ? (
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
                                    return <tr>
                                        <td className='p-2 text-[15px] text-gray-700 flex items-center gap-2'><div>
                                            <img src="/src/assets/profileImage.jpg" alt="" height={30} width={30} className='rounded-full' />

                                        </div>{data.name}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.id}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.department}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.designation}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.project}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.type}</td>
                                        <td className='p-2 text-[15px] text-gray-700'>{data.status}</td>
                                        <td className='p-2 text-[15px] text-gray-700 flex gap-3'>


                                            <div className='hover:cursor-pointer'> <FaRegEye size={23} onClick={() => navigate("/employee/view", { state: { employeeData: data } })} /></div>
                                            <div className='hover:cursor-pointer'><CiEdit size={23} onClick={() => navigate("/employee/edit", { state: { employeeData: data } })} />
                                            </div><div className='hover:cursor-pointer'> <MdDeleteOutline size={23} onClick={() => setIsOpen(true)} /></div>
                                        </td>
                                    </tr>
                                })
                        }

                    </tbody>
                </table>
            </div>
            {
                isOpen && <DeleteModal isOpen={isOpen} handleDelete={handleDelete} setIsOpen={setIsOpen} />
            }
        </div>
    )
}

export default EmployeePage