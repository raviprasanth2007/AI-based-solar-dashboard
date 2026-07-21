-- BIT Energy Command Center Database Schema

-- 1. roles
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

-- 2. users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_id INT REFERENCES roles(id),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. building_categories
CREATE TABLE building_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

-- 4. buildings
CREATE TABLE buildings (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES building_categories(id),
    name VARCHAR(100) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    total_area_sqm DECIMAL(10, 2),
    constructed_year INT,
    status VARCHAR(20) DEFAULT 'Online', -- Online, Offline, Maintenance
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. power_sources
CREATE TABLE power_sources (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    capacity_kw DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'Active'
);

-- 6. energy_logs (15-min interval)
CREATE TABLE energy_logs (
    id BIGSERIAL PRIMARY KEY,
    building_id INT REFERENCES buildings(id),
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    solar_kwh DECIMAL(10, 2) DEFAULT 0,
    grid_kwh DECIMAL(10, 2) DEFAULT 0,
    battery_kwh DECIMAL(10, 2) DEFAULT 0,
    generator_kwh DECIMAL(10, 2) DEFAULT 0,
    consumption_kwh DECIMAL(10, 2) DEFAULT 0,
    voltage DECIMAL(10, 2) DEFAULT 0,
    current DECIMAL(10, 2) DEFAULT 0,
    power_factor DECIMAL(5, 4) DEFAULT 1.0,
    frequency DECIMAL(5, 2) DEFAULT 50.0,
    temperature DECIMAL(5, 2),
    humidity DECIMAL(5, 2),
    cost DECIMAL(10, 2) DEFAULT 0,
    carbon DECIMAL(10, 2) DEFAULT 0,
    CONSTRAINT idx_building_timestamp UNIQUE (building_id, timestamp)
);

-- 7. weather_logs
CREATE TABLE weather_logs (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL UNIQUE,
    temperature DECIMAL(5, 2),
    humidity DECIMAL(5, 2),
    cloud_cover DECIMAL(5, 2),
    solar_radiation DECIMAL(10, 2),
    condition VARCHAR(50)
);

-- 8. alerts
CREATE TABLE alerts (
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES buildings(id),
    severity VARCHAR(20) NOT NULL, -- Critical, High, Medium, Low, Info
    alert_type VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'Active', -- Active, Resolved, Ignored
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. alert_history
CREATE TABLE alert_history (
    id SERIAL PRIMARY KEY,
    alert_id INT REFERENCES alerts(id),
    action VARCHAR(50) NOT NULL,
    user_id UUID REFERENCES users(id),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    notes TEXT
);

-- 10. ai_insights
CREATE TABLE ai_insights (
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES buildings(id),
    insight_type VARCHAR(50),
    problem TEXT,
    explanation TEXT,
    confidence DECIMAL(5, 2),
    severity VARCHAR(20),
    recommendation TEXT,
    expected_savings_kwh DECIMAL(10, 2),
    expected_savings_cost DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'Generated',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 11. daily_summary
CREATE TABLE daily_summary (
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES buildings(id),
    date DATE NOT NULL,
    total_consumption DECIMAL(12, 2) DEFAULT 0,
    peak_consumption DECIMAL(10, 2) DEFAULT 0,
    lowest_consumption DECIMAL(10, 2) DEFAULT 0,
    total_cost DECIMAL(10, 2) DEFAULT 0,
    total_carbon DECIMAL(10, 2) DEFAULT 0,
    efficiency_score DECIMAL(5, 2),
    CONSTRAINT idx_daily_bldg_date UNIQUE(building_id, date)
);

-- 12. weekly_summary
CREATE TABLE weekly_summary (
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES buildings(id),
    week_start_date DATE NOT NULL,
    total_consumption DECIMAL(12, 2) DEFAULT 0,
    efficiency_score DECIMAL(5, 2),
    CONSTRAINT idx_weekly_bldg_date UNIQUE(building_id, week_start_date)
);

-- 13. monthly_summary
CREATE TABLE monthly_summary (
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES buildings(id),
    month_start_date DATE NOT NULL,
    total_consumption DECIMAL(12, 2) DEFAULT 0,
    efficiency_score DECIMAL(5, 2),
    total_cost DECIMAL(12, 2) DEFAULT 0,
    CONSTRAINT idx_monthly_bldg_date UNIQUE(building_id, month_start_date)
);

-- 14. forecast_results
CREATE TABLE forecast_results (
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES buildings(id),
    target_date DATE NOT NULL,
    predicted_consumption DECIMAL(12, 2),
    predicted_peak_load DECIMAL(10, 2),
    confidence_lower DECIMAL(12, 2),
    confidence_upper DECIMAL(12, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT idx_forecast_bldg_date UNIQUE(building_id, target_date)
);

-- 15. system_settings
CREATE TABLE system_settings (
    key VARCHAR(50) PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 16. iot_gateways
CREATE TABLE iot_gateways (
    id SERIAL PRIMARY KEY,
    mac_address VARCHAR(17) UNIQUE NOT NULL,
    building_id INT REFERENCES buildings(id),
    status VARCHAR(20) DEFAULT 'Online',
    last_ping TIMESTAMP WITH TIME ZONE
);

-- 17. sensor_devices
CREATE TABLE sensor_devices (
    id SERIAL PRIMARY KEY,
    gateway_id INT REFERENCES iot_gateways(id),
    device_type VARCHAR(50) NOT NULL,
    location_desc VARCHAR(100),
    status VARCHAR(20) DEFAULT 'Active'
);

-- 18. notification_logs
CREATE TABLE notification_logs (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 19. audit_logs
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id VARCHAR(50),
    details JSONB,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
