import React from 'react';
import { motion } from 'framer-motion';
import { FlaskRound as Flask, Brain, Database, Network, Cpu, Cloud } from 'lucide-react';

function Research() {
  const researchAreas = [
    {
      icon: <Brain className="h-8 w-8 text-red-600" />,
      title: "Artificial Intelligence",
      description: "Advanced research in machine learning, deep learning, and neural networks"
    },
    {
      icon: <Database className="h-8 w-8 text-orange-500" />,
      title: "Big Data Analytics",
      description: "Data mining, predictive analytics, and business intelligence"
    },
    {
      icon: <Network className="h-8 w-8 text-red-600" />,
      title: "Internet of Things",
      description: "Smart devices, sensor networks, and embedded systems"
    },
    {
      icon: <Cpu className="h-8 w-8 text-orange-500" />,
      title: "Quantum Computing",
      description: "Quantum algorithms, cryptography, and quantum machine learning"
    },
    {
      icon: <Cloud className="h-8 w-8 text-red-600" />,
      title: "Cloud Computing",
      description: "Distributed systems, cloud security, and scalable architectures"
    },
    {
      icon: <Flask className="h-8 w-8 text-orange-500" />,
      title: "Experimental Research",
      description: "Novel methodologies and innovative research approaches"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research focuses on cutting-edge technology and innovation across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-red-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Research Opportunities</h2>
            <p className="text-lg mb-8">
              Join our research programs and work on cutting-edge projects with leading experts in the field
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
              onClick={() => window.location.href = '/apply'}
            >
              Apply for Research Position
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Research;