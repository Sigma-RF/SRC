import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Github,
  Youtube,
} from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin className="h-6 w-6 text-red-600" />,
    label: 'Address',
    value: 'CHROMPET',
    bg: 'bg-red-50',
  },
  {
    icon: <Phone className="h-6 w-6 text-orange-600" />,
    label: 'Phone',
    value: '+91 89460 98435',
    bg: 'bg-orange-50',
  },
  {
    icon: <Mail className="h-6 w-6 text-red-600" />,
    label: 'Email',
    value: 'sigmaresearchforum@gmail.com',
    bg: 'bg-red-50',
  },
  {
    icon: <Clock className="h-6 w-6 text-orange-600" />,
    label: 'Working Hours',
    value: (
      <>
        Monday - Friday: 9:00 AM - 6:00 PM <br />
        Saturday: 9:00 AM - 1:00 PM
      </>
    ),
    bg: 'bg-orange-50',
  },
];

const socialLinks = [
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: '#',
    bg: 'bg-red-50',
    hover: 'hover:bg-red-100',
    color: 'text-red-600',
  },
  {
    icon: <Github className="h-6 w-6" />,
    href: '#',
    bg: 'bg-orange-50',
    hover: 'hover:bg-orange-100',
    color: 'text-orange-600',
  },
  {
    icon: <Youtube className="h-6 w-6" />,
    href: '#',
    bg: 'bg-red-50',
    hover: 'hover:bg-red-100',
    color: 'text-red-600',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for any inquiries or collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel: Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className={`${item.bg} p-3 rounded-lg`}>{item.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`${link.bg} ${link.color} ${link.hover} p-3 rounded-lg transition-colors`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              {['Full Name', 'Email Address', 'Subject'].map((label, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                  </label>
                  <input
                    type={label === 'Email Address' ? 'email' : 'text'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-xl hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
