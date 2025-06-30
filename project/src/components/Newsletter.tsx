import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Never Miss an Insight
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 50,000+ readers who get our best content delivered to their inbox every week. 
            No spam, just pure value.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-center text-white">
              <CheckCircle className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">Thank you for subscribing!</span>
            </div>
          )}

          <div className="mt-8 flex justify-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Weekly insights
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Exclusive content
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              No spam ever
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;