import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, TrendingUp, MapPin, FileText, Users, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Land Acquisition",
      icon: <MapPin className="w-8 h-8 text-primary" />,
      description: "Curated parcels with clean titles and clear access.",
      outcomes: [
        "Due diligence completed in 7-14 days",
        "Title verification and legal clearance",
        "Zoning compliance confirmation",
        "Infrastructure assessment"
      ],
      risks: [
        "Hidden legal issues",
        "Unclear property boundaries",
        "Zoning violations",
        "Access road disputes"
      ],
      stat: "98% clean title success rate"
    },
    {
      title: "Procurement Services",
      icon: <FileText className="w-8 h-8 text-primary" />,
      description: "Negotiation, diligence, and documentation done right.",
      outcomes: [
        "Price negotiation and deal structuring",
        "Complete documentation support",
        "Regulatory approvals coordination",
        "Transparent process management"
      ],
      risks: [
        "Overpaying for properties",
        "Documentation delays",
        "Regulatory compliance issues",
        "Hidden costs and fees"
      ],
      stat: "Average 15% cost savings"
    },
    {
      title: "Sales & Marketing",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      description: "Straightforward exits with qualified buyers.",
      outcomes: [
        "Targeted buyer identification",
        "Professional marketing materials",
        "Market-competitive pricing",
        "Quick transaction closure"
      ],
      risks: [
        "Extended marketing periods",
        "Unqualified buyer inquiries",
        "Below-market pricing",
        "Transaction failures"
      ],
      stat: "Average 45-day sale cycle"
    },
    {
      title: "Land Development",
      icon: <Building className="w-8 h-8 text-primary" />,
      description: "Transforming land potential into sustainable, high-value developments.",
      outcomes: [
        "Site planning and design optimization",
        "Infrastructure development coordination",
        "Sustainability integration and certification",
        "Value engineering and cost optimization"
      ],
      risks: [
        "Poor site utilization",
        "Infrastructure cost overruns",
        "Environmental compliance issues",
        "Market timing misalignment"
      ],
      stat: "30% average value uplift"
    }
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
                Our Services
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Complete Real Estate
                <span className="gradient-text block">Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From sourcing to closing, we handle every aspect of your land transaction with transparency and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding">
          <div className="container-max">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      {service.icon}
                      <h2 className="text-2xl sm:text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          What We Deliver
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary" />
                          Risks We Remove
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.risks.map((risk, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6 mb-8">
                      <div className="text-2xl font-bold text-primary mb-2">{service.stat}</div>
                      <div className="text-sm text-muted-foreground">Track record</div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          {React.cloneElement(service.icon, { className: "w-10 h-10 text-primary" })}
                        </div>
                        <div className="text-lg font-semibold">{service.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us today to discuss your real estate needs and goals.
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
                  Get a Consultation
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

export default Services;