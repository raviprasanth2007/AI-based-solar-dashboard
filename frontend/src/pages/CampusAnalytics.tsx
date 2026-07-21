import { ALL_BUILDINGS } from '@/utils/dummyData';
import { Building2, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import ConsumptionAreaChart from '@/components/charts/ConsumptionAreaChart';

export default function CampusAnalytics() {
  const sortedByEfficiency = [...ALL_BUILDINGS].sort((a, b) => {
    const aEff = 65 + (a.id * 7) % 30;
    const bEff = 65 + (b.id * 7) % 30;
    return bEff - aEff;
  });

  const top5 = sortedByEfficiency.slice(0, 5);
  const bottom5 = [...sortedByEfficiency].reverse().slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campus Analytics</h1>
          <p className="text-muted-foreground mt-1 text-sm">Deep dive into spatial energy distribution and building rankings.</p>
        </div>
      </div>
      
      {/* Heatmap / Main Chart Area */}
      <div className="glass-card p-5 h-[400px]">
        <ConsumptionAreaChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" /> Top 5 Efficient Buildings
            </h3>
          </div>
          <div className="space-y-3">
            {top5.map((b, i) => (
              <div key={b.id} className="flex items-center justify-between p-3 border border-border rounded-lg bg-background/50 hover:bg-muted/10 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground font-bold text-lg w-4">{i+1}</span>
                  <div className="w-8 h-8 rounded bg-success/10 flex items-center justify-center text-success shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{b.name}</h4>
                    <p className="text-xs text-muted-foreground">{b.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-success">{65 + (b.id * 7) % 30}%</div>
                  <div className="text-xs text-muted-foreground">Efficiency</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Performers */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-destructive" /> Needs Optimization
            </h3>
          </div>
          <div className="space-y-3">
            {bottom5.map((b, i) => (
              <div key={b.id} className="flex items-center justify-between p-3 border border-border rounded-lg bg-background/50 hover:bg-muted/10 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground font-bold text-lg w-4">{ALL_BUILDINGS.length - i}</span>
                  <div className="w-8 h-8 rounded bg-destructive/10 flex items-center justify-center text-destructive shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{b.name}</h4>
                    <p className="text-xs text-muted-foreground">{b.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-destructive">{65 + (b.id * 7) % 30}%</div>
                  <div className="text-xs text-muted-foreground">Efficiency</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
