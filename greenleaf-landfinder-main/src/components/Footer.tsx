import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Properties', href: '/properties' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/insights' }
  ];

  const services = [
    { name: 'Land Acquisition', href: '/services#land' },
    { name: 'Property Procurement', href: '/services#procurement' },
    { name: 'Sales & Marketing', href: '/services#sales' },
    { name: 'Legal Verification', href: '/services#legal' },
    { name: 'Investment Advisory', href: '/services#advisory' },
    { name: 'Project Management', href: '/services#management' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GLV</span>
              </div>
              <div>
                <div className="font-bold text-lg">Green Leaf Ventures</div>
                <div className="text-sm text-white/80">Realty</div>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              We source, secure & sell land — end to end. Your trusted partner 
              for transparent real estate solutions with proven results.
            </p>

            <div className="flex flex-col space-y-3">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary justify-start"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Phone className="w-4 h-4 mr-3" />
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Office Location</div>
                  <div className="text-sm text-white/80">Bangalore, Karnataka, India</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Phone</div>
                  <div className="text-sm text-white/80">+91 XXXXX XXXXX</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-white/80">sales@greenleafventures.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Business Hours</div>
                  <div className="text-sm text-white/80">Mon-Sat: 9AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>RERA Registered</span>
              </div>
              <div>REL License: REL/2023/001</div>
              <div>ISO 9001:2015 Certified</div>
            </div>

            <div className="text-sm text-white/80 text-center md:text-right">
              <div>© {currentYear} Green Leaf Ventures Realty. All rights reserved.</div>
              <div className="mt-1">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                {' • '}
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;