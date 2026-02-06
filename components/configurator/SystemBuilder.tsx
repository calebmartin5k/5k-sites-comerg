'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfiguratorStore, availableModules } from '@/store/configuratorStore';
import { Plus, X, Package, Clock, DollarSign } from 'lucide-react';

const SystemBuilder: React.FC = () => {
  const { selectedModules, addModule, removeModule, totalPrice, maxLeadTime } = useConfiguratorStore();

  const categories = {
    extraction: { name: 'Extraction Vessels', icon: '⚗️' },
    distillation: { name: 'Distillation & Refinement', icon: '🧪' },
    analytics: { name: 'Analytics & QC', icon: '📊' },
    accessories: { name: 'Accessories & Support', icon: '🔧' },
  };

  const getModulesByCategory = (category: string) => {
    return availableModules.filter((m) => m.category === category);
  };

  const isModuleSelected = (id: string) => {
    return selectedModules.some((m) => m.id === id);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-[1px] bg-brand-gold"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Step 2: System Configuration
        </h3>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-serif text-white">
        Build Custom <span className="italic text-brand-green">Equipment Package</span>
      </h2>
      
      <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
        Select equipment modules to build a custom system. Pricing and lead times update automatically. 
        This ensures accurate quotes without waiting for engineering review.
      </p>

      {/* Equipment Categories */}
      <div className="space-y-12">
        {Object.entries(categories).map(([categoryKey, category]) => (
          <div key={categoryKey} className="space-y-4">
            <h3 className="text-xl font-serif text-white flex items-center gap-3">
              <span className="text-2xl">{category.icon}</span>
              {category.name}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getModulesByCategory(categoryKey).map((module) => {
                const isSelected = isModuleSelected(module.id);
                
                return (
                  <motion.div
                    key={module.id}
                    layout
                    className={`relative p-6 border transition-all duration-300 ${
                      isSelected
                        ? 'border-brand-green bg-brand-green/10'
                        : 'border-white/10 hover:border-white/30 bg-brand-dark/50'
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className={`font-bold text-sm mb-2 ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                          {module.name}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {module.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-gray-400">
                          <DollarSign size={12} />
                          <span>${(module.price / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                          <Clock size={12} />
                          <span>{module.leadTime}w</span>
                        </div>
                      </div>

                      <button
                        onClick={() => isSelected ? removeModule(module.id) : addModule(module)}
                        className={`w-full py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                          isSelected
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                            : 'bg-brand-green/20 text-brand-green hover:bg-brand-green/30'
                        }`}
                      >
                        {isSelected ? (
                          <span className="flex items-center justify-center gap-2">
                            <X size={14} />
                            Remove
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Plus size={14} />
                            Add to System
                          </span>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Modules Summary */}
      {selectedModules.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky bottom-0 left-0 right-0 p-8 bg-gradient-to-r from-brand-green/20 to-brand-green/5 border border-brand-green/30 backdrop-blur-md"
        >
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <h4 className="text-white font-bold mb-2">Current Configuration</h4>
              <div className="flex flex-wrap gap-2">
                {selectedModules.map((module) => (
                  <span
                    key={module.id}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-brand-dark/50 border border-white/10 text-xs text-gray-300"
                  >
                    <Package size={12} />
                    {module.name}
                    <button
                      onClick={() => removeModule(module.id)}
                      className="hover:text-red-400 transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-right">
                <div className="text-gray-400 text-xs mb-1">Total Investment</div>
                <div className="text-3xl font-serif text-white">
                  ${(totalPrice / 1000).toFixed(0)}K
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-xs mb-1">Lead Time</div>
                <div className="text-3xl font-serif text-brand-green">
                  {maxLeadTime}w
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {selectedModules.length === 0 && (
        <div className="p-12 border border-dashed border-white/20 text-center">
          <div className="inline-flex p-4 bg-white/5 rounded-full mb-4">
            <Package size={32} className="text-gray-500" />
          </div>
          <p className="text-gray-500 text-sm">
            No modules selected. Add equipment to start building your system.
          </p>
        </div>
      )}
    </div>
  );
};

export default SystemBuilder;
