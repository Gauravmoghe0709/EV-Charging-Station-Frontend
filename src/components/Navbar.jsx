import { Menu, X, Zap } from 'lucide-react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from '../context/Authcontext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const { user, logout } = useContext(Authcontext)
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-sky-600 font-bold text-xl">
            <div className="bg-linear-to-br from-sky-400 to-blue-500 p-1.5 rounded-lg text-white">
              <Zap size={18} fill="currentColor" />
            </div>
            EV CHARGING
          </div>


          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <Link to="/" className="hover:text-sky-500">Home</Link>
            <Link to="/Station" className="hover:text-sky-500">Stations</Link>
            <Link to="/About" className="hover:text-sky-500">About us</Link>
           {user ?  <Link to="/MyBooking" className='hover:text-sky-500'>My-Booking</Link>: ""}
            
              {user ? (
                <>
                <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500 " onClick={logout}>
                  logout
                </button>
                </>
              ):(
                  <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={()=> navigate("/login")}>
                  login
                </button>
              )}
          </div>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 text-slate-700 font-medium">
            <Link to="/" className="hover:text-sky-500 block">Home</Link>
            <Link to="Station" className="hover:text-sky-500 block">Stations</Link>
            <Link to="/About" className="hover:text-sky-500 block">About us</Link>
           {user ?  <Link to="/MyBooking" className='hover:text-sky-500'>My-Booking</Link>: "" }

            {user ? (
                <>
                <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500 flex mt-5" onClick={logout}>
                  logout
                </button>
                </>
              ):(
                  <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={()=> navigate("/login")}>
                  login
                </button>
              )}
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
