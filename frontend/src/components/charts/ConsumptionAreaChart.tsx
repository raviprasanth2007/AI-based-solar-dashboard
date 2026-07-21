import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { generateDailyConsumption } from '@/utils/dummyData';

const data = generateDailyConsumption();

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 border border-border p-4 rounded-lg shadow-xl backdrop-blur-sm">
        <p className="text-white font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-4 text-sm mb-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
              <span className="text-muted-foreground capitalize">{entry.name}</span>
            </div>
            <span className="font-semibold text-white">{entry.value.toFixed(0)} kWh</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function ConsumptionAreaChart() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white tracking-tight">30-Day Consumption Trend</h3>
        <select className="bg-background border border-border text-sm rounded-md px-2 py-1 text-muted-foreground focus:outline-none focus:border-primary transition-colors">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGrid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke="#94A3B8" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="#94A3B8" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="grid" 
              stackId="1"
              stroke="#F59E0B" 
              fillOpacity={1} 
              fill="url(#colorGrid)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="solar" 
              stackId="1"
              stroke="#10B981" 
              fillOpacity={1} 
              fill="url(#colorSolar)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
