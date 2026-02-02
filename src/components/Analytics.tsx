import { TrendingUp, Target, Clock, Award, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Analytics = () => {
  const metrics = [
    { label: "Win Rate", value: "67%", change: "+12%", trend: "up" },
    { label: "K/D Ratio", value: "2.4", change: "+0.8", trend: "up" },
    { label: "Accuracy", value: "34%", change: "+5%", trend: "up" },
    { label: "Rank", value: "Diamond II", change: "↑2", trend: "up" },
  ];

  const insights = [
    { icon: Target, text: "Your crosshair placement improved 23% this week" },
    { icon: Clock, text: "Best performance window: 7PM - 10PM" },
    { icon: Award, text: "You're in the top 15% of players in your region" },
  ];

  return (
    <section id="analytics" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="hero-glow w-80 h-80 bg-primary bottom-0 left-0 opacity-15" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Deep Analytics</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Understand Your
              <span className="gradient-text block">Performance Deeply</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI analyzes every aspect of your gameplay – from micro-level 
              mechanics to macro-level strategy. Get insights that actually help you improve.
            </p>

            {/* AI Insights */}
            <div className="space-y-4 mb-8">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-center gap-4 p-4 glass-card rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <insight.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground">{insight.text}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Analyze My Gameplay
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-6 border border-border/50">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-lg font-semibold">Performance Overview</h3>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
                <div className="flex items-center gap-2 text-neon-green">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+18% overall</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {metrics.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-xl bg-muted/50 border border-border/30">
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <div className="flex items-end gap-2">
                      <span className="font-display text-2xl font-bold">{metric.value}</span>
                      <span className="text-neon-green text-sm font-medium mb-1">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="h-48 rounded-xl bg-muted/30 border border-border/30 flex items-center justify-center relative overflow-hidden">
                {/* Fake chart lines */}
                <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,120 Q50,100 100,80 T200,60 T300,40 T400,30 V150 H0 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0,120 Q50,100 100,80 T200,60 T300,40 T400,30"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                  Performance Trend
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm shadow-lg glow-cyan">
              Real-time Updates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
