import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Award, ChevronRight } from 'lucide-react';

function InternProgram() {
  const programFeatures = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Research Methodology",
      description: "Learn advanced research methodologies and techniques"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentorship",
      description: "One-on-one guidance from experienced researchers"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Schedule",
      description: "Work at your own pace with flexible timing"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certification",
      description: "Receive certification upon program completion"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Online Interns Research Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive program designed to nurture the next generation of researchers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Structure</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <span className="text-blue-600 font-bold">01</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Foundation Phase</h3>
                <p className="text-gray-600">Introduction to research methodologies and tools</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <span className="text-blue-600 font-bold">02</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Phase</h3>
                <p className="text-gray-600">Work on real research projects under mentorship</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <span className="text-blue-600 font-bold">03</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Publication Phase</h3>
                <p className="text-gray-600">Research paper writing and publication support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <motion.a
            href="/apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now <ChevronRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default InternProgram;