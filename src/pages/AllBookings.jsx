import axios from "axios"
import { useEffect, useState } from "react"
import { Zap } from "lucide-react"
import Navbar from "../components/Navbar"



const AllBookings = () => {
    const [Bookingdata, setBookingdata] = useState("")
    const [Loading, setLoading] = useState(false)
    const [Error, setError] = useState("")
    async function getbooking() {
        try {
            const res = await axios.get("https://ev-charging-station-backend-7ufb.onrender.com/EvStation/getallbookings", { withCredentials: true })
            console.log(res.data.bookings)
            setBookingdata(res.data.bookings)
            setError("")
            setLoading(false)
        } catch (error) {
            if(error.response?.status === 404)
                setError("No Booking Data...")
        } 
        finally{
            setLoading(false)
        } 
         
    }

    useEffect(() => {
       getbooking()
    }, [])

    async function canclebooking(id){
        try {
            const res = await axios.delete(`https://ev-charging-station-backend-7ufb.onrender.com/EvStation/cancelbooking/${id}`,{withCredentials:true})
            console.log(res)
            getbooking()
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <>
          <Navbar></Navbar>
            <main className="max-w-6xl mx-auto px-4 pb-20 space-y-10 mt-25">
                {Loading && (
                    <><p className="text-center text-gray-600">Loading stations...</p>
                    </>
                    

                )}

                {!Loading && Bookingdata.length >0 &&
                    Bookingdata.map((s) => (
                        <div
                            key={s._id}
                            className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-6"
                        >
                            <div className="w-full sm:w-24 h-20 bg-gradient-to-br from-sky-300 to-blue-500 rounded-xl flex items-center justify-center">
                                <Zap className="text-white" size={28} />
                            </div>

                            <div className="flex-1">
                                <h3 className="font-medium text-lg"><span className="text-gray-500 text-sm">Station Name :-</span>{s.stationId?.name}</h3>
                                <p className="text-sm text-gray-600"> Station Adress :- {s.stationId?.address}</p>
                                <p className="text-sm font-medium text-green-500"><span className="text-gray-500">Status : -</span> {s.status}</p>
                                <p className="text-sm text-gray-600"><span className="text-gray-500">Date: -</span> { s.startTime.split("T")[0]}</p>
                                <p className="text-sm text-gray-600"> <span className="text-gray-500"> Start Timing: -</span> {s.startTime.split("T")[1].slice(0,-5)}</p>
                                <p className="text-sm text-gray-600"> <span className="text-gray-500"> End Timing: -</span> {s.endTime.split("T")[1].slice(0,-5)}</p>
                                  <p className="text-sm font-medium text-green-500"><span className="text-gray-500">Booking Status : -</span> {s.status}</p>

                             
                            </div>

                            <button
                                onClick={()=>canclebooking(s._id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg self-start sm:self-center"
                            >
                              Cancel Booking
                            </button>
                        </div>
                    ))
                }
                {!Loading && Error &&  (
                    <p className="text-center text-red-600 text-lg">{Error}</p>
                )}
            </main>
        </>
    )
}

export default AllBookings
