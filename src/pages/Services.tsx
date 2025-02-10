import React, { useState } from 'react';
import { Code, Cloud, Database, Shield, Cpu, LineChart, Brain, Network, ChevronRight, ArrowRight, Bot, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  useCase: string;
}

const services: Service[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "State-of-the-art AI solutions that transform business operations through intelligent automation, predictive analytics, and cognitive computing capabilities.",
    features: ["Large Language Models", "Computer Vision", "Neural Networks", "Deep Learning", "Natural Language Processing"],
    benefits: ["50% Reduced Operating Costs", "90% Faster Decision Making", "24/7 Automated Operations"],
    useCase: "Implemented predictive maintenance system reducing equipment downtime by 45% for manufacturing client"
  },
  {
    icon: Bot,
    title: "Conversational AI",
    description: "Advanced chatbots and virtual assistants powered by natural language processing for enhanced customer engagement and support automation.",
    features: ["Intent Recognition", "Sentiment Analysis", "Multi-language Support", "Context Awareness", "Voice Integration"],
    benefits: ["80% Faster Response Times", "24/7 Customer Support", "95% Customer Satisfaction"],
    useCase: "Deployed AI chatbot handling 10,000+ customer inquiries daily with 98% resolution rate"
  },
  {
    icon: Sparkles,
    title: "Computer Vision",
    description: "Cutting-edge visual recognition systems for automated inspection, security, and real-time monitoring applications.",
    features: ["Object Detection", "Facial Recognition", "Quality Control", "OCR", "Video Analytics"],
    benefits: ["99.9% Accuracy Rate", "Real-time Processing", "Automated Monitoring"],
    useCase: "Implemented quality control system reducing defects by 85% in manufacturing line"
  },
  {
    icon: Database,
    title: "Intelligent Analytics",
    description: "Advanced analytics powered by AI to extract deeper insights from your data and enable predictive decision making.",
    features: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Real-time Analysis", "Data Visualization"],
    benefits: ["90% Faster Analysis", "Predictive Insights", "Automated Reporting"],
    useCase: "Developed predictive analytics system increasing sales forecast accuracy by 40%"
  },
  {
    icon: Cloud,
    title: "AI Infrastructure",
    description: "Scalable cloud infrastructure optimized for AI workloads, ensuring high performance and cost-effective AI operations.",
    features: ["GPU Clusters", "Distributed Computing", "Auto-scaling", "Model Deployment", "Resource Optimization"],
    benefits: ["60% Cost Reduction", "99.9% Uptime", "Infinite Scalability"],
    useCase: "Built scalable AI infrastructure handling 1M+ daily predictions with 99.99% uptime"
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "AI-enhanced cybersecurity providing proactive threat detection and intelligent response to emerging security challenges.",
    features: ["Threat Detection", "Behavioral Analysis", "Automated Response", "Risk Assessment", "Compliance Monitoring"],
    benefits: ["95% Threat Detection", "Instant Response", "Continuous Protection"],
    useCase: "Implemented AI security system preventing 100,000+ cyber attacks monthly"
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-16" aria-label="Our Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Services</h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Advanced AI Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Transform your business with our cutting-edge artificial intelligence services and solutions.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div 
                    className="h-full bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 cursor-pointer"
                    onClick={() => setSelectedService(selectedService === index ? null : index)}
                  >
                    <div className="absolute top-0 right-0 mt-4 mr-4">
                      <motion.div
                        animate={{ rotate: selectedService === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="h-5 w-5 text-blue-400" />
                      </motion.div>
                    </div>

                    <div className="p-3 bg-blue-900/30 rounded-lg w-fit group-hover:bg-blue-900/40 transition-colors">
                      <Icon className="h-7 w-7 text-blue-400" aria-hidden="true" />
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-gray-400">{service.description}</p>

                    <AnimatePresence>
                      {selectedService === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-700"
                        >
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features</h4>
                              <ul className="grid grid-cols-2 gap-2">
                                {service.features.map((feature, i) => (
                                  <li key={i} className="text-sm text-gray-300 flex items-center">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium text-blue-400 mb-2">Benefits</h4>
                              <ul className="space-y-1">
                                {service.benefits.map((benefit, i) => (
                                  <li key={i} className="text-sm text-gray-300 flex items-center">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium text-blue-400 mb-2">Success Story</h4>
                              <p className="text-sm text-gray-300">{service.useCase}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors group"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
