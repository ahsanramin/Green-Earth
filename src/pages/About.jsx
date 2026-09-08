const About = () => {
  return (
    <div className="pt-20 overflow-x-hidden bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 to-green-800 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-lime-400 rounded-full blur-[120px] opacity-20"></div>
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-xl">About Green Earth</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">Fighting climate change by planting trees globally since 2020.</p>
      </section>

      <section className="py-24 bg-white flex flex-col md:flex-row items-center gap-16 container mx-auto px-6">
        <div className="md:w-1/2 relative">
           <img src="https://i.ibb.co.com/cSQdg7tf/mango-min.jpg" className="rounded-3xl shadow-2xl w-full" alt="Story"/>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">We started with one seed and a dream. Today, we have a global network of experts and volunteers dedicated to restoring the planet's green lungs. We believe in transparent, sustainable, and impactful reforestation.</p>
        </div>
      </section>

      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="bg-white rounded-3xl p-12 shadow-xl border-t-8 border-emerald-500">
             <h3 className="text-3xl font-bold mb-6 text-emerald-700">Our Mission</h3>
             <p className="text-gray-600 text-lg">To plant 1 million trees by 2030 and inspire global action against climate change.</p>
           </div>
           <div className="bg-white rounded-3xl p-12 shadow-xl border-t-8 border-lime-500">
             <h3 className="text-3xl font-bold mb-6 text-lime-700">Our Vision</h3>
             <p className="text-gray-600 text-lg">A world where every community has access to green spaces and a healthy environment.</p>
           </div>
        </div>
      </section>
    </div>
  );
};
export default About;