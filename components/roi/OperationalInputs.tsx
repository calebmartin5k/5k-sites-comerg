'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useROIStore } from '@/store/roiStore';
import { TrendingUp, Zap, Users, Droplets, Calendar } from 'lucide-react';

const OperationalInputs: React.FC = () => {
  const {
    dailyThroughput,
    utilityRate,
    laborCostPerHour,
    solventCostPerLiter,
    operatingDaysPerYear,
    updateDailyThroughput,
    updateUtilityRate,
    updateLaborCostPerHour,
    updateSolventCostPerLiter,
    updateOperatingDaysPerYear,
  } = useROIStore();

  const inputs = [
    {
      label: 'Daily Throughput',
      value: dailyThroughput,
      onChange: updateDailyThroughput,
      min: 1,
      max: 500,
      step: 1,
      unit: 'kg/day',
      icon: TrendingUp,
      description: 'How much biomass do you process daily?',
    },
    {
      label: 'Utility Rate',
      value: utilityRate,
      onChange: updateUtilityRate,
      min: 0.05,
      max: 0.50,
      step: 0.01,
      unit: '$/kWh',
      icon: Zap,
      description: 'Your electricity cost per kilowatt-hour',
    },
    {
      label: 'Labor Cost',
      value: laborCostPerHour,
      onChange: updateLaborCostPerHour,
      min: 15,
      max: 75,
      step: 1,
      unit: '$/hour',
      icon: Users,
      description: 'Average hourly wage for operators',
    },
    {
      label: 'Solvent Cost',
      value: solventCostPerLiter,
      onChange: updateSolventCostPerLiter,
      min: 1,
      max: 20,
      step: 0.5,
      unit: '$/liter',
      icon: Droplets,
      description: 'Cost per liter of your current solvent',
    },
    {
      label: 'Operating Days',
      value: operatingDaysPerYear,
      onChange: updateOperatingDaysPerYear,
      min: 100,
      max: 365,
      step: 5,
      unit: 'days/year',
      icon: Calendar,
      description: 'How many days per year do you operate?',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-[1px] bg-brand-gold"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Step 2: Operational Simulation
        </h3>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-serif text-white">
        Configure Your <span className="italic text-brand-green">Operating Parameters</span>
      </h2>
      
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Adjust the sliders to match your current operation. Watch as the comparison updates in real-time to show potential savings with COMERG LPE technology.
      </p>

      <div className="space-y-8 pt-4">
        {inputs.map((input, index) => {
          const Icon = input.icon;
          
          return (
            <motion.div
              key={input.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-full text-brand-green">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{input.label}</h4>
                    <p className="text-xs text-gray-500">{input.description}</p>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-serif text-white">
                    {input.value.toFixed(input.step < 1 ? 2 : 0)}
                  </span>
                  <span className="text-xs text-gray-500">{input.unit}</span>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="range"
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  value={input.value}
                  onChange={(e) => input.onChange(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #6E9934 0%, #6E9934 ${
                      ((input.value - input.min) / (input.max - input.min)) * 100
                    }%, rgba(255,255,255,0.1) ${
                      ((input.value - input.min) / (input.max - input.min)) * 100
                    }%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
              </div>
              
              <div className="flex justify-between text-xs text-gray-600">
                <span>{input.min} {input.unit}</span>
                <span>{input.max} {input.unit}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6E9934;
          cursor: pointer;
          border: 3px solid #1a2e1a;
          box-shadow: 0 0 0 2px #6E9934;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6E9934;
          cursor: pointer;
          border: 3px solid #1a2e1a;
          box-shadow: 0 0 0 2px #6E9934;
        }
      `}</style>
    </div>
  );
};

export default OperationalInputs;
