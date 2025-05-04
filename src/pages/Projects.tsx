import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "AI-Powered Healthcare Diagnostics",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Healthcare",
      status: "Ongoing",
      team: 8,
      duration: "18 months",
      description: "Development of machine learning models for early disease detection and diagnosis using medical imaging data.",
      achievements: ["Published in Nature Medicine", "98% accuracy rate", "Clinical trial phase"]
    },
    {
      title: "Quantum Cryptography System",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Cybersecurity",
      status: "Completed",
      team: 6,
      duration: "12 months",
      description: "Implementation of quantum-safe encryption protocols for secure communication systems.",
      achievements: ["Patent filed", "Military-grade security", "Commercial deployment"]
    },
    {
      title: "Smart City Infrastructure",
      image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "IoT",
      status: "Ongoing",
      team: 12,
      duration: "24 months",
      description: "Development of IoT-based smart city infrastructure for efficient resource management.",
      achievements: ["50% energy savings", "Real-time monitoring", "Government partnership"]
    },
    {
      title: "Sustainable Energy Storage",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Energy",
      status: "Planning",
      team: 10,
      duration: "36 months",
      description: "Research on advanced battery technologies for renewable energy storage solutions.",
      achievements: ["Grant secured", "Industry collaboration", "Prototype phase"]
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative research projects pushing the boundaries of technology and science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'Ongoing' ? 'bg-red-100 text-red-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5 mr-1" />
                    <span>{project.team} researchers</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-1" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-red-600" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Our Research?</h2>
            <p className="text-lg mb-8">
              Join our research program and work on cutting-edge projects
            </p>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors inline-block"
            >
              Apply Now
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;