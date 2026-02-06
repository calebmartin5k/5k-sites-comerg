# PBX Interactive ROI & Yield Forecaster

## Overview

The PBX Interactive ROI & Yield Forecaster is a customer-facing tool designed to help potential clients calculate their return on investment when switching to COMERG's Low Pressure Extraction (LPE) technology. This tool demonstrates the financial benefits of COMERG's PURE5 extraction systems compared to conventional methods like Supercritical CO₂, Ethanol, and Hydrocarbon extraction.

## Features

### 1. Biomass Profiling
- **User Selection**: Choose from 6 different botanical materials (Hemp, Rose, Anise, Raspberry, Ginger, Lavender)
- **Visual Interface**: Beautiful card-based selection with icons and descriptions
- **Real-time Updates**: Selections immediately affect the ROI calculations

### 2. Current Method Selection
- **3 Comparison Methods**:
  - Supercritical CO₂ (3000-5000 PSI, 300 min cycle time, 15-20 kW/h)
  - Ethanol/EtOH (Ambient pressure, 60-120 min cycle time, 10-15 kW/h)
  - Hydrocarbon/BHO (50-100 PSI, 45-90 min cycle time, 8-12 kW/h)
- **Technical Specs Display**: Each method shows pressure, cycle time, and energy consumption

### 3. Operational Simulation
Interactive sliders for customizing operational parameters:
- **Daily Throughput**: 1-500 kg/day
- **Utility Rate**: $0.05-$0.50 per kWh
- **Labor Cost**: $15-$75 per hour
- **Solvent Cost**: $1-$20 per liter
- **Operating Days**: 100-365 days per year

### 4. Real-time ROI Analysis
The tool calculates and displays:
- **Annual Savings**: Total operational cost reduction
- **ROI Timeline**: Break-even point in months
- **Energy Savings**: Percentage reduction in energy consumption
- **CapEx Savings**: Capital expenditure reduction

### 5. Interactive Data Visualizations
Using Recharts library:
- **Cost Comparison Bar Chart**: Side-by-side comparison of current vs LPE costs
- **5-Year TCO Timeline**: Area chart showing total cost of ownership over time
- **Break-even Analysis**: Visual representation of the value inflection point

### 6. Lead Capture Modal
- **Engagement-based Triggering**: Modal appears after user makes 8+ interactions
- **Form Fields**: Name, Email, Company, Phone, Role
- **Data Collection**: Captures user inputs along with ROI calculations for CRM integration
- **Beautiful Animations**: Smooth transitions and success state

## Technical Implementation

### Technology Stack
- **Framework**: Next.js 15 with React 19
- **State Management**: Zustand for reactive state
- **Animations**: Framer Motion for smooth transitions
- **Charts**: Recharts for data visualization
- **Styling**: Tailwind CSS with custom brand theme
- **TypeScript**: Full type safety throughout

### File Structure
```
/store
  └── roiStore.ts                    # Zustand state management

/components/roi
  ├── BiomassSelector.tsx            # Step 1: Material selection
  ├── MethodSelector.tsx             # Current extraction method
  ├── OperationalInputs.tsx          # Interactive sliders
  ├── ComparisonCharts.tsx           # Data visualizations
  └── LeadCaptureModal.tsx           # Lead generation form

/app/roi-calculator
  └── page.tsx                       # Main calculator page
```

### Key Calculations

#### Total Cost of Ownership (TCO)
```
TCO = CapEx + Σ(OpEx_Energy + OpEx_Labor + OpEx_Solvent + OpEx_Winterization)
```

#### Operating Energy Cost
```
OpEx_Energy = (kWh_per_kg × Throughput_kg) × Rate_Utility
```

Where:
- LPE: 0.3-0.5 kWh/kg
- CO₂: 15-20 kWh/kg
- Ethanol: 10-15 kWh/kg
- Hydrocarbon: 8-12 kWh/kg

#### Capital Expenditure Per kg Capacity
- CO₂: $50,000/kg
- Ethanol: $30,000/kg
- Hydrocarbon: $35,000/kg
- **COMERG LPE: $10,000/kg** (80% reduction)

### Design System

The ROI Calculator follows the COMERG brand theme:

**Colors**:
- Primary Green: #6E9934
- Dark Background: #1a2e1a
- Gold Accent: #D4C5A5
- Light Gray: #F3F4F6

**Typography**:
- Serif (Playfair): Headers and numbers
- Sans (Inter): Body text
- Display (Manrope): Special headings

