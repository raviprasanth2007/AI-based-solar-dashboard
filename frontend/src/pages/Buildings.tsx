import { ALL_BUILDINGS } from '@/utils/dummyData';
import { Building2, Activity, Battery, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Critical': return 'bg-destructive/10 text-destructive border-destructive/20';
    case 'High': return 'bg-warning/10 text-warning border-warning/20';
    case 'Efficient': return 'bg-success/10 text-success border-success/20';
    default: return 'bg-primary/10 text-primary border-primary/20';
  }
};

export default function Buildings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Buildings Management</h1>
          <p className="text-muted-foreground mt-1 text-sm">Monitor and analyze individual building performance across the campus.</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-background border border-border text-sm rounded-md px-3 py-2 text-white focus:outline-none focus:border-primary transition-colors">
            <option value="all">All Categories</option>
            <option value="academic">Academic</option>
            <option value="hostel">Hostels</option>
            <option value="service">Service</option>
          </select>
          <input 
            type="text" 
            placeholder="Search buildings..." 
            className="bg-background border border-border rounded-md px-3 py-2 text-sm text-white placeholder:text-muted-foreground w-64 focus:outline-none focus:border-primary"
          />
        </div>
      </div>
      
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-background text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold">Building Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Current Load (kW)</th>
                <th className="px-6 py-4 font-semibold">Efficiency</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {ALL_BUILDINGS.map((building) => {
                // Generate deterministic fake data based on ID for visual consistency
                const load = 120 + (building.id * 15) % 300;
                const efficiency = 65 + (building.id * 7) % 30;
                
                return (
                  <tr key={building.id} className="hover:bg-muted/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-white group-hover:text-primary transition-colors">{building.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{building.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 font-medium text-white">
                        <Zap className="w-4 h-4 text-warning" />
                        {load} kW
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-background rounded-full h-1.5 max-w-[80px]">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: `${efficiency}%` }}></div>
                        </div>
                        <span className="text-xs text-muted-foreground">{efficiency}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs rounded-full border font-medium ${getStatusBadge(building.status)}`}>
                        {building.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={`/buildings/${building.id}`} className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                        View Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
