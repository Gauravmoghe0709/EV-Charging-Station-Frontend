import {
  Users,
  BatteryCharging,
  Menu, X, Zap,
  BookUserIcon
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from '../../context/Authcontext';
import { useState, useContext, useEffect } from "react";
import axios from "axios"
import usestations from "../../hooks/getstations";

const Admin = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(Authcontext)
  const [analysisdata, setanalysisdata] = useState()
  const {stations} = usestations();

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/EvStation/admin/Analysis", { withCredentials: true })
        setanalysisdata(res.data?.data || null)

      } catch (error) {
        console.log(error)
      }
    }
    fetchAnalysisData()

  }, [])
  
  const chartdata = analysisdata
    ? [
        { name: "Stations", value: analysisdata.stations?.totalStations || 0 },
        { name: "Slots", value: analysisdata.slots?.totalslots || 0 },
        { name: "Bookings", value: analysisdata.bookings?.totalBookings || 0 },
      ]
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-600  flex justify-center ">
      <div className="w-full  bg-glassWhite backdrop-blur-xl shadow-glass overflow-hidden">

        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2 text-sky-600 font-bold text-xl">
              <div className="bg-linear-to-br from-sky-400 to-blue-500 p-1.5 rounded-lg text-white">
                <Zap size={18} fill="currentColor" />
              </div>
              EV CHARGING
            </div>


            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <Link to="/admin/manageStations" className="hover:text-sky-500">Stations</Link>
              {user ? (
                <>
                  <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={logout}>
                    logout
                  </button>
                </>
              ) : (
                <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={() => navigate("/Admin")}>
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
              <Link to="/admin/manageStations" className="hover:text-sky-500 block">Stations</Link>

              {user ? (
                <>
                  <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={logout}>
                    logout
                  </button>
                </>
              ) : (
                <button className="bg-[#86efac] px-6 py-1.5 rounded-lg font-semibold hover:bg-green-500" onClick={() => navigate("/Admin")}>
                  login
                </button>
              )}
            </div>
          )}
        </nav>
        <div className="text-center py-8 mt-20">
          <h1 className="text-3xl font-semibold text-gray-700">
            Admin Dashboard
          </h1>
        </div>


        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-6">
          <StatCard
            icon={<Users />}
            value="10"
            label="Total Users"
            bg="from-yellow-400 to-orange-400"
          />
          <StatCard
            icon={<BatteryCharging />}
            value={analysisdata ? analysisdata.stations?.totalStations : '...'}
            label="Total Stations"
            bg="from-green-400 to-emerald-400"
          />
          <StatCard
            icon={<BookUserIcon />}
            value={analysisdata ? analysisdata.bookings?.totalBookings : '...'}
            label="Total Bookings"
            bg="from-blue-400 to-indigo-400"
          />
          <StatCard
            icon={<Zap />}
            value={analysisdata ? analysisdata.slots?.totalslots : '...'}
            label="Total Slots"
            bg="from-purple-400 to-indigo-500"
          />
        </section>

        <section>
          <div className="bg-white mx-2 p-6 rounded-xl shadow mt-10">
            <h2 className="text-lg font-semibold mb-4">
              Dashboard Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartdata} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#1313e7eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

    <div className="overflow-x-auto  rounded-l shadow-md mt-10 px-2">
      <table className="min-w-full border-collapse">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Station Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Address
            </th> 
            <th className="px-4 py-3 text-center text-sm font-semibold">
              Total Slots
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold">
              Available Slots
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {stations && stations.length > 0 ? (
            stations.map((station, index) => (
              <tr
                key={station._id}
                className={`border-b flex-2 gap-1.5 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3 text-sm font-medium text-gray-700">
                  {station.name}
                </td>

                <td className="px-4 py-3 text-sm text-gray-500">
                  {station.address}
                </td>

                <td className="px-4 py-3 text-center text-sm font-semibold">
                  {station.totalslots}
                </td>

                <td className="px-4 py-3 text-center text-sm font-semibold text-green-600">
                  {station.availableslots}
                </td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      station.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {station.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center py-6 text-gray-500"
              >
                No stations found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  
        <footer className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-8 mt-10">
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
                <li>Wallet</li>
                <li>Login</li>
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
              <p>+1123 456 7890</p>
            </div>
          </div>
        </footer>
      </div >
    </div >
  );
}



function StatCard({ icon, value, label, bg }) {
  return (
    <div
      className={`p-5 rounded-xl text-white shadow-card bg-gradient-to-r ${bg}`}
    >
      <div className="flex items-center gap-3">
        <div className="bg-white/30 p-3 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-sm opacity-90">{label}</p>
        </div>
      </div>
    </div>
  );
}



export default Admin
