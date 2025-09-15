import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, GraduationCap, BookOpen, Users, ArrowRight, TrendingUp } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      category: "Universities",
      icon: GraduationCap,
      partners: [
        "Stanford University",
        "MIT",
        "UC Berkeley",
        "Harvard Business School",
        "NYU Stern"
      ]
    },
    {
      category: "Coding Bootcamps",
      icon: BookOpen,
      partners: [
        "General Assembly",
        "Lambda School",
        "Flatiron School",
        "Hack Reactor",
        "App Academy"
      ]
    },
    {
      category: "Training Centers",
      icon: Users,
      partners: [
        "Skillcrush",
        "Coursera Partners",
        "Udacity Enterprise",
        "edX Professional",
        "LinkedIn Learning"
      ]
    }
  ];

  const stats = [
    { number: "50+", label: "Educational Partners" },
    { number: "10,000+", label: "Students Enrolled" },
    { number: "85%", label: "Job Placement Rate" },
    { number: "200+", label: "Startup Connections" }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Trusted by Leading Institutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with us to provide your students with real-world experience and better career outcomes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-8 border-border shadow-card bg-background">
                <div className="text-center space-y-6">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-foreground">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="p-3 rounded-lg bg-muted hover:bg-accent transition-colors">
                        <div className="text-sm font-medium text-foreground">
                          {partner}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading text-foreground">
                Why Partner with EquiExperience?
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Real Industry Connections</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect students with actual startups and emerging companies
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-secondary/10 flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Improved Outcomes</h4>
                    <p className="text-sm text-muted-foreground">
                      Higher job placement rates and better career preparation
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                    <Users className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Student Success Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      Monitor progress and measure program effectiveness
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="space-y-6">
                <div className="text-lg text-muted-foreground">
                  Ready to enhance your program with real-world experience opportunities?
                </div>
                
                <Button variant="hero" size="xl" className="group">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  Join 50+ institutions already partnering with us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;