import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-[#f0f7ff] text-slate-700 mt-20">
      <section className="px-6 py-20 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-green-400">EV Charge Hub</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Powering the future with fast, reliable, and eco-friendly EV charging
          solutions across cities.
        </p>
      </section>
      <section className="px-6 py-12 max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to make electric vehicle charging simple, fast, and
            accessible for everyone. We aim to support sustainable mobility by
            providing reliable charging stations powered by clean energy.
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a future where electric vehicles are the first choice
            for transportation and charging infrastructure is available
            everywhere—making cities cleaner and greener.
          </p>
        </div>
      </section>

      
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose <span className="text-green-400">Us?</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">Fast Charging</h3>
            <p className="text-gray-300">
              High-speed chargers to reduce waiting time and improve efficiency.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">Easy Booking</h3>
            <p className="text-gray-300">
              Book charging slots easily using our simple and user-friendly
              platform.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">Eco-Friendly</h3>
            <p className="text-gray-300">
              Supporting green energy and reducing carbon emissions.
            </p>
          </div>
        </div>
      </section>

     
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join the <span className="text-green-400">Electric Revolution</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Start charging smarter and drive towards a sustainable future.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-xl font-semibold transition">
          Find Charging Stations
        </button>
      </section>
    </div>
    </>
    
  );
};

export default About;
