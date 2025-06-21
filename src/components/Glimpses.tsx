import React from 'react';
import { Star, Heart, Award, FileText, Medal, Camera } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Glimpses = () => {
  const achievements = [
    {
      id: 1,
      title: "National Level Hacakthon",
      category: "Achievement",
      description: "Winner in PromptX National level Devbhoomi Hackathon at Dehradun",
      image: "/lovable-uploads/dbuu.jpg",
      date: "2025",
      icon: Award
    },
    {
      id: 2,
      title: "National Level Ideathon",
      category: "Achievement",
      description: "Winner in Research and Patent Awards for Groundbreaking patent research on water treatment",
      image: "/lovable-uploads/graphic.jpg",
      date: "2025",
      icon: FileText
    },
    {
      id: 3,
      title: "University level Hackathon",
      category: "Speaking",
      description: "Winning Prize for Grounbreaking Research and discussion on Blockchain",
      image: "/lovable-uploads/tech.jpg",
      date: "2024",
      icon: Star
    },
    {
      id: 4,
      title: "Technical Fest",
      category: "",
      description: "Winning 5+ Awards and Prizes in a single Day for Outstanding Performance ",
      image: "/lovable-uploads/4000.jpeg",
      date: "2024",
      icon: Medal
    },
    {
      id: 5,
      title: "Yoga Enthusisast",
      category: "",
      description: "Yoga, Ayurveda With Technology is my Favorite Thing Ever",
      image: "/lovable-uploads/yoga.jpg",
      date: "2018-Still",
      icon: Star
    },
    {
      id: 6,
      title: "Youth4Future",
      category: "Achievement",
      description: "Compete with Enterprenuers and Buisness Startups and Won by leading my Great Team",
      image: "/lovable-uploads/7000.jpg",
      date: "2023",
      icon: Heart
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Achievement: 'from-hibiscus-400 to-hibiscus-600',
      Publication: 'from-hibiscus-500 to-hibiscus-700',
      Speaking: 'from-hibiscus-600 to-hibiscus-500',
      Patent: 'from-hibiscus-700 to-hibiscus-500'
    };
    return colors[category as keyof typeof colors] || colors.Achievement;
  };

  return (
    <section id="glimpses" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hibiscus-50 via-hibiscus-100 to-hibiscus-50" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-20 left-20 text-hibiscus-300/30 animate-sparkle" size={24} />
        <Heart className="absolute top-40 right-32 text-hibiscus-400/30 animate-heart-pulse" size={20} />
        <Award className="absolute bottom-32 left-16 text-hibiscus-500/30 animate-float" size={28} />
        <Camera className="absolute bottom-20 right-20 text-hibiscus-600/30 animate-sparkle animation-delay-1000" size={18} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-hibiscus-600 to-hibiscus-800 bg-clip-text text-transparent">Glimpses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating milestones, achievements, and memorable moments from my journey 
            in wellness technology and research.
          </p>
        </div>

        

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const gradientColor = getCategoryColor(achievement.category);
            
            return (
              <Card 
                key={achievement.id}
                className="bg-white/80 backdrop-blur-sm border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${gradientColor}`}>
                    {achievement.category}
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-r ${gradientColor} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Date */}
                  <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
                    {achievement.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-hibiscus-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Action Button */}
                  <Button 
                    className={`w-full mt-4 bg-gradient-to-r ${gradientColor} hover:opacity-90 text-white rounded-full`}
                    size="sm"
                  >
                    <Camera className="mr-2 w-4 h-4" />
                    View Details
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-hibiscus-600 to-hibiscus-800 hover:opacity-90 text-white px-8 py-4 rounded-full heart-hover soft-shadow"
          >
            <Star className="mr-2 w-5 h-5" />
            View All Achievements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Glimpses;
