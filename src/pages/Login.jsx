import {PlugZapIcon,MailIcon,Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Authcontext } from "../context/Authcontext";
import AppLoader from "../components/AppLoader";

const Login = () => {
  const { login } = useContext(Authcontext)
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [loading, setloading] = useState(false);
  

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    
    try {
      const sucess = await login({ email, password });
      setloading(false);
      if (!sucess) {
        // keep user on login page if authentication failed
        return;
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }

  return (
    <>
      {loading && <AppLoader />}
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

            <form className="space-y-4" onSubmit={handlesubmit}>
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

              <button 
                type="submit" 
                className="w-full bg-green-400 text-white font-semibold py-3 rounded-xl transition-colors mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                Login
              </button>
            </form>

            <div className="mt-8 space-y-3 text-center">
              <p className="text-xs text-[#64748b]">
                Don't have an account? 
                <button className="ml-2 text-[#4f73d9] font-semibold hover:underline" onClick={()=>navigate("/register")}>
                  Sign Up &rsaquo;
                </button>
              </p>
             
            </div>
          </div>
        </div>

      </div>
      </>
  );
}



export default Login;
