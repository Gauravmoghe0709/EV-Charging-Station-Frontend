import { useState } from "react"
import { toast } from "react-toastify"
import axios from "../../utils/axios"
import { useNavigate } from "react-router-dom"

const Createstation = () => {
const navigate = useNavigate()
const [name, setname] = useState("")
const [address, setaddress] = useState()
const [totalslots, settotalslots] = useState("")     
const [latitude, setlatitude] = useState()
const [longitude, setlongitude] = useState()

const currentlocation = ()=>{
  if(!navigator.geolocation){
    toast.error("Geolocation not supported")
    return
  }

  navigator.geolocation.getCurrentPosition((pos)=>{
    setlatitude(pos.coords.latitude)
    setlongitude(pos.coords.longitude)
    toast.success("Get Your Current Location")
  },
   ()=> toast.warning("Location permission denied")
)
}
async function addressToCoords() {
  try {
    const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
  );

  const data = await res.json();
  
  if (!data.length) {
    return toast.error("Address not found");
  }
  toast.success("sucessfully")

   setlatitude(Number(data[0].lat))
   setlongitude(Number(data[0].lon))

  } catch (error) {
    console.log(error)
  }
}

 const handlesumbmit=async(e)=>{
  e.preventDefault()

    if(!latitude || !longitude){
      toast.error("select your location")
      return
    }
    try {
      const res = await axios.post("/EvStation/admin/station/create",{
      name,address,totalslots,latitude,longitude,status:"ACTIVE"
    },{withCredentials:true})
    console.log(res.data)
    toast.success("Station Created Sucessfully...")

    navigate("/admin/manageStations")
    } catch (error) {
      console.log(error)
    }
    
 }
  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-400 to-pink-200 p-4">
  <form
    onSubmit={handlesumbmit}
    className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4"
  >
    <h2 className="text-2xl font-bold text-center text-indigo-600">
      Create New Station
    </h2>

    <input
      type="text"
      placeholder="Enter Station Name"
      value={name}
      onChange={(e) => setname(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

    <input
      type="text"
      placeholder="Enter Station Address"
      value={address}
      onChange={(e) => setaddress(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />

    <input
      type="number"
      placeholder="Add Total Slots"
      value={totalslots}
      onChange={(e) => settotalslots(Number(e.target.value))}
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />

    <button
      type="button"
      onClick={addressToCoords}
      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg transition"
    >
      📍 Use Address Location
    </button>

    <button
      type="button"
      onClick={currentlocation}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
    >
      📡 Use Current Location
    </button>

    <button
      type="submit"
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition"
    >
      🚀 Create New Station
    </button>
  </form>
</div>

    </>
  )
}

export default Createstation
