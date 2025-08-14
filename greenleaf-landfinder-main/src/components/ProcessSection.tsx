import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Search, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: 'Source',
      description: 'We identify and evaluate premium land opportunities through market research and network connections.',
      details: ['Market analysis', 'Site evaluation', 'Due diligence'],
      color: 'from-blue-500 to-primary'
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Complete legal verification, documentation, and negotiation to ensure clean title transfers.',
      details: ['Legal verification', 'Price negotiation', 'Documentation'],
      color: 'from-primary to-accent'
    },
    {
      icon: CheckCircle,
      title: 'Close',
      description: 'Seamless transaction management from agreement to final handover with complete transparency.',
      details: ['Transaction management', 'Registration', 'Handover'],
      color: 'from-accent to-green-500'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Three Steps to
            <span className="gradient-text block">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven three-step process ensures every real estate transaction 
            is handled with precision, transparency, and your best interests in mind.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center group">
                    {/* Step Number */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow between steps - positioned to the right of each step except the last */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[60px] -right-6 xl:-right-8 items-center justify-center z-20">
                      <div className="bg-white rounded-full p-2 shadow-md border border-muted">
                        <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your real estate needs and create a customized solution that works for you.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;