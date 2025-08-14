import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, FileCheck, TrendingUp, Shield, Clock, Target, Building } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Land',
      subtitle: 'Curated parcels with clean titles and clear access.',
      description: 'We identify and evaluate premium land opportunities with comprehensive due diligence.',
      benefits: ['Clean titles', 'Clear access roads', 'Utility connectivity', 'Zoning verified'],
      outcome: '100% title clarity guaranteed'
    },
    {
      icon: FileCheck,
      title: 'Procurement',
      subtitle: 'Negotiation, diligence, and documentation done right.',
      description: 'End-to-end procurement services handling all legal and administrative requirements.',
      benefits: ['Legal verification', 'Price negotiation', 'Document processing', 'Regulatory compliance'],
      outcome: 'Average 15% cost savings'
    },
    {
      icon: TrendingUp,
      title: 'Sales',
      subtitle: 'Straightforward exits with qualified buyers.',
      description: 'Strategic sales approach connecting properties with the right buyers for optimal returns.',
      benefits: ['Market analysis', 'Buyer qualification', 'Marketing strategy', 'Deal closure'],
      outcome: '90-day average sale time'
    },
    {
      icon: Building,
      title: 'Development',
      subtitle: 'Transforming land potential into sustainable, high-value developments.',
      description: 'Comprehensive development services turning raw land into valuable, sustainable properties.',
      benefits: ['Site planning', 'Infrastructure development', 'Sustainability focus', 'Value optimization'],
      outcome: '30% higher land value creation'
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            End-to-End Real Estate
            <span className="gradient-text block">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We handle every aspect of your real estate journey, from sourcing the perfect parcel 
            to closing successful deals with transparency and expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="property-card border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-3">{service.title}</h3>
                  <p className="text-accent font-semibold text-center mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4 border-t border-border">
                    <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                      <Target className="w-4 h-4" />
                      {service.outcome}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Shield className="w-8 h-8 text-accent mx-auto" />
              <div className="font-semibold">RERA Registered</div>
              <div className="text-sm text-muted-foreground">Compliance Assured</div>
            </div>
            <div className="space-y-2">
              <Clock className="w-8 h-8 text-accent mx-auto" />
              <div className="font-semibold">Quick Turnaround</div>
              <div className="text-sm text-muted-foreground">Fast Deal Closure</div>
            </div>
            <div className="space-y-2">
              <FileCheck className="w-8 h-8 text-accent mx-auto" />
              <div className="font-semibold">Legal Verification</div>
              <div className="text-sm text-muted-foreground">100% Due Diligence</div>
            </div>
            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 text-accent mx-auto" />
              <div className="font-semibold">Market Expertise</div>
              <div className="text-sm text-muted-foreground">Data-Driven Insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;