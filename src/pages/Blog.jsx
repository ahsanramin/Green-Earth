const Blog = () => {
  const articles = [
    { title: 'Top 5 Trees for Urban Gardens', desc: 'Discover the best trees to plant in small spaces.' },
    { title: 'Benefits of Planting Trees', desc: 'How trees improve air quality and reduce heat.' },
    { title: 'How to Care for Your Tree', desc: 'Simple tips for watering, pruning, and fertilizing.' },
    { title: 'The Future of Reforestation', desc: 'Exploring new technologies for large-scale tree planting.' },
    { title: 'Volunteer Spotlight', desc: 'Meet the volunteers making a difference.' },
    { title: 'Sustainability in Daily Life', desc: 'Small changes you can make to reduce your carbon footprint.' }
  ];

  return (
    <div className="pt-20">
      <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-900 to-green-800 text-center text-white">
        <h1 className="text-5xl font-extrabold">Our Blog</h1>
        <p className="text-gray-200 mt-4">Tips, articles, and updates about tree planting.</p>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="overflow-hidden h-48">
                <img src="https://i.ibb.co.com/cSQdg7tf/mango-min.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.desc}</p>
                <a href="#" className="text-emerald-600 font-semibold mt-4 inline-block">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Blog;