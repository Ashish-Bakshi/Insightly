import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

const FeaturedPosts = () => {
  const featuredPost = {
    title: "The Future of Remote Work: Trends Shaping 2024",
    excerpt: "Explore how remote work continues to evolve and the technologies driving this transformation.",
    author: "Sarah Chen",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Technology"
  };

  const posts = [
    {
      title: "Building Sustainable Business Models",
      excerpt: "How companies are adapting to create lasting value while maintaining profitability.",
      author: "Michael Torres",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Business"
    },
    {
      title: "The Psychology of Decision Making",
      excerpt: "Understanding cognitive biases and how they influence our daily choices.",
      author: "Dr. Emma Williams",
      readTime: "7 min read",
      date: "Dec 10, 2024",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Psychology"
    },
    {
      title: "Climate Tech Innovations to Watch",
      excerpt: "Breakthrough technologies that could reshape our approach to environmental challenges.",
      author: "Alex Kumar",
      readTime: "9 min read",
      date: "Dec 8, 2024",
      image: "https://images.pexels.com/photos/3746234/pexels-photo-3746234.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Environment"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated content from our most insightful writers and thought leaders
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <img 
                  className="h-64 md:h-full w-full object-cover" 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-indigo-600 font-bold ml-3">Featured</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <button className="group flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  src={post.image} 
                  alt={post.title}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;