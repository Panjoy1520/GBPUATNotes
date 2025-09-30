
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GBPUATNotes_logo from "../../assets/GBPUATNotes_logo.png";

function HeroNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contactus' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" onClick={handleLinkClick}>
              <div className="flex items-center">
                <img src={GBPUATNotes_logo} alt="logo" className="h-24 md:h-24 w-auto" />
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link key={link.name} to={link.href} className="text-neutral-300 hover:text-orange-400 transition-colors duration-200 font-medium">
                  {link.name}
                </Link>
              ))}
              <Link to="/login">
                <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105">
                  Sign In
                </button>
              </Link>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMenuOpen(!isMenuOpen)} 
                className="cursor-pointer text-white z-50 relative"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div 
          className="absolute inset-0 bg-neutral-900/95 backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className="relative z-50 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={handleLinkClick}
                className="text-white text-2xl font-medium hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
                style={{
                  animation: isMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login" onClick={handleLinkClick}>
              <button 
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-110 mt-4"
                style={{
                  animation: isMenuOpen ? `fadeInUp 0.5s ease-out ${navLinks.length * 0.1}s both` : 'none'
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default HeroNav