import { Settings as SettingsIcon, Zap } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">System configuration and preferences</p>
      </div>
      <div className="glass-card-elevated p-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
          <SettingsIcon className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">Configuration Panel</h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-sm">
          System settings, user management, API integrations, and rule engine configuration are managed here.
        </p>
        <div className="mt-4 badge-engine">
          <Zap className="w-2.5 h-2.5" /> Enterprise Config
        </div>
      </div>
    </div>
  );
}
