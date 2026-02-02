import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Gamepad2,
  User,
  Target,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Check,
} from "lucide-react";
import { toast } from "sonner";

const GAMES = [
  "Valorant",
  "League of Legends",
  "Fortnite",
  "Apex Legends",
  "CS2",
  "Overwatch 2",
  "Dota 2",
  "Call of Duty",
  "Rainbow Six Siege",
  "Rocket League",
];

const PLAYSTYLES = [
  { id: "aggressive", label: "Aggressive", description: "Rush in, take risks, high kill potential" },
  { id: "strategic", label: "Strategic", description: "Plan moves, outsmart opponents" },
  { id: "support", label: "Support", description: "Help team, enable plays, utility focus" },
  { id: "balanced", label: "Balanced", description: "Adapt to situations, flexible approach" },
];

const REGIONS = [
  { id: "NA", label: "North America" },
  { id: "EU", label: "Europe" },
  { id: "ASIA", label: "Asia" },
  { id: "OCE", label: "Oceania" },
  { id: "SA", label: "South America" },
];

const Setup = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [username, setUsername] = useState("");
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [playstyle, setPlaystyle] = useState("");
  const [region, setRegion] = useState("");
  const [mainRole, setMainRole] = useState("");

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

  const toggleGame = (game: string) => {
    setSelectedGames((prev) =>
      prev.includes(game) ? prev.filter((g) => g !== game) : [...prev, game]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Update profile
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          username,
          playstyle,
          region,
          main_role: mainRole,
          setup_completed: true,
        })
        .eq("user_id", user.id);

      if (profileError) throw profileError;

      // Add games
      for (const game of selectedGames) {
        await supabase.from("user_games").insert({
          user_id: user.id,
          game_name: game,
        });
      }

      toast.success("Profile setup complete!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Setup error:", error);
      toast.error("Failed to save profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return username.trim().length >= 3;
      case 2:
        return selectedGames.length > 0;
      case 3:
        return playstyle !== "";
      case 4:
        return region !== "";
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="hero-glow w-96 h-96 bg-primary -top-20 -right-20" />
      <div className="hero-glow w-80 h-80 bg-secondary bottom-0 left-0" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 w-full max-w-2xl px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Step {step} of 4
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((step / 4) * 100)}% complete
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Gamepad2 className="h-10 w-10 text-primary" />
            <span className="font-display text-2xl font-bold gradient-text">
              Gameology
            </span>
          </div>

          {/* Step 1: Username */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="font-display text-2xl font-bold mb-2">
                  What should we call you?
                </h2>
                <p className="text-muted-foreground">
                  Choose a username for your gamer profile
                </p>
              </div>
              <div className="max-w-sm mx-auto">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 h-12 text-lg"
                    maxLength={20}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Minimum 3 characters
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Games */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="font-display text-2xl font-bold mb-2">
                  What games do you play?
                </h2>
                <p className="text-muted-foreground">
                  Select all the games you want to track
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GAMES.map((game) => (
                  <button
                    key={game}
                    onClick={() => toggleGame(game)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedGames.includes(game)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{game}</span>
                      {selectedGames.includes(game) && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Playstyle */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="font-display text-2xl font-bold mb-2">
                  What's your playstyle?
                </h2>
                <p className="text-muted-foreground">
                  This helps us personalize your coaching
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {PLAYSTYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setPlaystyle(style.id)}
                    className={`p-5 rounded-xl border-2 transition-all text-left ${
                      playstyle === style.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold mb-1">{style.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {style.description}
                        </div>
                      </div>
                      {playstyle === style.id && (
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Region */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="font-display text-2xl font-bold mb-2">
                  What's your region?
                </h2>
                <p className="text-muted-foreground">
                  For accurate server and comparison data
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
                {REGIONS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRegion(r.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      region === r.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{r.label}</span>
                      {region === r.id && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Optional: Main Role */}
              <div className="max-w-sm mx-auto">
                <label className="block text-sm font-medium mb-2">
                  Main Role (optional)
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Duelist, ADC, Support"
                  value={mainRole}
                  onChange={(e) => setMainRole(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>

            {step < 4 ? (
              <Button
                variant="hero"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed()}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button
                variant="hero"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Complete Setup
                    <Target className="h-4 w-4 ml-1" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
