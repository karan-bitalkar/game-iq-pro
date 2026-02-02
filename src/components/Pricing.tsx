import { Check, Zap, Crown, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "For casual gamers getting started",
      icon: Zap,
      color: "primary",
      features: [
        "5 match analyses per month",
        "Basic performance stats",
        "Community access",
        "1 game profile",
      ],
      cta: "Get Started",
      variant: "outline" as const,
    },
    {
      name: "Pro Gamer",
      price: "$12",
      period: "per month",
      description: "For competitive players who want to rank up",
      icon: Crown,
      color: "secondary",
      popular: true,
      features: [
        "Unlimited match analyses",
        "AI Personal Coach",
        "Advanced analytics & heatmaps",
        "5 game profiles",
        "Priority support",
        "Clip generator (10/month)",
      ],
      cta: "Go Pro",
      variant: "hero" as const,
    },
    {
      name: "Creator",
      price: "$29",
      period: "per month",
      description: "For streamers and content creators",
      icon: Building2,
      color: "accent",
      features: [
        "Everything in Pro",
        "Unlimited clip generation",
        "Stream analytics dashboard",
        "Viral moment detection",
        "Multi-platform export",
        "Custom branding",
        "API access",
      ],
      cta: "Start Creating",
      variant: "accent" as const,
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return { border: "border-primary/30", icon: "bg-primary/20 text-primary" };
      case "secondary":
        return { border: "border-secondary/30", icon: "bg-secondary/20 text-secondary" };
      case "accent":
        return { border: "border-accent/30", icon: "bg-accent/20 text-accent" };
      default:
        return { border: "border-primary/30", icon: "bg-primary/20 text-primary" };
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="hero-glow w-80 h-80 bg-secondary bottom-0 right-1/4 opacity-15" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
            <Crown className="h-4 w-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">Simple Pricing</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Choose Your
            <span className="gradient-text block">Battle Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free, upgrade when you're ready. All plans include our core AI features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const colors = getColorClasses(plan.color);
            return (
              <div
                key={plan.name}
                className={`relative glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular ? "border-2 border-secondary/50 glow-purple" : colors.border
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-secondary to-accent text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center`}>
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">
            Need a custom solution for your esports team or organization?
          </p>
          <a href="#" className="text-primary hover:underline font-medium">
            Contact us for Enterprise pricing →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
