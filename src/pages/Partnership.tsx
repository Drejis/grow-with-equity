import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Users, TrendingUp } from "lucide-react";

const Partnership = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from("partnerships").insert({
      institution_name: formData.get("institution") as string,
      contact_name: formData.get("name") as string,
      contact_email: formData.get("email") as string,
      contact_phone: formData.get("phone") as string,
      institution_type: formData.get("type") as string,
      message: formData.get("message") as string,
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to submit partnership request. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success!",
        description: "We've received your partnership request and will be in touch soon.",
      });
      (e.target as HTMLFormElement).reset();
    }

    setLoading(false);
  };

  const benefits = [
    {
      icon: GraduationCap,
      title: "Enhanced Student Outcomes",
      description: "Give your students real-world experience with startups and emerging companies"
    },
    {
      icon: Users,
      title: "Industry Connections",
      description: "Connect your institution with a network of innovative startups and employers"
    },
    {
      icon: TrendingUp,
      title: "Track Success Metrics",
      description: "Monitor student progress and placement rates through our dashboard"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-background mb-4">
              Partner With Us
            </h1>
            <p className="text-xl text-background/90 max-w-2xl mx-auto">
              Help your students gain real-world experience while building connections with innovative startups
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-heading">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Form */}
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Request Partnership Information</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get in touch to discuss how we can work together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution Name</Label>
                    <Input id="institution" name="institution" required placeholder="University of Example" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Institution Type</Label>
                    <Input id="type" name="type" required placeholder="e.g., University, Training Center, Bootcamp" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" required placeholder="John Doe" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@example.edu" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your goals</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      placeholder="What are you hoping to achieve through this partnership?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Submitting..." : "Request Partnership"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partnership;
