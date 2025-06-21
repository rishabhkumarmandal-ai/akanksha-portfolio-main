
import React from 'react';
import { Heart, Star, Book } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-hibiscus-400 via-hibiscus-700 to-hibiscus-800 opacity-75" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-hibiscus-100 to-hibiscus-200 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-hibiscus-100 max-w-3xl mx-auto leading-relaxed">
            Where ancient wisdom meets modern innovation, creating a bridge between 
            tradition and technology, heart and mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-hibiscus-100 mb-4">
                My Unique Journey
              </h3>
              
              <p className="text-lg text-hibiscus-200 leading-relaxed">
                I am a passionate researcher and speaker who believes in the beautiful 
                intersection of <span className="text-hibiscus-100 font-medium">Ayurveda</span>, 
                <span className="text-hibiscus-200 font-medium"> Yoga</span>, and 
                <span className="text-hibiscus-300 font-medium"> Technology</span>. 
                My work focuses on creating wellness solutions that honor ancient wisdom 
                while embracing cutting-edge innovation.
              </p>

              <p className="text-lg text-hibiscus-200 leading-relaxed">
                Through my research and speaking engagements, I explore how traditional 
                healing practices can be enhanced and made accessible through technology, 
                creating a harmonious blend of <em>science and spirituality</em>.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-hibiscus-600/40 backdrop-blur-sm border border-hibiscus-400/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:scale-105">
                <Heart className="w-8 h-8 text-hibiscus-200 mx-auto mb-3 group-hover:animate-heart-pulse" />
                <h4 className="font-semibold text-hibiscus-100 mb-2">Compassion</h4>
                <p className="text-sm text-hibiscus-300">Technology with heart and humanity</p>
              </Card>
              
              <Card className="bg-hibiscus-600/40 backdrop-blur-sm border border-hibiscus-400/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:scale-105">
                <Star className="w-8 h-8 text-hibiscus-200 mx-auto mb-3 group-hover:animate-sparkle" />
                <h4 className="font-semibold text-hibiscus-100 mb-2">Innovation</h4>
                <p className="text-sm text-hibiscus-300">Bridging ancient and modern wisdom</p>
              </Card>
              
              <Card className="bg-hibiscus-600/40 backdrop-blur-sm border border-hibiscus-400/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:scale-105">
                <Book className="w-8 h-8 text-hibiscus-200 mx-auto mb-3 group-hover:animate-float" />
                <h4 className="font-semibold text-hibiscus-100 mb-2">Learning</h4>
                <p className="text-sm text-hibiscus-300">Continuous growth and knowledge sharing</p>
              </Card>
            </div>
          </div>

          {/* Poetic Quote Section */}
          <div className="space-y-8 animate-slide-in">
            <Card className="bg-hibiscus-600/40 backdrop-blur-sm border border-hibiscus-400/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-hibiscus-500/30 to-hibiscus-400/30 rounded-full blur-xl opacity-50" />
              
              <div className="relative">
                <h3 className="text-2xl font-semibold text-hibiscus-100 mb-6 text-center">
                  Poet's Corner
                </h3>
                
                <blockquote className="text-lg text-hibiscus-200 italic leading-relaxed text-center space-y-4">
                  <p>
                    "In the symphony of science and soul,<br />
                    I find my purpose, I find my goal.<br />
                    Where technology meets ancient art,<br />
                    Healing begins, from heart to heart."
                  </p>
                </blockquote>
                
                <div className="text-center mt-6">
                  <cite className="text-hibiscus-300 font-medium">- Akanksha Chauhan</cite>
                </div>
              </div>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-hibiscus-600/40 backdrop-blur-sm border border-hibiscus-400/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <h4 className="text-xl font-semibold text-hibiscus-100 mb-4 text-center">
                Fun Facts About Me
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-hibiscus-200">
                  <Heart className="w-4 h-4 text-hibiscus-300 mr-3 flex-shrink-0" />
                  Started practicing yoga at age 12
                </li>
                <li className="flex items-center text-hibiscus-200">
                  <Star className="w-4 h-4 text-hibiscus-300 mr-3 flex-shrink-0" />
                  Speaks 4 languages fluently
                </li>
                <li className="flex items-center text-hibiscus-200">
                  <Book className="w-4 h-4 text-hibiscus-300 mr-3 flex-shrink-0" />
                  Published researcher in wellness technology
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
