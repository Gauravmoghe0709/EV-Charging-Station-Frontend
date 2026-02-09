import { Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Station = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryFromUrl = searchParams.get("q") || "";

  const [address, setAddress] = useState(queryFromUrl);
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (queryFromUrl) {
      searchLocation(queryFromUrl);
    }
  }, [queryFromUrl]);

  const getCoords = async (address) => {
    try {
      const res = await axios.get(
        "https://ev-charging-station-backend-7ufb.onrender.com/EvStation/location/coords",
        { params: { address } }
      );
      return res.data;
    } catch (err) {
      toast.error("Location not found");
      return null;
    }
  };

  const searchLocation = async (searchText) => {
    const searchValue = searchText || address;

    if (!searchValue.trim()) {
      toast.warning("Please enter a location");
      return;
    }

    setLoading(true);
    setError("");
    setStations([]);

    try {
      const coords = await getCoords(searchValue);
      if (!coords) return;

      const res = await axios.get(
        "https://ev-charging-station-backend-7ufb.onrender.com/EvStation/station/findnearby",
        {
          params: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
          withCredentials:true,
        }
      );

      setStations(res.data.stations);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("No EV Station Found Near This Location");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!address.trim()) {
      toast.warning("Enter location");
      return;
    }
    setSearchParams({ q: address });
  };

  return (
    <div className="min-h-screen bg-[#e7ebf0]">
      <Navbar />

    
      <section className="px-4 py-10 text-center mt-14">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Find EV Charging Stations
        </h1>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden">
          <input
            placeholder="Search Location"
            className="flex-1 py-3 px-4 outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 font-semibold"
          >
            Search
          </button>
        </div>
      </section>

      
      <main className="max-w-4xl mx-auto px-4 pb-20 space-y-4">
        {loading && (
          <p className="text-center text-gray-600">Loading stations...</p>
        )}

        {!loading &&
          stations.map((s) => (
            <div
              key={s._id}
              className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4"
            >
              <div className="w-full sm:w-24 h-20 bg-gradient-to-br from-sky-300 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="text-white" size={28} />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="text-sm text-gray-600">{s.address}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                    Total: {s.totalslots}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                    Available: {s.availableslots}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/Booking/${s._id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg self-start sm:self-center"
              >
                Book
              </button>
            </div>
          ))}

        {!loading && error && (
          <p className="text-center text-red-600 text-lg">{error}</p>
        )}
      </main>
    </div>
  );
};

export default Station;
