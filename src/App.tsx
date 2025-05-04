import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Mail, Phone, MapPin, Clock, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Team from './pages/Team';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Apply from './pages/Apply';
import Events from './pages/Events';
import Contact from './pages/Contact';
import InternProgram from './pages/events/InternProgram';
import Workshop from './pages/events/Workshop';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <Router>
      <div className="min-h-screen bg-pattern">
        <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMenu}>
                <img 
                  src="src/assets/logo.png" 
                  alt="Research Center Logo" 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg"
                />
                <span className="text-lg md:text-2xl font-bold gradient-text">Research Center</span>
              </Link>

              <button
                onClick={toggleMenu}
                className="md:hidden rounded-lg p-2 text-gray-600 hover:text-red-600 focus:outline-none mobile-touch-target"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
                <Link to="/research" className="nav-link text-gray-600 hover:text-red-600 transition-colors">Research</Link>
                <Link to="/services" className="nav-link text-gray-600 hover:text-red-600 transition-colors">Services</Link>
                <Link to="/projects" className="nav-link text-gray-600 hover:text-red-600 transition-colors">Projects</Link>
                <Link to="/events" className="nav-link text-gray-600 hover:text-red-600 transition-colors">Events</Link>
                <Link to="/publications" className="nav-link text-gray-600 hover:text-red-600 transition-colors">Publications</Link>
                <Link to="/team" className="nav-link text-gray-600 hover:text-red-600 transition-colors">Team</Link>
                <Link to="/contact" className="nav-link text-gray-600 hover:text-red-600 transition-colors">Contact</Link>
                <Link 
                  to="/apply"
                  className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-xl hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Enhanced Mobile Navigation */}
            <div 
              className={`md:hidden fixed inset-0 bg-white/98 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } z-50`}
            >
              <div className="flex flex-col h-full p-4">
                <div className="flex justify-between items-center mb-8">
                  <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                    <img 
                      src="src/assets/logo.png" 
                      alt="Research Center Logo" 
                      className="w-8 h-8 rounded-full shadow-lg"
                    />
                    <span className="text-lg font-bold gradient-text">Research Center</span>
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="rounded-lg p-2 text-gray-600 hover:text-red-600 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  <Link to="/research" className="mobile-touch-target text-gray-600 hover:text-red-600 transition-colors py-2" onClick={closeMenu}>Research</Link>
                  <Link to="/services" className="mobile-touch-target text-gray-600 hover:text-red-600 transition-colors py-2" onClick={closeMenu}>Services</Link>
                  <Link to="/projects" className="mobile-touch-target text-gray-600 hover:text-red-600 transition-colors py-2" onClick={closeMenu}>Projects</Link>
                  <Link to="/events" className="mobile-touch-target text-gray-600 hover:text-red-600 transition-colors py-2" onClick={closeMenu}>Events</Link>
                  <Link to="/publications" className="mobile-touch-target text-gray-600 hover:text-red-600 transition-colors py-2" onClick={closeMenu}>Publications</Link>
                  <Link to="/team" className="mobile-touch-target text-gray-600 hover:text-red-600 transition-colors py-2" onClick={closeMenu}>Team</Link>
                  <Link to="/contact" className="mobile-touch-target text-gray-600 hover:text-red-600 transition-colors py-2" onClick={closeMenu}>Contact</Link>
                  <Link 
                    to="/apply"
                    className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-3 rounded-xl text-center font-medium shadow-lg"
                    onClick={closeMenu}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/intern-program" element={<InternProgram />} />
          <Route path="/events/workshop" element={<Workshop />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-gradient-to-r from-red-900 to-orange-900 text-white py-8 relative overflow-hidden">
          <div className="hero-pattern absolute inset-0 opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <img 
                    src="src/assets/logo.png" 
                    alt="Research Center Logo" 
                    className="w-8 h-8 rounded-full shadow-lg"
                  />
                  <span className="text-lg font-bold">Research Center</span>
                </div>
                <p className="text-sm text-gray-300">
                  Advancing research through collaboration
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-base font-semibold mb-3">Contact</h3>
                <div className="space-y-2 text-sm">
                  <a href="mailto:contact@research-center.com" className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    contact@research-center.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-base font-semibold mb-3">Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center md:justify-start text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    Mon-Fri: 9AM-6PM
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    Sat: 9AM-1PM
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-base font-semibold mb-3">Connect</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-red-800 text-center text-sm text-gray-300">
              <p>© {new Date().getFullYear()} Research Center. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;