import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Mail, Phone, ChevronRight, Microscope } from 'lucide-react';
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
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Microscope className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Sigma Research</span>
            </Link>
            <div className="flex space-x-6">
              <Link to="/research" className="text-gray-600 hover:text-blue-600">Research</Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
              <Link to="/projects" className="text-gray-600 hover:text-blue-600">Projects</Link>
              <Link to="/events" className="text-gray-600 hover:text-blue-600">Events</Link>
              <Link to="/publications" className="text-gray-600 hover:text-blue-600">Publications</Link>
              <Link to="/team" className="text-gray-600 hover:text-blue-600">Team</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              <Link 
                to="/apply"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Link>
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

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Microscope className="h-8 w-8" />
                  <span className="text-2xl font-bold">Sigma Research</span>
                </div>
              </div>
              <div className="flex justify-start md:justify-end space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="mailto:contact@sigmaresearch.com" className="text-gray-400 hover:text-white">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>Developed by MUKARRAM T BAMBOT</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;