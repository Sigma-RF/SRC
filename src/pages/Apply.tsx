import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Brain, Code, Database, Microscope, FileText, FlaskRound as Flask, Cpu, Network } from 'lucide-react';

function Apply() {
  const [selectedField, setSelectedField] = useState('');
  const [step, setStep] = useState(1);

  const researchFields = [
    {
      id: 'ai',
      icon: <Brain className="h-6 w-6" />,
      title: 'Artificial Intelligence',
      description: 'Machine Learning, Deep Learning, Neural Networks',
    },
    {
      id: 'software',
      icon: <Code className="h-6 w-6" />,
      title: 'Software Development',
      description: 'Full-stack Development, Mobile Apps, Cloud Computing',
    },
    {
      id: 'data',
      icon: <Database className="h-6 w-6" />,
      title: 'Data Science',
      description: 'Big Data Analytics, Data Mining, Visualization',
    },
    {
      id: 'biotech',
      icon: <Microscope className="h-6 w-6" />,
      title: 'Biotechnology',
      description: 'Genetic Engineering, Molecular Biology',
    },
    {
      id: 'quantum',
      icon: <Cpu className="h-6 w-6" />,
      title: 'Quantum Computing',
      description: 'Quantum Algorithms, Quantum Cryptography',
    },
    {
      id: 'iot',
      icon: <Network className="h-6 w-6" />,
      title: 'Internet of Things',
      description: 'Embedded Systems, Sensor Networks',
    },
    {
      id: 'research',
      icon: <FileText className="h-6 w-6" />,
      title: 'Research Writing',
      description: 'Academic Writing, Journal Publications',
    },
    {
      id: 'chemistry',
      icon: <Flask className="h-6 w-6" />,
      title: 'Chemical Research',
      description: 'Material Science, Chemical Engineering',
    },
  ];

  const handleFieldSelect = (fieldId: string) => {
    setSelectedField(fieldId);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://forms.gle/your-form-link', '_blank');
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Research Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your field of interest and start your research journey with us
          </p>
        </div>

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {researchFields.map((field) => (
              <motion.button
                key={field.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleFieldSelect(field.id)}
                className={`p-6 rounded-xl text-left transition-all ${
                  selectedField === field.id
                    ? 'bg-blue-600 text-white shadow-xl'
                    : 'bg-white hover:bg-blue-50 shadow-lg'
                }`}
              >
                <div className={`p-3 rounded-lg inline-block mb-4 ${
                  selectedField === field.id ? 'bg-blue-500' : 'bg-blue-100'
                }`}>
                  {field.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{field.title}</h3>
                <p className={`text-sm ${
                  selectedField === field.id ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {field.description}
                </p>
              </motion.button>
            ))}
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Education Level
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your education level</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">Ph.D.</option>
                  <option value="postdoc">Post-Doctoral</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Research Experience
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Briefly describe your research experience..."
                />
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  ← Back to Fields
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                >
                  Submit Application
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-blue-600 font-bold text-xl mb-2">01</div>
                <h3 className="font-semibold mb-2">Select Field</h3>
                <p className="text-gray-600 text-sm">Choose your research area of interest</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-blue-600 font-bold text-xl mb-2">02</div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600 text-sm">Fill out the application form with your details</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-blue-600 font-bold text-xl mb-2">03</div>
                <h3 className="font-semibold mb-2">Interview</h3>
                <p className="text-gray-600 text-sm">Selected candidates will be invited for an interview</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Apply;