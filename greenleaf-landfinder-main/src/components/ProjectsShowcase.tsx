import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, TrendingUp, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Industrial Land Development - Tumkur",
      location: "Tumkur, Karnataka",
      status: 'completed',
      type: 'Industrial',
      area: '50 Acres',
      units: 'Industrial Plots',
      completedDate: 'February 2024',
      description: '50-acre industrial plot with clean title and highway access',
      highlights: ['Clean Title', 'Highway Access', 'Industrial Zoning'],
      image: '/Industrial Land Development - Tumkur.jpg'
    },
    {
      id: 2,
      title: "Residential Plot Acquisition - Sarjapur",
      location: "Sarjapur, Bangalore",
      status: 'completed',
      type: 'Residential',
      area: '25 Acres',
      units: 'Premium Plots',
      completedDate: 'January 2024',
      description: 'Premium residential plots with BMRDA approval',
      highlights: ['BMRDA Approved', 'Premium Location', 'Clean Title'],
      image: '/Residential Plot Acquisition - Sarjapur.jpeg'
    },
    {
      id: 3,
      title: "Agricultural Land Conversion - Kolar",
      location: "Kolar, Karnataka",
      status: 'completed',
      type: 'Agricultural',
      area: '200 Acres',
      units: 'Agricultural Land',
      completedDate: 'December 2023',
      description: '200-acre agricultural land with conversion potential',
      highlights: ['Conversion Potential', 'Large Area', 'Agricultural Zoning'],
      image: '/Agricultural Land Conversion - Kolar.jpg'
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Vision into
            <span className="gradient-text block">Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of completed and ongoing projects that showcase our commitment 
            to sustainable development and innovative design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="property-card border-0 bg-card/50 backdrop-blur-sm overflow-hidden group">
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className={project.status === 'completed' ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'}
                  >
                    {project.status === 'completed' ? (
                      <><CheckCircle className="w-3 h-3 mr-1" /> Completed</>
                    ) : (
                      <><Clock className="w-3 h-3 mr-1" /> Ongoing</>
                    )}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <div className="font-semibold">{project.type}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Area:</span>
                    <div className="font-semibold">{project.area}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Units:</span>
                    <div className="font-semibold">{project.units}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {project.status === 'completed' ? 'Completed:' : 'Expected:'}
                    </span>
                    <div className="font-semibold">
                      {project.status === 'completed' ? project.completedDate : project.expectedCompletion}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    const projectsPage = '/projects';
                    window.location.href = projectsPage;
                  }}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border">
            <h3 className="text-2xl font-bold mb-4">Interested in Our Projects?</h3>
            <p className="text-muted-foreground mb-6">
              Discover more about our completed projects and get updates on our ongoing developments.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Project Updates
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;