import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, TrendingUp, ExternalLink } from "lucide-react";

const OpportunitiesShowcase = () => {
  const opportunities = [
    {
      id: 1,
      company: "TechFlow AI",
      role: "Junior Data Scientist",
      location: "San Francisco, CA",
      type: "Hybrid",
      duration: "6 months",
      stipend: "$600/month",
      equity: "0.4%",
      description: "Work on machine learning models for customer behavior prediction and analytics dashboard development.",
      skills: ["Python", "TensorFlow", "SQL", "Analytics"],
      applicants: 23,
      featured: true
    },
    {
      id: 2,
      company: "GreenTech Solutions",
      role: "Marketing Coordinator",
      location: "Remote",
      type: "Part-time",
      duration: "4 months",
      stipend: "$350/month",
      equity: "0.3%",
      description: "Lead social media campaigns and content strategy for sustainable technology products.",
      skills: ["Social Media", "Content Strategy", "Canva", "Analytics"],
      applicants: 18,
      featured: false
    },
    {
      id: 3,
      company: "FinanceFlow",
      role: "Frontend Developer",
      location: "New York, NY",
      type: "Full-time",
      duration: "8 months",
      stipend: "$800/month",
      equity: "0.6%",
      description: "Build responsive web applications using React and TypeScript for financial management tools.",
      skills: ["React", "TypeScript", "CSS", "API Integration"],
      applicants: 31,
      featured: true
    },
    {
      id: 4,
      company: "HealthTech Innovators",
      role: "UX/UI Designer",
      location: "Austin, TX",
      type: "Hybrid",
      duration: "5 months",
      stipend: "$450/month",
      equity: "0.5%",
      description: "Design user interfaces for healthcare applications focusing on patient experience and accessibility.",
      skills: ["Figma", "User Research", "Prototyping", "Healthcare UX"],
      applicants: 15,
      featured: false
    },
    {
      id: 5,
      company: "EduTech Labs",
      role: "Content Strategist",
      location: "Remote",
      type: "Part-time",
      duration: "3 months",
      stipend: "$300/month",
      equity: "0.25%",
      description: "Develop educational content and curriculum for online learning platform targeting professional development.",
      skills: ["Content Writing", "Curriculum Design", "LMS", "Education"],
      applicants: 12,
      featured: false
    },
    {
      id: 6,
      company: "RetailRevolution",
      role: "Business Analyst",
      location: "Chicago, IL",
      type: "Full-time",
      duration: "6 months",
      stipend: "$550/month",
      equity: "0.4%",
      description: "Analyze market trends and consumer behavior to drive product strategy and growth initiatives.",
      skills: ["Excel", "Data Analysis", "Market Research", "SQL"],
      applicants: 27,
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Current Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore real projects from our startup partners. Each opportunity offers both immediate compensation and equity upside.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity) => (
            <Card 
              key={opportunity.id} 
              className={`p-6 border-border shadow-card hover:shadow-hero transition-all duration-300 bg-background group relative ${
                opportunity.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {/* Featured Badge */}
              {opportunity.featured && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-gradient-secondary text-secondary-foreground shadow-soft">
                    Featured
                  </Badge>
                </div>
              )}

              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {opportunity.role}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {opportunity.company}
                  </p>
                </div>

                {/* Location & Type */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {opportunity.location}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {opportunity.type}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {opportunity.description}
                </p>

                {/* Compensation */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Stipend</span>
                    </div>
                    <span className="font-bold text-primary">{opportunity.stipend}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium text-foreground">Equity</span>
                    </div>
                    <span className="font-bold text-secondary">{opportunity.equity}</span>
                  </div>
                </div>

                {/* Duration & Applicants */}
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {opportunity.duration}
                  </div>
                  <div className="text-muted-foreground">
                    {opportunity.applicants} applicants
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Required Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <Button 
                  variant={opportunity.featured ? "hero" : "default"} 
                  className="w-full group"
                >
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Opportunities
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            New opportunities added weekly from our growing network of startup partners
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesShowcase;