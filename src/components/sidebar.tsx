import { BarChart3, FileText, Home, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Overview", icon: Home },
  { label: "10-K Metrics", icon: BarChart3 },
  { label: "Filings", icon: FileText },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-full border-b border-slate-200 bg-white p-4 md:w-64 md:border-b-0 md:border-r md:min-h-screen">
      <h1 className="mb-6 text-lg font-semibold text-slate-900">Financial Dashboard</h1>
      <nav className="grid gap-2">
        {navItems.map(({ label, icon: Icon }) => (
          <Button key={label} variant="ghost" className="justify-start gap-2">
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
