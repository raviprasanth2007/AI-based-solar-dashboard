# Software Requirements Specification (SRS)
## BIT Energy Command Center (ECC)
**Subtitle:** AI-Powered Campus Energy Intelligence & Monitoring Platform

---

## 1. Executive Summary

### 1.1 What is BIT Energy Command Center?
The BIT Energy Command Center (ECC) is a state-of-the-art, enterprise-grade Smart Energy Management Platform designed specifically to monitor, analyze, and optimize the electrical infrastructure of a university campus. Designed to mirror commercial-grade SCADA (Supervisory Control and Data Acquisition) and EMS (Energy Management Systems) utilized by industry leaders like Tesla Energy, Microsoft Azure, and Schneider Electric, the ECC provides unparalleled operational intelligence.

### 1.2 Why it exists
Educational institutions operate sprawling, diverse infrastructures comparable to small cities, often without the granular visibility required to manage energy efficiently. The ECC exists to bridge this gap, transforming raw electrical data into actionable insights through real-time visualization and artificial intelligence.

### 1.3 Current Problem
Currently, the university relies on fragmented, localized monitoring or manual meter reading. This analog approach results in untracked energy wastage, undetected anomalies, unpredictable utility costs, and a reactive (rather than proactive) maintenance strategy.

### 1.4 Proposed Solution
The proposed solution is a centralized, digital-twin-ready web application that aggregates telemetry from multiple power sources (Grid, Solar, Battery, Generator) across all campus buildings. It features high-fidelity visualizations, automated waste detection, and AI-driven recommendations.

### 1.5 Expected Outcome
Implementation of the ECC will result in a measurable reduction in energy wastage, lowered operational expenditures, optimized power source utilization, and a significantly reduced carbon footprint.

### 1.6 Long-term Vision
The long-term vision positions the ECC as the foundational hub for a fully realized Smart Campus, seamlessly integrating future IoT sensors, autonomous AI control loops, computer vision-based occupancy detection, and predictive maintenance algorithms.

---

## 2. Business Problem

### 2.1 Current Challenges in University Energy Management
Managing energy across a large educational campus presents complex operational and financial challenges. The lack of a unified command center prevents stakeholders from viewing the holistic energy lifecycle of the institution.

### 2.2 Problems Caused by Existing Inefficiencies
- **High Electricity Bills:** Without visibility, peak load charges and unnecessary baseline consumption inflate monthly utility expenses.
- **Manual Monitoring:** Relying on physical inspections and localized readouts is labor-intensive, error-prone, and inherently delayed.
- **Lack of Analytics:** Raw data is siloed and unanalyzed, preventing the identification of long-term usage trends.
- **Energy Wastage:** Idle consumption (e.g., HVAC and lighting running during off-hours or weekends) goes unnoticed.
- **Lack of Visibility:** It is currently impossible to instantly determine which building is consuming the most power or operating inefficiently.
- **Poor Decision Making:** Capital expenditure on energy infrastructure (like solar expansion or battery deployment) is based on guesswork rather than empirical data.
- **No Historical Analysis:** The inability to compare current consumption against historical baselines prevents accurate efficiency tracking.
- **No Forecasting:** The campus cannot predict tomorrow's load, leaving it vulnerable to demand charges.
- **No Optimization:** Without automated insights, optimization relies entirely on human intuition.

### 2.3 Why Existing Approaches Fail
Legacy systems often focus solely on basic telemetry without applying business intelligence. They lack modern, intuitive user interfaces, are incapable of cross-referencing multiple data streams (e.g., weather data vs. solar output), and do not provide proactive AI-driven recommendations.

---

## 3. Business Objectives

The BIT ECC is designed to achieve the following measurable objectives:
- **Reduce Energy Waste:** Decrease baseline idle consumption by 15% within the first year by identifying overnight and weekend anomalies.
- **Improve Visibility:** Achieve 100% real-time visibility across all 27 defined campus buildings from a single pane of glass.
- **Improve Decision Making:** Enable data-driven procurement and infrastructure planning using accurate historical consumption data.
- **Centralized Monitoring:** Consolidate solar, grid, battery, and generator telemetry into one unified operational dashboard.
- **Historical Analysis:** Maintain highly available, deeply granular historical logs for month-over-month and year-over-year comparative analysis.
- **Operational Efficiency:** Reduce manual meter reading and diagnostic time by 80%.
- **Future IoT Readiness:** Establish a highly scalable architecture capable of ingesting millions of data points from future IoT rollouts.
- **Future AI Readiness:** Build structured, normalized datasets that are immediately compatible with future Machine Learning predictive models.
- **Future Smart Campus Readiness:** Lay the software foundation for broader digital transformation initiatives across the university.

