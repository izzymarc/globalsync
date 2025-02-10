import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
  projectType: string;
  budget: string;
  timeline: string;
}

const projectTypes = [
  'AI Implementation',
  'Machine Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Predictive Analytics',
  'AI Consulting',
  'Custom Solution'
];

const budgetRanges = [
  'Under $50k',
  '$50k - $100k',
  '$100k - $250k',
  '$250k - $500k',
  '$500k+'
];

const timelineOptions = [
  'Less than 3 months',
  '3-6 months',
  '6-12 months',
  '12+ months'
];

const officeLocations = [
  {
    city: 'Innovation City',
    address: '123 Tech Street',
    phone: '+1 (555) 123-4567',
    email: 'innovation@globalsync.tech',
    timezone: 'PST (UTC-8)'
  },
  {
    city: 'AI Valley',
    address: '456 Neural Drive',
    phone: '+1 (555) 987-6543',
    email: 'valley@globalsync.tech',
    timezone: 'EST (UTC-5)'
  }
];

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    projectType: '',
    budget: '',
    timeline: ''
  });

  const [activeSection, setActiveSection] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setActiveSection('success');
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-label="Contact Information">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Contact Us</h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Let's Build Something Amazing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Transform your business with our cutting-edge AI solutions. Get in touch to start your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <AnimatePresence mode="wait">
                {activeSection === 'form' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-gray-800 p-8 rounded-lg shadow-lg"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-300">
                            Project Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Please describe your project and requirements..."
                          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <fieldset>
                          <legend className="text-sm font-medium text-gray-300">Preferred Contact Method</legend>
                          <div className="mt-2 flex gap-4">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="email-contact"
                                name="preferredContact"
                                value="email"
                                checked={formData.preferredContact === 'email'}
                                onChange={handleChange}
                                className="text-blue-500 focus:ring-blue-500 h-4 w-4 bg-gray-700 border-gray-600"
                              />
                              <label htmlFor="email-contact" className="ml-2 text-sm text-gray-300">
                                Email
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="phone-contact"
                                name="preferredContact"
                                value="phone"
                                checked={formData.preferredContact === 'phone'}
                                onChange={handleChange}
                                className="text-blue-500 focus:ring-blue-500 h-4 w-4 bg-gray-700 border-gray-600"
                              />
                              <label htmlFor="phone-contact" className="ml-2 text-sm text-gray-300">
                                Phone
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                  >
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-white">Thank You!</h2>
                    <p className="mt-2 text-gray-400">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setActiveSection('form');
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          phone: '',
                          subject: '',
                          message: '',
                          preferredContact: 'email',
                          projectType: '',
                          budget: '',
                          timeline: ''
                        });
                      }}
                      className="mt-6 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {officeLocations.map((office, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-medium text-white mb-4">{office.city} Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone className="h-5 w-5 text-blue-400 mr-3" />
                      <a href={`tel:${office.phone}`} className="hover:text-blue-400 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="h-5 w-5 text-blue-400 mr-3" />
                      <a href={`mailto:${office.email}`} className="hover:text-blue-400 transition-colors">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-5 w-5 text-blue-400 mr-3" />
                      <span>{office.timezone}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-white mb-4">Quick Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <MessageSquare className="h-5 w-5 text-blue-400 mr-3" />
                    <span>24/7 Chat Support</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 text-blue-400 mr-3" />
                    <span>Schedule a Meeting</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Globe className="h-5 w-5 text-blue-400 mr-3" />
                    <span>Global Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
