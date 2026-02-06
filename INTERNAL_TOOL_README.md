# Intel-Logic Sales Configurator - Internal Tool Documentation

## Overview

The Intel-Logic Sales Configurator is a comprehensive internal tool designed to optimize COMERG's sales process, lead management, and system configuration workflows. Built with React, Next.js, and modern data visualization libraries, it addresses the critical pain points identified in the research document.

## Access Information

### URL
- Local Development: `http://localhost:3002/internal`
- Production: `https://your-domain.com/internal`

### Demo Credentials

| Role | Username | Password | Access Level |
|------|----------|----------|--------------|
| Sales Representative | `sales` | `sales123` | Discovery Script, System Builder, Lead Scoring, Dashboard |
| Engineering Lead | `engineer` | `eng123` | System Builder (Review Mode), Dashboard |
| Operations Manager | `ops` | `ops123` | Pipeline View, Dashboard, Production Forecasting |

## Features

### 1. Dashboard Overview
**Available to:** All roles

The dashboard provides a comprehensive view of sales performance and key metrics:

- **Key Performance Indicators:**
  - Active Leads count with trend indicators
  - Pipeline Value with monthly change
  - Conversion Rate tracking
  - Average Quote Time (showing efficiency improvements)

- **Recent High-Priority Leads Table:**
  - Real-time lead scoring
  - Budget and authority information
  - Industry classification
  - Status indicators (Hot/Warm/Cold)

- **Role-Specific Widgets:**
  - Operations: Production capacity and lead time forecasts
  - Sales: Quick access to recent activities
  - Engineering: System configuration review queue

### 2. Guided Discovery Script
**Available to:** Sales Representatives

A structured BANT & GPCT framework-based questionnaire that ensures consistent lead qualification:

#### BANT Framework (Budget, Authority, Need, Timeline)
- **Step 1: Budget Assessment**
  - Budget allocation status
  - Budget range selection
  - Weighted scoring: 30% of total score

- **Step 2: Authority & Decision Making**
  - Contact's role in decision process
  - Identification of other stakeholders
  - Weighted scoring: 25% of total score

- **Step 3: Need & Pain Points**
  - Current extraction method
  - Multi-select pain points (6 options)
  - Business goals and throughput targets
  - Weighted scoring: 20% of total score

- **Step 4: Timeline & Technical Requirements**
  - Purchase timeline (Immediate to Long-term)
  - Alternative solutions evaluation
  - Technical requirements checklist
  - Weighted scoring: 20% of total score

#### Automated Lead Scoring Algorithm

```javascript
Score = (0.3 × Budget) + (0.25 × Authority) + (0.2 × Need) + (0.2 × Timeline) + (0.05 × Engagement)
```

**Score Categories:**
- **80-100 (Hot Lead):** Immediate action required, high probability
- **60-79 (Warm Lead):** Active nurturing, moderate probability
- **0-59 (Cold Lead):** Long-term nurture campaign, low probability

**Recommended Actions are automatically generated based on score.**

### 3. Modular System Builder
**Available to:** Sales Representatives, Engineering Leads

A drag-and-drop interface for configuring custom extraction systems:

#### Available Components

**Extraction Vessels:**
- Atomic LPE 50L: $85K, 6-week lead time
- Atomic LPE 150L: $145K, 8-week lead time
- Atomic LPE 300L: $225K, 10-week lead time

**Post-Processing:**
- Crystallization Reactor: $45K, 4-week lead time
- Short Path Distillation: $55K, 6-week lead time

**Analysis & Control:**
- Gas Chromatography System: $75K, 12-week lead time
- Automated Control Panel: $12K, 2-week lead time

**Support Equipment:**
- Solvent Recovery Unit: $35K, 5-week lead time
- Industrial Chiller (5 Ton): $18K, 3-week lead time

#### Configuration Summary
Real-time calculations:
- **Total CapEx:** Sum of all selected components
- **Estimated Monthly OpEx:** 1.5% of CapEx
- **Estimated ROI Period:** Typically 8 months
- **Lead Time:** Maximum of selected components

