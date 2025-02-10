import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AIChat } from './AIChat';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Globe className="h-8 w-8 text-blue-400" aria-hidden="true" />
                </motion.div>
                <span className="ml-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  GlobalSync Technologies
                </span>
              </Link>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { path: '/services', label: 'Services' },
                { path: '/about', label: 'About' },
                { path: '/projects', label: 'Projects' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative text-gray-300 hover:text-blue-400 transition-colors ${
                    location.pathname === path ? 'text-blue-400' : ''
                  }`}
                >
                  {label}
                  {location.pathname === path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-blue-400 bottom-[-4px]"
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-blue-400 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 border-b border-gray-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { path: '/services', label: 'Services' },
                  { path: '/about', label: 'About' },
                  { path: '/projects', label: 'Projects' },
                  { path: '/contact', label: 'Contact' }
                ].map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === path
                        ? 'text-blue-400 bg-gray-800'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="pt-16"
      >
        {children}
      </motion.main>

      <footer className="bg-gray-950">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-blue-400" aria-hidden="true" />
                <span className="ml-2 text-xl font-bold text-white">GlobalSync Technologies</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-md">
                Empowering businesses with innovative AI solutions for a connected and efficient future.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-center">
              &copy; {new Date().getFullYear()} GlobalSync Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default Layout;
