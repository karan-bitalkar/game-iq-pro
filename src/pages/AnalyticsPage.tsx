import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Loader2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const AnalyticsPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Sample data
  const weeklyData = [
    { day: "Mon", kills: 45, deaths: 22, wins: 4 },
    { day: "Tue", kills: 52, deaths: 28, wins: 3 },
    { day: "Wed", kills: 38, deaths: 19, wins: 5 },
    { day: "Thu", kills: 61, deaths: 31, wins: 4 },
    { day: "Fri", kills: 55, deaths: 25, wins: 6 },
    { day: "Sat", kills: 72, deaths: 30, wins: 7 },
    { day: "Sun", kills: 68, deaths: 27, wins: 5 },
  ];

  const gameDistribution = [
    { name: "Valorant", value: 45, color: "hsl(var(--primary))" },
    { name: "League of Legends", value: 25, color: "hsl(var(--secondary))" },
    { name: "Apex Legends", value: 20, color: "hsl(var(--accent))" },
    { name: "Other", value: 10, color: "hsl(var(--muted-foreground))" },
  ];

  const accuracyTrend = [
    { week: "W1", accuracy: 28 },
    { week: "W2", accuracy: 31 },
    { week: "W3", accuracy: 29 },
    { week: "W4", accuracy: 34 },
    { week: "W5", accuracy: 36 },
    { week: "W6", accuracy: 35 },
    { week: "W7", accuracy: 38 },
    { week: "W8", accuracy: 41 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Deep dive into your performance metrics</p>
        </div>

        {/* Main Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* K/D Performance */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-display text-lg font-semibold mb-4">Weekly K/D Performance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="kills" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="deaths" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Kills</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-sm text-muted-foreground">Deaths</span>
              </div>
            </div>
          </div>

          {/* Game Distribution */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="font-display text-lg font-semibold mb-4">Games Played</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gameDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {gameDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              {gameDistribution.map((game) => (
                <div key={game.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: game.color }} />
                  <span className="text-sm text-muted-foreground">{game.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accuracy Trend */}
          <div className="glass-card rounded-xl p-6 lg:col-span-2">
            <h3 className="font-display text-lg font-semibold mb-4">Accuracy Trend (8 Weeks)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={accuracyTrend}>
                  <defs>
                    <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--neon-green))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--neon-green))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`${value}%`, "Accuracy"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="accuracy"
                    stroke="hsl(var(--neon-green))"
                    fill="url(#accuracyGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Matches", value: "234", change: "+12 this week" },
            { label: "Avg. K/D", value: "2.1", change: "+0.3 improvement" },
            { label: "Win Streak", value: "5", change: "Personal best!" },
            { label: "Hours Played", value: "89h", change: "This month" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="font-display text-3xl font-bold">{stat.value}</p>
              <p className="text-xs text-neon-green mt-1">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
