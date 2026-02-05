import React from 'react';
import { 
  Zap, MapPin, Calendar, ShieldCheck, 
  Facebook, Twitter, Instagram, Mail, Phone,
  BookUser
} from 'lucide-react';
import {useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';



const Home = () => {
  const navigate = useNavigate()
 
  return (
   <div className="min-h-screen bg-[#f0f7ff] font-sans text-slate-700 pt-20 cursor-default">      
   
    <Navbar></Navbar>
<section className="relative h-100 flex flex-col items-center justify-center text-center px-4 overflow-hidden">

  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2000"
      alt="EV Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-b from-white/30 via-sky-100/50 to-[#f0f7ff]"></div>
  </div>

  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-10 drop-shadow-sm">
      Welcome to EV Charging
    </h1>

    <div className="flex flex-col sm:flex-row gap-6">
      <button  className="bg-[#17cfbd] hover:bg-[#3d9e95] text-white px-10 py-3.5 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-1">
        Find Stations
      </button>
      <button  className="bg-[#0c1b66] hover:bg-[#6876cc] text-white px-10 py-3.5 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-1">
        Book Your Evslot
      </button>
    </div>
  </div>
</section>



      <main className="max-w-5xl mx-auto px-4 -mt-8 relative z-10 pb-20">
        
      
        <div className="space-y-4 mb-10">
          <button onClick={()=> navigate("/station")} className="w-full bg-linear-to-r from-[#17cfbd] to-[#33998f] text-white py-5 rounded-2xl shadow-lg flex items-center justify-center gap-3 text-xl font-bold">
            <MapPin size={28} /> Find Stations
          </button>
          <button onClick={()=> navigate("/Booking")} className="w-full bg-linear-to-r from-[#061255] to-[#3345aa] text-white py-5 rounded-2xl shadow-lg flex items-center justify-center gap-3 text-xl font-bold">
            <BookUser size={28} /> Book Your Evslot
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center transition-all hover:translate-y-2">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-4 border-b border-slate-100">Info Section</h3>
            <p className="text-slate-500 leading-relaxed">
              An EV charging station is a facility where electric vehicles can be charged safely and efficiently using electric power. It works by supplying electricity from the grid to the vehicle’s battery through a charging connector. EV charging stations play an important role in promoting clean and eco-friendly transportation by reducing air pollution and dependence on fossil fuels.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center transition-all hover:translate-y-2">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-4 border-b border-slate-100">Features Section</h3>
            <p className="text-slate-500 leading-relaxed">
              Modern EV stations offer features such as fast and slow charging options, real-time availability, secure digital payments, and easy booking through mobile applications. These stations are commonly installed in public places like malls, highways, offices, and residential areas, making electric vehicle usage more convenient and accessible for everyone.
            </p>
          </div>
        </div>

        
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-slate-50">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-14">Features Section</h2>
           
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            <FeatureItem icon={<Zap className="text-orange-400" />} color="bg-orange-50" title="Fast Charging" /> 
            <FeatureItem icon={<MapPin className="text-emerald-500" />} color="bg-emerald-50" title="Nearby Stations" />
            <FeatureItem icon={<Calendar className="text-blue-500" />} color="bg-blue-50" title="Easy Booking" />
            <FeatureItem icon={<BookUser className="text-indigo-500" />} color="bg-indigo-50" title="Easy Booking" />
            <FeatureItem icon={<ShieldCheck className="text-blue-600" />} color="bg-blue-50" title="Secure Payments" />
            <FeatureItem icon={<ShieldCheck className="text-purple-500" />} color="bg-purple-50" title="Secure Payments" />
          </div>
        </div>
      </main>


      <footer className="bg-linear-to-b from-transparent to-sky-200/50 pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-sky-200/50 pt-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sky-600 font-bold text-xl">
              <div className="bg-sky-500 p-1 rounded-lg text-white"><Zap size={18} fill="currentColor" /></div>
              EV CHARGING
            </div>
            <p className="text-sm text-slate-400 font-medium">
              © 2026 EV Charging,<br />All rights reserved.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={['Home', 'Stations', 'About-us', 'Login']} />
          <FooterColumn title="Support" links={['FAQs', 'Help Center', 'Terms of Service']} />

          <div>
            <h5 className="font-bold text-slate-800 mb-6">Contact Us</h5>
            <ul className="text-sm space-y-4 text-slate-500 font-medium">
              <li className="flex items-center gap-3"><Mail size={18} className="text-sky-400"/> email@example.com</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-sky-400"/> +123 456 7890</li>
              <li className="flex gap-5 pt-4">
                <Facebook size={22} className="text-blue-600 cursor-pointer hover:scale-110 transition" />
                <Twitter size={22} className="text-sky-400 cursor-pointer hover:scale-110 transition" />
                <Instagram size={22} className="text-pink-600 cursor-pointer hover:scale-110 transition" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureItem = ({ icon, title, color }) => (
  <div className="flex gap-5">
    <div className={`${color} p-4 rounded-2xl h-fit shrink-0 shadow-sm`}>
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <h4 className="font-bold text-xl text-slate-800 mb-1">{title}</h4>
    </div>
  </div>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <h5 className="font-bold text-slate-800 mb-6">{title}</h5>
    <ul className="text-sm space-y-3 text-slate-500 font-medium">
      {links.map(link => (
        <li key={link} className="hover:text-sky-500 cursor-pointer transition">• {link}</li>
      ))}
    </ul>
  </div>
);

export default Home;