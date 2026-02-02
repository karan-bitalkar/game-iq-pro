import { Gamepad2, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "AI Coach", "Analytics", "Clip Generator"],
    Company: ["About", "Careers", "Blog", "Press Kit"],
    Resources: ["Help Center", "API Docs", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Cookie Policy"],
  };

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/50">
      {/* CTA Section */}
      <div className="container px-4 py-16">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="hero-glow w-64 h-64 bg-primary top-0 left-1/2 -translate-x-1/2 opacity-20" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Level Up?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join thousands of gamers who are already using Gameology to 
              dominate their games. Start your free analysis today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                Start Free Analysis
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container px-4 py-12 border-t border-border/50">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-7 w-7 text-primary" />
              <span className="font-display text-lg font-bold gradient-text">Gameology</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered gaming intelligence for the next generation of gamers.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container px-4 py-6 border-t border-border/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Gameology. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Made with 🎮 for gamers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
