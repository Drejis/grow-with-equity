import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import EquityTransparency from "@/components/EquityTransparency";
import Partners from "@/components/Partners";
import OpportunitiesShowcase from "@/components/OpportunitiesShowcase";
import Testimonials from "@/components/Testimonials";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <ValueProposition />
        <EquityTransparency />
        <section id="partners">
          <Partners />
        </section>
        <section id="opportunities">
          <OpportunitiesShowcase />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
