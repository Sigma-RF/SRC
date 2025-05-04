import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Brain, FileCheck, Users, Microscope, GraduationCap } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      title: "Research Paper Writing",
      description: "Expert assistance in writing and publishing research papers in high-impact journals",
      features: ["Journal Selection", "Paper Structure", "Review Support", "Publication Guidance"]
    },
    {
      icon: <Code className="h-8 w-8 text-orange-500" />,
      title: "Technical Consulting",
      description: "Specialized consulting services for technical research and development",
      features: ["Architecture Review", "Code Analysis", "Performance Optimization", "Best Practices"]
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: "Data Analysis",
      description: "Comprehensive data analysis and visualization services",
      features: ["Statistical Analysis", "Data Mining", "Visualization", "Reporting"]
    },
    {
      icon: <Brain className="h-8 w-8 text-orange-500" />,
      title: "AI & ML Solutions",
      description: "Custom AI and machine learning solutions for research projects",
      features: ["Model Development", "Training", "Deployment", "Optimization"]
    },
    {
      icon: <FileCheck className="h-8 w-8 text-red-600" />,
      title: "Patent Filing",
      description: "Complete patent filing and intellectual property protection services",
      features: ["Patent Search", "Documentation", "Filing Process", "Legal Support"]
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Research Training",
      description: "Comprehensive research methodology and tools training",
      features: ["Methodology", "Tools", "Best Practices", "Hands-on Projects"]
    },
    {
      icon: <Microscope className="h-8 w-8 text-red-600" />,
      title: "Laboratory Services",
      description: "Access to advanced laboratory facilities and equipment",
      features: ["Equipment Access", "Technical Support", "Data Collection", "Analysis"]
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
      title: "Academic Support",
      description: "Academic writing and research support services",
      features: ["Literature Review", "Methodology", "Analysis", "Publication"]
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research and development services to support your academic and industry projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-red-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-500 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Services?</h2>
            <p className="text-lg mb-8">
              Contact us to discuss your specific research and development needs
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors inline-block"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;