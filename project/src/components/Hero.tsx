import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              <TrendingUp className="h-4 w-4 mr-1" />
              Trending Insights
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Insights That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Matter</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover the stories, trends, and ideas shaping tomorrow. Join our community of forward-thinking readers 
            who stay ahead of the curve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 flex items-center space-x-2 transform hover:scale-105">
              <span>Start Reading</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Browse Categories
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">12+</div>
              <div className="text-gray-600">Writers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;