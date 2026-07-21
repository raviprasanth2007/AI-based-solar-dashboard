import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Dashboard from '@/pages/Dashboard';
import Buildings from '@/pages/Buildings';
import Alerts from '@/pages/Alerts';
import CampusAnalytics from '@/pages/CampusAnalytics';
import AiInsights from '@/pages/AiInsights';
import BuildingDetails from '@/pages/BuildingDetails';
import CampusMap from '@/components/map/CampusMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<CampusAnalytics />} />
          <Route path="buildings" element={<Buildings />} />
          <Route path="buildings/:id" element={<BuildingDetails />} />
          <Route path="map" element={<div className="h-[calc(100vh-120px)] p-6"><CampusMap /></div>} />
          <Route path="ai-insights" element={<AiInsights />} />
          <Route path="alerts" element={<Alerts />} />
          {/* Add more routes here as we build them */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
