import { Video, TrendingUp, Sparkles, Share2, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreatorTools = () => {
  const tools = [
    {
      icon: Video,
      title: "Auto Clip Detection",
      description: "AI identifies your best kills, plays, and reactions automatically",
    },
    {
      icon: TrendingUp,
      title: "Viewer Analytics",
      description: "Understand when your audience is most engaged and why",
    },
    {
      icon: Clock,
      title: "Optimal Stream Times",
      description: "Data-driven recommendations for maximum viewer reach",
    },
    {
      icon: Sparkles,
      title: "Title & Thumbnail AI",
      description: "Generate click-worthy titles and thumbnail ideas",
    },
  ];

  const platforms = [
    { name: "YouTube", color: "bg-destructive" },
    { name: "Twitch", color: "bg-secondary" },
    { name: "TikTok", color: "bg-accent" },
    { name: "Instagram", color: "bg-gradient-to-r from-secondary to-accent" },
  ];

  return (
    <section id="creators" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="hero-glow w-96 h-96 bg-accent top-1/3 right-0 opacity-20" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-6">
              {/* Stream Stats Card */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                  <span className="font-semibold">Live Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-neon-green">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">2,847 viewers</span>
                </div>
              </div>

              {/* Engagement Graph Mock */}
              <div className="h-32 rounded-xl bg-muted/30 mb-6 relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="engagementGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 Q30,70 60,75 T120,50 T180,60 T240,30 T300,45 T360,25 T400,35 V100 H0 Z"
                    fill="url(#engagementGradient)"
                  />
                  <path
                    d="M0,80 Q30,70 60,75 T120,50 T180,60 T240,30 T300,45 T360,25 T400,35"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute top-2 right-2 px-2 py-1 rounded bg-accent/20 text-accent text-xs font-medium">
                  Peak engagement detected
                </div>
              </div>

              {/* AI Suggestions */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">AI Suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                    "Epic 1v4 clutch"
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm">
                    Reaction clip
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">
                    Tutorial moment
                  </span>
                </div>
              </div>

              {/* Export Options */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/50">
                <span className="text-sm text-muted-foreground">Export to:</span>
                <div className="flex gap-2">
                  {platforms.map((platform) => (
                    <div
                      key={platform.name}
                      className={`w-8 h-8 rounded-lg ${platform.color} flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
                      title={platform.name}
                    >
                      <Share2 className="h-4 w-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl glass-card border border-accent/30 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Video className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-sm">New clip ready!</p>
                  <p className="text-xs text-muted-foreground">15 sec highlight generated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <Video className="h-4 w-4 text-accent" />
              <span className="text-sm text-accent font-medium">For Creators</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Grow Your
              <span className="gradient-text-accent block">Gaming Brand</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Turn your gameplay into viral content. Our AI helps streamers and 
              content creators find their best moments and optimize their growth.
            </p>

            {/* Tools Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {tools.map((tool) => (
                <div key={tool.title} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <tool.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{tool.title}</h4>
                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg">
              Start Creating
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorTools;