---

## 4. Project Scope

### 4.1 Included in Scope
- Comprehensive monitoring of 27 predefined buildings.
- Integration of 4 distinct power sources (Solar, Grid, Battery, Generator).
- Real-time dashboarding, interactive campus maps, and historical analytics.
- Rule-based AI Insights for anomaly detection and waste identification.
- Role-Based Access Control (RBAC) and automated alerts.

### 4.2 Not Included in Scope
- Hardware procurement and physical installation of IoT meters.
- Direct hardware control (the system is currently monitoring and analytical, not supervisory control).
- Mobile application development (Phase 1).

### 4.3 Phased Implementation Scope
- **Current Version (Phase 1):** Core Dashboard, Building Analytics, Campus Map, Historical Charts, Rule-based AI Insights, and Alerts using seeded/mock telemetry to validate the architecture.
- **Phase 2:** Real-time data ingestion via REST APIs/Webhooks from physical smart meters.
- **Phase 3:** Advanced AI Insights (integration with LLMs for deep analysis).
- **Future Expansion:** IoT integration (MQTT), Mobile App, Digital Twin rendering, and Computer Vision occupancy correlation.

---

## 5. Stakeholders

- **University Management:** Requires high-level executive summaries, cost analysis, and carbon reduction metrics to justify ROI.
- **Electrical Department:** Requires deep technical telemetry (voltage, current, power factor) to ensure grid stability and equipment health.
- **Maintenance Team:** Requires instant alerting for equipment failure (e.g., solar inverter offline, battery critically low) for rapid response.
- **Energy Analyst:** Requires extensive historical data, exportable reports (CSV/Excel), and charting tools to identify optimization opportunities.
- **System Administrator:** Requires robust user management, audit logs, and system health monitoring to maintain platform integrity.
- **Campus Security:** May utilize the system to correlate after-hours energy spikes with unauthorized access.
- **Students / Visitors:** Can view public-facing summary dashboards showcasing the university's commitment to sustainability (Guest view).
- **Future Government Agencies:** May require compliance reporting regarding carbon emissions and green energy utilization.

---

## 6. User Roles (RBAC)

- **Super Admin:** Unrestricted access. Can manage users, modify system settings, configure new buildings/sensors, and view all data.
- **Electrical Engineer:** High-level technical access. Can view all operational data, acknowledge/resolve critical alerts, and view power quality metrics.
- **Maintenance Engineer:** Focused on alerts and actionable insights. Can view building status and resolve equipment-level alerts.
- **Energy Analyst:** Analytical access. Can view all dashboards, run complex historical queries, generate reports, and review AI insights. Cannot modify system configurations.
- **Department Head:** Scoped access. Can view energy consumption data and reports strictly for the buildings assigned to their department.
- **Viewer:** Read-only access to standard dashboards and the campus map. Cannot view technical power quality data or financial costs.
- **Guest:** Highly restricted read-only access. Can only view the public sustainability metrics (Total Solar Generated, Carbon Offset).

---

## 7. Functional Requirements

### 7.1 Dashboard
- **Purpose:** Serve as the primary operational center providing a high-level summary of campus energy.
- **Inputs:** Aggregated real-time telemetry from all buildings and power sources.
- **Outputs:** KPI cards (Total Load, Solar Generation, Alerts), Live area charts, and Donut charts for source distribution.
- **Business Rules:** Must auto-refresh. Must display the highest priority active alerts.
- **Acceptance Criteria:** Dashboard loads in under 2 seconds and accurately reflects the sum of all individual building metrics.

### 7.2 Buildings
- **Purpose:** Provide a detailed list and individual monitoring views for the 27 campus buildings.
- **Inputs:** Selection of a specific building.
- **Outputs:** Detailed metrics including Today's Usage, Peak Hour, Efficiency Score, and Historical Trend graphs.
- **Business Rules:** Data must be scoped to the specific building.

### 7.3 Campus Analytics
- **Purpose:** Compare buildings and analyze campus-wide trends.
- **Outputs:** Building rankings (Most/Least efficient), Power flow diagrams, and Heatmaps.

### 7.4 Campus Map
- **Purpose:** Spatial visualization of energy efficiency.
- **Outputs:** An interactive Leaflet map rendering all 27 buildings with color-coded markers (Green, Yellow, Orange, Red) based on real-time efficiency logic.
- **Business Rules:** Clicking a marker must reveal a popup with localized consumption and alert data.

### 7.5 Historical Analysis
- **Purpose:** Deep dive into past consumption.
- **Inputs:** Date range selections, building filters, and resolution selection (15-min, daily, monthly).
- **Outputs:** Multi-axis charts (Line, Bar) allowing comparison of variables (e.g., Temperature vs. Consumption).

