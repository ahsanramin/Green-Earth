import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories, fetchAllPlants, fetchPlantsByCategory } from '../services/api';
import { useCart } from '../components/CartContext';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [plants, setPlants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  
  const { addToCart, cart, removeFromCart, clearCart, total } = useCart();

  useEffect(() => { fetchCategories().then(setCategories).catch(console.error); }, []);

  useEffect(() => {
    setIsLoading(true);
    const load = async () => {
      try {
        const data = selectedCategory === null ? await fetchAllPlants() : await fetchPlantsByCategory(selectedCategory);
        setPlants(data);
      } catch (e) { setPlants([]); } finally { setIsLoading(false); }
    };
    load();
  }, [selectedCategory]);

  const handleCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => { clearCart(); setIsCheckoutOpen(false); };

  return (
    <div className="overflow-x-hidden bg-gray-50 pt-20">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-700 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-lime-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-[160px] opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-500 rounded-full blur-[80px] opacity-30 animate-float"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center py-32">
          <span className="inline-block py-2 px-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold mb-6 border border-white/20">
            🌿 Join 10,000+ Eco-Warriors
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight drop-shadow-2xl">
            Plant a Tree,<br />
            <span className="bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent">Grow a Future</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Join our global mission to plant 1 million trees, restore ecosystems, and make the Earth greener for future generations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#featured" className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-emerald-800 font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-white/20 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 group-hover:text-white">Get Involved</span>
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300">Learn More</a>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {['4.9/5 Rating', '500K+ Trees', '30+ Countries', 'Zero Plastic'].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-lg rounded-2xl py-4 border border-white/10">
                <p className="text-white font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FEATURED / CATEGORIES / CART ================= */}
      <section id="featured" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Our Collection</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-2">Choose Your Trees</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Experience the future of reforestation. Select from our diverse catalog of sustainable trees.</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Categories Sidebar */}
            <div className="lg:w-1/5 sticky top-28 h-fit bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Categories</h3>
              <div className="space-y-2">
                <button onClick={() => setSelectedCategory(null)} className={`w-full text-left px-5 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === null ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-emerald-50'}`}>All Trees</button>
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`w-full text-left px-5 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === cat.id ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-emerald-50'}`}>{cat.category_name}</button>
                ))}
              </div>
            </div>

            {/* Plant Grid */}
            <div className="lg:w-3/5">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{[...Array(4)].map((_, i) => <div key={i} className="h-96 rounded-3xl bg-gray-100 animate-pulse"></div>)}</div>
              ) : plants.length === 0 ? (
                <div className="text-center py-20 text-gray-500">No plants found in this category.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {plants.map(plant => (
                    <div key={plant.id} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                      <div className="relative overflow-hidden h-64">
                        <img src={plant.image} alt={plant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-lg">{plant.category}</span>
                        <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">-20%</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plant.name}</h3>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">{plant.description.slice(0, 70)}...</p>
                        <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                          <div>
                            <span className="text-2xl font-extrabold text-emerald-600">${plant.price}</span>
                            <span className="text-sm text-gray-400 line-through ml-2">${Math.round(plant.price * 1.2)}</span>
                          </div>
                          <button onClick={() => addToCart(plant)} className="bg-gray-900 group-hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Sidebar */}
            <div className="lg:w-1/5 sticky top-28 h-fit bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Your Cart</h3>
              <div className="space-y-4 mb-6">
                {cart.length === 0 && <p className="text-gray-400 text-center text-sm py-10">Your cart is empty.<br/>Plant a tree today!</p>}
                {cart.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center border border-gray-100">
                    <div><p className="font-semibold text-gray-800">{item.name}</p><p className="text-sm text-gray-500">${item.price}</p></div>
                    <button onClick={() => removeFromCart(idx)} className="text-red-400 hover:text-red-600 bg-white p-2 rounded-full shadow-sm">✕</button>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center bg-emerald-50 p-4 rounded-2xl mb-6">
                <span className="font-semibold text-gray-700">Total</span>
                <span className="text-2xl font-extrabold text-emerald-600">${total}</span>
              </div>
              <button onClick={handleCheckout} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300">Checkout Securely</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ABOUT CAMPAIGN ================= */}
      <section id="about" className="py-24 bg-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-lime-200 rounded-3xl blur-2xl opacity-30 transform rotate-3"></div>
            <img src="https://i.ibb.co.com/qY8qS7YN/champa-min.jpg" className="relative rounded-3xl shadow-2xl w-full object-cover" alt="About Plant" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
              <p className="text-4xl font-extrabold text-emerald-600">500K+</p>
              <p className="text-gray-500 font-semibold">Trees Planted</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">About the Campaign</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">Green Earth is a global movement fighting climate change. By planting trees, we restore habitats, improve air quality, and empower local communities.</p>
            <ul className="space-y-4">
              {['Restoration of natural ecosystems', 'Improvement of air and water quality', 'Support for sustainable local economies'].map(item => (
                <li key={item} className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-4">✓</span>
                  <span className="font-semibold text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: OUR IMPACT (STATS) ================= */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-lime-400"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Our Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:bg-white/10 transition">
              <h3 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-300">500K+</h3>
              <p className="text-gray-300 mt-2 font-medium">Trees Planted</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:bg-white/10 transition">
              <h3 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-300">120+</h3>
              <p className="text-gray-300 mt-2 font-medium">Communities</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg hover:bg-white/10 transition">
              <h3 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-300">30+</h3>
              <p className="text-gray-300 mt-2 font-medium">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: TOP EXPERTS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">Meet Our Top Experts</h2>
            <p className="text-gray-500 mt-4">The brilliant minds behind our reforestation strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Dr. Sarah Green', role: 'Chief Botanist', img: 'https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg' },
              { name: 'Dr. James Forest', role: 'Forestry Director', img: 'https://i.ibb.co.com/WNbbx3rn/guava-min.jpg' },
              { name: 'Dr. Maria Leaf', role: 'Environmental Scientist', img: 'https://i.ibb.co.com/cSQdg7tf/mango-min.jpg' }
            ].map(expert => (
              <div key={expert.name} className="group text-center bg-gray-50 p-10 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-emerald-100">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img src={expert.img} alt={expert.name} className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" />
                  <div className="absolute inset-0 rounded-full bg-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                <p className="text-emerald-600 font-semibold">{expert.role}</p>
                <div className="flex justify-center gap-2 mt-6">
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-emerald-600 hover:text-white transition cursor-pointer">𝕏</span>
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-emerald-600 hover:text-white transition cursor-pointer">in</span>
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-emerald-600 hover:text-white transition cursor-pointer">@</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: HOW IT WORKS ================= */}
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-20">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-emerald-200 -z-10"></div>
            {[
              { icon: '🌱', title: 'Choose Your Tree', desc: 'Select from our wide range of carbon-absorbing trees.' },
              { icon: '🛒', title: 'Add to Cart', desc: 'Securely purchase your trees in seconds.' },
              { icon: '🌍', title: 'We Plant It', desc: 'Our experts plant your trees on your behalf.' },
              { icon: '📈', title: 'Track Growth', desc: 'Monitor your trees growth impact in real-time.' }
            ].map((step, idx) => (
              <div key={idx} className="relative text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl border-4 border-white shadow-lg">{step.icon}</div>
                <div className="absolute top-0 -right-4 text-9xl font-extrabold text-emerald-50 -z-10 select-none">{idx + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: WHY CLIENTS TRUST US ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-16">Why Clients Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-10 rounded-3xl border border-emerald-100">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl mx-auto mb-6">🔒</div>
              <h3 className="font-bold text-xl mb-4">Bank-Level Security</h3>
              <p className="text-gray-500 text-sm">256-bit SSL encryption and 100% secure payment gateways.</p>
            </div>
            <div className="bg-gradient-to-br from-lime-50 to-white p-10 rounded-3xl border border-lime-100">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl mx-auto mb-6">🌿</div>
              <h3 className="font-bold text-xl mb-4">100% Eco-Certified</h3>
              <p className="text-gray-500 text-sm">All our trees are sourced from sustainable nurseries.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl border border-green-100">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl mx-auto mb-6">⭐</div>
              <h3 className="font-bold text-xl mb-4">10,000+ Reviews</h3>
              <p className="text-gray-500 text-sm">Rated 4.9/5 by our global community of eco-warriors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: CHOOSE YOUR PLAN ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
            <div className="bg-white p-10 rounded-l-3xl shadow-sm border border-gray-100 md:scale-95">
              <h3 className="text-xl font-bold mb-4">Basic</h3>
              <div className="mb-6"><span className="text-5xl font-extrabold text-gray-900">$10</span><span className="text-gray-500 text-xl">/mo</span></div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✅ 1 Tree planted monthly</li>
                <li>✅ Email updates</li>
                <li className="opacity-40">❌ Priority support</li>
              </ul>
              <button className="w-full py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition">Choose Basic</button>
            </div>

            <div className="relative bg-emerald-900 text-white p-12 rounded-3xl shadow-2xl md:scale-110 z-10 border-4 border-emerald-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-lime-400 to-emerald-500 text-white px-6 py-1 rounded-full font-bold text-sm shadow-lg">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="mb-6"><span className="text-6xl font-extrabold">$25</span><span className="text-gray-300 text-xl">/mo</span></div>
              <ul className="space-y-3 mb-8 text-gray-200">
                <li>✅ 3 Trees planted monthly</li>
                <li>✅ Photo updates</li>
                <li>✅ Priority support</li>
              </ul>
              <button className="w-full py-4 bg-lime-400 text-emerald-950 font-bold rounded-xl hover:bg-lime-300 transition shadow-lg">Choose Pro</button>
            </div>

            <div className="bg-white p-10 rounded-r-3xl shadow-sm border border-gray-100 md:scale-95">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6"><span className="text-5xl font-extrabold text-gray-900">$100</span><span className="text-gray-500 text-xl">/mo</span></div>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✅ 15 Trees planted monthly</li>
                <li>✅ Dedicated manager</li>
                <li>✅ 24/7 support</li>
              </ul>
              <button className="w-full py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition">Choose Enterprise</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: TESTIMONIALS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {['John D.', 'Jane S.', 'Michael B.'].map((name, i) => (
              <div key={i} className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 italic mb-6">"Planting trees through Green Earth was the best decision I made for the environment. The dashboard is gorgeous!"</p>
                <div className="flex items-center">
                  <img src={`https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg`} className="w-10 h-10 rounded-full mr-3 object-cover" alt="" />
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-xs text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: LATEST TIPS & ARTICLES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">Latest Tips & Articles</h2>
            <Link to="/blog" className="text-emerald-600 font-semibold hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {['Urban Trees', 'Tree Benefits', 'Tree Care'].map((topic, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                <div className="overflow-hidden h-48">
                  <img src={`https://i.ibb.co.com/cSQdg7tf/mango-min.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt=""/>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Tips</span>
                    <span className="text-xs text-gray-400">5 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Top 5 {topic} You Should Know</h3>
                  <p className="text-gray-500 text-sm">Discover the secrets to a thriving green space...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 11: MEET THE ADMIN ================= */}
      <section className="py-24 bg-emerald-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12">Meet the Admin Team</h2>
          <div className="flex justify-center gap-8 mb-20">
            {[1,2].map(i => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-64 border border-white/10 hover:bg-white/20 transition">
                <img src="https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg" className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-lime-400 object-cover" alt=""/>
                <h3 className="font-bold text-xl">Admin {i}</h3>
                <p className="text-gray-300 text-sm">Manager</p>
              </div>
            ))}
          </div>
          
          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                { q: 'How long does it take for trees to grow?', a: 'Most trees show significant growth within 2-3 years.' },
                { q: 'Can I track my tree online?', a: 'Yes! You will receive a unique ID and can track your tree on our dashboard.' },
                { q: 'Do you plant trees in my country?', a: 'We currently operate in 30+ countries.' }
              ].map((faq, idx) => (
                <details key={idx} className="bg-white/10 rounded-2xl p-6 group">
                  <summary className="cursor-pointer list-none font-bold flex justify-between items-center">
                    {faq.q}
                    <span className="group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="text-gray-300 mt-4 text-left">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 12: CTA ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl p-12 flex flex-col md:flex-row justify-between items-center shadow-2xl">
            <div>
              <h3 className="text-4xl font-extrabold text-white mb-4">Ready to Make a Difference?</h3>
              <p className="text-emerald-100">Join thousands in planting trees today.</p>
            </div>
            <a href="#" className="mt-6 md:mt-0 bg-white text-emerald-700 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-gray-100 transition">Get Started Now</a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 13: CONTACT ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4"><span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-xl">📍</span><div><h4 className="font-bold">Address</h4><p className="text-gray-500">123 Green Street, Eco City</p></div></div>
              <div className="flex items-start gap-4"><span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-xl">📞</span><div><h4 className="font-bold">Phone</h4><p className="text-gray-500">+1 (555) 123-4567</p></div></div>
              <div className="flex items-start gap-4"><span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-xl">✉️</span><div><h4 className="font-bold">Email</h4><p className="text-gray-500">hello@greenearth.com</p></div></div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="email" placeholder="Your Email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition shadow-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= SECTION 14: DONATE ================= */}
      <section className="py-24 bg-emerald-800 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-10">Plant a Tree Today</h2>
          <form className="max-w-md mx-auto bg-emerald-900/50 p-8 rounded-3xl shadow-2xl border border-emerald-700 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-emerald-950 text-white placeholder-gray-400 border border-emerald-700" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-emerald-950 text-white placeholder-gray-400 border border-emerald-700" />
            <select className="w-full p-4 rounded-xl bg-emerald-950 text-white border border-emerald-700">
              <option>1 Tree - $10</option>
              <option>5 Trees - $45</option>
              <option>10 Trees - $80</option>
            </select>
            <button type="submit" className="w-full bg-lime-400 hover:bg-lime-300 text-emerald-950 font-bold py-4 rounded-xl transition shadow-lg">Donate Now</button>
          </form>
        </div>
      </section>

      {/* ================= CHECKOUT MODAL ================= */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h3>
            <p className="text-gray-500 mb-8">Thank you for helping us plant more trees! Your trees will be planted in the next 48 hours.</p>
            <button onClick={closeCheckout} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition shadow-lg">
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
export default Home;