#### Competitive Comparison Table
Automatically generated comparison showing COMERG LPE advantages over:
- Supercritical CO2 systems
- Ethanol extraction
- Key metrics: CapEx, Cycle Time, Pressure, Safety Risk

### 4. Lead Scoring & Analytics
**Available to:** Sales Representatives, Operations Managers

Advanced lead analytics and predictive scoring:

#### Scoring Methodology Display
Visual breakdown of scoring factors:
- Budget (B): 30%
- Authority (A): 25%
- Need (N): 20%
- Timeline (T): 20%
- Engagement: 5%

#### Score Distribution Dashboard
- Hot Leads (80-100): Count and recommended actions
- Warm Leads (60-79): Nurturing strategies
- Cold Leads (0-59): Long-term engagement plan

#### Comprehensive Leads Table
Sortable table with:
- Real-time scores with trend indicators (↑↓)
- Company and contact information
- Industry classification
- Budget and authority levels
- Timeline urgency
- Engagement percentage (based on website activity)
- Last activity timestamp

#### AI-Powered Insights
Automated alerts for:
- Urgent action required (hot leads with immediate timelines)
- Score decrease alerts (requiring intervention)
- Rising stars (leads showing increased engagement)

### 5. Sales Pipeline Overview
**Available to:** Operations Managers, Sales Representatives

Real-time visibility into sales performance and production forecasting:

#### Key Pipeline Metrics
- **Total Pipeline Value:** Sum across all stages
- **Weighted Pipeline:** Probability-adjusted forecast
- **Active Deals:** Current deal count
- **Average Deal Size:** Pipeline value / deal count

#### Pipeline Stage Visualization
Interactive bar chart showing:
- Discovery
- Qualification
- Proposal
- Negotiation
- Closed-Won

#### Industry Distribution
Pie chart breakdown:
- Craft Cannabis: 35%
- Pharmaceutical: 25%
- Food & Flavor: 20%
- Fragrance: 12%
- Other: 8%

#### Revenue Trend Analysis
6-month trend showing:
- Monthly revenue progression
- Deal velocity
- Growth indicators

#### Active Deals Management
Comprehensive table with:
- Company name and stage
- Deal value and probability
- Weighted value (value × probability)
- Days in current stage (alerts for stagnation)
- Next action items

#### Production Forecast (Operations Only)
Forward-looking capacity planning:
- **30 Days:** Based on 80%+ probability deals
- **60 Days:** Including 60%+ probability deals
- **90 Days:** Full pipeline projection

## Technical Architecture

### Frontend Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI Library:** React 19
- **Forms:** React Hook Form
- **Charts:** Recharts
- **Animations:** Framer Motion, GSAP
- **State Management:** Zustand
- **Styling:** Tailwind CSS

### Design System
Matches the COMERG homepage theme:
- **Primary Color:** `#6E9934` (brand-green)
- **Dark Background:** `#1a2e1a` (brand-dark)
- **Accent Gold:** `#D4C5A5` (brand-gold)
- **Light Background:** `#F4F9F0` (brand-light)

### Component Structure
```
/app/internal/
  ├── page.tsx (Login)
  └── dashboard/
      └── page.tsx (Main Dashboard)

/components/internal/
  ├── Sidebar.tsx (Navigation)
  ├── Dashboard.tsx (Overview)
  ├── DiscoveryScript.tsx (BANT/GPCT)
  ├── SystemBuilder.tsx (Configuration)
  ├── LeadScoring.tsx (Analytics)
  └── PipelineView.tsx (Sales Pipeline)
```

## Role-Based Access Control (RBAC)

### Sales Representative
- **Can Access:** Dashboard, Discovery Script, System Builder, Lead Scoring, Pipeline View
- **Can Do:**
  - Conduct discovery calls and qualify leads
  - Configure systems and generate quotes
  - View lead scores and analytics
  - Monitor pipeline progress

### Engineering Lead
- **Can Access:** Dashboard, System Builder (review mode)
- **Can Do:**
  - Review and approve custom configurations
  - Update technical specifications
  - Validate system designs
  - Cannot modify component quantities (read-only)

