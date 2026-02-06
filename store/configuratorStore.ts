import { create } from 'zustand';

export interface QualificationData {
  // BANT Framework
  budget: 'under_100k' | '100k_500k' | '500k_1m' | 'over_1m' | '';
  authority: 'decision_maker' | 'influencer' | 'researcher' | '';
  need: 'immediate' | 'planning' | 'exploring' | '';
  timeline: 'under_3months' | '3_6months' | '6_12months' | 'over_12months' | '';
  
  // Additional Context
  companyName: string;
  industry: 'hemp' | 'pharmaceutical' | 'food' | 'fragrance' | 'other' | '';
  currentMethod: 'co2' | 'ethanol' | 'hydrocarbon' | 'none' | '';
  throughput: string;
}

export interface EquipmentModule {
  id: string;
  name: string;
  description: string;
  price: number;
  leadTime: number; // weeks
  category: 'extraction' | 'distillation' | 'analytics' | 'accessories';
}

export interface ConfiguratorStore {
  // Qualification
  qualification: QualificationData;
  updateQualification: (field: keyof QualificationData, value: string) => void;
  
  // Configuration
  selectedModules: EquipmentModule[];
  addModule: (module: EquipmentModule) => void;
  removeModule: (id: string) => void;
  
  // Calculations
  totalPrice: number;
  maxLeadTime: number;
  leadScore: number;
  
  // Actions
  calculateTotals: () => void;
  calculateLeadScore: () => void;
  reset: () => void;
}

export const availableModules: EquipmentModule[] = [
  {
    id: 'ext_50l',
    name: '50L Extraction Vessel',
    description: 'Compact extraction system for small to medium operations',
    price: 75000,
    leadTime: 8,
    category: 'extraction',
  },
  {
    id: 'ext_150l',
    name: '150L Extraction Vessel',
    description: 'High-capacity extraction system for commercial operations',
    price: 145000,
    leadTime: 10,
    category: 'extraction',
  },
  {
    id: 'ext_300l',
    name: '300L Extraction Vessel',
    description: 'Industrial-scale extraction system',
    price: 265000,
    leadTime: 14,
    category: 'extraction',
  },
  {
    id: 'dist_standard',
    name: 'Standard Distillation Unit',
    description: 'Basic distillation for standard purification needs',
    price: 45000,
    leadTime: 6,
    category: 'distillation',
  },
  {
    id: 'dist_advanced',
    name: 'Advanced Distillation Unit',
    description: 'Multi-stage distillation for premium extracts',
    price: 85000,
    leadTime: 8,
    category: 'distillation',
  },
  {
    id: 'cryst_reactor',
    name: 'Crystallization Reactor',
    description: 'For producing isolates and crystalline products',
    price: 95000,
    leadTime: 10,
    category: 'distillation',
  },
  {
    id: 'gc_basic',
    name: 'Gas Chromatography (Basic)',
    description: 'Real-time analysis for quality control',
    price: 65000,
    leadTime: 6,
    category: 'analytics',
  },
  {
    id: 'gc_advanced',
    name: 'Gas Chromatography (Advanced)',
    description: 'High-precision analysis with full cannabinoid profile',
    price: 125000,
    leadTime: 8,
    category: 'analytics',
  },
  {
    id: 'acc_chiller',
    name: 'Industrial Chiller',
    description: 'Temperature control system',
    price: 18000,
    leadTime: 4,
    category: 'accessories',
  },
  {
    id: 'acc_pump',
    name: 'Vacuum Pump System',
    description: 'High-efficiency vacuum system',
    price: 12000,
    leadTime: 4,
    category: 'accessories',
  },
  {
    id: 'acc_automation',
    name: 'Automation Package',
    description: 'PLC control system with touchscreen interface',
    price: 35000,
    leadTime: 6,
    category: 'accessories',
  },
];

export const useConfiguratorStore = create<ConfiguratorStore>((set, get) => ({
  qualification: {
    budget: '',
    authority: '',
    need: '',
    timeline: '',
    companyName: '',
    industry: '',
    currentMethod: '',
    throughput: '',
  },

  selectedModules: [],
  totalPrice: 0,
  maxLeadTime: 0,
  leadScore: 0,

  updateQualification: (field, value) => {
    set((state) => ({
      qualification: {
        ...state.qualification,
        [field]: value,
      },
    }));
    get().calculateLeadScore();
  },

  addModule: (module) => {
    set((state) => ({
      selectedModules: [...state.selectedModules, module],
    }));
    get().calculateTotals();
  },

  removeModule: (id) => {
    set((state) => ({
      selectedModules: state.selectedModules.filter((m) => m.id !== id),
    }));
    get().calculateTotals();
  },

  calculateTotals: () => {
    const { selectedModules } = get();
    const totalPrice = selectedModules.reduce((sum, m) => sum + m.price, 0);
    const maxLeadTime = selectedModules.length > 0 
      ? Math.max(...selectedModules.map((m) => m.leadTime))
      : 0;
    
    set({ totalPrice, maxLeadTime });
  },

  calculateLeadScore: () => {
    const { qualification } = get();
    let score = 0;

    // Budget (30 points)
    const budgetScores = {
      under_100k: 10,
      '100k_500k': 20,
      '500k_1m': 25,
      over_1m: 30,
    };
    score += budgetScores[qualification.budget as keyof typeof budgetScores] || 0;

    // Authority (25 points)
    const authorityScores = {
      decision_maker: 25,
      influencer: 15,
      researcher: 5,
    };
    score += authorityScores[qualification.authority as keyof typeof authorityScores] || 0;

    // Need (25 points)
    const needScores = {
      immediate: 25,
      planning: 15,
      exploring: 5,
    };
    score += needScores[qualification.need as keyof typeof needScores] || 0;

    // Timeline (20 points)
    const timelineScores = {
      under_3months: 20,
      '3_6months': 15,
      '6_12months': 10,
      over_12months: 5,
    };
    score += timelineScores[qualification.timeline as keyof typeof timelineScores] || 0;

    set({ leadScore: score });
  },

  reset: () => {
    set({
      qualification: {
        budget: '',
        authority: '',
        need: '',
        timeline: '',
        companyName: '',
        industry: '',
        currentMethod: '',
        throughput: '',
      },
      selectedModules: [],
      totalPrice: 0,
      maxLeadTime: 0,
      leadScore: 0,
    });
  },
}));
