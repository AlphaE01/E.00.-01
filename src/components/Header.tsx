import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-blue-600' : 'text-white'}`}>
            Engineering Society
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" text="Home" scrolled={scrolled} />
            <NavLink to="/about" text="About" scrolled={scrolled} />
            <NavLink to="/events" text="Events" scrolled={scrolled} />
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`flex items-center transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
              >
                Resources
                <ChevronDown size={20} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 animate-fadeIn">
                  <NavLink to="/team" text="Our Team" className="block px-4 py-2 text-sm" scrolled={true} />
                  <NavLink to="/gallery" text="Gallery" className="block px-4 py-2 text-sm" scrolled={true} />
                  <NavLink to="/faq" text="FAQ" className="block px-4 py-2 text-sm" scrolled={true} />
                </div>
              )}
            </div>
            <NavLink to="/contact" text="Contact" scrolled={scrolled} />
            <Link
              to="/join"
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Join Now
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 animate-fadeIn">
            <NavLink to="/" text="Home" className="block py-2" scrolled={scrolled} />
            <NavLink to="/about" text="About" className="block py-2" scrolled={scrolled} />
            <NavLink to="/events" text="Events" className="block py-2" scrolled={scrolled} />
            <NavLink to="/team" text="Our Team" className="block py-2" scrolled={scrolled} />
            <NavLink to="/gallery" text="Gallery" className="block py-2" scrolled={scrolled} />
            <NavLink to="/faq" text="FAQ" className="block py-2" scrolled={scrolled} />
            <NavLink to="/contact" text="Contact" className="block py-2" scrolled={scrolled} />
            <Link
              to="/join"
              className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-center"
            >
              Join Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink: React.FC<{ to: string; text: string; className?: string; scrolled: boolean }> = ({ to, text, className = "", scrolled }) => (
  <Link to={to} className={`transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} ${className}`}>
    {text}
  </Link>
);

export default Header;