import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Ruler, IndianRupee, Eye, Calendar } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Premium Commercial Plot',
      location: 'Electronic City, Bangalore',
      area: '2.5 Acres',
      price: '₹15 Cr',
      pricePerSqft: '₹5,500/sqft',
      status: 'Available',
      image: property1,
      zoning: 'Commercial',
      features: ['Highway frontage', 'Metro proximity', 'IT hub location'],
      survey: 'Survey No. 45/2'
    },
    {
      id: 2,
      title: 'Residential Development Land',
      location: 'Sarjapur Road, Bangalore',
      area: '5 Acres',
      price: '₹25 Cr',
      pricePerSqft: '₹4,200/sqft',
      status: 'Under Offer',
      image: property1,
      zoning: 'Residential',
      features: ['Lake view', 'Approved layout', 'BMRDA approved'],
      survey: 'Survey No. 67/1'
    },
    {
      id: 3,
      title: 'Industrial Plot',
      location: 'Hosur Road, Bangalore',
      area: '10 Acres',
      price: '₹40 Cr',
      pricePerSqft: '₹3,800/sqft',
      status: 'Available',
      image: property1,
      zoning: 'Industrial',
      features: ['Railway connectivity', 'Power infrastructure', 'Logistics hub'],
      survey: 'Survey No. 23/4'
    },
    {
      id: 4,
      title: 'Mixed-Use Development',
      location: 'Whitefield, Bangalore',
      area: '3.2 Acres',
      price: '₹22 Cr',
      pricePerSqft: '₹6,200/sqft',
      status: 'Available',
      image: property1,
      zoning: 'Mixed-Use',
      features: ['Tech park proximity', 'Metro planned', 'High FSI'],
      survey: 'Survey No. 89/3'
    },
    {
      id: 5,
      title: 'Agricultural Land Conversion',
      location: 'Kanakapura Road, Bangalore',
      area: '8 Acres',
      price: '₹12 Cr',
      pricePerSqft: '₹1,800/sqft',
      status: 'Available',
      image: property1,
      zoning: 'Convertible',
      features: ['Conversion potential', 'Airport proximity', 'Nature views'],
      survey: 'Survey No. 156/2'
    },
    {
      id: 6,
      title: 'Premium Villa Plot',
      location: 'North Bangalore',
      area: '1.5 Acres',
      price: '₹8 Cr',
      pricePerSqft: '₹7,500/sqft',
      status: 'Sold',
      image: property1,
      zoning: 'Residential',
      features: ['Gated community', 'Club facilities', 'Premium location'],
      survey: 'Survey No. 34/1'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Offer':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Sold':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <section id="properties" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Featured Properties
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Premium Land
            <span className="gradient-text block">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover carefully curated land parcels with verified titles, 
            strategic locations, and exceptional investment potential.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="property-card border-0 bg-card overflow-hidden">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getStatusColor(property.status)} border`}>
                    {property.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-0">
                    {property.zoning}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-accent" />
                    <div>
                      <div className="text-sm font-semibold">{property.area}</div>
                      <div className="text-xs text-muted-foreground">Total Area</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-accent" />
                    <div>
                      <div className="text-sm font-semibold">{property.price}</div>
                      <div className="text-xs text-muted-foreground">{property.pricePerSqft}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {property.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {property.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{property.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mb-4">
                  {property.survey}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Enquire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;