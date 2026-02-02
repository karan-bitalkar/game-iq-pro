import { Link } from "react-router-dom";
import { MessageSquare, Upload, TrendingUp, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  const actions = [
    {
      icon: MessageSquare,
      label: "Ask AI Coach",
      description: "Get personalized advice",
      href: "/coach",
      color: "primary",
    },
    {
      icon: Upload,
      label: "Upload Replay",
      description: "Analyze your gameplay",
      href: "#",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      label: "View Analytics",
      description: "Deep performance insights",
      href: "/analytics",
      color: "accent",
    },
    {
      icon: Video,
      label: "Create Clip",
      description: "Generate highlights",
      href: "#",
      color: "primary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground";
      case "secondary":
        return "bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground";
      case "accent":
        return "bg-accent/20 text-accent group-hover:bg-accent group-hover:text-accent-foreground";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  return (
    <div className="glass-card rounded-xl p-6">
      <h3 className="font-display text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            to={action.href}
            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${getColorClasses(
                action.color
              )}`}
            >
              <action.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium">{action.label}</div>
              <div className="text-xs text-muted-foreground">
                {action.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
