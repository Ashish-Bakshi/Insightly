import React from 'react';
import { BookOpen, Target, Heart, Globe } from 'lucide-react';

const AboutPage:React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Insightly
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to democratize knowledge and inspire curious minds around the world. 
            Through thoughtful content and diverse perspectives, we aim to make complex ideas accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between complex ideas and everyday understanding, making knowledge 
                accessible and actionable for everyone.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Curiosity, integrity, and inclusivity drive everything we do. We believe in the power 
                of diverse voices and perspectives to enrich our understanding.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where knowledge flows freely, where every person has access to insights that 
                can improve their life and understanding of the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Insightly was born from a simple observation: in our information-rich world, we often lack 
              the insights that truly matter. Founded in 2024, we set out to create a platform where 
              thoughtful analysis meets accessible writing, where complex topics are broken down without 
              being dumbed down.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of writers, researchers, and thinkers comes from diverse backgrounds—technology, 
              business, academia, and beyond. What unites us is a shared passion for learning and a 
              commitment to sharing knowledge in ways that inspire action and understanding.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Insightly serves thousands of curious readers who turn to us for perspectives on 
              technology, business, wellness, culture, and innovation. We're not just a blog—we're a 
              community of lifelong learners committed to growing together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">Our impact in the knowledge community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">25+</div>
              <div className="text-gray-600">Topic Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">12+</div>
              <div className="text-gray-600">Expert Writers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The minds behind the insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Editor-in-Chief',
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Technology writer and AI researcher with 8+ years of experience.'
              },
              {
                name: 'Michael Torres',
                role: 'Business Editor',
                image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Business strategist who has helped launch over 50 startups.'
              },
              {
                name: 'Dr. Emma Williams',
                role: 'Wellness Editor',
                image: 'https://images.pexels.com/photos/3746234/pexels-photo-3746234.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Clinical psychologist specializing in cognitive behavioral therapy.'
              },
              {
                name: 'Alex Kumar',
                role: 'Innovation Editor',
                image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300',
                bio: 'Environmental scientist and climate tech advocate.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have a story idea, feedback, or just want to say hello? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Editorial</h3>
              <p className="text-gray-600">editorial@insightly.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnerships</h3>
              <p className="text-gray-600">partnerships@insightly.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">General</h3>
              <p className="text-gray-600">hello@insightly.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;