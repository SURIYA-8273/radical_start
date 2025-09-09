import { IoPerson } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
const ViewEmployeePage = () => {

    const location = useLocation();
    const { employeeData } = location.state || {};
    const navigate = useNavigate();
    return (
        <div className="p-6 bg-white ">

            <div className="flex items-center gap-3 pb-4">
                <div onClick={() => navigate(-1)} className="hover:cursor-pointer">
                    <IoChevronBack size={30} />
                </div>
                <h1 className='text-[27px] font-bold'>View Employee</h1>
            </div>

            <div className="mb-6 flex items-center space-x-2 border-b border-gray-300 text-blue-600 pb-2">

                <IoPerson />
                <span className=" font-bold">Personal Information</span>
            </div>

            <div className="pb-4">
                <p
                    htmlFor="fileInput"
                    className="w-32 h-32 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
                >

                    <img
                        src={employeeData.profile_image || "/src/assets/profileImage.jpg"}
                        alt="preview"
                        className="object-cover w-full h-full"
                    />

                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                    <p className="block text-sm font-medium mb-1">Name*</p>
                    <p>{employeeData.name}</p>
                </div>

                <div>
                    <p className="block text-sm font-medium mb-1">Employee ID*</p>
                    <p>{employeeData.employee_id}</p>
                </div>


                <div>
                    <p className="block text-sm font-medium mb-1">Department*</p>
                    <p>{employeeData.department}</p>
                </div>


                <div>
                    <p className="block text-sm font-medium mb-1">Designation*</p>
                    <p>{employeeData.designation}</p>
                </div>


                <div>
                    <p className="block text-sm font-medium mb-1">Project</p>
                    <p>{employeeData.project ?? employeeData.project_name}</p>
                </div>
                <div>
                    <p className="block text-sm font-medium mb-1">Type*</p>
                    <p>{employeeData.type}</p>
                </div>
                <div className="md:col-span-2">
                    <p className="block text-sm font-medium mb-1">Status*</p>
                    <p>{employeeData.status}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewEmployeePage;
