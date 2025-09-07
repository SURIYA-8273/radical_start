import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const TopBar = () => {
    return (
        <div className='w-full h-[85px] border-b-2 border-gray-300 flex justify-end items-center gap-2 px-10'>

            <div className='rounded-full bg-gray-300 p-2'>
                <CiSettings size={25} />
            </div>

            <div className='rounded-full bg-gray-300 p-2'>
                <IoIosNotificationsOutline size={25} />
            </div>

            <div>
                <img src="/src/assets/profileImage.jpg" alt="" height={40} width={40} className='rounded-full' />
            </div>

        </div>
    )
}

export default TopBar