import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  
  BookOpen, 
  Clock, 
  Eye, 
  Heart, 
  TrendingUp, 
  Settings, 
  Bell, 
  Calendar,
  Award,
  Target,
  BarChart3,
  Plus,
  Search,
  Filter,
  ChevronRight,
  Bookmark,
  Share2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DashboardPage:React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useAuth()

  console.log(user)

  // Mock reading statistics
  const stats = {
    articlesRead: 47,
    readingTime: 1240, // minutes
    streak: 12, // days
    bookmarks: 23,
    categories: 8,
    achievements: 5
  };

  // Mock recent activity
  const recentActivity = [
    {
      id: 1,
      type: 'read',
      title: 'The Future of Remote Work: Trends Shaping 2024',
      category: 'Technology',
      time: '2 hours ago',
      readTime: 8
    },
    {
      id: 2,
      type: 'bookmark',
      title: 'Building Sustainable Business Models',
      category: 'Business',
      time: '1 day ago',
      readTime: 6
    },
    {
      id: 3,
      type: 'read',
      title: 'The Psychology of Decision Making',
      category: 'Wellness',
      time: '2 days ago',
      readTime: 7
    }
  ];

  // Mock recommended articles
  const recommendations = [
    {
      id: 1,
      title: 'AI in Healthcare: Revolutionary Changes Ahead',
      excerpt: 'Discover how artificial intelligence is transforming medical diagnosis and treatment.',
      category: 'Technology',
      readTime: 9,
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Mindful Leadership in Crisis Management',
      excerpt: 'Learn how mindfulness practices can improve leadership during challenging times.',
      category: 'Business',
      readTime: 6,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const formatReadingTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={`${user.firstName.charAt(0)}`}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-indigo-100"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back, {user.firstName}!
                </h1>
                <p className="text-gray-600 mb-2">
                  Ready to discover new insights today?
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Member since {new Date(user.createdAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <Link
                to="/settings"
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <Settings className="h-5 w-5 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'reading', label: 'Reading List', icon: BookOpen },
                { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
                { id: 'activity', label: 'Activity', icon: TrendingUp }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stats.articlesRead}</div>
                <div className="text-sm text-gray-600">Articles Read</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{formatReadingTime(stats.readingTime)}</div>
                <div className="text-sm text-gray-600">Reading Time</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stats.streak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Bookmark className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stats.bookmarks}</div>
                <div className="text-sm text-gray-600">Bookmarks</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stats.categories}</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stats.achievements}</div>
                <div className="text-sm text-gray-600">Achievements</div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                    <Link
                      to="/activity"
                      className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center"
                    >
                      View all
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          activity.type === 'read' ? 'bg-blue-100' : 'bg-green-100'
                        }`}>
                          {activity.type === 'read' ? (
                            <Eye className={`h-5 w-5 ${activity.type === 'read' ? 'text-blue-600' : 'text-green-600'}`} />
                          ) : (
                            <Bookmark className="h-5 w-5 text-green-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{activity.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <span>{activity.category}</span>
                            <span>•</span>
                            <span>{activity.readTime} min read</span>
                            <span>•</span>
                            <span>{activity.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Recommended</h2>
                    <Link
                      to="/blog"
                      className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center"
                    >
                      More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  <div className="space-y-6">
                    {recommendations.map((article) => (
                      <div key={article.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg mb-3">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{article.readTime} min read</span>
                          <div className="flex items-center space-x-2">
                            <button className="hover:text-indigo-600 transition-colors duration-200">
                              <Bookmark className="h-4 w-4" />
                            </button>
                            <button className="hover:text-indigo-600 transition-colors duration-200">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold mb-2">Continue Your Learning Journey</h2>
                  <p className="text-indigo-100">
                    Discover new articles tailored to your interests and reading habits.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    to="/blog"
                    className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Explore Articles
                  </Link>
                  <Link
                    to="/categories"
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 flex items-center"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Browse Topics
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reading List Tab */}
        {activeTab === 'reading' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Reading List</h3>
              <p className="text-gray-600 mb-6">Save articles to read later and track your progress</p>
              <Link
                to="/blog"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Articles
              </Link>
            </div>
          </div>
        )}

        {/* Bookmarks Tab */}
        {activeTab === 'bookmarks' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center py-12">
              <Bookmark className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Bookmarks</h3>
              <p className="text-gray-600 mb-6">Quick access to your favorite articles</p>
              <Link
                to="/blog"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center"
              >
                <Search className="h-4 w-4 mr-2" />
                Discover Content
              </Link>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Activity Timeline</h3>
              <p className="text-gray-600 mb-6">Track your reading journey and achievements</p>
              <div className="text-sm text-gray-500">
                Start reading articles to see your activity here
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;