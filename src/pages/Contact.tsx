import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@equiexperience.com",
      href: "mailto:hello@equiexperience.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) EQUI-EXP",
      href: "tel:+15557849397"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      href: "#"
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
              Get In Touch
            </h1>
            <p className="text-xl text-background/90 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to us through any of these channels.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-hero transition-all duration-300">
                    <CardHeader>
                      <div className="inline-flex p-4 rounded-2xl bg-primary/10 mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading">{method.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={method.href}
                        className="text-primary hover:underline"
                      >
                        {method.content}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold font-heading mb-4">
              Looking for Answers?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out our FAQ page for quick answers to common questions
            </p>
            <a href="/faq" className="text-primary hover:underline font-medium">
              Visit FAQ →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
