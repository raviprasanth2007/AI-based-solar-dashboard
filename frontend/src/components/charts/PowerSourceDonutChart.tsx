import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { powerSources } from '@/utils/dummyData';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 border border-border p-3 rounded-lg shadow-xl backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: payload[0].payload.color }}></span>
          <span className="text-white font-medium">{payload[0].name}</span>
          <span className="text-muted-foreground ml-2">{payload[0].value}%</span>
        </div>
      </div>
    );
  }
  return null;
};

export default function PowerSourceDonutChart() {
  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-lg font-semibold text-white tracking-tight mb-4">Power Sources</h3>
      
      <div className="flex-1 min-h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={powerSources}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {powerSources.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-bold text-white">4.2</span>
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">MW Total</span>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {powerSources.map((source) => (
          <div key={source.name} className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: source.color }}></span>
            <span className="text-muted-foreground flex-1">{source.name}</span>
            <span className="font-semibold text-white">{source.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
