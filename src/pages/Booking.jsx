import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Calendar, Clock, MapPin, Zap } from "lucide-react";
import { useParams,useNavigate } from "react-router-dom";
const Booking = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [station,setstation] = useState("")
  
  const {id} = useParams()
  const stationId = id

  const navigate = useNavigate()

  const fetchstationdata = async()=>{
    try {
      const res = await axios.get(`https://ev-charging-station-backend-7ufb.onrender.com/EvStation/station/${id}`,{withCredentials:true})
      const {station}= res.data
     setstation(station)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchstationdata()
  },[])

  const handleBooking = async () => {
    if (!startTime || !endTime) {
      toast.error("Please select start and end time");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `https://ev-charging-station-backend-7ufb.onrender.com/EvStation/createbooking`,
        {
          stationId,
          startTime,
          endTime,
        },
        { withCredentials: true }
      );
      console.log(res)

      toast.success("⚡ Booking Confirmed");
      navigate("/MyBooking")
      setStartTime("");
      setEndTime("");

    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Booking failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-500 p-3 rounded-xl text-white">
            <Zap />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Book Charging Slot
            </h2>
            <p className="text-sm text-gray-500">
              Fast & Secure Booking
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-5">
          <h3 className="font-semibold text-gray-700">
            {station.name}
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <MapPin size={14} /> {station.address}
          </p>
          <p className="text-sm text-green-600 mt-1">
            Available Slots: {station.availableslots}
          </p>
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">
            Start Time
          </label>
          <div className="relative mt-1">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
        </div>

        {/* End Time */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-600">
            End Time
          </label>
          <div className="relative mt-1">
            <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleBooking}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
        >
          {loading ? "Booking..." : "⚡ Book Slot"}
        </button>

      </div>
    </div>
  );
};

export default Booking;
