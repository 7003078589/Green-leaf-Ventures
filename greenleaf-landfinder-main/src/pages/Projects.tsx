import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar, TrendingUp, Clock } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Industrial Land Development - Tumkur",
      type: "industrial",
      date: "2024-02-15",
      location: "Tumkur, Karnataka",
      image: "/api/placeholder/400/250",
      summary: "50-acre industrial plot with clean title and highway access",
      outcomes: {
        timeToClose: "21 days",
        valueUnlocked: "₹8.5 Cr",
        clientSavings: "18%"
      },
      status: "completed"
    },
    {
      id: 2,
      title: "Residential Plot Acquisition - Sarjapur",
      type: "residential",
      date: "2024-01-20",
      location: "Sarjapur, Bangalore",
      image: "/api/placeholder/400/250",
      summary: "Premium residential plots with BMRDA approval",
      outcomes: {
        timeToClose: "35 days",
        valueUnlocked: "₹12.2 Cr",
        clientSavings: "22%"
      },
      status: "completed"
    },
    {
      id: 3,
      title: "Agricultural Land Conversion - Kolar",
      type: "agricultural",
      date: "2023-12-10",
      location: "Kolar, Karnataka",
      image: "/api/placeholder/400/250",
      summary: "200-acre agricultural land with conversion potential",
      outcomes: {
        timeToClose: "45 days",
        valueUnlocked: "₹15.8 Cr",
        clientSavings: "25%"
      },
      status: "completed"
    },
    {
      id: 4,
      title: "Commercial Complex Site - Electronic City",
      type: "commercial",
      date: "2023-11-05",
      location: "Electronic City, Bangalore",
      image: "/api/placeholder/400/250",
      summary: "Prime commercial land with IT park development rights",
      outcomes: {
        timeToClose: "28 days",
        valueUnlocked: "₹25.6 Cr",
        clientSavings: "20%"
      },
      status: "completed"
    },
    {
      id: 5,
      title: "Warehouse Development - Hosur Road",
      type: "industrial",
      date: "2023-10-15",
      location: "Hosur Road, Bangalore",
      image: "/api/placeholder/400/250",
      summary: "Large format warehouse development opportunity",
      outcomes: {
        timeToClose: "32 days",
        valueUnlocked: "₹18.4 Cr",
        clientSavings: "15%"
      },
      status: "completed"
    },
    {
      id: 6,
      title: "Layout Development - Devanahalli",
      type: "residential",
      date: "2023-09-20",
      location: "Devanahalli, Bangalore",
      image: "/api/placeholder/400/250",
      summary: "BMRDA approved layout with airport proximity",
      outcomes: {
        timeToClose: "40 days",
        valueUnlocked: "₹22.1 Cr",
        clientSavings: "28%"
      },
      status: "completed"
    }
  ];

  const filterTypes = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'agricultural', label: 'Agricultural' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-background to-muted/20">
          <div className="container-max">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Our Track Record
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Successful
                <span className="gradient-text block">Projects & Deals</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real results from real transactions. See how we've helped clients achieve their real estate goals.
              </p>
            </div>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Deals Closed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹200Cr+</div>
                <div className="text-sm text-muted-foreground">Value Transacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">32</div>
                <div className="text-sm text-muted-foreground">Avg Days to Close</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">21%</div>
                <div className="text-sm text-muted-foreground">Avg Client Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Projects */}
        <section className="section-padding">
          <div className="container-max">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {filterTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={filter === type.value ? "default" : "outline"}
                  onClick={() => setFilter(type.value)}
                  className="text-sm"
                >
                  {type.label}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">{project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project</div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-xs capitalize">
                        {project.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(project.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-6">{project.summary}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          Time to Close
                        </span>
                        <span className="font-semibold">{project.outcomes.timeToClose}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Value Unlocked
                        </span>
                        <span className="font-semibold">{project.outcomes.valueUnlocked}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Client Savings</span>
                        <span className="font-semibold text-accent">{project.outcomes.clientSavings}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready for Your Success Story?</h2>
              <p className="text-lg mb-8 opacity-90">
                Let us help you achieve similar results with your real estate goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;