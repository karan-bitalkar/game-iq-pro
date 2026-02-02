import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, User, Gamepad2, MapPin, Target, Save, Plus, X } from "lucide-react";
import { toast } from "sonner";

interface Profile {
  username: string;
  bio: string;
  region: string;
  playstyle: string;
  main_role: string;
  avatar_url: string;
}

interface UserGame {
  id: string;
  game_name: string;
  rank: string;
  hours_played: number;
}

const Profile = () => {
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [games, setGames] = useState<UserGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [newGame, setNewGame] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      const [profileRes, gamesRes] = await Promise.all([
        supabase.from("profiles").select("*").eq("user_id", user.id).single(),
        supabase.from("user_games").select("*").eq("user_id", user.id),
      ]);

      if (profileRes.data) {
        setProfile({
          username: profileRes.data.username || "",
          bio: profileRes.data.bio || "",
          region: profileRes.data.region || "",
          playstyle: profileRes.data.playstyle || "",
          main_role: profileRes.data.main_role || "",
          avatar_url: profileRes.data.avatar_url || "",
        });
      }

      if (gamesRes.data) {
        setGames(gamesRes.data);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [user]);

  const handleSave = async () => {
    if (!user || !profile) return;
    setIsSaving(true);

    try {
      const { error } = await supabase
        .from("profiles")
        .update(profile)
        .eq("user_id", user.id);

      if (error) throw error;
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const addGame = async () => {
    if (!user || !newGame.trim()) return;

    try {
      const { data, error } = await supabase
        .from("user_games")
        .insert({ user_id: user.id, game_name: newGame.trim() })
        .select()
        .single();

      if (error) throw error;
      if (data) {
        setGames([...games, data]);
        setNewGame("");
        toast.success("Game added!");
      }
    } catch (error) {
      toast.error("Failed to add game");
    }
  };

  const removeGame = async (gameId: string) => {
    try {
      const { error } = await supabase.from("user_games").delete().eq("id", gameId);
      if (error) throw error;
      setGames(games.filter((g) => g.id !== gameId));
      toast.success("Game removed");
    } catch (error) {
      toast.error("Failed to remove game");
    }
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold">Profile</h1>
            <p className="text-muted-foreground">Manage your gamer identity</p>
          </div>
          <Button variant="hero" onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>

        {/* Profile Card */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center">
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt="Avatar"
                  className="w-full h-full rounded-2xl object-cover"
                />
              ) : (
                <User className="h-10 w-10 text-primary" />
              )}
            </div>
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Username</label>
                  <Input
                    value={profile?.username || ""}
                    onChange={(e) =>
                      setProfile((p) => (p ? { ...p, username: e.target.value } : null))
                    }
                    placeholder="Your username"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Main Role</label>
                  <Input
                    value={profile?.main_role || ""}
                    onChange={(e) =>
                      setProfile((p) => (p ? { ...p, main_role: e.target.value } : null))
                    }
                    placeholder="e.g., Duelist, ADC"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Region</label>
              <select
                value={profile?.region || ""}
                onChange={(e) =>
                  setProfile((p) => (p ? { ...p, region: e.target.value } : null))
                }
                className="w-full h-10 rounded-lg bg-muted border border-border px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="NA">North America</option>
                <option value="EU">Europe</option>
                <option value="ASIA">Asia</option>
                <option value="OCE">Oceania</option>
                <option value="SA">South America</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Playstyle</label>
              <select
                value={profile?.playstyle || ""}
                onChange={(e) =>
                  setProfile((p) => (p ? { ...p, playstyle: e.target.value } : null))
                }
                className="w-full h-10 rounded-lg bg-muted border border-border px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="aggressive">Aggressive</option>
                <option value="strategic">Strategic</option>
                <option value="support">Support</option>
                <option value="balanced">Balanced</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">Bio</label>
            <textarea
              value={profile?.bio || ""}
              onChange={(e) =>
                setProfile((p) => (p ? { ...p, bio: e.target.value } : null))
              }
              placeholder="Tell us about yourself..."
              className="w-full h-24 rounded-lg bg-muted border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        </div>

        {/* Games */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-primary" />
            My Games
          </h3>

          <div className="flex gap-3 mb-4">
            <Input
              value={newGame}
              onChange={(e) => setNewGame(e.target.value)}
              placeholder="Add a new game..."
              onKeyDown={(e) => e.key === "Enter" && addGame()}
            />
            <Button variant="glow" onClick={addGame}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {games.map((game) => (
              <div
                key={game.id}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary"
              >
                <span>{game.game_name}</span>
                {game.rank && (
                  <span className="text-xs opacity-70">({game.rank})</span>
                )}
                <button
                  onClick={() => removeGame(game.id)}
                  className="hover:text-destructive transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            {games.length === 0 && (
              <p className="text-muted-foreground">No games added yet</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
