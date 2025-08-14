import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, Tag } from 'lucide-react';

const Insights = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding RERA Compliance for Land Purchases",
      slug: "rera-compliance-land-purchases",
      excerpt: "A comprehensive guide to navigating RERA regulations when buying land in Karnataka.",
      author: "Rajesh Kumar",
      date: "2024-02-15",
      readTime: "5 min read",
      tags: ["RERA", "Legal", "Compliance"],
      category: "Legal",
      featured: true
    },
    {
      id: 2,
      title: "Due Diligence Checklist for Agricultural Land",
      slug: "due-diligence-agricultural-land",
      excerpt: "Essential steps to verify before purchasing agricultural property, including conversion possibilities.",
      author: "Priya Sharma",
      date: "2024-02-10",
      readTime: "7 min read",
      tags: ["Due Diligence", "Agricultural", "Checklist"],
      category: "Process"
    },
    {
      id: 3,
      title: "Bangalore Land Markets: Q1 2024 Analysis",
      slug: "bangalore-land-markets-q1-2024",
      excerpt: "Market trends, price movements, and hotspots in Bangalore's land market this quarter.",
      author: "Market Research Team",
      date: "2024-02-05",
      readTime: "8 min read",
      tags: ["Market Analysis", "Bangalore", "Trends"],
      category: "Market Intelligence"
    },
    {
      id: 4,
      title: "Zoning Classifications Explained",
      slug: "zoning-classifications-explained",
      excerpt: "Understanding different land zoning types and their implications for development.",
      author: "Amit Patel",
      date: "2024-01-30",
      readTime: "6 min read",
      tags: ["Zoning", "Development", "Planning"],
      category: "Technical"
    },
    {
      id: 5,
      title: "Investment Strategies for Land Banking",
      slug: "investment-strategies-land-banking",
      excerpt: "How to build a profitable land portfolio with strategic acquisitions and timing.",
      author: "Rajesh Kumar",
      date: "2024-01-25",
      readTime: "9 min read",
      tags: ["Investment", "Strategy", "Portfolio"],
      category: "Investment"
    },
    {
      id: 6,
      title: "Common Pitfalls in Land Transactions",
      slug: "common-pitfalls-land-transactions",
      excerpt: "Avoid these costly mistakes that many buyers make during land purchases.",
      author: "Legal Team",
      date: "2024-01-20",
      readTime: "5 min read",
      tags: ["Mistakes", "Legal", "Tips"],
      category: "Education"
    }
  ];

  const categories = [
    "All Articles",
    "Legal",
    "Process", 
    "Market Intelligence",
    "Technical",
    "Investment",
    "Education"
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-background to-muted/20">
          <div className="container-max">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Insights & Knowledge
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Real Estate
                <span className="gradient-text block">Intelligence</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed with expert insights, market analysis, and practical guides for smart real estate decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="section-padding">
            <div className="container-max">
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <Badge className="mb-4">{featuredArticle.category}</Badge>
                        <div className="text-lg font-semibold">Featured Article</div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredArticle.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
                      <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredArticle.date).toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:flex-1">
                <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {regularArticles.map((article) => (
                    <Card key={article.id} className="hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <div className="text-center">
                          <Tag className="w-8 h-8 text-primary mx-auto mb-2" />
                          <Badge variant="outline">{article.category}</Badge>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {article.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-3 h-3" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(article.date).toLocaleDateString('en-IN', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-80">
                <div className="space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <div key={index} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">Stay Updated</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get the latest market insights and real estate intelligence delivered to your inbox.
                      </p>
                      <div className="space-y-3">
                        <input 
                          type="email" 
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 border rounded-md text-sm"
                        />
                        <button className="w-full bg-primary text-primary-foreground py-2 rounded-md text-sm hover:bg-primary/90 transition-colors">
                          Subscribe
                        </button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Popular Tags */}
                  <div>
                    <h3 className="font-semibold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {["RERA", "Due Diligence", "Market Analysis", "Investment", "Legal", "Zoning", "Bangalore"].map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-max">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Expert Guidance?</h2>
              <p className="text-lg mb-8 opacity-90">
                Our team is here to help you navigate complex real estate decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-md font-medium transition-colors"
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
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insights;