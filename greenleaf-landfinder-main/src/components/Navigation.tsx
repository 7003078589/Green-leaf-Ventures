import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-gray-200' : 'bg-gradient-to-r from-white/90 via-white/80 to-white/70 backdrop-blur-sm border-transparent'
    }`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo - Responsive: Favicon on mobile, Full logo on desktop */}
          <Link to="/" className="flex items-center group">
            {/* Mobile: Show favicon */}
            <img 
              src="/Favicon BG.png" 
              alt="Green Leaf Ventures" 
              className="h-8 w-8 sm:hidden object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
            />
            {/* Desktop: Show full logo */}
            <img 
              src="/lovable-uploads/GVL_LOGO_page-0003.png" 
              alt="Green Leaf Ventures" 
              className="hidden sm:block h-12 w-auto sm:h-16 lg:h-24 object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent hover:scale-105 relative group ${
                  location.pathname === item.href 
                    ? 'text-accent font-semibold' 
                    : 'text-primary hover:text-accent'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.href ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={scrollToContact}
              className="text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              {/* Mobile Menu Header with Favicon */}
              <div className="flex items-center mb-6">
                <img 
                  src="/Favicon BG.png" 
                  alt="Green Leaf Ventures" 
                  className="h-8 w-8 object-contain mr-3"
                />
                <span className="text-lg font-bold text-primary">Green Leaf Ventures</span>
              </div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <div className="pt-4 border-t space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary"
                    onClick={scrollToContact}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Enquire Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;