
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { RiMessageFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const SideBar = () => {

  const sideBarItems = [
    {
      title: "Dashboard",
      icon: <MdDashboard size={20} />,
      path: "/",
    },
    {
      title: "Employee",
      icon: <FaUsers size={20} />,
      path: "/employee",
    },
    {
      title: "Calendar",
      icon: <FaCalendarAlt size={20} />,
      path: "/calender",
    },
    {
      title: "Messages",
      icon: <RiMessageFill size={20} />,
      path: "/messages",
    },
  ];
  return (
    <div className='hidden md:block w-[250px] h-screen border-r-2 border-gray-300'>
      <h1 className='text-blue-400 text-3xl font-bold p-6 border-b-2 border-gray-300'>RS-TECH</h1>
      <div className="pt-5 pr-3">
        {
          sideBarItems.map((data, index) => {
            return <NavLink className={({ isActive }) =>
              `flex items-center py-3 px-5 text-gray-500 text-[18px]
            ${isActive ? "bg-blue-600 text-white rounded-br-3xl rounded-tr-3xl" : "text-gray-700 hover:bg-gray-100"}`
            } to={data.path} key={index}>





                {data.icon}
                <p className="pl-2">{data.title}</p>
            </NavLink>
          })
        }
      </div>
    </div>
  )
}

export default SideBar