
import React, { useState, useEffect } from 'react';
import { Heart, Star, Flower, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Using the uploaded images as background
  const heroImages = [
    "/lovable-uploads/2638d9a6-88f0-4d05-9a4e-9726d531251a.png",
   
    "/lovable-uploads/b9db88d1-0187-40b4-9661-8b8eeeda3a75.png",
    "/lovable-uploads/9d392603-d4a5-497d-9675-4c9e88e15cde.png",
    "/lovable-uploads/7583aa05-605e-46a7-9e3c-29c21166311d.png",
    "/lovable-uploads/0703c3c5-4cc4-427a-965c-9a400c2da77b.png",
    "/lovable-uploads/cf97a1ef-cd4c-4109-a8e3-035df9f931c1.png",
    "/lovable-uploads/36891a94-bb57-4520-b986-72289acefeb8.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Images - More Visible */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-80' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-hibiscus-900/20 to-slate-900/40" />
      </div>
      
      {/* Floating Flowers Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Flower className="absolute top-20 left-20 text-hibiscus-300 animate-float" size={24} />
        <Star className="absolute top-40 right-32 text-hibiscus-400 animate-sparkle" size={20} />
        <Heart className="absolute bottom-32 left-16 text-hibiscus-500 animate-heart-pulse" size={28} />
        <Flower className="absolute bottom-20 right-20 text-hibiscus-400 animate-float animation-delay-1000" size={18} />
        <Star className="absolute top-1/2 left-1/4 text-hibiscus-300 animate-sparkle animation-delay-500" size={16} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-hibiscus-400 via-hibiscus-500 to-hibiscus-600 bg-clip-text text-transparent">Akanksha</span>
              <br />
              <span className="text-white">Chauhan</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 font-light">
              Blending <span className="text-hibiscus-400 font-medium">Ayurveda</span>, 
              <span className="text-hibiscus-500 font-medium"> Technology</span>, and 
              <span className="text-hibiscus-300 font-medium"> Wellness</span>
            </p>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            A passionate public speaker and wellness-tech researcher, bridging the wisdom 
            of ancient traditions with the innovation of modern technology. Creating harmony 
            between <em>science and soul</em>, <em>logic and love</em>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-hibiscus-500 to-hibiscus-600 hover:from-hibiscus-600 hover:to-hibiscus-700 text-white px-8 py-4 rounded-full heart-hover soft-shadow"
            >
              <Heart className="mr-2" size={20} />
              Explore My Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-hibiscus-500 to-hibiscus-950 hover:from-hibiscus-600 hover:to-hibiscus-950 text-white px-8 py-4 rounded-full heart-hover soft-shadow"
            >
              <Star className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start space-x-4 pt-4">
            <a href="#" className="w-12 h-12 bg-hibiscus-600/80 hover:bg-hibiscus-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-hibiscus-500/80 hover:bg-hibiscus-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-hibiscus-400/80 hover:bg-hibiscus-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-hibiscus-600/80 hover:bg-hibiscus-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-hibiscus-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-hibiscus-500">100+</div>
              <div className="text-sm text-gray-400">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-hibiscus-300">20+</div>
              <div className="text-sm text-gray-400">Research Projects</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center lg:justify-end animate-slide-in">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-hibiscus-500/30 via-hibiscus-400/30 to-hibiscus-500/30 rounded-full blur-xl animate-pulse" />
            
            {/* Main Image Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 soft-shadow">
              <img
                src={heroImages[currentImageIndex]}
                alt="Akanksha Chauhan"
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-hibiscus-900/40 via-transparent to-hibiscus-900/40" />
            </div>

            {/* Floating Elements around image */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-hibiscus-500 to-hibiscus-600 rounded-full flex items-center justify-center floating-element">
              <Heart className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-hibiscus-600 to-hibiscus-500 rounded-full flex items-center justify-center floating-element animation-delay-500">
              <Flower className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hibiscus-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hibiscus-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
