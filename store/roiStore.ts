import { create } from 'zustand';

export interface ROIInputs {
  // Biomass Profiling
  biomassType: 'hemp' | 'rose' | 'anise' | 'raspberry' | 'ginger' | 'lavender';
  currentMethod: 'co2' | 'ethanol' | 'hydrocarbon';
  
  // Operational Simulation
  dailyThroughput: number; // kg per day
  utilityRate: number; // $ per kWh
  laborCostPerHour: number;
  solventCostPerLiter: number;
  operatingDaysPerYear: number;
  
  // Calculated values
  currentCapEx: number;
  currentOpEx: number;
  lpeCapEx: number;
  lpeOpEx: number;
  
  // Engagement tracking
  engagementScore: number;
  interactionCount: number;
}

interface ROIStore extends ROIInputs {
  updateBiomassType: (type: ROIInputs['biomassType']) => void;
  updateCurrentMethod: (method: ROIInputs['currentMethod']) => void;
  updateDailyThroughput: (value: number) => void;
  updateUtilityRate: (value: number) => void;
  updateLaborCostPerHour: (value: number) => void;
  updateSolventCostPerLiter: (value: number) => void;
  updateOperatingDaysPerYear: (value: number) => void;
  calculateROI: () => void;
  incrementEngagement: () => void;
}

const ENERGY_CONSUMPTION = {
  co2: 17.5, // kWh per kg
  ethanol: 12.5,
  hydrocarbon: 10,
  lpe: 0.4, // COMERG LPE
};

const LABOR_HOURS_PER_BATCH = {
  co2: 4,
  ethanol: 3,
  hydrocarbon: 2.5,
  lpe: 1,
};

const CYCLE_TIME_HOURS = {
  co2: 5,
  ethanol: 2,
  hydrocarbon: 1.5,
  lpe: 0.75, // 45 minutes average
};

const CAPEX_PER_KG_CAPACITY = {
  co2: 50000,
  ethanol: 30000,
  hydrocarbon: 35000,
  lpe: 10000, // 20% of CO2
};

const SOLVENT_RECOVERY_RATE = {
  co2: 0.95,
  ethanol: 0.90,
  hydrocarbon: 0.92,
  lpe: 0.99,
};

const WINTERIZATION_COST_PER_KG = {
  co2: 15,
  ethanol: 25,
  hydrocarbon: 10,
  lpe: 2, // minimal wax content
};

export const useROIStore = create<ROIStore>((set, get) => ({
  // Initial values
  biomassType: 'hemp',
  currentMethod: 'co2',
  dailyThroughput: 10,
  utilityRate: 0.12,
  laborCostPerHour: 25,
  solventCostPerLiter: 5,
  operatingDaysPerYear: 250,
  currentCapEx: 0,
  currentOpEx: 0,
  lpeCapEx: 0,
  lpeOpEx: 0,
  engagementScore: 0,
  interactionCount: 0,

  updateBiomassType: (type) => {
    set({ biomassType: type });
    get().calculateROI();
    get().incrementEngagement();
  },

  updateCurrentMethod: (method) => {
    set({ currentMethod: method });
    get().calculateROI();
    get().incrementEngagement();
  },

  updateDailyThroughput: (value) => {
    set({ dailyThroughput: value });
    get().calculateROI();
    get().incrementEngagement();
  },

  updateUtilityRate: (value) => {
    set({ utilityRate: value });
    get().calculateROI();
    get().incrementEngagement();
  },

  updateLaborCostPerHour: (value) => {
    set({ laborCostPerHour: value });
    get().calculateROI();
    get().incrementEngagement();
  },

  updateSolventCostPerLiter: (value) => {
    set({ solventCostPerLiter: value });
    get().calculateROI();
    get().incrementEngagement();
  },

  updateOperatingDaysPerYear: (value) => {
    set({ operatingDaysPerYear: value });
    get().calculateROI();
    get().incrementEngagement();
  },

  calculateROI: () => {
    const state = get();
    const currentMethod = state.currentMethod;
    const dailyThroughput = state.dailyThroughput;
    const utilityRate = state.utilityRate;
    const laborCostPerHour = state.laborCostPerHour;
    const solventCostPerLiter = state.solventCostPerLiter;
    const operatingDaysPerYear = state.operatingDaysPerYear;

    // Calculate CapEx
    const currentCapEx = CAPEX_PER_KG_CAPACITY[currentMethod] * dailyThroughput;
    const lpeCapEx = CAPEX_PER_KG_CAPACITY.lpe * dailyThroughput;

    // Calculate annual throughput
    const annualThroughput = dailyThroughput * operatingDaysPerYear;

    // Energy costs
    const currentEnergyCost = annualThroughput * ENERGY_CONSUMPTION[currentMethod] * utilityRate;
    const lpeEnergyCost = annualThroughput * ENERGY_CONSUMPTION.lpe * utilityRate;

    // Labor costs
    const currentBatchesPerDay = dailyThroughput / (dailyThroughput / 1); // Simplified
    const lpeBatchesPerDay = dailyThroughput / (dailyThroughput / 1);
    
    const currentLaborHoursPerYear = (LABOR_HOURS_PER_BATCH[currentMethod] / CYCLE_TIME_HOURS[currentMethod]) * 24 * operatingDaysPerYear;
    const lpeLaborHoursPerYear = (LABOR_HOURS_PER_BATCH.lpe / CYCLE_TIME_HOURS.lpe) * 24 * operatingDaysPerYear;
    
    const currentLaborCost = Math.min(currentLaborHoursPerYear * laborCostPerHour, laborCostPerHour * 2080 * 3); // Cap at 3 full-time employees
    const lpeLaborCost = Math.min(lpeLaborHoursPerYear * laborCostPerHour, laborCostPerHour * 2080); // Cap at 1 full-time employee

    // Solvent costs (accounting for recovery rate)
    const solventRatio = currentMethod === 'ethanol' ? 20 : 5; // L per kg
    const currentSolventLoss = annualThroughput * solventRatio * (1 - SOLVENT_RECOVERY_RATE[currentMethod]);
    const lpeSolventLoss = annualThroughput * 5 * (1 - SOLVENT_RECOVERY_RATE.lpe);
    
    const currentSolventCost = currentSolventLoss * solventCostPerLiter;
    const lpeSolventCost = lpeSolventLoss * solventCostPerLiter;

    // Winterization costs
    const currentWinterizationCost = annualThroughput * WINTERIZATION_COST_PER_KG[currentMethod];
    const lpeWinterizationCost = annualThroughput * WINTERIZATION_COST_PER_KG.lpe;

    // Total OpEx
    const currentOpEx = currentEnergyCost + currentLaborCost + currentSolventCost + currentWinterizationCost;
    const lpeOpEx = lpeEnergyCost + lpeLaborCost + lpeSolventCost + lpeWinterizationCost;

    set({
      currentCapEx,
      currentOpEx,
      lpeCapEx,
      lpeOpEx,
    });
  },

  incrementEngagement: () => {
    const current = get().interactionCount;
    set({
      interactionCount: current + 1,
      engagementScore: Math.min((current + 1) * 10, 100),
    });
  },
}));
