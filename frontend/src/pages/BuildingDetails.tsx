import { useParams, Link } from 'react-router-dom';
import { ALL_BUILDINGS } from '@/utils/dummyData';
import ConsumptionAreaChart from '@/components/charts/ConsumptionAreaChart';
import PowerSourceDonutChart from '@/components/charts/PowerSourceDonutChart';
import { ArrowLeft, Zap, Battery, AlertTriangle, Lightbulb, Thermometer, Wind } from 'lucide-react';

export default function BuildingDetails() {
  const { id } = useParams();
  const building = ALL_BUILDINGS.find(b => b.id === Number(id)) || ALL_BUILDINGS[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/buildings" className="p-2 hover:bg-muted/10 rounded-full text-muted-foreground hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{building.name}</h1>
            <span className={`px-2.5 py-0.5 text-xs rounded-full border font-medium ${
              building.status === 'Critical' ? 'bg-destructive/10 text-destructive border-destructive/20' : 
              building.status === 'High' ? 'bg-warning/10 text-warning border-warning/20' : 
              building.status === 'Efficient' ? 'bg-success/10 text-success border-success/20' : 
              'bg-primary/10 text-primary border-primary/20'
            }`}>
              {building.status}
            </span>
          </div>
          <p className="text-muted-foreground mt-1 text-sm">{building.category} Facility • Total Area: 15,000 sqm</p>
        </div>
      </div>

      {/* Primary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-5 border-t-4 border-t-primary">
          <div className="text-muted-foreground text-sm font-medium mb-2 flex items-center justify-between">
            Current Load <Zap className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl font-bold text-white">245 kW</div>
          <div className="text-success text-xs mt-2 font-medium flex items-center gap-1">↓ 4% vs yesterday avg</div>
        </div>
        <div className="glass-card p-5 border-t-4 border-t-success">
          <div className="text-muted-foreground text-sm font-medium mb-2 flex items-center justify-between">
            Solar Contribution <Lightbulb className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-white">45%</div>
          <div className="text-success text-xs mt-2 font-medium flex items-center gap-1">Optimal Generation</div>
        </div>
        <div className="glass-card p-5 border-t-4 border-t-warning">
          <div className="text-muted-foreground text-sm font-medium mb-2 flex items-center justify-between">
            HVAC Power <Thermometer className="w-4 h-4 text-warning" />
          </div>
          <div className="text-3xl font-bold text-white">120 kW</div>
          <div className="text-destructive text-xs mt-2 font-medium flex items-center gap-1">↑ 12% above threshold</div>
        </div>
        <div className="glass-card p-5 border-t-4 border-t-purple">
          <div className="text-muted-foreground text-sm font-medium mb-2 flex items-center justify-between">
            AI Efficiency Score <Battery className="w-4 h-4 text-purple" />
          </div>
          <div className="text-3xl font-bold text-white">82/100</div>
          <div className="text-muted-foreground text-xs mt-2 font-medium flex items-center gap-1">Good</div>
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

      {/* Secondary Insights & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-5">
          <h3 className="text-lg font-semibold text-white mb-4">AI Recommendations</h3>
          <div className="space-y-3">
            <div className="p-3 bg-purple/10 border border-purple/20 rounded-lg flex gap-3 items-start">
              <Lightbulb className="w-5 h-5 text-purple shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-medium text-sm">Optimize HVAC Schedule</h4>
                <p className="text-muted-foreground text-xs mt-1">Shifting HVAC pre-cooling to 4:00 AM will utilize off-peak grid rates and save approximately $450/month.</p>
                <button className="mt-2 text-xs bg-purple text-white px-3 py-1 rounded shadow-sm hover:bg-purple/80 transition-colors">Apply Schedule</button>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-5">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-background/50">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <div>
                  <h4 className="text-sm font-medium text-white">Power Factor Drop</h4>
                  <p className="text-xs text-muted-foreground">PF dropped to 0.85 in Sector B.</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">2 hrs ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
