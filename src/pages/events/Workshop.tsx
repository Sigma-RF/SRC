import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, MapPin, ChevronRight } from 'lucide-react';

function Workshop() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  
  const upcomingWorkshops = [
    {
      title: "AI & Machine Learning Workshop",
      date: "March 25, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual",
      capacity: 50,
      instructor: "Dr. Sarah Johnson"
    },
    {
      title: "Research Paper Writing Workshop",
      date: "April 5, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Virtual",
      capacity: 30,
      instructor: "Dr. Michael Chen"
    }
  ];

  const pastWorkshops = [
    {
      title: "Data Science Fundamentals",
      date: "February 15, 2024",
      instructor: "Dr. Emily Brown",
      participants: 45
    },
    {
      title: "Quantum Computing Basics",
      date: "January 20, 2024",
      instructor: "Dr. James Wilson",
      participants: 35
    }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Workshops & Training</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our specialized workshops and enhance your research skills
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{workshop.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Capacity: {workshop.capacity} participants</span>
                  </div>
                </div>
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center"
                  >
                    Register Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Workshop Calendar</h2>
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
            {months.map((month, index) => (
              <button
                key={index}
                onClick={() => setSelectedMonth(index)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  selectedMonth === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className="aspect-square rounded-lg border border-gray-200 flex items-center justify-center"
              >
                <span className="text-gray-600">{day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Past Workshops</h2>
          <div className="space-y-6">
            {pastWorkshops.map((workshop, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{workshop.title}</h3>
                  <p className="text-gray-600">{workshop.date} • {workshop.instructor}</p>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{workshop.participants} participants</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Conduct a Workshop?</h2>
            <p className="text-lg mb-8">
              Share your expertise with our research community
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Submit Proposal
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Workshop;