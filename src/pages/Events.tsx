import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, ChevronRight } from 'lucide-react';

function Events() {
  return (
    <div className="min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Events & Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our comprehensive research programs and workshops to enhance your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
              <GraduationCap className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Interns Research Program</h2>
              <p className="text-gray-600 mb-6">
                Join our comprehensive research training program and work on cutting-edge projects under expert guidance.
              </p>
              <Link
                to="/events/intern-program"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
              <Calendar className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Workshops & Training</h2>
              <p className="text-gray-600 mb-6">
                Participate in our specialized workshops and training sessions led by industry experts.
              </p>
              <Link
                to="/events/workshop"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                View Schedule <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Events;