import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsShowcase from '@/components/ProjectsShowcase';

import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Optimized scroll-based animations with better performance
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smooth animation
          requestAnimationFrame(() => {
            entry.target.classList.add('visible');
          });
        }
      });
    }, observerOptions);

    // Debounce observer for better performance
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => {
      // Add initial styles for better performance
      el.style.willChange = 'transform, opacity';
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      // Clean up will-change property
      fadeElements.forEach((el) => {
        el.style.willChange = 'auto';
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background" style={{ scrollBehavior: 'smooth' }}>
      <Navigation />
      
      <main style={{ 
        scrollBehavior: 'smooth',
        willChange: 'scroll-position'
      }}>
        <HeroSection />
        <div className="fade-in-up">
          <ServicesSection />
        </div>
        <div className="fade-in-up">
          <ProjectsShowcase />
        </div>
        <div className="fade-in-up">
          <TestimonialsSection />
        </div>
        <div className="fade-in-up">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
