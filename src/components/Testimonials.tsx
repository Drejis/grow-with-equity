import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      category: "Graduate Success",
      name: "Sarah Chen",
      role: "Frontend Developer",
      company: "TechFlow AI (formerly intern)",
      avatar: "/api/placeholder/64/64",
      quote: "EquiExperience changed my career trajectory completely. I started as a marketing intern with zero tech experience, learned React on the job, and now I'm a full-time frontend developer at the same startup. The equity I earned is already worth 3x my initial stipend!",
      rating: 5,
      outcome: "Hired full-time + 0.3% equity now worth $15k",
      location: "San Francisco, CA"
    },
    {
      category: "Startup Growth",
      name: "Marcus Rodriguez",
      role: "Co-founder & CTO",
      company: "GreenTech Solutions",
      avatar: "/api/placeholder/64/64",
      quote: "We couldn't afford senior developers early on, but EquiExperience connected us with amazing junior talent. Our first intern helped us build our MVP, and we've since hired three of our former interns full-time. The equity model aligned everyone's interests perfectly.",
      rating: 5,
      outcome: "3 interns converted to full-time employees",
      location: "Austin, TX"
    },
    {
      category: "Institution Partnership",
      name: "Dr. Jennifer Park",
      role: "Director of Career Services",
      company: "Bay Area Coding Academy",
      avatar: "/api/placeholder/64/64",
      quote: "Our job placement rate increased from 65% to 87% after partnering with EquiExperience. Students gain real-world experience while still in our program, making them much more attractive to employers. It's a win-win for everyone involved.",
      rating: 5,
      outcome: "22% increase in graduate employment",
      location: "San Francisco, CA"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Graduate Success":
        return "primary";
      case "Startup Growth":
        return "secondary";
      case "Institution Partnership":
        return "accent";
      default:
        return "primary";
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "Graduate Success":
        return "bg-primary/10 text-primary";
      case "Startup Growth":
        return "bg-secondary/10 text-secondary";
      case "Institution Partnership":
        return "bg-accent/10 text-accent-foreground";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from graduates who built their careers, startups who scaled their teams, and institutions who transformed their programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-border shadow-card hover:shadow-hero transition-all duration-300 bg-background relative">
              {/* Category Badge */}
              <div className="absolute -top-3 left-6">
                <Badge className={getCategoryBg(testimonial.category)}>
                  {testimonial.category}
                </Badge>
              </div>

              <div className="space-y-6 mt-4">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className={`p-3 rounded-full ${getCategoryBg(testimonial.category)}`}>
                    <Quote className="h-6 w-6" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-center leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className={getCategoryBg(testimonial.category)}>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Outcome Highlight */}
                  <div className="p-4 rounded-lg bg-gradient-card border border-border">
                    <div className="text-sm font-medium text-foreground mb-1">Key Outcome:</div>
                    <div className="text-sm text-muted-foreground">{testimonial.outcome}</div>
                  </div>

                  {/* Location */}
                  <div className="text-center text-sm text-muted-foreground">
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center space-y-8">
          <h3 className="text-2xl font-bold font-heading text-foreground">
            Platform Impact
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">94%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">$2.3M</div>
              <div className="text-sm text-muted-foreground">Equity Value Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">68%</div>
              <div className="text-sm text-muted-foreground">Convert to Full-time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;