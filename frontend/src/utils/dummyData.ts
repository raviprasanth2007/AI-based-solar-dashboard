// Generate last 30 days of daily consumption data
export const generateDailyConsumption = () => {
  const data = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Add some random variation
    const baseGrid = 3000 + Math.random() * 1000;
    const baseSolar = 1500 + Math.random() * 500;
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      grid: isWeekend ? baseGrid * 0.6 : baseGrid,
      solar: baseSolar,
      total: (isWeekend ? baseGrid * 0.6 : baseGrid) + baseSolar
    });
  }
  return data;
};

export const powerSources = [
  { name: 'Grid', value: 55, color: '#F59E0B' }, // Warning color
  { name: 'Solar', value: 30, color: '#10B981' }, // Success color
  { name: 'Battery', value: 10, color: '#3B82F6' }, // Primary color
  { name: 'Generator', value: 5, color: '#EF4444' } // Destructive color
];

export const ALL_BUILDINGS = [
  // Academic
  { id: 1, name: 'AS', category: 'Academic', lat: 11.0185, lng: 77.0135, status: 'Normal' },
  { id: 2, name: 'IB', category: 'Academic', lat: 11.0188, lng: 77.0142, status: 'Normal' },
  { id: 3, name: 'Learning Center', category: 'Academic', lat: 11.0192, lng: 77.0138, status: 'Efficient' },
  { id: 4, name: 'Mechanical Block', category: 'Academic', lat: 11.0195, lng: 77.0145, status: 'Normal' },
  { id: 5, name: 'Auditorium', category: 'Academic', lat: 11.0175, lng: 77.0130, status: 'Normal' },
  
  // Research
  { id: 6, name: 'Research Park', category: 'Research', lat: 11.0170, lng: 77.0148, status: 'Critical' },

  // Hostels
  { id: 7, name: 'Sun Flower', category: 'Hostel', lat: 11.0160, lng: 77.0160, status: 'High' },
  { id: 8, name: 'Ruby Hostel', category: 'Hostel', lat: 11.0155, lng: 77.0165, status: 'Normal' },
  { id: 9, name: 'Coral Hostel', category: 'Hostel', lat: 11.0150, lng: 77.0168, status: 'Efficient' },
  { id: 10, name: 'Emerald Hostel', category: 'Hostel', lat: 11.0145, lng: 77.0170, status: 'Normal' },
  { id: 11, name: 'Diamond Hostel', category: 'Hostel', lat: 11.0140, lng: 77.0172, status: 'Normal' },
  { id: 12, name: 'Sapphire Hostel', category: 'Hostel', lat: 11.0135, lng: 77.0175, status: 'Normal' },
  { id: 13, name: 'Pearl Hostel', category: 'Hostel', lat: 11.0130, lng: 77.0178, status: 'Normal' },
  { id: 14, name: 'NRI Hostel', category: 'Hostel', lat: 11.0125, lng: 77.0180, status: 'Efficient' },
  { id: 15, name: 'Ganga Hostel', category: 'Hostel', lat: 11.0165, lng: 77.0110, status: 'Normal' },
  { id: 16, name: 'Narmadha Hostel', category: 'Hostel', lat: 11.0160, lng: 77.0115, status: 'Normal' },
  { id: 17, name: 'Kaveri Hostel', category: 'Hostel', lat: 11.0155, lng: 77.0120, status: 'Normal' },
  { id: 18, name: 'Bhavani Hostel', category: 'Hostel', lat: 11.0150, lng: 77.0125, status: 'Normal' },
  { id: 19, name: 'Yamuna Hostel', category: 'Hostel', lat: 11.0145, lng: 77.0130, status: 'High' },
  { id: 20, name: 'BIT Guest House', category: 'Hostel', lat: 11.0120, lng: 77.0120, status: 'Efficient' },

  // Service
  { id: 21, name: 'Mess', category: 'Service', lat: 11.0170, lng: 77.0120, status: 'High' },
  { id: 22, name: 'Boys Hostel Mess', category: 'Service', lat: 11.0145, lng: 77.0185, status: 'Normal' },
  { id: 23, name: 'Girls Hostel Mess', category: 'Service', lat: 11.0140, lng: 77.0110, status: 'Normal' },
  { id: 24, name: 'Stores', category: 'Service', lat: 11.0180, lng: 77.0115, status: 'Efficient' },

  // Healthcare
  { id: 25, name: 'Medical Center', category: 'Healthcare', lat: 11.0190, lng: 77.0125, status: 'Normal' },

  // Parking
  { id: 26, name: 'Main Parking', category: 'Parking', lat: 11.0205, lng: 77.0155, status: 'Efficient' },
  { id: 27, name: 'West Parking', category: 'Parking', lat: 11.0195, lng: 77.0105, status: 'Efficient' },
];
