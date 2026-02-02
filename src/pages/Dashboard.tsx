import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsOverview from "@/components/dashboard/StatsOverview";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import RecentMatches from "@/components/dashboard/RecentMatches";
import QuickActions from "@/components/dashboard/QuickActions";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();
      
      setProfile(data);
      setProfileLoading(false);
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  if (loading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Redirect to profile setup if not completed
  if (profile && !profile.setup_completed) {
    return <Navigate to="/setup" replace />;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold">
            Welcome back, <span className="gradient-text">{profile?.username || "Gamer"}</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's your gaming performance overview
          </p>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Performance Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Recent Matches */}
        <RecentMatches />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
