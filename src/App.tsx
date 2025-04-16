import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Mail, Phone, ChevronRight, Microscope, BookOpen, Lightbulb, Users, Calendar, GraduationCap, UserPlus } from 'lucide-react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

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
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#events" className="text-gray-600 hover:text-blue-600">Events</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white border border-blue-500 rounded-full shadow-sm overflow-hidden">
                <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition">
                  Login
                </button>
                <div className="w-px h-6 bg-blue-500"></div>
                <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-r-full transition">
                  Register
                </button>
              </div>
            </div>

            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Microscope className="h-8 w-8" />
                  <span className="text-2xl font-bold">Sigma Research</span>
                </div>
                <p className="text-gray-400">
                  Proudly built by Mukarram and powered by Bolt.new
                </p>
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
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;