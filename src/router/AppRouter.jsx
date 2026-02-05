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
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/Booking/:id" element={<Booking></Booking>}></Route>
        <Route path="/Station" element={<Station></Station>}></Route>
        <Route path="/MyBooking" element={<AllBookings></AllBookings>}></Route>

        <Route path="/admin" element={<Protectedroute role="Admin"></Protectedroute>}>
              <Route index element={<Admin></Admin>}></Route>
              <Route path="/admin/createstation" element={<Createstation></Createstation>}></Route>
              <Route path="/admin/updateStation/:id" element={<UpdateStation></UpdateStation>}></Route>
              <Route path="/admin/manageStations" element={<ManageStations></ManageStations>}></Route>
        </Route>

 
        <Route path="/Accessdenied" element={<Accessdenied></Accessdenied>}></Route>
        <Route path="/Managebooking" element={<ManageBookings></ManageBookings>}></Route>

      </Routes>
    </>
  )
}

export default AppRouter
