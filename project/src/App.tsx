import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedPosts from './components/FeaturedPosts';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedPosts />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;