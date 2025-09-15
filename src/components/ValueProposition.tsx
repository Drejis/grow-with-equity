import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Target, Zap, GraduationCap } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      category: "For Individuals",
      icon: Users,
      color: "primary",
      items: [
        {
          icon: TrendingUp,
          title: "Real Experience",
          description: "Work on actual projects that matter to growing companies"
        },
        {
          icon: DollarSign,
          title: "Dual Income",
          description: "Earn immediate cash stipends plus equity for future growth"
        },
        {
          icon: Target,
          title: "Career Growth",
          description: "Build portfolio, network, and skills with mentor guidance"
        }
      ]
    },
    {
      category: "For Startups",
      icon: Zap,
      color: "secondary",
      items: [
        {
          icon: DollarSign,
          title: "Reduce Costs",
          description: "Pay less upfront while offering valuable equity compensation"
        },
        {
          icon: TrendingUp,
          title: "Boost ROI",
          description: "Access motivated talent eager to contribute to your success"
        },
        {
          icon: Users,
          title: "Scale Smart",
          description: "Build team capacity as your company grows and succeeds"
        }
      ]
    },
    {
      category: "For Institutions",
      icon: GraduationCap,
      color: "accent",
      items: [
        {
          icon: Target,
          title: "Practical Training",
          description: "Provide students with real-world project experience"
        },
        {
          icon: TrendingUp,
          title: "Better Outcomes",
          description: "Improve graduate employment rates and career readiness"
        },
        {
          icon: Users,
          title: "Industry Connections",
          description: "Build relationships with innovative startup partners"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Value for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            EquiExperience creates a win-win-win scenario where talent grows, startups scale, and institutions deliver better outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const CategoryIcon = benefit.icon;
            return (
              <div key={index} className="space-y-6">
                {/* Category Header */}
                <div className="text-center space-y-3">
                  <div className={`inline-flex p-4 rounded-2xl ${
                    benefit.color === 'primary' ? 'bg-primary/10' :
                    benefit.color === 'secondary' ? 'bg-secondary/10' :
                    'bg-accent/10'
                  }`}>
                    <CategoryIcon className={`h-8 w-8 ${
                      benefit.color === 'primary' ? 'text-primary' :
                      benefit.color === 'secondary' ? 'text-secondary' :
                      'text-accent-foreground'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground">
                    {benefit.category}
                  </h3>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  {benefit.items.map((item, itemIndex) => {
                    const ItemIcon = item.icon;
                    return (
                      <Card key={itemIndex} className="p-6 border-border shadow-soft hover:shadow-card transition-all duration-300 bg-background">
                        <div className="flex gap-4">
                          <div className={`flex-shrink-0 p-2 rounded-lg ${
                            benefit.color === 'primary' ? 'bg-primary/10 text-primary' :
                            benefit.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                            'bg-accent/10 text-accent-foreground'
                          }`}>
                            <ItemIcon className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;