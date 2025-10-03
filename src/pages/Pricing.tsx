import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "For Individuals",
      price: "Free",
      period: "forever",
      description: "Find opportunities and build your career",
      features: [
        "Browse all opportunities",
        "Unlimited applications",
        "Profile creation",
        "Direct messaging with startups",
        "Project tracking dashboard",
        "Community access"
      ],
      cta: "Get Started",
      variant: "default" as const
    },
    {
      name: "For Startups",
      price: "$299",
      period: "per month",
      description: "Find and hire motivated talent",
      features: [
        "Post unlimited opportunities",
        "Access to talent pool",
        "Application management",
        "Team collaboration tools",
        "Analytics dashboard",
        "Priority support",
        "Custom branding"
      ],
      cta: "Start Trial",
      variant: "cta" as const,
      featured: true
    },
    {
      name: "For Institutions",
      price: "Custom",
      period: "contact us",
      description: "Partner with us for student success",
      features: [
        "Student placement tracking",
        "Outcomes dashboard",
        "Bulk student enrollment",
        "Custom integration",
        "Dedicated account manager",
        "Training & onboarding",
        "White-label options"
      ],
      cta: "Contact Sales",
      variant: "secondary" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-background mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-background/90 max-w-2xl mx-auto">
              Choose the plan that works for you. Always fair, always transparent.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative ${plan.featured ? 'border-primary shadow-hero lg:scale-105' : ''}`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-background px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-heading mb-2">{plan.name}</CardTitle>
                    <CardDescription className="mb-4">{plan.description}</CardDescription>
                    <div className="space-y-1">
                      <div className="text-4xl font-bold">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">{plan.period}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.variant} className="w-full" size="lg">
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold font-heading mb-4">
              Have Questions About Pricing?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out our FAQ or contact us for more information
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/faq">View FAQ</a>
              </Button>
              <Button variant="default" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
