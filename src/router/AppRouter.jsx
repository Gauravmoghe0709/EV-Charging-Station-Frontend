import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Admin from "../pages/Adminpage/Admin"
import Booking from "../pages/Booking"
import ManageStations from "../pages/Managestation"
import ManageBookings from "../pages/Managebooking"
import Station from "../pages/Station"
import Login from "../pages/Login"
import Register from "../pages/Register"
import About from "../pages/About"
import Createstation from "../pages/Adminpage/Createstation"
import Protectedroute from "../router/admin route/Protectedroute"
import Accessdenied from "../pages/Accessdenied"
import UpdateStation from "../pages/updatestation"
import AllBookings from "../pages/AllBookings"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/About" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Booking/:id" element={<Booking />} />
      <Route path="/Station" element={<Station />} />
      <Route path="/MyBooking" element={<AllBookings />} />
      <Route path="/Accessdenied" element={<Accessdenied />} />
      <Route path="/Managebooking" element={<ManageBookings />} />

      {/* ⭐ ADMIN PROTECTED ROUTES */}
      <Route element={<Protectedroute role="Admin" />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/createstation" element={<Createstation />} />
        <Route path="/admin/updateStation/:id" element={<UpdateStation />} />
        <Route path="/admin/manageStations" element={<ManageStations />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
