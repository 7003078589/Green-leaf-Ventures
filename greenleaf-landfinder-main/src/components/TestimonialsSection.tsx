import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Real Estate Investor',
      location: 'Bangalore',
      rating: 5,
      text: 'Green Leaf Ventures helped us acquire a prime 5-acre plot in Electronic City. Their due diligence was thorough, and they saved us 20% on the quoted price through expert negotiation.',
      project: '5-acre Commercial Plot'
    },
    {
      name: 'Priya Sharma',
      role: 'Developer',
      location: 'Whitefield',
      rating: 5,
      text: 'Exceptional service from start to finish. They handled all documentation, legal verification, and got us the best market price for our residential project land. Highly recommended!',
      project: 'Residential Development'
    }
  ];

  const certifications = [
    { name: 'RERA Registered', badge: 'RERA/KA/123456' },
    { name: 'Real Estate License', badge: 'REL/2023/001' },
    { name: 'ISO Certified', badge: 'ISO 9001:2015' },
    { name: 'Member CREDAI', badge: 'CREDAI/BLR/456' }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Leading
            <span className="gradient-text block">Investors & Developers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about their experience working with Green Leaf Ventures 
            for their real estate investment and development needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.project}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Compliance */}
        <div className="bg-background rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Licensed & Certified</h3>
            <p className="text-muted-foreground">
              Fully compliant with regulatory requirements and industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                  </div>
                </div>
                <div className="font-semibold text-sm mb-1">{cert.name}</div>
                <div className="text-xs text-muted-foreground">{cert.badge}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Deals Closed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">₹200Cr+</div>
                <div className="text-sm text-muted-foreground">Value Transacted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;