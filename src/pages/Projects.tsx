import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Bot, Shield, LineChart, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  altText: string;
  details: {
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    timeline: string;
  };
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    title: "Enterprise AI Assistant",
    description: "Developed an advanced AI assistant system for a Fortune 500 company, revolutionizing internal operations and customer support.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    tags: ["NLP", "Machine Learning", "Enterprise"],
    altText: "AI assistant interface visualization",
    icon: Bot,
    details: {
      challenge: "The client needed to handle 50,000+ daily customer inquiries while reducing support costs and improving response times.",
      solution: "Implemented a context-aware AI assistant using advanced NLP and machine learning, integrated with existing enterprise systems.",
      results: [
        "90% reduction in response time",
        "75% cost savings in customer support",
        "98% customer satisfaction rate",
        "500,000+ successful interactions monthly"
      ],
      technologies: ["GPT-4", "TensorFlow", "Python", "React", "Node.js"],
      timeline: "6 months from concept to deployment"
    }
  },
  {
    title: "AI Security Platform",
    description: "Built an AI-powered cybersecurity platform that detects and prevents sophisticated cyber threats in real-time.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Cybersecurity", "AI", "Real-time"],
    altText: "Cybersecurity dashboard interface",
    icon: Shield,
    details: {
      challenge: "Rising sophisticated cyber attacks required a more intelligent and proactive security solution.",
      solution: "Developed an AI security platform using behavioral analysis and machine learning for threat detection.",
      results: [
        "99.9% threat detection rate",
        "60% reduction in false positives",
        "100,000+ attacks prevented monthly",
        "Real-time threat response in < 1 second"
      ],
      technologies: ["TensorFlow", "Python", "Kubernetes", "ElasticSearch"],
      timeline: "8 months development cycle"
    }
  },
  {
    title: "Predictive Analytics Engine",
    description: "Created an advanced predictive analytics system for a global retail chain, optimizing inventory and sales forecasting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Analytics", "Machine Learning", "Retail"],
    altText: "Data analytics dashboard",
    icon: LineChart,
    details: {
      challenge: "Inefficient inventory management leading to $10M+ annual losses due to overstock and stockouts.",
      solution: "Implemented AI-driven predictive analytics system for demand forecasting and inventory optimization.",
      results: [
        "40% reduction in inventory costs",
        "85% improvement in forecast accuracy",
        "25% increase in sales",
        "$15M annual savings"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "React", "Node.js"],
      timeline: "12 months full implementation"
    }
  },
  {
    title: "Smart Manufacturing AI",
    description: "Revolutionized manufacturing processes with AI-powered quality control and predictive maintenance systems.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    tags: ["Manufacturing", "IoT", "AI"],
    altText: "Smart manufacturing system interface",
    icon: Cpu,
    details: {
      challenge: "Quality control issues and equipment downtime were causing significant production delays and losses.",
      solution: "Deployed computer vision for quality inspection and ML models for predictive maintenance.",
      results: [
        "85% reduction in defect rate",
        "45% decrease in downtime",
        "30% increase in productivity",
        "ROI achieved in 8 months"
      ],
      technologies: ["Computer Vision", "PyTorch", "IoT Sensors", "Edge Computing"],
      timeline: "10 months from pilot to full deployment"
    }
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-16" aria-label="Our Projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Case Studies</h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              AI Success Stories
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Explore how our AI solutions have transformed businesses and delivered measurable results.
            </p>
          </motion.div>

          <div className="grid gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden group">
                      <img 
                        src={project.image} 
                        alt={project.altText}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-900/30 rounded-lg">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                      </div>

                      <p className="text-gray-300 mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm bg-blue-900/30 text-blue-400 rounded-full border border-blue-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                      >
                        View Case Study
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <AnimatePresence>
                        {selectedProject === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 pt-6 border-t border-gray-700"
                          >
                            <div className="space-y-6">
                              <div>
                                <h3 className="text-lg font-medium text-blue-400 mb-2">Challenge</h3>
                                <p className="text-gray-300">{project.details.challenge}</p>
                              </div>

                              <div>
                                <h3 className="text-lg font-medium text-blue-400 mb-2">Solution</h3>
                                <p className="text-gray-300">{project.details.solution}</p>
                              </div>

                              <div>
                                <h3 className="text-lg font-medium text-blue-400 mb-2">Key Results</h3>
                                <ul className="grid sm:grid-cols-2 gap-2">
                                  {project.details.results.map((result, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                      {result}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-lg font-medium text-blue-400 mb-2">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                  {project.details.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h3 className="text-lg font-medium text-blue-400 mb-2">Timeline</h3>
                                <p className="text-gray-300">{project.details.timeline}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
              Start Your AI Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
