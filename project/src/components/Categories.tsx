import React from 'react';
import { Briefcase, Code, Heart, Globe, Lightbulb, TrendingUp } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: "Technology",
      description: "Latest trends in tech, AI, and digital innovation",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      count: 125
    },
    {
      name: "Business",
      description: "Entrepreneurship, strategy, and market insights",
      icon: Briefcase,
      color: "from-green-500 to-green-600",
      count: 98
    },
    {
      name: "Wellness",
      description: "Mental health, productivity, and life balance",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      count: 76
    },
    {
      name: "Culture",
      description: "Society, trends, and global perspectives",
      icon: Globe,
      color: "from-purple-500 to-purple-600",
      count: 54
    },
    {
      name: "Innovation",
      description: "Creative thinking and breakthrough ideas",
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600",
      count: 43
    },
    {
      name: "Finance",
      description: "Investment strategies and market analysis",
      icon: TrendingUp,
      color: "from-indigo-500 to-indigo-600",
      count: 67
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive deep into topics that interest you most
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">{category.count} articles</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;