import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Building2, GraduationCap } from "lucide-react";

const ClosingCTA = () => {
  const ctaPaths = [
    {
      icon: Users,
      title: "For Individuals",
      subtitle: "Graduates, Interns & Career Switchers", 
      description: "Start building your career with real experience and equity ownership",
      buttonText: "Find Opportunities",
      buttonVariant: "hero" as const,
      benefits: ["Real projects", "Cash + equity", "Mentorship", "Portfolio building"]
    },
    {
      icon: Building2,
      title: "For Startups",
      subtitle: "Emerging Companies & Scale-ups",
      description: "Access motivated talent while conserving cash and sharing growth",
      buttonText: "Hire Talent",
      buttonVariant: "cta" as const,
      benefits: ["Reduce hiring costs", "Motivated talent", "Equity alignment", "Flexible terms"]
    },
    {
      icon: GraduationCap,
      title: "For Institutions",
      subtitle: "Schools & Training Centers",
      description: "Enhance student outcomes with real-world experience opportunities",
      buttonText: "Partner With Us",
      buttonVariant: "default" as const,
      benefits: ["Better outcomes", "Industry connections", "Student tracking", "Success metrics"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(194_85%_35%/0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(25_95%_60%/0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-background">
            Ready to Shape Your Future?
          </h2>
          <p className="text-lg md:text-xl text-background/90 max-w-3xl mx-auto">
            Join thousands of ambitious individuals, innovative startups, and forward-thinking institutions 
            building the future of work together.
          </p>
        </div>

        {/* Three-Path CTAs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {ctaPaths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <Card key={index} className="p-8 border-border shadow-hero bg-background/95 backdrop-blur-sm hover:bg-background transition-all duration-300 group">
                <div className="space-y-6 text-center">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-foreground">
                      {path.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {path.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground">
                    {path.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {path.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button variant={path.buttonVariant} size="xl" className="w-full group">
                    {path.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Final Statistics */}
        <div className="text-center space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-background">500+</div>
              <div className="text-sm text-background/80">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-background">150+</div>
              <div className="text-sm text-background/80">Startup Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-background">$2.5M+</div>
              <div className="text-sm text-background/80">Equity Distributed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-background">85%</div>
              <div className="text-sm text-background/80">Success Rate</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 pt-8 border-t border-background/20">
            <p className="text-background/90">
              Questions? We're here to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:hello@equiexperience.com" className="text-background hover:text-secondary transition-colors underline">
                hello@equiexperience.com
              </a>
              <span className="hidden sm:block text-background/60">•</span>
              <a href="tel:+1-555-EQUI-EXP" className="text-background hover:text-secondary transition-colors underline">
                +1 (555) EQUI-EXP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;