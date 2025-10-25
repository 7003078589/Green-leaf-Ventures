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
              className="h-10 w-10 sm:hidden object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
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

          {/* Mobile Menu - Floating Action Style */}
          <div className="flex items-center lg:hidden">
            {/* Mobile Menu - Floating Action */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300 hover:scale-110 p-4"
                >
                  <Menu className="w-8 h-8 text-gray-700 hover:text-green-600" />
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-white via-green-50/30 to-green-100/50 backdrop-blur-sm border-l border-green-200/50">
              {/* Mobile Menu Header with Enhanced Styling */}
              <div className="flex items-center mb-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-200/50">
                <img 
                  src="/Favicon BG.png" 
                  alt="Green Leaf Ventures" 
                  className="h-10 w-10 object-contain mr-3"
                />
                <div>
                  <span className="text-lg font-bold text-green-700">Green Leaf Ventures</span>
                  <p className="text-xs text-green-600">Real Estate Solutions</p>
                </div>
              </div>
              
              {/* Navigation Items with Enhanced Styling */}
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="group flex items-center p-4 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-green-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-green-200/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-4 group-hover:bg-green-600 transition-colors"></div>
                    <span className="text-lg font-medium text-gray-700 group-hover:text-green-700 transition-colors">
                      {item.name}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Enhanced CTA Section */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg">
                <Button 
                  variant="outline" 
                  className="w-full bg-white/90 hover:bg-white text-green-600 border-white hover:text-green-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={scrollToContact}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Enquire Now
                </Button>
                <p className="text-center text-white/80 text-sm mt-2">
                  Get in touch with our experts
                </p>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;