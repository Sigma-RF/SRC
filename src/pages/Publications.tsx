import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, ExternalLink } from 'lucide-react';

function Publications() {
  const publications = [
    {
      title: "Advanced Machine Learning Algorithms for Big Data Analytics",
      authors: "John Doe, Jane Smith, et al.",
      journal: "International Journal of Data Science",
      year: 2024,
      impact: 4.5,
      link: "#"
    },
    {
      title: "Quantum Computing Applications in Cryptography",
      authors: "Alice Johnson, Bob Wilson, et al.",
      journal: "Journal of Quantum Information",
      year: 2024,
      impact: 5.2,
      link: "#"
    },
    {
      title: "IoT Security: Challenges and Solutions",
      authors: "Sarah Brown, Mike Davis, et al.",
      journal: "IEEE Internet of Things Journal",
      year: 2023,
      impact: 4.8,
      link: "#"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research contributions to the academic community
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-gray-500">{pub.journal} • {pub.year}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-red-600">
                    <Award className="h-5 w-5 mr-1" />
                    <span>IF: {pub.impact}</span>
                  </div>
                  <a
                    href={pub.link}
                    className="text-orange-500 hover:text-orange-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Citation Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">Total Citations</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">25</div>
              <div className="text-gray-600">Publications</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Impact Factor</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Publications;