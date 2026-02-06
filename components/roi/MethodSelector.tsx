'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useROIStore } from '@/store/roiStore';
import { Gauge, Droplet, Flame } from 'lucide-react';

const methodOptions = [
  {
    id: 'co2' as const,
    name: 'Supercritical CO₂',
    icon: Gauge,
    pressure: '3000-5000 PSI',
    cycleTime: '300 min',
    energy: '15-20 kW/h',
  },
  {
    id: 'ethanol' as const,
    name: 'Ethanol (EtOH)',
    icon: Droplet,
    pressure: 'Ambient',
    cycleTime: '60-120 min',
    energy: '10-15 kW/h',
  },
  {
    id: 'hydrocarbon' as const,
    name: 'Hydrocarbon (BHO)',
    icon: Flame,
    pressure: '50-100 PSI',
    cycleTime: '45-90 min',
    energy: '8-12 kW/h',
  },
];

const MethodSelector: React.FC = () => {
  const { currentMethod, updateCurrentMethod } = useROIStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-[1px] bg-brand-gold"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Current Extraction Method
        </h3>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-serif text-white">
        What technology are you <span className="italic text-brand-green">using today?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {methodOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = currentMethod === option.id;
          
          return (
            <motion.button
              key={option.id}
              onClick={() => updateCurrentMethod(option.id)}
              className={`relative p-6 border transition-all duration-300 ${
                isSelected
                  ? 'border-brand-green bg-brand-green/10'
                  : 'border-white/10 hover:border-white/30 bg-brand-dark/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-start gap-4">
                <div className={`p-2 rounded-full ${
                  isSelected ? 'bg-brand-green text-white' : 'bg-white/5 text-gray-400'
                }`}>
                  <Icon size={20} />
                </div>
                
                <div className="text-left w-full">
                  <h4 className={`font-bold text-sm mb-3 ${
                    isSelected ? 'text-white' : 'text-gray-300'
                  }`}>
                    {option.name}
                  </h4>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Pressure:</span>
                      <span className="text-gray-400">{option.pressure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cycle:</span>
                      <span className="text-gray-400">{option.cycleTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Energy:</span>
                      <span className="text-gray-400">{option.energy}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {isSelected && (
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 bg-brand-green rounded-full"
                  layoutId="method-indicator"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default MethodSelector;
