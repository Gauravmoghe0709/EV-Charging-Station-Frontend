import {  Lock, User, UserCogIcon, MailIcon,PlugZapIcon } from "lucide-react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [role, setrole] = useState("")

  const handleregister = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post("https://ev-charging-station-backend-7ufb.onrender.com/EvStation/register",{
        name,email,password,role
      },{withCredentials:true})
      console.log(res)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <>
      <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4 font-sans">
      
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-white/60 rounded-3xl">
          <div className="w-full max-w-sm  p-8">
            
           
            <div className="md:hidden flex flex-col items-center mb-8">
               <div className=" p-2 rounded-xl mb-3">
                <PlugZapIcon className="text-green-500 w-10 h-10" />
              </div>
              <h2 className="text-[#1e293b] font-bold text-xl">EV Charging Hub</h2>
              <p className="text-gray-500 text-sm text-center mt-2">
               Reliable EV Charging, Anytime
              </p>
            </div>

           
            <div className="hidden md:flex items-center mb-5">
               <div className=" p-2 rounded-xl">
                <PlugZapIcon className="text-green-500 w-10 h-10" />
              </div>
              <span className="text-[#1e293b] font-bold text-2xl">EV Charging Hub</span>
            </div>

            <p className="hidden md:block text-gray-500 text-lg mb-8 leading-tight text-center">
              Reliable EV Charging, Anytime
            </p>

            <form className="space-y-4" onSubmit={handleregister}>
              <div>
                <User className="absolute mt-3 text-gray-400 w-5 h-5 mx-1" />
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-sm pl-10"
                />
              </div>

              <div>
                <MailIcon className="absolute mt-3 text-gray-400 w-5 h-5 mx-1" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-sm pl-10"
                />
              </div>
              <div>
                <Lock className="absolute mt-3 text-gray-400 w-5 h-5 mx-1" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-sm pl-10" 
                />
              </div>
              <div>
                <UserCogIcon className="absolute mt-3 text-gray-400 w-5 h-5 mx-1" />
                <input 
                  type="text" 
                  placeholder="Role" 
                  value={role}
                  onChange={(e)=>setrole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all text-sm pl-10"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-400 text-white font-semibold py-3 rounded-xl transition-colors mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                Register
              </button>
            </form>

            <div className="mt-8 space-y-3 text-center">
              <p className="text-xs text-[#64748b]">
                Don't have an account? 
                <button className="ml-2 text-[#4f73d9] font-semibold hover:underline" onClick={()=>navigate("/login")}>
                  Sign Up &rsaquo;
                </button>
              </p>
             
            </div>
          </div>
        </div>

      </div>
   </>
  );
};

export default Register;
