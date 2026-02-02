import { Button } from "@/components/ui/button";
import { Play, Zap, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { value: "500K+", label: "Active Gamers", icon: Users },
    { value: "10M+", label: "Matches Analyzed", icon: TrendingUp },
    { value: "85%", label: "Rank Improvement", icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated Glow Orbs */}
      <div className="hero-glow w-96 h-96 bg-primary -top-20 -left-20 animate-glow-pulse" />
      <div className="hero-glow w-80 h-80 bg-secondary top-1/4 right-0 animate-glow-pulse" style={{ animationDelay: '1s' }} />
      <div className="hero-glow w-64 h-64 bg-accent bottom-20 left-1/4 animate-glow-pulse" style={{ animationDelay: '2s' }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Gaming Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Level Up Your
            <span className="block gradient-text">Gaming Performance</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Unlock your full potential with AI-driven analytics, personalized coaching, 
            and real-time insights. From casual to pro – transform your gameplay.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Start Free Analysis
            </Button>
            <Button variant="neon" size="xl" className="gap-2">
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="stat-card group cursor-default"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <stat.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
