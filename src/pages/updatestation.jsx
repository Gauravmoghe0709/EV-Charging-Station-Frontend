import { useState } from "react";
import { Save, Building2 } from "lucide-react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";



export default function UpdateStation() {

  const {id} = useParams()
  const navigate = useNavigate()


  const [name, setname] = useState("")
  const [address, setaddress] = useState("")
  const [totalSlots, settotalSlots] = useState()
  const [status, setstatus] = useState("ACTIVE")

  

  const handleSubmit = async(e) => {
    e.preventDefault();
   try {
    const res = await axios.put(`https://ev-charging-station-backend-7ufb.onrender.com/EvStation/admin/station/update/${id}`,{
      name,address,totalSlots,status
    },{withCredentials:true}) 
    console.log(res)
    navigate("/admin/manageStations")
   } catch (error) {
    console.log(error)
   }
  };

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-300 to-blue-300 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-8">
          Update Station
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-indigo-700 mb-1">
              Station Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500" size={18} />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                placeholder="Enter station name"
                className="w-full pl-10 pr-4 py-3 border-2 border-indigo-200 rounded-xl focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-purple-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e)=>setaddress(e.target.value)}
              placeholder="Enter address"
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-purple-700 mb-1">
                Total Slots
              </label>
              <input
                type="number"
                name="totalSlots"
                value={totalSlots}
                onChange={(e)=>settotalSlots(e.target.value)}
                placeholder="Total slots"
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-pink-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={status}
                onChange={(e)=>setstatus(e.target.value)}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 outline-none"
              >
                <option value="ACTIVE" defaultValue="ACTIVE">ACTIVE</option>
                <option value="INACTIVE" className="text-red-600">INACTIVE</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white px-8 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
            >
              <Save size={18} />
              Update Station
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
