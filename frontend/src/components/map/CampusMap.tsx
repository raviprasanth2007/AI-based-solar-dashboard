import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

import { ALL_BUILDINGS } from '@/utils/dummyData';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Critical': return '#EF4444'; // Red
    case 'High': return '#F59E0B'; // Orange
    case 'Efficient': return '#10B981'; // Green
    default: return '#3B82F6'; // Blue (Normal)
  }
};

export default function CampusMap() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-border relative z-0">
      <MapContainer 
        center={[11.0185, 77.0140]} 
        zoom={16} 
        style={{ height: '100%', width: '100%', background: '#0f172a' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        {ALL_BUILDINGS.map(b => (
          <CircleMarker
            key={b.id}
            center={[b.lat, b.lng]}
            radius={8}
            pathOptions={{ 
              color: getStatusColor(b.status), 
              fillColor: getStatusColor(b.status), 
              fillOpacity: b.status === 'Critical' ? 0.8 : 0.4 
            }}
          >
            <Popup className="custom-popup">
              <div className="p-1">
                <h3 className="font-bold text-gray-900">{b.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Status: <span style={{color: getStatusColor(b.status), fontWeight: 'bold'}}>{b.status}</span></p>
                <p className="text-xs text-gray-500 mt-1 mb-2">Category: {b.category}</p>
                <button className="bg-primary text-white px-3 py-1 text-xs rounded shadow w-full hover:bg-primary/90 transition-colors">View Analytics</button>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
