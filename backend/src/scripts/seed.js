"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv.config({ path: path_1.default.resolve(__dirname, '../../../frontend/.env') });
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase URL or Key in frontend/.env");
    process.exit(1);
}
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
const BUILDINGS = [
    // Academic (Category 1)
    { name: 'AS', category: 1, lat: 11.0185, lng: 77.0135, area: 15000 },
    { name: 'IB', category: 1, lat: 11.0188, lng: 77.0142, area: 18000 },
    { name: 'Learning Center', category: 1, lat: 11.0192, lng: 77.0138, area: 12000 },
    { name: 'Mechanical Block', category: 1, lat: 11.0195, lng: 77.0145, area: 22000 },
    { name: 'Auditorium', category: 1, lat: 11.0175, lng: 77.0130, area: 25000 },
    // Research (Category 2)
    { name: 'Research Park', category: 2, lat: 11.0170, lng: 77.0148, area: 30000 },
    // Hostels (Category 3)
    { name: 'Sun Flower', category: 3, lat: 11.0160, lng: 77.0160, area: 10000 },
    { name: 'Ruby Hostel', category: 3, lat: 11.0155, lng: 77.0165, area: 10000 },
    { name: 'Coral Hostel', category: 3, lat: 11.0150, lng: 77.0168, area: 10000 },
    { name: 'Emerald Hostel', category: 3, lat: 11.0145, lng: 77.0170, area: 10000 },
    { name: 'Diamond Hostel', category: 3, lat: 11.0140, lng: 77.0172, area: 10000 },
    { name: 'Sapphire Hostel', category: 3, lat: 11.0135, lng: 77.0175, area: 10000 },
    { name: 'Pearl Hostel', category: 3, lat: 11.0130, lng: 77.0178, area: 10000 },
    { name: 'NRI Hostel', category: 3, lat: 11.0125, lng: 77.0180, area: 15000 },
    { name: 'Ganga Hostel', category: 3, lat: 11.0165, lng: 77.0110, area: 12000 },
    { name: 'Narmadha Hostel', category: 3, lat: 11.0160, lng: 77.0115, area: 12000 },
    { name: 'Kaveri Hostel', category: 3, lat: 11.0155, lng: 77.0120, area: 12000 },
    { name: 'Bhavani Hostel', category: 3, lat: 11.0150, lng: 77.0125, area: 12000 },
    { name: 'Yamuna Hostel', category: 3, lat: 11.0145, lng: 77.0130, area: 12000 },
    { name: 'BIT Guest House', category: 3, lat: 11.0120, lng: 77.0120, area: 8000 },
    // Service (Category 4)
    { name: 'Mess', category: 4, lat: 11.0170, lng: 77.0120, area: 20000 },
    { name: 'Boys Hostel Mess', category: 4, lat: 11.0145, lng: 77.0185, area: 15000 },
    { name: 'Girls Hostel Mess', category: 4, lat: 11.0140, lng: 77.0110, area: 15000 },
    { name: 'Stores', category: 4, lat: 11.0180, lng: 77.0115, area: 5000 },
    // Healthcare (Category 5)
    { name: 'Medical Center', category: 5, lat: 11.0190, lng: 77.0125, area: 6000 },
    // Parking (Category 6)
    { name: 'Main Parking', category: 6, lat: 11.0205, lng: 77.0155, area: 40000 },
    { name: 'West Parking', category: 6, lat: 11.0195, lng: 77.0105, area: 25000 },
];
async function seed() {
    console.log('Starting seed process for 27 buildings...');
    // 1. Categories
    await supabase.from('building_categories').upsert([
        { id: 1, name: 'Academic', description: 'Classrooms and labs' },
        { id: 2, name: 'Research', description: '24x7 Research Labs' },
        { id: 3, name: 'Hostel', description: 'Student accommodation' },
        { id: 4, name: 'Service', description: 'Dining and Support' },
        { id: 5, name: 'Healthcare', description: 'Medical Facilities' },
        { id: 6, name: 'Parking', description: 'Vehicle parking areas' }
    ]);
    // 2. Buildings
    await supabase.from('buildings').upsert(BUILDINGS.map((b, i) => ({
        id: i + 1,
        category_id: b.category,
        name: b.name,
        latitude: b.lat,
        longitude: b.lng,
        total_area_sqm: b.area,
        status: 'Online'
    })));
    // 3. Power Sources
    await supabase.from('power_sources').upsert([
        { id: 1, name: 'Grid', capacity_kw: 5000 },
        { id: 2, name: 'Solar', capacity_kw: 2000 },
        { id: 3, name: 'Battery', capacity_kw: 1000 },
        { id: 4, name: 'Generator', capacity_kw: 1500 }
    ]);
    // 4. Generate 90 days of 15-minute interval data
    console.log('Generating 90 days of 15-min interval energy logs... (This might take a minute)');
    let logs = [];
    const now = new Date();
    // Round to nearest 15 min
    now.setMinutes(Math.floor(now.getMinutes() / 15) * 15, 0, 0);
    const DAYS = 90;
    const INTERVALS_PER_DAY = 24 * 4; // 96 intervals
    for (let b = 1; b <= BUILDINGS.length; b++) {
        for (let d = DAYS; d >= 0; d--) {
            for (let i = 0; i < INTERVALS_PER_DAY; i++) {
                const timestamp = new Date(now);
                timestamp.setDate(timestamp.getDate() - d);
                // Start from midnight and add 15 min increments
                timestamp.setHours(0, 0, 0, 0);
                timestamp.setMinutes(i * 15);
                const hour = timestamp.getHours();
                const isDaytime = hour >= 7 && hour <= 17;
                // Add random variation to make charts look realistic
                const solar = isDaytime ? Math.random() * 200 + 50 : 0;
                const grid = Math.random() * 500 + 200;
                logs.push({
                    building_id: b,
                    timestamp: timestamp.toISOString(),
                    solar_kwh: solar,
                    grid_kwh: grid,
                    battery_kwh: Math.random() * 50,
                    generator_kwh: 0,
                    consumption_kwh: solar + grid,
                    voltage: 230 + (Math.random() * 10 - 5), // 225-235V
                    current: 50 + Math.random() * 20
                });
                // Insert in batches of 2000 to avoid out-of-memory or payload size limits
                if (logs.length >= 2000) {
                    await insertBatch(logs);
                    logs = [];
                }
            }
        }
    }
    // Insert any remaining logs
    if (logs.length > 0) {
        await insertBatch(logs);
    }
    console.log('Seeding complete!');
}
async function insertBatch(batch) {
    const { error } = await supabase.from('energy_logs').upsert(batch, { onConflict: 'building_id, timestamp' });
    if (error) {
        console.error('Batch error:', error.message);
    }
}
seed().catch(console.error);
//# sourceMappingURL=seed.js.map