import { 
  Brain, 
  LineChart, 
  MessageSquare, 
  Video, 
  Trophy, 
  Users,
  Crosshair,
  Sparkles
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Gameplay Analysis",
      description: "Upload replays and let our AI detect mistakes, analyze decisions, and provide actionable insights.",
      color: "primary",
    },
    {
      icon: MessageSquare,
      title: "Personal AI Coach",
      description: "Chat with your AI coach for personalized advice, skill roadmaps, and real-time improvement tips.",
      color: "secondary",
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Track K/D ratios, accuracy, reaction times, and 50+ metrics across all your games.",
      color: "accent",
    },
    {
      icon: Video,
      title: "AI Clip Generator",
      description: "Auto-detect your best moments and generate shareable highlights for social media.",
      color: "primary",
    },
    {
      icon: Trophy,
      title: "Ranking & Benchmarks",
      description: "Compare your skills with friends, regional averages, and professional players.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Learn from pro tips, strategy posts, and AI-curated learning paths.",
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          iconBg: "bg-primary/20",
          iconColor: "text-primary",
          hoverGlow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
        };
      case "secondary":
        return {
          iconBg: "bg-secondary/20",
          iconColor: "text-secondary",
          hoverGlow: "group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]",
        };
      case "accent":
        return {
          iconBg: "bg-accent/20",
          iconColor: "text-accent",
          hoverGlow: "group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]",
        };
      default:
        return {
          iconBg: "bg-primary/20",
          iconColor: "text-primary",
          hoverGlow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
        };
    }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="hero-glow w-96 h-96 bg-secondary top-0 right-0 opacity-20" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-6">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">Powerful Features</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text-accent block">Dominate Your Games</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI-powered analysis to community learning, Gameology gives you 
            the edge you need to climb the ranks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={feature.title}
                className={`group glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-border ${colors.hoverGlow}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className={`h-7 w-7 ${colors.iconColor}`} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <Crosshair className="h-5 w-5 text-primary" />
            <span>Supporting 50+ games including Valorant, League of Legends, Fortnite, and more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
