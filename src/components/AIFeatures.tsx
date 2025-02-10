import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap, Bot, Shield, Database, Cloud, LineChart } from 'lucide-react';

interface AIFeature {
  title: string;
  description: string;
  icon: React.ElementType;
  stats: { label: string; value: string }[];
  technologies: string[];
}

const features: AIFeature[] = [
  {
    title: 'Natural Language Processing',
    description: 'Process and analyze text in real-time with our advanced NLP models.',
    icon: Brain,
    stats: [
      { label: 'Languages Supported', value: '50+' },
      { label: 'Accuracy Rate', value: '98%' },
      { label: 'Processing Speed', value: '<100ms' }
    ],
    technologies: ['GPT-4', 'BERT', 'Transformer Models']
  },
  {
    title: 'Computer Vision',
    description: 'Analyze and interpret visual data with state-of-the-art computer vision.',
    icon: Sparkles,
    stats: [
      { label: 'Object Detection', value: '99.9%' },
      { label: 'Real-time Processing', value: '60 FPS' },
      { label: 'Supported Formats', value: '15+' }
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenCV']
  },
  {
    title: 'Predictive Analytics',
    description: 'Make data-driven decisions with our predictive modeling capabilities.',
    icon: LineChart,
    stats: [
      { label: 'Prediction Accuracy', value: '95%' },
      { label: 'Data Processing', value: '1M+/s' },
      { label: 'Model Types', value: '25+' }
    ],
    technologies: ['Scikit-learn', 'XGBoost', 'LightGBM']
  },
  {
    title: 'Conversational AI',
    description: 'Engage users with intelligent, context-aware conversational agents.',
    icon: Bot,
    stats: [
      { label: 'Response Time', value: '<1s' },
      { label: 'User Satisfaction', value: '94%' },
      { label: 'Intent Recognition', value: '97%' }
    ],
    technologies: ['RASA', 'DialogFlow', 'Custom Models']
  },
  {
    title: 'AI Security',
    description: 'Protect your systems with AI-powered security solutions.',
    icon: Shield,
    stats: [
      { label: 'Threat Detection', value: '99.9%' },
      { label: 'Response Time', value: '<50ms' },
      { label: 'False Positives', value: '<0.1%' }
    ],
    technologies: ['Anomaly Detection', 'Behavioral Analysis', 'Neural Networks']
  },
  {
    title: 'Edge AI',
    description: 'Deploy AI models at the edge for real-time processing.',
    icon: Cloud,
    stats: [
      { label: 'Latency', value: '<10ms' },
      { label: 'Power Efficiency', value: '90%' },
      { label: 'Model Size', value: '<5MB' }
    ],
    technologies: ['TensorFlow Lite', 'Edge TPU', 'CoreML']
  },
  {
    title: 'AutoML',
    description: 'Automate machine learning workflows for faster development.',
    icon: Zap,
    stats: [
      { label: 'Time Saved', value: '80%' },
      { label: 'Model Performance', value: '95%' },
      { label: 'Automation Level', value: '90%' }
    ],
    technologies: ['AutoKeras', 'H2O.ai', 'Custom Pipeline']
  },
  {
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable insights with AI.',
    icon: Database,
    stats: [
      { label: 'Data Processing', value: '10TB/h' },
      { label: 'Analysis Speed', value: 'Real-time' },
      { label: 'Data Sources', value: '100+' }
    ],
    technologies: ['Apache Spark', 'Hadoop', 'Custom ETL']
  }
];

export function AIFeatures() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">AI Capabilities</h2>
          <p className="mt-4 text-lg text-gray-400">
            Experience the power of our advanced AI technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-900/30 text-blue-400 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mt-4 text-lg font-medium text-white text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="mt-2 text-gray-400 text-center text-sm">
                    {feature.description}
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {feature.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-blue-400 font-bold">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {feature.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-blue-900/30 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