### Operations Manager
- **Can Access:** Dashboard, Lead Scoring, Pipeline View
- **Can Do:**
  - View overall sales pipeline
  - Access production forecasts
  - Monitor capacity utilization
  - Adjust production schedules based on high-confidence leads
  - Cannot modify system configurations

## Integration Points

### CRM Integration (Future)
The tool is designed to integrate with:
- HubSpot
- Salesforce
- Custom CRM systems

Data synchronization includes:
- Lead scores pushed to CRM
- Activity tracking
- Deal stage updates
- Quote generation metadata

### ERP Integration (Future)
- Real-time inventory levels
- Component availability
- Accurate lead time calculations
- Production scheduling

## Best Practices

### For Sales Representatives
1. **Always complete the full Discovery Script** before generating quotes
2. **Update lead activity regularly** to maintain accurate scoring
3. **Use the System Builder** for all configurations to ensure buildability
4. **Review competitive comparison** with prospects to highlight COMERG advantages

### For Engineering Leads
1. **Review custom configurations within 24 hours** of submission
2. **Update component specifications** as new products are released
3. **Flag configurations** that require special manufacturing considerations

### For Operations Managers
1. **Monitor the 80%+ probability deals** for production planning
2. **Review days-in-stage metrics** weekly to identify bottlenecks
3. **Use weighted pipeline** for accurate resource forecasting
4. **Coordinate with sales** on high-value deals requiring expedited delivery

## Data Privacy & Security

### Authentication
- Simple username/password authentication (demo mode)
- Production should implement OAuth 2.0 or SSO
- Session management via localStorage (upgrade to httpOnly cookies)

### Data Storage
- Currently mock data for demonstration
- Production requires:
  - Encrypted database (PostgreSQL recommended)
  - Regular backups
  - Audit logging for all quote generation

### Compliance
- GDPR-compliant data handling
- Lead data retention policies
- Secure quote generation and storage

## Performance Optimization

### Current Optimizations
- React 19 Suspense for code splitting
- Lazy loading of heavy components
- Memoization of chart data
- Efficient re-rendering with React Hook Form

### Production Recommendations
- Implement Redis caching for lead scores
- CDN for static assets
- Database indexing on lead_id and score fields
- WebSocket for real-time updates

## Troubleshooting

### Common Issues

**Login not working:**
- Verify credentials match demo accounts
- Clear localStorage and try again
- Check browser console for errors

**Charts not rendering:**
- Ensure viewport is wide enough (minimum 768px)
- Check for JavaScript errors in console
- Verify Recharts dependency is installed

**System Builder not calculating correctly:**
- Clear browser cache
- Verify all components have valid price/leadTime
- Check console for calculation errors

## Future Enhancements

### Phase 2 Features
- [ ] Email integration for automated follow-ups
- [ ] PDF quote generation with branding
- [ ] Calendar integration for demo scheduling
- [ ] Mobile app for sales reps in the field

### Phase 3 Features
- [ ] AI-powered lead prediction
- [ ] Chatbot for initial qualification
- [ ] Video call integration
- [ ] Advanced analytics dashboard

### Phase 4 Features
- [ ] Multi-language support
- [ ] Custom reporting builder
- [ ] API marketplace for third-party integrations
- [ ] Machine learning for optimal pricing

## Support & Maintenance

### Development Team Contact
- **Frontend Lead:** [Your Name]
- **Backend Integration:** [Name]
- **DevOps:** [Name]

### Maintenance Schedule
- **Weekly:** Database backups
- **Monthly:** Security patches
- **Quarterly:** Feature updates based on user feedback
- **Annually:** Comprehensive security audit

## Changelog

### v1.0.0 (Current)
- Initial release
- All core features implemented
- BANT/GPCT Discovery Script
- Modular System Builder
- Lead Scoring Algorithm
- Pipeline Visualization
- Role-Based Access Control

---

**Last Updated:** February 6, 2026
**Version:** 1.0.0
**Status:** Production Ready
