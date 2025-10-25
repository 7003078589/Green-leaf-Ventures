import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, Phone } from 'lucide-react';

const SimpleAppleHeader = () => {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    {
      id: 1,
      title: "Home",
      href: "/"
    },
    {
      id: 2,
      title: "Services",
      href: "/services"
    },
    {
      id: 3,
      title: "Projects",
      href: "/projects"
    },
    {
      id: 4,
      title: "About",
      href: "/about"
    },
    {
      id: 5,
      title: "Contact",
      href: "/contact"
    }
  ];

  // No auto-rotation needed for dropdown menu

  return (
    <>
      {/* Apple-style Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Favicon BG.png" 
                alt="Green Leaf Ventures" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
              <span className="ml-3 text-xl font-semibold text-gray-900 hidden sm:block">
                Green Leaf Ventures
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
              <a href="/projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Search"
              >
                <Search className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>

              {/* Promo Banner Toggle */}
              <button
                onClick={() => setIsPromoOpen(!isPromoOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Promotions"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-700"></div>
                  <div className="w-full h-0.5 bg-gray-700"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 bg-white search-slide-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search properties, locations, services..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Search
                </button>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Apple-style Full Screen White Navigation Overlay */}
        {isPromoOpen && (
          <div className="full-screen-overlay bg-white search-slide-down">
            <div className="w-screen h-screen flex flex-col bg-white">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center">
                  <img 
                    src="/Favicon BG.png" 
                    alt="Green Leaf Ventures" 
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  />
                  <span className="ml-2 text-lg font-semibold" style={{ color: '#22A04F' }}>
                    Green Leaf Ventures
                  </span>
                </div>
                <button
                  onClick={() => setIsPromoOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items - Left Aligned */}
              <div className="flex-1 flex items-start justify-start bg-white px-6 py-8">
                <div className="w-full">
                  <div className="space-y-4">
                    {navigationItems.map((item, index) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className="block text-left text-xl font-medium text-gray-900 hover:text-green-600 transition-all duration-200"
                        onClick={() => setIsPromoOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enquire Now Button - Left Aligned with Same Spacing */}
              <div className="px-6 py-4 border-t border-gray-200 bg-white">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-medium text-lg"
                  onClick={() => setIsPromoOpen(false)}
                >
                  <span className="mr-2">📞</span>
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-14"></div>
    </>
  );
};

export default SimpleAppleHeader;
