import React, { useState } from 'react';
import { Heart, Star, Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-hibiscus-900 to-slate-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-20 text-hibiscus-300/20 animate-heart-pulse" size={32} />
        <Star className="absolute top-40 right-32 text-hibiscus-400/20 animate-sparkle animation-delay-1000" size={28} />
        <Send className="absolute bottom-40 left-16 text-hibiscus-500/20 animate-float animation-delay-500" size={30} />
        <Mail className="absolute bottom-20 right-16 text-hibiscus-400/20 animate-sparkle animation-delay-1500" size={26} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-hibiscus-400 to-hibiscus-600 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate, share ideas, or simply connect. I'm always excited to discuss 
            wellness technology, research opportunities, and speaking engagements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/60 border-hibiscus-500/30 backdrop-blur-sm p-8 rounded-2xl animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-hibiscus-500/30 text-white placeholder-gray-400 focus:border-hibiscus-400 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-hibiscus-500/30 text-white placeholder-gray-400 focus:border-hibiscus-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-hibiscus-500/30 text-white placeholder-gray-400 focus:border-hibiscus-400 transition-all duration-300"
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-slate-700/50 border-hibiscus-500/30 text-white placeholder-gray-400 focus:border-hibiscus-400 transition-all duration-300 resize-none"
                  placeholder="Share your thoughts, ideas, or collaboration proposals..."
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-hibiscus-600 to-hibiscus-700 hover:from-hibiscus-700 hover:to-hibiscus-800 text-white py-3 rounded-full heart-hover text-lg font-medium"
              >
                <Heart className="mr-2 w-5 h-5 animate-heart-pulse" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in animation-delay-300">
            {/* Quick Contact */}
            <Card className="bg-slate-800/60 border-hibiscus-500/30 backdrop-blur-sm p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-hibiscus-500 to-hibiscus-600 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-medium">akanksha@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-hibiscus-600 to-hibiscus-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 6396832726</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-hibiscus-700 to-hibiscus-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-medium">Dehradun, India</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="bg-slate-800/60 border-hibiscus-500/30 backdrop-blur-sm p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-hibiscus-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white">GitHub</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-hibiscus-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-hibiscus-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white">Instagram</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                >
                  <Youtube className="w-6 h-6 text-hibiscus-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white">YouTube</span>
                </a>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-hibiscus-600 to-hibiscus-950 border-hibiscus-400/30 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-center">
                <Star className="w-12 h-12 text-hibiscus-400 mx-auto mb-4 animate-sparkle" />
                <h4 className="text-xl font-semibold text-white mb-2">Ready to Collaborate?</h4>
                <p className="text-gray-300 mb-4">
                  Whether it's research, speaking opportunities, or innovative projects, 
                  I'm always open to meaningful connections.
                </p>
                <Button 
                  className="bg-gradient-to-r from-hibiscus-500 to-hibiscus-600 hover:opacity-90 text-white px-6 py-2 rounded-full"
                >
                  Schedule a Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
