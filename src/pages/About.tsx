import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize access to career opportunities by connecting talent with emerging startups, creating pathways to real experience and equity ownership."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in transparency, fairness, and creating win-win situations. Everyone deserves a chance to build their career and share in success."
    },
    {
      icon: Zap,
      title: "Our Impact",
      description: "Helping thousands find meaningful work, enabling startups to scale efficiently, and partnering with institutions to improve student outcomes."
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
              About EquiExperience
            </h1>
            <p className="text-xl text-background/90 max-w-3xl mx-auto leading-relaxed">
              We're building the future of work by connecting ambitious talent with innovative startups, 
              creating opportunities for real experience and equity ownership.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold font-heading mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                EquiExperience was founded on a simple observation: talented graduates and career switchers 
                struggle to find meaningful opportunities, while innovative startups need skilled people but 
                can't always afford market-rate salaries.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We created a platform that solves both problems. By offering a mix of cash stipends and equity 
                compensation, we enable startups to access top talent while giving individuals the chance to 
                gain real-world experience and share in the upside of company growth.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to work with hundreds of individuals, startups, and educational institutions 
                to create better career pathways and more equitable opportunities for all.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading text-center mb-12">What Drives Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="inline-flex p-4 rounded-2xl bg-primary/10">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold font-heading">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-heading mb-6">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for passionate people to join our team and help us build the future of work.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
