'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useROIStore } from '@/store/roiStore';
import { Leaf, Flower2, Wind, Apple, Flame, Sparkles } from 'lucide-react';

const biomassOptions = [
  { id: 'hemp' as const, name: 'Hemp', icon: Leaf, description: 'High terpene preservation' },
  { id: 'rose' as const, name: 'Rose', icon: Flower2, description: 'Native scent capture' },
  { id: 'anise' as const, name: 'Anise', icon: Wind, description: 'Trans-anethol rich' },
  { id: 'raspberry' as const, name: 'Raspberry', icon: Apple, description: 'Polyphenol extraction' },
  { id: 'ginger' as const, name: 'Ginger', icon: Flame, description: 'Gingerol preservation' },
  { id: 'lavender' as const, name: 'Lavender', icon: Sparkles, description: 'Sweet herbal profile' },
];

const BiomassSelector: React.FC = () => {
  const { biomassType, updateBiomassType } = useROIStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-[1px] bg-brand-gold"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Step 1: Biomass Profiling
        </h3>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-serif text-white">
        Select Your <span className="italic text-brand-green">Raw Material</span>
      </h2>
      
      <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
        Choose the botanical you're currently processing. Different materials have unique extraction profiles that affect your operational costs and yield quality.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
        {biomassOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = biomassType === option.id;
          
          return (
            <motion.button
              key={option.id}
              onClick={() => updateBiomassType(option.id)}
              className={`relative p-6 border transition-all duration-300 ${
                isSelected
                  ? 'border-brand-green bg-brand-green/10'
                  : 'border-white/10 hover:border-white/30 bg-brand-dark/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-start gap-3">
                <div className={`p-2 rounded-full ${
                  isSelected ? 'bg-brand-green text-white' : 'bg-white/5 text-gray-400'
                }`}>
                  <Icon size={20} />
                </div>
                
                <div className="text-left">
                  <h4 className={`font-bold text-sm ${
                    isSelected ? 'text-white' : 'text-gray-300'
                  }`}>
                    {option.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {option.description}
                  </p>
                </div>
              </div>
              
              {isSelected && (
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 bg-brand-green rounded-full"
                  layoutId="selected-indicator"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default BiomassSelector;
