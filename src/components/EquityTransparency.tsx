import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Info } from "lucide-react";

const EquityTransparency = () => {
  const exampleRoles = [
    {
      title: "Marketing Intern",
      stipend: "$200/month",
      equity: "0.3%",
      duration: "3 months",
      description: "Social media strategy, content creation, and growth analytics",
      tags: ["Remote", "Part-time", "Entry Level"]
    },
    {
      title: "Frontend Developer",
      stipend: "$500/month",
      equity: "0.5%",
      duration: "6 months",
      description: "React development, UI/UX implementation, and testing",
      tags: ["Hybrid", "Full-time", "Mid Level"]
    },
    {
      title: "Business Analyst",
      stipend: "$350/month",
      equity: "0.4%",
      duration: "4 months",
      description: "Market research, data analysis, and strategy support",
      tags: ["Remote", "Part-time", "Career Switch"]
    },
    {
      title: "Product Designer",
      stipend: "$400/month",
      equity: "0.6%",
      duration: "5 months",
      description: "User research, wireframing, and prototype design",
      tags: ["On-site", "Full-time", "Graduate"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Transparent Compensation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in clear, fair compensation that combines immediate income with future growth potential. 
            Here's how our cash + equity model works.
          </p>
        </div>

        {/* How It Works Explanation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-border shadow-card bg-gradient-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-heading text-foreground">
                  Cash Stipends
                </h3>
                <p className="text-muted-foreground">
                  Receive monthly payments to cover living expenses while you gain experience. 
                  Amounts vary based on role complexity, time commitment, and company stage.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-border shadow-card bg-gradient-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary/10">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-heading text-foreground">
                  Equity Shares
                </h3>
                <p className="text-muted-foreground">
                  Own a piece of the company's future success. Equity percentages are determined by 
                  role impact, duration, and company valuation at time of engagement.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Example Roles */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
              Example Opportunities
            </h3>
            <p className="text-muted-foreground">
              Real compensation packages from our partner startups
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exampleRoles.map((role, index) => (
              <Card key={index} className="p-6 border-border shadow-card hover:shadow-hero transition-all duration-300 bg-background group">
                <div className="space-y-4">
                  {/* Role Header */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {role.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {role.description}
                    </p>
                  </div>

                  {/* Compensation */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <span className="text-sm font-medium text-foreground">Monthly Stipend</span>
                      <span className="font-bold text-primary">{role.stipend}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                      <span className="text-sm font-medium text-foreground">Equity Share</span>
                      <span className="font-bold text-secondary">{role.equity}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Duration</span>
                      <span className="text-sm font-medium text-foreground">{role.duration}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-12 p-6 rounded-xl bg-accent/10 border border-accent/20">
          <div className="flex gap-3">
            <Info className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Important Notes</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Equity vesting typically occurs over 1-2 years based on project completion</li>
                <li>• All agreements are legally binding with clear terms and conditions</li>
                <li>• Compensation packages are negotiable based on experience and value delivered</li>
                <li>• Tax implications vary by jurisdiction - consult professional advice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquityTransparency;