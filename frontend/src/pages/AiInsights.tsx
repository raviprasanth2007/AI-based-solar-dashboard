import { BrainCircuit, AlertTriangle, TrendingDown, ArrowRight } from 'lucide-react';

const insights = [
  {
    id: 1,
    building: 'Research Park',
    problem: 'Consumed 23% more electricity than last week.',
    explanation: 'Likely due to extended lab hours or HVAC left running overnight.',
    confidence: 94,
    severity: 'High',
    recommendation: 'Reduce HVAC base load after 8 PM and audit 3rd-floor labs.',
    savings: '1,200 kWh / ₹9,500'
  },
  {
    id: 2,
    building: 'Main Parking',
    problem: 'Night lighting operating at 100% capacity during empty hours.',
    explanation: 'Motion sensors might be bypassed or malfunctioning.',
    confidence: 88,
    severity: 'Medium',
    recommendation: 'Switch lighting to 30% standby mode between 1 AM and 5 AM.',
    savings: '450 kWh / ₹3,600'
  },
  {
    id: 3,
    building: 'Ruby Hostel',
    problem: 'Unusual morning peak spike detected at 6:30 AM.',
    explanation: 'Simultaneous geyser usage exceeding normal distribution.',
    confidence: 91,
    severity: 'Medium',
    recommendation: 'Implement staggered geyser timings or upgrade to heat pumps.',
    savings: 'Potential Peak Load Reduction: 150 kW'
  }
];

export default function AiInsights() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <BrainCircuit className="w-8 h-8 text-purple" />
            AI Insights Engine
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">Rule-based anomaly detection and actionable energy recommendations.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Run Analysis Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {insights.map(insight => (
          <div key={insight.id} className="glass-card p-6 flex flex-col relative overflow-hidden group hover:border-purple/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
              <BrainCircuit className="w-24 h-24 text-purple" />
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <span className="bg-card border border-border px-3 py-1 rounded-full text-xs font-semibold text-white">
                {insight.building}
              </span>
              <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                insight.severity === 'High' ? 'bg-destructive/20 text-destructive' : 'bg-warning/20 text-warning'
              }`}>
                {insight.severity} Priority
              </span>
            </div>

            <div className="flex items-start gap-3 mt-2">
              <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">{insight.problem}</h3>
                <p className="text-sm text-muted-foreground mt-1">{insight.explanation}</p>
              </div>
            </div>

            <div className="mt-6 mb-4 flex items-center justify-between text-sm bg-background/50 rounded-lg p-3 border border-border">
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs uppercase tracking-wider">Confidence</span>
                <span className="font-bold text-white">{insight.confidence}%</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="flex flex-col items-end">
                <span className="text-muted-foreground text-xs uppercase tracking-wider">Expected Savings</span>
                <span className="font-bold text-success flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  {insight.savings}
                </span>
              </div>
            </div>

            <div className="mt-auto border-t border-border pt-4">
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Recommendation</h4>
              <p className="text-sm text-white">{insight.recommendation}</p>
              <button className="mt-4 flex items-center justify-center w-full gap-2 text-sm font-medium text-muted-foreground hover:text-white bg-background/50 hover:bg-primary/20 py-2 rounded-md transition-colors border border-transparent hover:border-primary/50">
                Apply Fix <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
