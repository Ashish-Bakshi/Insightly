import React from 'react';
import { BookOpen, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold">Insightly</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering minds with insights that matter. Join our community of curious readers 
              exploring the ideas shaping tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">All Articles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Authors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Newsletter</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Wellness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Innovation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Culture</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Write for Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Insightly. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Made with ❤️ for curious minds everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;