### 7.6 Reports
- **Purpose:** Data extraction for offline analysis and compliance.
- **Inputs:** Report type, date range, format.
- **Outputs:** Downloadable PDF, CSV, and Excel files containing tabular data and chart snapshots.

### 7.7 Alerts & Notifications
- **Purpose:** Immediate notification of critical operational anomalies.
- **Business Rules:** Alerts follow severity levels (Critical, High, Medium, Low, Info). Users must be able to "Acknowledge" and "Resolve" alerts.

### 7.8 AI Insights
- **Purpose:** Automated identification of energy waste.
- **Outputs:** Cards detailing the Problem, Explanation, Confidence Score, Severity, Recommendation, and Expected Savings.
- **Business Rules:** Engine must analyze weekend/nighttime baselines against current usage to detect anomalies.

---

## 8. Non-Functional Requirements

- **Performance:** UI rendering must remain smooth (60fps) during chart animations. API response times must average < 200ms for standard queries.
- **Availability:** System must target 99.9% uptime, utilizing cloud-native deployment architectures.
- **Scalability:** The database must gracefully handle millions of 15-minute interval logs without degradation in query speed (utilizing indexing and materialized views).
- **Security:** Enforcement of HTTPS, secure HTTP-only cookies/JWTs for authentication, and Row-Level Security (RLS) at the database layer.
- **Usability:** Strictly adhere to the predefined dark-mode enterprise aesthetic (glassmorphism, tailored hex codes). The interface must be intuitive for both engineers and analysts.
- **Responsiveness:** Flawless rendering across 1920px, 1600px, 1440px, 1366px, and 1280px viewports.
- **Maintainability:** Codebase must follow Clean Architecture, SOLID principles, and utilize strict TypeScript typing for all entities.

---

## 9. Business Rules

1. **Non-Negative Energy:** Consumption, generation, and cost values cannot be less than zero.
2. **Solar Constraints:** Solar generation metrics must correlate with daylight hours and weather conditions; generation should equal 0 kWh between 19:00 and 05:00.
3. **Power Source Hierarchy:** Total campus consumption must mathematically equal the sum of Grid + Solar + Battery Discharge + Generator.
4. **Generator Triggers:** Generator usage must only register when Grid supply is zero (simulated outage) and load exceeds Solar + Battery capacity.
5. **Cost Calculation:** Grid cost is calculated dynamically based on Time-of-Use (TOU) tariffs. Solar cost is calculated at $0 operational cost (amortized capex excluded for this metric).
6. **Carbon Calculation:** Carbon emissions are strictly tied to Grid and Generator usage based on regional grid emission factors.
7. **Efficiency Scoring:** A proprietary algorithm (0-100) based on historical baseline adherence, power factor stability, and off-hour waste.

---

## 10. Assumptions

- The university possesses or will procure the necessary IoT smart meters to provide 15-minute interval telemetry.
- The hosting infrastructure (Supabase/Node.js) provides sufficient bandwidth and compute for the required data throughput.
- Users are accessing the platform via modern, WebGL-capable web browsers (Chrome, Edge, Firefox, Safari).

---

## 11. Constraints

- **Technical Constraints:** The frontend strictly utilizes React 19 and Tailwind CSS. The backend strictly uses Node.js/Express. No alternative frameworks are permitted.
- **Design Constraints:** Strict adherence to the Dark Mode Only enterprise aesthetic. No light themes allowed.
- **Data Constraints:** 15-minute resolution is the highest granularity supported in Phase 1 to balance storage costs.

---

## 12. Risks

- **Data Volume Risk:** Unbounded growth of 15-minute logs may degrade database performance.
  - *Mitigation:* Implement automated data archiving and materialized views for historical aggregations.
- **Adoption Risk:** Maintenance staff may resist transitioning from legacy SCADA to a web-based platform.
  - *Mitigation:* Ensure UI/UX is vastly superior, intuitive, and offers immediate value through clear AI recommendations.
- **Security Risk:** Exposing critical infrastructure data via a web interface introduces cyber vulnerability.
  - *Mitigation:* Implement strict RBAC, network-level IP whitelisting, and regular penetration testing.

---

## 13. Success Criteria

- Successfully load and display 90 days of interval data for all 27 buildings without UI lag.
- Identify and document at least 3 distinct types of energy waste anomalies via the AI Insights engine accurately.
- Achieve 100% adherence to the design aesthetic and responsive layout requirements across all specified viewport sizes.
- Pass all automated API and frontend component tests prior to staging deployment.

---

## 14. Future Roadmap

