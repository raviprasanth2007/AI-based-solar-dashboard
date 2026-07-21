import ConsumptionAreaChart from '@/components/charts/ConsumptionAreaChart';
import PowerSourceDonutChart from '@/components/charts/PowerSourceDonutChart';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campus Overview</h1>
          <p className="text-muted-foreground mt-1 text-sm">Real-time monitoring of campus energy consumption and efficiency.</p>
        </div>
      </div>
      
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Placeholder for KPI cards */}
        <div className="glass-card p-5">
          <div className="text-muted-foreground text-sm font-medium mb-2">Total Campus Load</div>
          <div className="text-3xl font-bold text-white">4.2 MW</div>
          <div className="text-success text-xs mt-2 font-medium flex items-center gap-1">
            ↓ 12% from yesterday
          </div>
        </div>
        <div className="glass-card p-5">
          <div className="text-muted-foreground text-sm font-medium mb-2">Solar Generation</div>
          <div className="text-3xl font-bold text-primary">1.8 MW</div>
          <div className="text-success text-xs mt-2 font-medium flex items-center gap-1">
            ↑ 5% efficiency
          </div>
        </div>
        <div className="glass-card p-5">
          <div className="text-muted-foreground text-sm font-medium mb-2">Grid Consumption</div>
          <div className="text-3xl font-bold text-warning">2.4 MW</div>
          <div className="text-muted-foreground text-xs mt-2 font-medium flex items-center gap-1">
            Normal usage
          </div>
        </div>
        <div className="glass-card p-5 border-destructive/50">
          <div className="text-muted-foreground text-sm font-medium mb-2">Active Alerts</div>
          <div className="text-3xl font-bold text-destructive">3</div>
          <div className="text-destructive text-xs mt-2 font-medium flex items-center gap-1">
            1 Critical in Research Park
          </div>
        </div>
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-5 h-[400px]">
          <ConsumptionAreaChart />
        </div>
        <div className="glass-card p-5 h-[400px]">
          <PowerSourceDonutChart />
        </div>
      </div>
    </div>
  );
}
