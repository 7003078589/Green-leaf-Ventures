import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, ChevronLeft } from 'lucide-react';

const AppleStyleHeader = () => {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const promoBanners = [
    {
      id: 1,
      title: "New Land Development Projects",
      subtitle: "Premium residential and commercial plots available",
      cta: "Explore Now"
    },
    {
      id: 2,
      title: "Special Investment Opportunities",
      subtitle: "Limited time offers on prime locations",
      cta: "Learn More"
    },
    {
      id: 3,
      title: "Expert Consultation Available",
      subtitle: "Free property evaluation and market insights",
      cta: "Book Consultation"
    }
  ];

  // Auto-rotate promo banners
  useEffect(() => {
    if (isPromoOpen) {
      const interval = setInterval(() => {
        setCurrentPromo((prev) => (prev + 1) % promoBanners.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPromoOpen, promoBanners.length]);

  const nextPromo = () => {
    setCurrentPromo((prev) => (prev + 1) % promoBanners.length);
  };

  const prevPromo = () => {
    setCurrentPromo((prev) => (prev - 1 + promoBanners.length) % promoBanners.length);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      // You can add actual search logic here
    }
  };

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
                className="h-8 w-8 object-contain"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900 hidden sm:block">
                Green Leaf Ventures
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="apple-nav-link text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="/services" className="apple-nav-link text-gray-700 hover:text-gray-900 transition-colors">Services</a>
              <a href="/projects" className="apple-nav-link text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
              <a href="/about" className="apple-nav-link text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="/contact" className="apple-nav-link text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Promo Banner Toggle - Apple style dots */}
              <button
                onClick={() => setIsPromoOpen(!isPromoOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Promotions"
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-700"></div>
                  <div className="w-full h-0.5 bg-gray-700"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <form onSubmit={handleSearch} className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search properties, locations, services..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Apple-style Rotating Promo Banner */}
        {isPromoOpen && (
          <div className="border-t border-gray-200 bg-white promo-slide-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="relative overflow-hidden">
                <div 
                  className="flex promo-banner-slide"
                  style={{ transform: `translateX(-${currentPromo * 100}%)` }}
                >
                  {promoBanners.map((promo, index) => (
                    <div
                      key={promo.id}
                      className="w-full flex-shrink-0 flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {promo.title}
                        </h3>
                        <p className="text-base text-gray-600">
                          {promo.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center space-x-6">
                        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                          {promo.cta}
                        </button>
                        <button
                          onClick={nextPromo}
                          className="w-8 h-8 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {promoBanners.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setCurrentPromo(dotIndex)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        dotIndex === currentPromo ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
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

export default AppleStyleHeader;
