import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Award, Users } from 'lucide-react';
import heroLand from '@/assets/hero-land.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    propertiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Counter animation function
  const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toString();
    }, 16);
  };

  // Trigger counter animation when component mounts
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      animateCounter(counter as HTMLElement, target);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroLand} 
          alt="Premium land development by Green Leaf Ventures" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/60"></div>
      </div>

      {/* Hero Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern"></div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Real Estate
            <span className="block text-white">Solutions</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light max-w-3xl mx-auto">
            The green way to real estate success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="btn-accent px-8 py-6 text-lg font-semibold min-w-[200px] h-[60px] flex items-center justify-center"
              onClick={scrollToContact}
            >
              Enquire Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <button 
              type="button"
              className="px-8 py-6 text-lg font-semibold border-2 border-white text-white hover:bg-accent hover:border-accent hover:text-white min-w-[200px] h-[60px] bg-transparent rounded-md transition-all duration-300 flex items-center justify-center group"
              onClick={scrollToProperties}
            >
              Browse Land
              <MapPin className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center group stats-item">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <Award className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300 floating-icon" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                <span className="counter" data-target="50">0</span>+
              </div>
              <div className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">Deals Closed</div>
            </div>
            <div className="text-center group stats-item">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <Users className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300 floating-icon" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                <span className="counter" data-target="200">0</span>+
              </div>
              <div className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">Happy Clients</div>
            </div>
            <div className="text-center group stats-item">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300 floating-icon" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                <span className="counter" data-target="500">0</span>+
              </div>
              <div className="text-sm text-white/80 group-hover:text-white transition-colors duration-300">Acres Sold</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;