import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-xl font-bold text-brand-600 flex items-center gap-2">
          <span className="text-2xl">🌴</span> Green Earth
        </Link>
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-brand-600 transition">Home</Link>
          <Link to="/about" className="hover:text-brand-600 transition">About</Link>
          <Link to="/blog" className="hover:text-brand-600 transition">Blog</Link>
          <Link to="/contact" className="hover:text-brand-600 transition">Contact</Link>
        </div>
        <div className="hidden md:block">
          <Link to="/" className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-2 px-6 rounded-full transition shadow-lg">Plant a Tree</Link>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-2xl">☰</button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/" className="block py-3 px-6 hover:bg-gray-50">Home</Link>
          <Link to="/about" className="block py-3 px-6 hover:bg-gray-50">About</Link>
          <Link to="/blog" className="block py-3 px-6 hover:bg-gray-50">Blog</Link>
          <Link to="/contact" className="block py-3 px-6 hover:bg-gray-50">Contact</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;