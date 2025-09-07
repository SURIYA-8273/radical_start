import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div className='flex w-full'>
            <SideBar />
            <div className='w-full'>
                <TopBar />
                <main className='w-full'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout