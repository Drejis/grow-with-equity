import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does equity compensation work?",
      answer: "Equity compensation means you receive a percentage of company ownership in addition to a cash stipend. As the company grows and succeeds, your equity becomes more valuable. Terms and vesting schedules are clearly outlined in each opportunity."
    },
    {
      question: "Who is eligible to join as an individual?",
      answer: "We welcome graduates, interns, entry-level job seekers, and career switchers. You don't need extensive experience - just motivation, relevant skills for the role, and a willingness to learn."
    },
    {
      question: "How do startups post opportunities?",
      answer: "Startups can sign up, create a profile, and post project-based opportunities. You specify the role, responsibilities, stipend amount, equity percentage, and duration. We help you find motivated talent that fits your needs."
    },
    {
      question: "What types of projects are available?",
      answer: "Projects span various functions including marketing, development, design, operations, sales, and more. Each project is clearly defined with specific goals, deliverables, and compensation."
    },
    {
      question: "How are opportunities vetted?",
      answer: "We review all opportunities to ensure they offer meaningful work experience and fair compensation. Startups must provide clear project descriptions, realistic timelines, and appropriate equity + cash packages."
    },
    {
      question: "Can institutions track student progress?",
      answer: "Yes! Institutional partners get access to a dashboard where they can monitor student placements, project completion rates, and outcomes data to measure program success."
    },
    {
      question: "Is there a cost to use the platform?",
      answer: "For individuals seeking opportunities, the platform is free. Startups and institutions may have subscription fees depending on their usage level. Contact us for detailed pricing."
    },
    {
      question: "How long do typical projects last?",
      answer: "Project duration varies based on the role and startup needs, typically ranging from 3 to 12 months. Each opportunity listing specifies the expected timeline."
    },
    {
      question: "What happens if a startup's equity increases in value?",
      answer: "If you hold equity and the startup grows successfully (through revenue, funding, or acquisition), your equity stake increases in value proportionally. You own that percentage of the company."
    },
    {
      question: "How do I get started?",
      answer: "Simply sign up, create your profile, and start browsing opportunities (for individuals) or post your first project (for startups). Institutions can request partnership information through our dedicated form."
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-background/90 max-w-2xl mx-auto">
              Everything you need to know about EquiExperience
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <a href="/contact" className="text-primary hover:underline font-medium">
                Contact us →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
