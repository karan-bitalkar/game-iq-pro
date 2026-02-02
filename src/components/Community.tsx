import { Users, MessageSquare, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Community = () => {
  const stats = [
    { icon: Users, value: "500K+", label: "Active Members" },
    { icon: MessageSquare, value: "1M+", label: "Tips Shared" },
    { icon: BookOpen, value: "10K+", label: "Guides & Tutorials" },
    { icon: Award, value: "200+", label: "Pro Contributors" },
  ];

  const posts = [
    {
      author: "ProPlayer_X",
      avatar: "🎮",
      title: "How I hit Radiant in 3 months",
      category: "Strategy",
      likes: 2847,
    },
    {
      author: "CoachMike",
      avatar: "🎯",
      title: "Crosshair placement guide for beginners",
      category: "Tutorial",
      likes: 1523,
    },
    {
      author: "StreamQueen",
      avatar: "📺",
      title: "Best OBS settings for 2024",
      category: "Streaming",
      likes: 987,
    },
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="hero-glow w-96 h-96 bg-primary top-0 left-1/4 opacity-15" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Community</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Learn From the
              <span className="gradient-text block">Best Players</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join a thriving community of gamers sharing strategies, tips, and 
              experiences. Get advice from pros and grow together.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-muted/30 border border-border/30">
                  <stat.icon className="h-5 w-5 text-primary mb-2" />
                  <div className="font-display text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button variant="glow" size="lg">
              Join Community
            </Button>
          </div>

          {/* Right - Posts Preview */}
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div
                key={post.title}
                className="glass-card rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl flex-shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{post.author}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">
                        {post.category}
                      </span>
                    </div>
                    <h4 className="font-medium text-foreground truncate">{post.title}</h4>
                    <div className="flex items-center gap-1 mt-2 text-muted-foreground text-sm">
                      <span>❤️</span>
                      <span>{post.likes.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* View More */}
            <div className="text-center pt-4">
              <a href="#" className="text-primary hover:underline font-medium text-sm">
                View all posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
