import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  Building2, 
  Map, 
  History, 
  BrainCircuit, 
  LineChart, 
  BellRing, 
  FileText, 
  Settings, 
  Users 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Campus Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Buildings', path: '/buildings', icon: Building2 },
  { name: 'Campus Map', path: '/map', icon: Map },
  { name: 'Historical Analysis', path: '/history', icon: History },
  { name: 'AI Insights', path: '/ai-insights', icon: BrainCircuit },
  { name: 'Energy Forecast', path: '/forecast', icon: LineChart },
  { name: 'Alerts', path: '/alerts', icon: BellRing },
  { name: 'Reports', path: '/reports', icon: FileText },
];

const bottomNavItems = [
  { name: 'Settings', path: '/settings', icon: Settings },
  { name: 'User Management', path: '/users', icon: Users },
];

export default function Sidebar() {
  return (
    <aside className="w-64 flex flex-col h-full bg-card border-r border-border">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
          <BrainCircuit className="w-6 h-6" />
          <span>BIT ECC</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-4 px-3">
          Menu
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              isActive 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-muted-foreground hover:bg-muted/10 hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-border space-y-1">
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              isActive 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-muted-foreground hover:bg-muted/10 hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
