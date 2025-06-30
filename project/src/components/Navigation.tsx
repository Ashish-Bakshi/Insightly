import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Insightly</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Home</a>
            <a href="#articles" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Articles</a>
            <a href="#categories" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Categories</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">About</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-200">Home</a>
              <a href="#articles" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-200">Articles</a>
              <a href="#categories" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-200">Categories</a>
              <a href="#about" className="block text-gray-700 hover:text-indigo-600 transition-colors duration-200">About</a>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;