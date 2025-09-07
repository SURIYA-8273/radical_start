import { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../config/config";
const EditEmployeePage = () => {
    const location = useLocation();
    const { employeeData } = location.state || {};

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(URL.createObjectURL(selectedFile));
        }
    };

    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        employeeId: "",
        department: "",
        designation: "",
        project: "",
        type: "",
        status: "",
    });

    useEffect(() => {
        if (employeeData) {
            setForm({
                name: employeeData.name || "",
                employeeId: employeeData.employee_id || "",
                department: employeeData.department || "",
                designation: employeeData.designation || "",
                project: employeeData.project || employeeData.project_name || "",
                type: employeeData.type || "",
                status: employeeData.status || "",
            });

            if (employeeData.image) {
                setFile(employeeData.image);
            }
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    
  const handleSubmit = async () => {

    if (
    !form.name ||
    !form.employeeId ||
    !form.department ||
    !form.designation ||
    !form.type ||
    !form.status
  ) {
    toast.error("Please fill in all required fields.");
    return;
  }

    const formData = new FormData();

    formData.append("data", JSON.stringify(form));

    if (file) {
      formData.append("profile_image", file);
    }

    try {
      const res = await axios.put(`${config.BASE_URL}/api/employees/${employeeData.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.message == "Employee updated successfully") {

        toast.success("Employee updated successfully")

        

        navigate("/employee")

      }

    } catch (err) {
      console.error("Error uploading employee:", err);
    }
  };

    return (
        <div className="p-6 bg-white ">

            <div className="flex items-center gap-3 pb-4">
                <div onClick={() => navigate(-1)} className="hover:cursor-pointer">
                    <IoChevronBack size={30} />
                </div>
                <h1 className='text-[27px] font-bold'>Edit Employee</h1>
            </div>

            <div className="mb-6 flex items-center space-x-2 border-b border-gray-300 text-blue-600 pb-2">

                <IoPerson />
                <span className=" font-bold">Personal Information</span>
            </div>

            <div className="pb-4">
                <label
                    htmlFor="fileInput"
                    className="w-32 h-32 border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
                >
                    {file ? (
                        <img
                            src={file}
                            alt="preview"
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <FaCamera size={30} className="text-gray-500" />
                    )}
                </label>

                <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                    <label className="block text-sm font-medium mb-1">Name*</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Employee ID*</label>
                    <input
                        type="text"
                        name="employeeId"
                        value={form.employeeId}
                        onChange={handleChange}
                        placeholder="Enter employee ID"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">Department*</label>
                    <select
                        name="department"
                        value={form.department}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Department</option>
                        <option value="HR">HR</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">Designation*</label>
                    <select
                        name="designation"
                        value={form.designation}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select designation</option>
                        <option value="Manager">Manager</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Developer">Developer</option>
                    </select>
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">Project</label>
                    <input
                        type="text"
                        name="project"
                        value={form.project}
                        onChange={handleChange}
                        placeholder="Enter project"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">Type*</label>
                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Type</option>
                        <option value="offline">Offline</option>
                        <option value="online">Online</option>
                    </select>
                </div>


                <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Status*</label>
                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Status</option>
                        <option value="permanent">Permanent</option>
                        <option value="temporary">Temporary</option>

                    </select>
                </div>
            </div>


            <div className="mt-8 flex justify-end gap-4">
                <button onClick={()=>navigate(-1)} className="px-4 py-2 hover:cursor-pointer rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
                    Cancel
                </button>
                <button onClick={()=>handleSubmit()} className="px-4 py-2 hover:cursor-pointer rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default EditEmployeePage;
