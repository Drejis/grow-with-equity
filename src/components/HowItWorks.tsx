import { Card } from "@/components/ui/card";
import { User, Building2, School, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const pathways = [
    {
      icon: User,
      title: "For Talent",
      subtitle: "Graduates, Interns & Career Switchers",
      steps: [
        { step: "1", title: "Create Profile", desc: "Showcase your skills and career goals" },
        { step: "2", title: "Find Projects", desc: "Browse opportunities that match your interests" },
        { step: "3", title: "Earn & Grow", desc: "Get paid while building equity and experience" }
      ],
      color: "primary"
    },
    {
      icon: Building2,
      title: "For Startups",
      subtitle: "Emerging Companies & Scale-ups",
      steps: [
        { step: "1", title: "Post Projects", desc: "Define your needs and compensation structure" },
        { step: "2", title: "Pay Less Upfront", desc: "Offer equity instead of high salaries" },
        { step: "3", title: "Scale with Talent", desc: "Build your team as you grow together" }
      ],
      color: "secondary"
    },
    {
      icon: School,
      title: "For Institutions",
      subtitle: "Schools & Training Centers",
      steps: [
        { step: "1", title: "Enroll Students", desc: "Connect your students with real opportunities" },
        { step: "2", title: "Track Progress", desc: "Monitor student engagement and outcomes" },
        { step: "3", title: "Improve Outcomes", desc: "Enhance employability and career readiness" }
      ],
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            How EquiExperience Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pathways to success - whether you're seeking experience, hiring talent, or educating students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => {
            const IconComponent = pathway.icon;
            return (
              <Card key={index} className="relative p-8 border-border shadow-card hover:shadow-hero transition-all duration-300 bg-gradient-card">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  pathway.color === 'primary' ? 'bg-primary/10 text-primary' :
                  pathway.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                  'bg-accent/10 text-accent-foreground'
                }`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Header */}
                <div className="space-y-2 mb-8">
                  <h3 className="text-xl font-bold font-heading text-foreground">
                    {pathway.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pathway.subtitle}
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-6">
                  {pathway.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        pathway.color === 'primary' ? 'bg-primary text-primary-foreground' :
                        pathway.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                        'bg-accent text-accent-foreground'
                      }`}>
                        {step.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                {index < pathways.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;