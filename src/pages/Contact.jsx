const Contact = () => {
  return (
    <div className="pt-20 overflow-x-hidden bg-gray-50">
       <section className="bg-gradient-to-br from-emerald-900 to-green-800 py-32 text-center text-white">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-xl">Get in Touch</h1>
        <p className="text-xl text-gray-200">We'd love to hear from you!</p>
      </section>

       <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white border-l-8 border-emerald-500 p-6 shadow-lg rounded-r-xl">
              <h3 className="font-bold text-xl mb-2">📍 Address</h3>
              <p className="text-gray-600">123 Green Street, Eco City, EC 10101</p>
            </div>
            <div className="bg-white border-l-8 border-emerald-500 p-6 shadow-lg rounded-r-xl">
              <h3 className="font-bold text-xl mb-2">📞 Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white border-l-8 border-emerald-500 p-6 shadow-lg rounded-r-xl">
              <h3 className="font-bold text-xl mb-2">✉️ Email</h3>
              <p className="text-gray-600">support@greenearth.com</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-10 shadow-2xl">
            <form className="space-y-5">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm" />
              <input type="email" placeholder="Your Email" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm" />
              <input type="text" placeholder="Subject" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm" />
              <textarea placeholder="Your Message" rows="6" className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"></textarea>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition shadow-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;