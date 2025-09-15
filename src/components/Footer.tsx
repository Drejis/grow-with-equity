import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "For Talent",
      links: [
        { label: "Find Opportunities", href: "#" },
        { label: "How It Works", href: "#" },
        { label: "Success Stories", href: "#" },
        { label: "FAQ", href: "#" },
      ]
    },
    {
      title: "For Startups",
      links: [
        { label: "Post a Project", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Resources", href: "#" },
      ]
    },
    {
      title: "For Institutions",
      links: [
        { label: "Partnership Program", href: "#" },
        { label: "Student Tracking", href: "#" },
        { label: "Outcomes Dashboard", href: "#" },
        { label: "Integration Guide", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="font-bold text-2xl font-heading">
              EquiExperience
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Connecting talent with opportunity through real experience and equity ownership.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-background">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-background/5 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-background/80 text-sm">
                Get the latest opportunities, success stories, and platform updates delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="secondary" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/80">
          <div className="flex items-center gap-4">
            <p>&copy; 2024 EquiExperience. All rights reserved.</p>
            <div className="hidden md:flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;