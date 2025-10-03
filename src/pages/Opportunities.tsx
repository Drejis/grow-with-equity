import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { DollarSign, TrendingUp, Clock, MapPin } from "lucide-react";

interface Opportunity {
  id: string;
  title: string;
  role: string;
  description: string;
  stipend_amount: number;
  equity_percentage: number;
  duration: string;
  requirements: string;
}

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    const { data, error } = await supabase
      .from("opportunities")
      .select("*")
      .eq("status", "active")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setOpportunities(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-background mb-4">
              Find Your Next Opportunity
            </h1>
            <p className="text-xl text-background/90 max-w-2xl mx-auto">
              Browse real-world projects at emerging startups. Gain experience, earn cash, and build equity.
            </p>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="text-center py-12">Loading opportunities...</div>
            ) : opportunities.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No opportunities available at the moment. Check back soon!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {opportunities.map((opp) => (
                  <Card key={opp.id} className="hover:shadow-hero transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{opp.role}</Badge>
                      </div>
                      <CardTitle className="text-xl font-heading">{opp.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{opp.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span className="font-medium">${opp.stipend_amount} stipend</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="font-medium">{opp.equity_percentage}% equity</span>
                        </div>
                        {opp.duration && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{opp.duration}</span>
                          </div>
                        )}
                      </div>
                      <Button variant="default" className="w-full">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Opportunities;