**Animations**:
- Fade-in on scroll (GSAP ScrollTrigger inspiration)
- Smooth slider interactions
- Modal transitions
- Chart animations

## Key Differentiators

### Why COMERG LPE Wins

1. **Lower Operating Pressure**: 80-170 PSI vs 3000-5000 PSI (CO₂)
2. **Faster Cycle Times**: 30-50 minutes vs 300 minutes (CO₂)
3. **Energy Efficiency**: 85% less energy consumption
4. **Superior Solvent Recovery**: 99.9% vs 90-95%
5. **No Winterization**: <5% wax content eliminates expensive post-processing
6. **Mega Spectrum Extracts**: Preserves terpenes, flavonoids, and essential oils

### ROI Benefits

Based on typical scenarios:
- **Break-even**: 4-8 months
- **Annual Savings**: $25K-$100K+ depending on scale
- **CapEx Reduction**: 80% lower initial investment
- **Labor Reduction**: 1 operator vs 3-4 for CO₂ systems

## Usage

### Running the Tool

1. **Install Dependencies** (if not already installed):
   ```bash
   npm install recharts framer-motion zustand
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Navigate to**: http://localhost:3000/roi-calculator

### Integration Points

The tool is designed to integrate with:
- **CRM Systems**: HubSpot, Salesforce (via API endpoints)
- **Email Marketing**: Captured leads can trigger automated sequences
- **Analytics**: Track user engagement and conversion rates

### Lead Capture Integration

To connect the lead capture modal to your backend:

1. Update `LeadCaptureModal.tsx` line ~30:
```typescript
// Replace console.log with actual API call
const response = await fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    ...formData,
    roi_data: {
      annualSavings,
      dailyThroughput,
      biomassType,
      currentOpEx,
      lpeOpEx,
    },
  }),
});
```

2. Create API endpoint at `/app/api/leads/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  
  // Send to CRM
  // Send confirmation email
  // Store in database
  
  return Response.json({ success: true });
}
```

## Marketing Strategy

### Target Personas

1. **Engineering Managers**: Focus on technical integration and material flow
2. **Procurement Officers**: Emphasize TCO and cost savings
3. **Plant Managers**: Highlight operational simplicity and safety
4. **C-Suite Executives**: Show ROI timeline and market advantages

### Conversion Funnel

1. **Awareness**: Homepage CTA → ROI Calculator
2. **Engagement**: Interactive sliders and real-time calculations
3. **Education**: Technical specs and comparison charts
4. **Conversion**: Lead capture modal after 8+ interactions
5. **Follow-up**: Sales team contacts with detailed analysis

### A/B Testing Opportunities

- Modal trigger timing (6 vs 8 vs 10 interactions)
- CTA button text variations
- Chart types (bar vs line vs area)
- Default values for operational inputs
- Lead form field requirements

## Scientific Accuracy

All calculations are based on research data from the COMERG operations document:

- Energy consumption ratios validated against published studies
- CapEx estimates based on real equipment costs
- Labor requirements calculated from actual operational data
- Solvent recovery rates from TFE extraction trials
- Winterization cost savings from comparative analysis

### Clausius-Clapeyron Integration

The tool's underlying logic incorporates thermodynamic principles:

```
ln(P₂/P₁) = -(ΔHᵥₐₚ/R)(1/T₂ - 1/T₁)
```

This demonstrates why TFE operates effectively at lower pressures and temperatures, preserving delicate terpenes and flavonoids.

## Future Enhancements

### Phase 2 Features
- [ ] PDF report generation
- [ ] Email delivery of detailed analysis
- [ ] Comparison of multiple COMERG models
- [ ] Custom biomass configuration
- [ ] Multi-year depreciation calculations
- [ ] Carbon footprint calculator
- [ ] Equipment configurator integration

### AI Integration
- [ ] Predictive lead scoring algorithm
- [ ] Automated follow-up email sequences
- [ ] Chatbot for technical questions
- [ ] Dynamic pricing optimization

## Support & Maintenance

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: 90+

### Monitoring
- Track engagement score distribution
- Monitor conversion rates
- Analyze drop-off points
- A/B test results

## License & Credits

Developed for COMERG Group EOOD as part of their digital transformation strategy.

Technology: Next.js, React, Zustand, Recharts, Framer Motion
Design: Based on COMERG brand guidelines
Data: Proprietary COMERG LPE research and operational data

---

For technical support or feature requests, contact the COMERG development team.
