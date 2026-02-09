import { Search, Filter } from "lucide-react";

const ManageBookings=()=> {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400  flex justify-center">
      <div className="w-full  bg-white/80 backdrop-blur-xl  shadow-2xl overflow-hidden">

        <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <div className="flex items-center gap-2 font-semibold">
            ⚡ EV CHARGING
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <span>Dashboard</span>
            <span>Stations</span>
          </nav>

          <button className="bg-green-400 px-4 py-1 rounded-md text-sm">
            Logout
          </button>
        </header>

      
        <div className="text-center py-8">
          <h1 className="text-3xl font-semibold text-gray-700">
            Manage Bookings
          </h1>
        </div>

   
        <div className="px-4 md:px-8 pb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6">

            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-700">
                Manage Bookings
              </h2>

              <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-lg shadow">
                <Filter size={16} />
                Filters
              </button>
            </div>

            
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search Bookings"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="hidden md:grid grid-cols-3 text-sm text-gray-500 px-4 py-2">
              <span>Booking Records</span>
              <span className="text-center">Date</span>
              <span className="text-right">Action</span>
            </div>

          
            <div className="space-y-4 mt-2">
              <BookingRow name="David Lewis" date="04/15/2024" />
              <BookingRow name="Emma Johnson" date="04/12/2024" />
              <BookingRow name="James Brown" date="04/11/2024" />
              <BookingRow name="Kate Vaughan" date="04/10/2024" />
            </div>

          </div>
        </div>

       
        <footer className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-8">
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
              <p>+1123 456 7890</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}



function BookingRow({ name, date }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-4 bg-white rounded-xl shadow p-4">
      
      <div className="flex items-center gap-3 w-full">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-white font-semibold">
          {name.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-gray-700">{name}</p>
          <p className="text-sm text-gray-500">email@example.com</p>
        </div>
      </div>

     
      <div className="text-gray-600 text-sm md:text-center w-full">
        {date}
      </div>

     
      <div className="w-full md:text-right">
        <button className="bg-blue-400 text-white px-4 py-1.5 rounded-md shadow">
          Details
        </button>
      </div>
    </div>
  );
}

export default ManageBookings