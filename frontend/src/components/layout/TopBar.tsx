import { Bell, Search, UserCircle, Calendar, Clock, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function TopBar() {
  const location = useLocation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pageTitle = location.pathname === '/' 
    ? 'Dashboard' 
    : location.pathname.substring(1).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-10">
      
      {/* Breadcrumbs & Title */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">BIT ECC</span>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <span className="font-semibold text-white">{pageTitle || 'Dashboard'}</span>
      </div>

      {/* Center - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative group">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search buildings, alerts, reports..." 
            className="w-full bg-background border border-border rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-6">
        
        {/* Date & Time */}
        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </div>
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-border"></div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-muted/10 transition-colors text-muted-foreground hover:text-white">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full border border-card"></span>
          </button>
          
          <button className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full hover:bg-muted/10 transition-colors border border-transparent hover:border-border">
            <UserCircle className="w-7 h-7 text-primary" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold leading-none">Super Admin</span>
              <span className="text-[10px] text-muted-foreground">ECC Operations</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
