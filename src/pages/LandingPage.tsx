import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import CountUp from "../components/CountUp";
import BlogCard from "../components/BlogCard";
import FeaturedPostCard from "../components/FeaturedPostCard";
import {
  Briefcase,
  Code,
  Heart,
  Globe,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [done, setDone] = useState<boolean>(false);
  const categories = [
    {
      name: "Technology",
      description: "Latest trends in tech, AI, and digital innovation",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      count: 125,
    },
    {
      name: "Business",
      description: "Entrepreneurship, strategy, and market insights",
      icon: Briefcase,
      color: "from-green-500 to-green-600",
      count: 98,
    },
    {
      name: "Wellness",
      description: "Mental health, productivity, and life balance",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      count: 76,
    },
    {
      name: "Culture",
      description: "Society, trends, and global perspectives",
      icon: Globe,
      color: "from-purple-500 to-purple-600",
      count: 54,
    },
    {
      name: "Innovation",
      description: "Creative thinking and breakthrough ideas",
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600",
      count: 43,
    },
    {
      name: "Finance",
      description: "Investment strategies and market analysis",
      icon: TrendingUp,
      color: "from-indigo-500 to-indigo-600",
      count: 67,
    },
  ];

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleOnclickCategories = () => {
    const categoriesSection = document.getElementById("categories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="bg-gray-50 pt-16 px-4 md:px-0">
        <div className="text-center pt-5">
          <div className="pb-4">
            <div className="inline-flex items-center text-indigo-600 border rounded-full bg-indigo-50 py-1 px-3 text-sm font-medium">
              <TrendingUp className="h-4 w-4 mr-1" />
              Trending Insights
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mt-2">
              Insights That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Matter
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-2 pt-5">
              Discover the stories, trends, and ideas shaping tomorrow. Join{" "}
              <br className="hidden md:block" /> our community of
              forward-thinking readers who stay ahead of the curve.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-10">
            <Link to="/articles">
            <button className="bg-indigo-600 py-4 px-8 rounded-lg inline-flex items-center text-white font-semibold hover:scale-105 transition cursor-pointer">
              <span>Start Reading</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            </Link>
            <button
              className="py-4 px-8 border-none hover:bg-gray-100 rounded-lg font-semibold text-gray-700 cursor-pointer"
              onClick={() => handleOnclickCategories()}
            >
              Browse Categories
            </button>
          </div>
          <div className="pt-20 pb-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="text-3xl font-bold text-gray-900">
              <CountUp
                from={300}
                to={500}
                separator=","
                direction="up"
                duration={0.5}
                onEnd={() => setDone(true)}
              />
              {done && <span>+</span>}
              <div className="text-gray-600 text-sm">Articles</div>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                onEnd={() => setDone(true)}
              />
              {done && <span>K+</span>}
              <div className="text-gray-600 text-sm">Readers</div>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              <CountUp
                from={0}
                to={25}
                separator=","
                direction="up"
                duration={1}
                onEnd={() => setDone(true)}
              />
              {done && <span>+</span>}
              <div className="text-gray-600 text-sm">Categories</div>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              <CountUp
                from={0}
                to={12}
                separator=","
                direction="up"
                duration={1}
                onEnd={() => setDone(true)}
              />
              {done && <span>+</span>}
              <div className="text-gray-600 text-sm">Writers</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center py-20 px-4 md:px-0">
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold">
              Featured Articles
            </span>
            <span className="text-lg md:text-xl text-gray-600">
              Curated content from our most insightful writers and thought
              leaders
            </span>
          </div>
          <div className="py-10">
            <FeaturedPostCard
              image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
              tags={["Technology", "Innovation"]}
              title="The Future of AI: Transforming Industries"
              description="Explore how artificial intelligence is revolutionizing various sectors and what it means for the future."
              author="Jane Smith"
              readTime="8 min"
              link="#"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mt-20 max-w-7xl mx-auto px-4 lg:px-0">
              <BlogCard
                image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                tag="Technology"
                title="Climate Tech Innovations to Watch"
                description="Explore the latest advancements in climate technology that are shaping a sustainable future."
                author="John Doe"
                readTime="5 min"
              />
              <BlogCard
                image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                tag="Technology"
                title="Climate Tech Innovations to Watch"
                description="Explore the latest advancements in climate technology that are shaping a sustainable future."
                author="John Doe"
                readTime="5 min"
              />
              <BlogCard
                image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                tag="Technology"
                title="Climate Tech Innovations to Watch"
                description="Explore the latest advancements in climate technology that are shaping a sustainable future."
                author="John Doe"
                readTime="5 min"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 bg-gray-50 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Dive deep into topics that interest you most
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${category.color}`}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {category.count} articles
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20 w-full bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="w-full max-w-4xl mx-auto px-0 sm:px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <Mail className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Never Miss an Insight
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 50,000+ readers who get our best content delivered to their
              inbox every week. No spam, just pure value.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-indigo-600 cursor-pointer px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center justify-center text-white">
                <CheckCircle className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">
                  Thank you for subscribing!
                </span>
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
    </>
  );
};

export default LandingPage;
