import { Trophy, Skull, Clock } from "lucide-react";

const RecentMatches = () => {
  // Sample data - in production would come from database
  const matches = [
    {
      id: 1,
      game: "Valorant",
      map: "Ascent",
      result: "win",
      kda: "24/8/5",
      duration: "32:15",
      agent: "Jett",
    },
    {
      id: 2,
      game: "Valorant",
      map: "Bind",
      result: "loss",
      kda: "15/14/8",
      duration: "41:22",
      agent: "Reyna",
    },
    {
      id: 3,
      game: "League of Legends",
      map: "Summoner's Rift",
      result: "win",
      kda: "8/3/12",
      duration: "28:45",
      agent: "Yasuo",
    },
    {
      id: 4,
      game: "Apex Legends",
      map: "World's Edge",
      result: "win",
      kda: "11/2/6",
      duration: "18:33",
      agent: "Wraith",
    },
    {
      id: 5,
      game: "Valorant",
      map: "Haven",
      result: "loss",
      kda: "12/16/4",
      duration: "35:10",
      agent: "Omen",
    },
  ];

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-lg font-semibold">Recent Matches</h3>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">Game</th>
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">Map</th>
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">Character</th>
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">K/D/A</th>
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">Duration</th>
              <th className="text-left text-sm font-medium text-muted-foreground pb-3">Result</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr
                key={match.id}
                className="border-b border-border/50 hover:bg-muted/30 transition-colors"
              >
                <td className="py-4">
                  <span className="font-medium">{match.game}</span>
                </td>
                <td className="py-4 text-muted-foreground">{match.map}</td>
                <td className="py-4 text-muted-foreground">{match.agent}</td>
                <td className="py-4">
                  <span className="font-mono">{match.kda}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{match.duration}</span>
                  </div>
                </td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      match.result === "win"
                        ? "bg-neon-green/20 text-neon-green"
                        : "bg-destructive/20 text-destructive"
                    }`}
                  >
                    {match.result === "win" ? (
                      <Trophy className="h-3 w-3" />
                    ) : (
                      <Skull className="h-3 w-3" />
                    )}
                    {match.result === "win" ? "Victory" : "Defeat"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentMatches;
