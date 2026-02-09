import { Zap, Edit, Ban, X, Menu } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import MapComponent from "../components/MapComponent";
import { Authcontext } from '../context/Authcontext';
import usestation from "../hooks/getstations"


const ManageStations = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(Authcontext)
  const { stations, refetchStations } = usestation();





  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://ev-charging-station-backend-7ufb.onrender.com/EvStation/admin/station/deletestation/${id}`,
        { withCredentials: true }
      );
      toast.success("Station Deleted Successfully");
      refetchStations();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400">

        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2 text-sky-600 font-bold text-xl">
              <div className="bg-linear-to-br from-sky-400 to-blue-500 p-1.5 rounded-lg text-white">
                <Zap size={18} fill="currentColor" />
              </div>
              EV CHARGING
            </div>


            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <Link to="/Admin" className="hover:text-sky-500">Admin Dashboard</Link>
              {user ? (
                <>
                  <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={logout}>
                    logout
                  </button>
                </>
              ) : (
                <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={() => navigate("/login")}>
                  login
                </button>
              )}
            </div>
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 text-slate-700 font-medium">
              <Link to="/Admin" className="hover:text-sky-500 block">Admin Dashboard</Link>

              {user ? (
                <>
                  <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={logout}>
                    logout
                  </button>
                </>
              ) : (
                <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={() => navigate("/login")}>
                  login
                </button>
              )}
            </div>
          )}
        </nav>

        <div className="flex flex-1 mt-[72px] bg-white/90 backdrop-blur-lg flex-col md:flex-row md:h-[calc(100vh-72px)] md:overflow-hidden">

          <div className="w-full md:w-2/3 h-[300px] md:h-[calc(100vh-72px)] md:sticky md:top-[72px] md:min-h-[400px]">
            <MapComponent
              stations={stations}
              center={[20.5937, 78.9629]}
              zoom={5}
            />
          </div>


          <div className="w-full md:w-1/3 md:h-[calc(100vh-72px)] overflow-y-auto scroll-smooth">
            <div className="p-4 flex items-center justify-between sticky top-0 bg-white z-10">
              <h2 className="text-lg font-bold text-indigo-600">
                ⚡ Charging Stations
              </h2>

              <button
                onClick={() => navigate("/Admin/createstation")}
                className=" flex items-center gap-2 bg-indigo-600 text-white px-2 py-1 rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Add Station
              </button>
            </div>
            <div className="space-y-4 px-4 pb-6">
              {stations.length > 0 ? (
                stations.map((s) => (
                  <div
                    key={s._id}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-500 p-2 rounded-lg text-white">
                        <Zap />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-700">{s.name}</h3>
                        <p className="text-sm text-gray-500">{s.address}</p>
                        <p className="text-xs text-green-500">
                          Status: {s.status}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          navigate(`/Admin/updatestation/${s._id}`)
                        }
                        className="flex-1 bg-blue-600 text-white py-1.5 rounded-md flex items-center justify-center gap-1"
                      >
                        <Edit size={14} /> Update
                      </button>

                      <button
                        onClick={() => handleDelete(s._id)}
                        className="flex-1 bg-red-600 text-white py-1.5 rounded-md flex items-center justify-center gap-1"
                      >
                        <Ban size={14} /> Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No stations found
                </p>
              )}
            </div>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-6 mt-auto">
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-semibold">⚡ EV CHARGING</p>
              <p className="text-xs mt-2">
                © 2024 EV Charging. All rights reserved.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Quick Links</p>
              <ul className="space-y-1">
                <li>Home</li>
                <li>Stations</li>
                <li>Logout</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Support</p>
              <ul className="space-y-1">
                <li>FAQs</li>
                <li>Help Center</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Contact Us</p>
              <p>email@example.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </footer>
      </div>
    </>

  );
};

export default ManageStations;
