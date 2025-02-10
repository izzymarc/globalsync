import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Users, Target, Cpu, Award, ChevronRight, ArrowRight, Sparkles, Bot, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AIFeatures } from '../components/AIFeatures';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
}

interface Timeline {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer",
    bio: "Leading AI researcher with 15+ years experience in machine learning and neural networks.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    expertise: ["Deep Learning", "Neural Networks", "AI Strategy"]
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Innovation",
    bio: "Pioneer in enterprise AI solutions with a track record of successful implementations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    expertise: ["AI Innovation", "Enterprise Solutions", "Digital Transformation"]
  },
  {
    name: "Dr. Emily Zhang",
    role: "Lead Research Scientist",
    bio: "Specializes in natural language processing and computer vision systems.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    expertise: ["NLP", "Computer Vision", "Machine Learning"]
  }
];

const timeline: Timeline[] = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Started with a vision to revolutionize industries through AI",
    icon: Globe
  },
  {
    year: "2012",
    title: "AI Innovation Lab",
    description: "Launched our dedicated AI research and development facility",
    icon: Brain
  },
  {
    year: "2015",
    title: "Enterprise Solutions",
    description: "Released our first enterprise-grade AI platform",
    icon: Shield
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Expanded operations to 15+ countries worldwide",
    icon: Target
  },
  {
    year: "2020",
    title: "Advanced AI Suite",
    description: "Launched comprehensive AI solutions for various industries",
    icon: Sparkles
  },
  {
    year: "2023",
    title: "Next-Gen AI",
    description: "Pioneering next-generation AI technologies",
    icon: Bot
  }
];

const certifications = [
  "ISO 27001 Certified",
  "AI Ethics Certified",
  "GDPR Compliant",
  "SOC 2 Type II",
  "AI Safety Certified",
  "Enterprise AI Ready"
];

function About() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-base text-blue-400 font-semibold tracking-wide uppercase">About Us</h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Pioneering the Future of AI
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-400 mx-auto">
              GlobalSync Technologies is at the forefront of AI innovation, helping organizations harness the power of artificial intelligence to transform their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4">
                <div className="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-blue-400 to-purple-500"></div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
                alt="AI technology visualization"
                className="relative rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Our AI Excellence</h2>
              <p className="text-gray-400 text-lg">
                With over 15 years of experience in artificial intelligence, we've helped hundreds of organizations implement cutting-edge AI solutions that drive real business value.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <Award className="h-5 w-5 text-blue-400" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                          <div className="flex items-center gap-3 mb-2 justify-end">
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <div className="p-2 bg-blue-900/30 rounded-lg">
                              <Icon className="h-5 w-5 text-blue-400" />
                            </div>
                          </div>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-center w-8">
                        <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{item.year}</span>
                        </div>
                      </div>
                      <div className="w-1/2"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 cursor-pointer group"
                  onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-white">{member.name}</h3>
                      <p className="text-blue-400">{member.role}</p>
                    </div>
                  </div>
                  <AnimatePresence>
                    {selectedMember === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <p className="text-gray-300 mb-4">{member.bio}</p>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm bg-blue-900/30 text-blue-400 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <AIFeatures />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors group"
            >
              Start Your AI Journey
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