- **Phase 1:** Core Dashboard & Reporting (Current)
- **Phase 2:** Advanced Campus Analytics
- **Phase 3:** LLM-powered AI Insights integration
- **Phase 4:** Machine Learning Energy Forecasting
- **Phase 5:** Live IoT Meter Integration
- **Phase 6:** MQTT Broker implementation for sub-second telemetry
- **Phase 7:** 3D Digital Twin rendering of the campus
- **Phase 8:** Computer Vision correlation (HVAC vs. Room Occupancy)
- **Phase 9:** Native iOS/Android Mobile Application
- **Phase 10:** Global Multi-Campus Cloud Deployment

---

## 15. System Modules

- **Dashboard:** The command center hub.
- **Buildings:** Individual asset tracking and metrics.
- **Analytics:** Complex data correlation and campus-wide comparisons.
- **Campus Map:** Geospatial monitoring.
- **Reports:** Scheduled and on-demand data export.
- **Alerts:** Real-time operational incident management.
- **AI Insights:** Automated anomaly detection and recommendations.
- **Forecast:** Predictive load and generation modeling.
- **Settings:** System-wide configurations and thresholds.
- **Administration:** User, role, and API key management.
- **Notification Center:** Global broadcast and user-specific message delivery.

---

## 16. Campus Information

The ECC strictly monitors the following 27 approved structures, categorized logically:

**Academic & Learning**
- AS (Academic Science)
- IB (Instructional Block)
- Learning Center
- Mechanical Block
- Auditorium

**Hostel & Accommodation**
- Sun Flower
- Ruby Hostel
- Coral Hostel
- Emerald Hostel
- Diamond Hostel
- Sapphire Hostel
- Pearl Hostel
- NRI Hostel
- Ganga Hostel
- Narmadha Hostel
- Kaveri Hostel
- Bhavani Hostel
- Yamuna Hostel
- BIT Guest House

**Service & Support**
- Mess
- Boys Hostel Mess
- Girls Hostel Mess
- Stores

**Healthcare**
- Medical Center

**Parking**
- Main Parking
- West Parking

**Research**
- Research Park

---

## 17. Energy Sources

- **Solar:** Represents renewable photovoltaic generation. Primary goal is maximizing utilization to offset Grid demand.
- **Grid:** The primary municipal utility feed. Acts as the baseline power provider and is subject to peak demand tariffs.
- **Battery:** Energy Storage Systems (ESS) used for peak shaving and storing excess solar generation.
- **Generator:** Diesel/Gas Backup generators. Utilized exclusively during Grid outages; monitored heavily for fuel consumption and high carbon emissions.

---

## 18. Data Sources

- **Historical Data:** Stored in the Supabase PostgreSQL database.
- **Weather Data:** External APIs providing temperature, humidity, and cloud cover metrics which directly correlate to Solar output and HVAC load.
- **Future IoT Sensors:** Smart meters installed at main incomers and sub-distribution boards.

---

## 19. Security Requirements

- **Authentication:** JWT-based secure login.
- **Authorization:** Strict RBAC middleware on all API routes preventing unauthorized data access or mutation.
- **Audit Logs:** Comprehensive tracking of all administrative actions (e.g., modifying thresholds, resolving critical alerts).
- **Secure Configuration:** Total reliance on injected environment variables for database URIs and API keys.

---

## 20. Quality Requirements

- **Professional UI:** Must evoke the premium feel of top-tier enterprise SaaS.
- **Responsive:** Fluid CSS grids and flexbox implementations ensuring scaling without breakage.
- **Fast:** React Query caching and database indexing to guarantee rapid data retrieval.
- **Maintainable:** Strict folder structuring and comprehensive code commenting.

---

## 21. Deployment Vision

- **Development:** Local Node.js/Vite instances utilizing mock seeded data.
- **Staging:** Cloud-hosted environment mirroring production for rigorous QA.
- **Production:** Fully scaled cloud deployment (e.g., Vercel for Frontend, Azure/AWS for Backend).
- **Future:** Containerization via Docker and orchestration via Kubernetes for ultra-high availability.

---

## 22. Glossary

- **ECC:** Energy Command Center.
- **SCADA:** Supervisory Control and Data Acquisition.
- **EMS:** Energy Management System.
- **RLS:** Row-Level Security.
- **TOU:** Time-of-Use (pricing strategy for electricity).
- **Digital Twin:** A virtual representation of physical campus infrastructure.

---

## 23. Appendix

- **References:** IEEE Std 830-1998 (IEEE Recommended Practice for Software Requirements Specifications).
- **Standards:** Adherence to W3C Accessibility Guidelines (WCAG) and ISO 50001 (Energy management systems).
- **Future Enhancements:** Continuous integration of predictive maintenance capabilities.
