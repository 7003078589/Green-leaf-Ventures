import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, MapPin, Users, Shield } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "15+ years in real estate",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Priya Sharma",
      role: "Head of Acquisitions",
      experience: "12+ years in land procurement",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Amit Patel",
      role: "Legal Advisor",
      experience: "10+ years in property law",
      image: "/api/placeholder/150/150"
    }
  ];

  const credentials = [
    "RERA Registered Real Estate Agent",
    "ISO 9001:2015 Certified",
    "Member of Builders Association",
    "Licensed Property Consultant",
    "Approved Land Bank Partner"
  ];

  const serviceAreas = [
    "Bangalore Urban",
    "Bangalore Rural", 
    "Tumkur",
    "Chikkaballapur",
    "Kolar",
    "Ramanagara"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-background to-muted/20">
          <div className="container-max">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                About Us
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Building Trust Through
                <span className="gradient-text block">Transparency</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                With over a decade of experience, we've built our reputation on honest dealings, thorough due diligence, and successful outcomes for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To simplify real estate transactions by providing end-to-end solutions with complete transparency, 
                  thorough due diligence, and unwavering commitment to our clients' success.
                </p>
                <p className="text-muted-foreground mb-8">
                  We believe that buying or selling land shouldn't be complicated. Our systematic approach removes 
                  the guesswork and stress from real estate transactions, allowing you to make informed decisions 
                  with confidence.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Properties Transacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">₹200Cr+</div>
                    <div className="text-sm text-muted-foreground">Value Facilitated</div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl p-8 h-80 overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
                  }}
                ></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80"></div>
                <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-sm text-white/90 leading-relaxed max-w-xs">
                    To become Karnataka's most trusted real estate partner, transforming land acquisition into seamless success stories for every client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the visionaries behind Green Leaf Ventures Realty, bringing decades of combined experience in real estate.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Partner 1 */}
              <Card className="text-center overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                      src="/src/assets/WhatsApp Image 2025-10-23 at 3.31.23 PM.jpeg" 
                      alt="Partner 1"
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      style={{ objectPosition: 'center 30%' }}
                      onError={(e) => {
                        e.currentTarget.src = '/src/assets/hero-land.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-xl mb-1">Sujith MS</h3>
                      <p className="text-sm opacity-90">Co-Founder & Managing Partner</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      With over 15 years in real estate development, brings deep expertise in land acquisition and regulatory compliance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Partner 2 */}
              <Card className="text-center overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                      src="/src/assets/WhatsApp Image 2025-10-23 at 3.31.46 PM.jpeg" 
                      alt="Partner 2"
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      style={{ objectPosition: 'center 20%' }}
                      onError={(e) => {
                        e.currentTarget.src = '/src/assets/hero-land.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-xl mb-1">Mahesh BS</h3>
                      <p className="text-sm opacity-90">Co-Founder & Operations Director</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Specializes in commercial real estate and has successfully executed over 200 land transactions across Karnataka.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to delivering exceptional results for every client.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials & Service Areas */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Credentials */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold">Credentials & Compliance</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We maintain the highest standards of professionalism and regulatory compliance.
                </p>
                <ul className="space-y-3">
                  {credentials.map((credential, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold">Service Footprint</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We serve key districts around Bangalore with deep local market knowledge.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-3 text-center text-sm">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                The principles that guide every interaction and transaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3">Transparency</h3>
                <p className="opacity-90">Clear communication and honest dealings in every transaction.</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3">Integrity</h3>
                <p className="opacity-90">Ethical practices and unwavering commitment to doing what's right.</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3">Excellence</h3>
                <p className="opacity-90">Continuous improvement and exceptional service delivery.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;