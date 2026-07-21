import { AlertCircle, AlertTriangle, Info, Bell, CheckCircle2 } from 'lucide-react';

const alerts = [
  {
    id: 1,
    severity: 'Critical',
    building: 'Research Park',
    type: 'High Consumption',
    description: 'Instantaneous load exceeded 450kW threshold.',
    timestamp: '2 mins ago',
    status: 'Active'
  },
  {
    id: 2,
    severity: 'High',
    building: 'Main Parking',
    type: 'Solar Failure',
    description: 'Inverter 3 communication lost. No generation detected.',
    timestamp: '15 mins ago',
    status: 'Active'
  },
  {
    id: 3,
    severity: 'Medium',
    building: 'Ruby Hostel',
    type: 'Power Factor Issue',
    description: 'Power factor dropped below 0.85.',
    timestamp: '1 hour ago',
    status: 'Active'
  },
  {
    id: 4,
    severity: 'Info',
    building: 'Sun Flower',
    type: 'Generator Started',
    description: 'Grid failure detected, DG Set 1 automatically started.',
    timestamp: '2 hours ago',
    status: 'Resolved'
  }
];

const severityIcons = {
  Critical: <AlertCircle className="w-5 h-5 text-destructive" />,
  High: <AlertTriangle className="w-5 h-5 text-warning" />,
  Medium: <Info className="w-5 h-5 text-primary" />,
  Info: <Bell className="w-5 h-5 text-muted-foreground" />,
};

const severityColors = {
  Critical: 'bg-destructive/10 text-destructive border-destructive/20',
  High: 'bg-warning/10 text-warning border-warning/20',
  Medium: 'bg-primary/10 text-primary border-primary/20',
  Info: 'bg-muted/10 text-muted-foreground border-border',
};

export default function Alerts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Alerts</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage and respond to energy anomalies and system alerts.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-background border border-border hover:bg-muted/10 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Filter
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Acknowledge All
          </button>
        </div>
      </div>
      
      <div className="glass-card overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-background/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-semibold">Severity</th>
              <th className="px-6 py-4 font-semibold">Building</th>
              <th className="px-6 py-4 font-semibold">Alert Type</th>
              <th className="px-6 py-4 font-semibold">Description</th>
              <th className="px-6 py-4 font-semibold">Time</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(alert => (
              <tr key={alert.id} className="border-b border-border hover:bg-muted/5 transition-colors">
                <td className="px-6 py-4">
                  <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs font-medium ${severityColors[alert.severity as keyof typeof severityColors]}`}>
                    {severityIcons[alert.severity as keyof typeof severityIcons]}
                    {alert.severity}
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-white">{alert.building}</td>
                <td className="px-6 py-4 text-white">{alert.type}</td>
                <td className="px-6 py-4 text-muted-foreground">{alert.description}</td>
                <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{alert.timestamp}</td>
                <td className="px-6 py-4 text-right">
                  {alert.status === 'Active' ? (
                    <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                      Resolve
                    </button>
                  ) : (
                    <span className="flex items-center justify-end gap-1 text-success font-medium">
                      <CheckCircle2 className="w-4 h-4" /> Resolved
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
