import { TrendingUp, Target, Trophy, Clock } from "lucide-react";

const StatsOverview = () => {
  const stats = [
    {
      icon: TrendingUp,
      label: "Win Rate",
      value: "67%",
      change: "+12%",
      positive: true,
    },
    {
      icon: Target,
      label: "K/D Ratio",
      value: "2.4",
      change: "+0.8",
      positive: true,
    },
    {
      icon: Trophy,
      label: "Current Rank",
      value: "Diamond II",
      change: "↑2 divisions",
      positive: true,
    },
    {
      icon: Clock,
      label: "Hours Played",
      value: "156",
      change: "This month",
      positive: null,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass-card rounded-xl p-5 hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            {stat.positive !== null && (
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.positive
                    ? "bg-neon-green/20 text-neon-green"
                    : "bg-destructive/20 text-destructive"
                }`}
              >
                {stat.change}
              </span>
            )}
          </div>
          <div className="font-display text-2xl font-bold mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
