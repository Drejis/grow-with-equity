import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-collaboration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(194_85%_35%/0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(25_95%_60%/0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-background leading-tight">
                Experience Work.{" "}
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Earn Equity.
                </span>{" "}
                Share the Future.
              </h1>
              <p className="text-lg md:text-xl text-background/90 max-w-2xl">
                We connect graduates, interns, and career switchers with emerging startups. 
                Gain real-world experience, get paid, and own a piece of the growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="xl" className="group">
                Find Opportunities
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Hire Talent
              </Button>
              <Button variant="glass" size="xl">
                Partner With Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 text-secondary mx-auto" />
                <div className="text-2xl font-bold text-background">500+</div>
                <div className="text-sm text-background/80">Active Talents</div>
              </div>
              <div className="text-center space-y-2">
                <TrendingUp className="h-8 w-8 text-secondary mx-auto" />
                <div className="text-2xl font-bold text-background">150+</div>
                <div className="text-sm text-background/80">Startup Partners</div>
              </div>
              <div className="text-center space-y-2">
                <GraduationCap className="h-8 w-8 text-secondary mx-auto" />
                <div className="text-2xl font-bold text-background">50+</div>
                <div className="text-sm text-background/80">Educational Partners</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img 
                src={heroImage} 
                alt="Diverse team of young professionals collaborating in a modern startup environment"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary/20" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-gradient-card rounded-xl p-4 shadow-card border border-border">
              <div className="text-sm font-semibold text-foreground">Marketing Intern</div>
              <div className="text-xs text-muted-foreground">$200 stipend + 0.3% equity</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-card rounded-xl p-4 shadow-card border border-border">
              <div className="text-sm font-semibold text-foreground">Frontend Dev</div>
              <div className="text-xs text-muted-foreground">$500 stipend + 0.5% equity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;