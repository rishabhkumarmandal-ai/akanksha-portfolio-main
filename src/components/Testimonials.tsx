import React, { useState, useEffect } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rishabh Kumar Mandal',
      role: 'AI Developer & Researcher',
      avatar: "/lovable-uploads/rishabh.jpeg",
      content: 'Akanksha is a best Teammate and great presenter i have even seen. Her ability to communicate with people always gives us upper hands in Hacakthon',
      rating: 5
    },
    
  
    {
      name: 'Mr. Pravesh Chauhan',
      role: 'Physics Professor',
      avatar: "/lovable-uploads/papa.jpeg",
      content: 'Her research methodology is exemplary, and her ability to communicate complex findings to diverse audiences is remarkable. A true thought leader.',
      rating: 5
    }

    {
      name: 'Mrs. Raushni Chauhan',
      role: 'Chemistry Professor',
      avatar: "/lovable-uploads/mom.jpeg",
      content: 'Eventhough having lot of responsibilities, she always balances time for family, profession and self development, she is always been a examplary figure for family',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-hibiscus-900/30 to-slate-900">
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-20 left-10 text-hibiscus-300/30 animate-sparkle" size={20} />
        <Star className="absolute top-40 right-20 text-hibiscus-400/30 animate-sparkle animation-delay-1000" size={24} />
        <Star className="absolute bottom-32 left-20 text-hibiscus-500/30 animate-sparkle animation-delay-500" size={18} />
        <Star className="absolute bottom-20 right-10 text-hibiscus-400/30 animate-sparkle animation-delay-1500" size={22} />
        <Heart className="absolute top-1/2 left-1/4 text-hibiscus-200/20 animate-heart-pulse" size={16} />
        <Heart className="absolute top-1/3 right-1/4 text-hibiscus-300/20 animate-heart-pulse animation-delay-1000" size={18} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-hibiscus-400 to-hibiscus-600 bg-clip-text text-transparent">What People Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Testimonials from colleagues, collaborators, and those touched by my work 
            in wellness technology and research.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-slate-800/60 border-hibiscus-500/30 backdrop-blur-sm p-8 text-center relative overflow-hidden">
                    {/* Soft Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-hibiscus-500/20 to-hibiscus-600/20 rounded-lg blur opacity-30" />
                    
                    <div className="relative">
                      {/* Avatar with Heart Shape Effect */}
                      <div className="relative mx-auto w-24 h-24 mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-hibiscus-500 to-hibiscus-600 rounded-full animate-pulse" />
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="relative w-full h-full object-cover rounded-full border-4 border-white/20"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-hibiscus-500 to-hibiscus-600 rounded-full flex items-center justify-center">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-hibiscus-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author Info */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                        <p className="text-hibiscus-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-slate-800/80 border-hibiscus-500/50 text-hibiscus-300 hover:bg-hibiscus-900/50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-slate-800/80 border-hibiscus-500/50 text-hibiscus-300 hover:bg-hibiscus-900/50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-hibiscus-500 scale-125' 
                    : 'bg-slate-600 hover:bg-hibiscus-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
