import { useContext } from "react"
import { Authcontext } from "../../context/Authcontext"
import { Outlet, Navigate } from "react-router-dom"

const Protectedroute = ({ role }) => {
    const { user, loading } = useContext(Authcontext)


    if (loading) {
        return <div className="text-center">Loading....</div>
    }
    if (!user) {
        return <Navigate to="/login" replace ></Navigate>
    }

    if (role && user.role !== role) {
        return <Navigate to="/Accessdenied" replace></Navigate>
    }
    return <Outlet></Outlet>



}

export default Protectedroute
