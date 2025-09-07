
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AdminLayout from './layouts/AdminLayout'
import ProtectedRoute from './routes/ProtectedRoute'
import EmployeePage from './pages/employees/EmployeePage'
import CreateEmployeePage from './pages/employees/CreateEmployeePage'
import EditEmployeePage from './pages/employees/EditEmployeePage'
import ViewEmployeePage from './pages/employees/ViewEmployeePage'
import CalenderPage from './pages/CalenderPage'
import MessagesPage from './pages/MessagesPage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (

   <> <Routes>
      <Route path='/login' element={<LoginPage />}></Route>

      <Route element={<ProtectedRoute />}>

        <Route element={<AdminLayout />}>

          <Route
            path="/"
            element={<DashboardPage />} />
          <Route
            path="/employee"
            element={<EmployeePage />} />
          <Route
            path="/employee/create"
            element={<CreateEmployeePage />} />
          <Route path="/employee/edit" element={<EditEmployeePage />} />
          <Route path="/employee/view" element={<ViewEmployeePage />} />

          <Route path="/calender" element={<CalenderPage />} />
          <Route path="/messages" element={<MessagesPage />} />

        </Route>

      </Route>
    </Routes> <ToastContainer position="top-right" autoClose={3000} /></>
  )
}

export default App