import React from 'react';
import { ChevronRight, Shield, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const stats = [
  { number: "98%", label: "Client Satisfaction", icon: Users },
  { number: "150+", label: "AI Solutions", icon: Shield },
  { number: "15+", label: "Years of Excellence", icon: Clock },
  { number: "50+", label: "Global Partners", icon: Award }
];

const features = [
  {
    title: "AI-Powered Solutions",
    description: "Cutting-edge artificial intelligence and machine learning solutions that drive automation and intelligent decision-making.",
  },
  {
    title: "Digital Transformation",
    description: "Strategic implementation of AI technologies to revolutionize your business processes and unlock new opportunities.",
  },
  {
    title: "Innovation Focus",
    description: "Continuous innovation through emerging AI technologies and industry best practices.",
  }
];

const testimonials = [
  {
    quote: "GlobalSync's AI solutions transformed our business operations, increasing efficiency by 300%.",
    author: "Sarah Chen",
    role: "CTO, TechCorp Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their AI implementation helped us reduce costs by 45% while improving customer satisfaction.",
    author: "Michael Rodriguez",
    role: "CEO, InnovateX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

function Home() {
  return (
    <div>
      <section className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                Transform Your Business
                <span className="block text-blue-400 mt-2">With AI Innovation</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                Harness the power of artificial intelligence to revolutionize your operations, 
                enhance decision-making, and drive unprecedented growth.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors group"
                >
                  Start Your AI Journey
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/services" 
                  className="flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-blue-400 bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative lg:block"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                    alt="AI Technology Visualization"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-600/10 mix-blend-overlay rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-20 transform -rotate-3" />
                  <Icon className="h-10 w-10 mx-auto text-blue-100 mb-4" />
                  <p className="text-4xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="text-lg text-blue-100">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-400">Hear from organizations that have transformed with our AI solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-lg border border-gray-700 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="text-blue-400 text-6xl opacity-20">"</div>
                </div>
                <p className="text-lg text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
