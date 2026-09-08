import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-brand-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">🌴 Green Earth</h3>
            <p className="text-gray-300 text-sm">Making the world greener one tree at a time.</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-300">About</Link></li>
              <li><Link to="/blog" className="hover:text-brand-300">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-brand-300">FAQ</Link></li>
              <li><Link to="#" className="hover:text-brand-300">Help Center</Link></li>
              <li><Link to="#" className="hover:text-brand-300">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-brand-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email" 
                className="w-full p-2 rounded bg-brand-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-2 rounded transition">
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-brand-800">
          <p className="text-gray-400 text-sm">&copy; 2026 Green Earth. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;