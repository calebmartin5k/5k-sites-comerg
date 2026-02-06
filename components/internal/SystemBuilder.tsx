'use client';

import React, { useState } from 'react';
import { Plus, X, Package, Beaker, Gauge, Clock } from 'lucide-react';

interface SystemBuilderProps {
  userRole: string;
}

interface SystemComponent {
  id: string;
  name: string;
  category: string;
  price: number;
  leadTime: number;
  description: string;
}

interface SelectedComponent extends SystemComponent {
  quantity: number;
}

const SystemBuilder: React.FC<SystemBuilderProps> = ({ userRole }) => {
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponent[]>([]);
  const [biomassType, setBiomassType] = useState('');
  const [targetThroughput, setTargetThroughput] = useState('');

  const availableComponents: SystemComponent[] = [
    {
      id: 'lpe-50',
      name: 'Atomic LPE 50L',
      category: 'Extraction Vessel',
      price: 85000,
      leadTime: 6,
      description: 'Low Pressure Extraction vessel, 50L capacity'
    },
    {
      id: 'lpe-150',
      name: 'Atomic LPE 150L',
      category: 'Extraction Vessel',
      price: 145000,
      leadTime: 8,
      description: 'Low Pressure Extraction vessel, 150L capacity'
    },
    {
      id: 'lpe-300',
      name: 'Atomic LPE 300L',
      category: 'Extraction Vessel',
      price: 225000,
      leadTime: 10,
      description: 'Low Pressure Extraction vessel, 300L capacity'
    },
    {
      id: 'crystal-reactor',
      name: 'Crystallization Reactor',
      category: 'Post-Processing',
      price: 45000,
      leadTime: 4,
      description: 'For THC-A and CBD crystallization'
    },
    {
      id: 'gc-system',
      name: 'Gas Chromatography System',
      category: 'Analysis',
      price: 75000,
      leadTime: 12,
      description: 'Real-time cannabinoid analysis'
    },
    {
      id: 'solvent-recovery',
      name: 'Solvent Recovery Unit',
      category: 'Recovery',
      price: 35000,
      leadTime: 5,
      description: 'High-efficiency R134a recovery (>99%)'
    },
    {
      id: 'chiller-5ton',
      name: 'Industrial Chiller (5 Ton)',
      category: 'Support Equipment',
      price: 18000,
      leadTime: 3,
      description: 'Temperature control for extraction process'
    },
    {
      id: 'control-panel',
      name: 'Automated Control Panel',
      category: 'Automation',
      price: 12000,
      leadTime: 2,
      description: 'PLC-based process control with touchscreen'
    },
    {
      id: 'distillation',
      name: 'Short Path Distillation',
      category: 'Refinement',
      price: 55000,
      leadTime: 6,
      description: 'For ultra-pure isolate production'
    },
  ];

  const addComponent = (component: SystemComponent) => {
    const existing = selectedComponents.find(c => c.id === component.id);
    if (existing) {
      setSelectedComponents(
        selectedComponents.map(c =>
          c.id === component.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setSelectedComponents([...selectedComponents, { ...component, quantity: 1 }]);
    }
  };

  const removeComponent = (id: string) => {
    setSelectedComponents(selectedComponents.filter(c => c.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeComponent(id);
    } else {
      setSelectedComponents(
        selectedComponents.map(c =>
          c.id === id ? { ...c, quantity } : c
        )
      );
    }
  };

  const totalCapEx = selectedComponents.reduce((sum, c) => sum + (c.price * c.quantity), 0);
  const maxLeadTime = Math.max(...selectedComponents.map(c => c.leadTime), 0);
  
  const estimatedOpEx = totalCapEx * 0.015; // 1.5% monthly OpEx estimate
  const estimatedROI = 8; // months

  const categories = Array.from(new Set(availableComponents.map(c => c.category)));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Modular System Builder</h1>
        <p className="text-gray-600">Configure a custom extraction system for your client</p>
      </div>

      {/* Client Information */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-serif text-gray-900 mb-4">Client Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Biomass Type
            </label>
            <select
              value={biomassType}
              onChange={(e) => setBiomassType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
            >
              <option value="">Select biomass...</option>
              <option value="hemp">Hemp/Cannabis</option>
              <option value="rose">Rose</option>
              <option value="lavender">Lavender</option>
              <option value="spices">Spices/Herbs</option>
              <option value="fruit">Fruit/Berries</option>
              <option value="other">Other Botanical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Daily Throughput
            </label>
            <input
              type="text"
              value={targetThroughput}
              onChange={(e) => setTargetThroughput(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
              placeholder="e.g., 50-100 kg/day"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Available Components */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-serif text-gray-900">Available Components</h2>
          
          {categories.map(category => (
            <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Package size={18} className="text-brand-green" />
                {category}
              </h3>
              <div className="space-y-2">
                {availableComponents
                  .filter(c => c.category === category)
                  .map(component => (
                    <div
                      key={component.id}
                      className="flex items-start justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{component.name}</h4>
                        <p className="text-xs text-gray-600 mt-1">{component.description}</p>
                        <div className="flex gap-4 mt-2 text-xs text-gray-500">
                          <span>💰 ${(component.price / 1000).toFixed(0)}K</span>
                          <span>⏱️ {component.leadTime}w lead time</span>
                        </div>
                      </div>
                      <button
                        onClick={() => addComponent(component)}
                        className="ml-4 bg-brand-green text-white p-2 rounded-lg hover:bg-brand-green/90 transition-colors"
                        disabled={userRole === 'operations'}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Configuration Summary */}
        <div className="space-y-4">
          <h2 className="text-lg font-serif text-gray-900">Configuration Summary</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Selected Components</h3>
            
            {selectedComponents.length === 0 ? (
              <p className="text-sm text-gray-500 italic">No components selected</p>
            ) : (
              <div className="space-y-2">
                {selectedComponents.map(component => (
                  <div key={component.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{component.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <input
                          type="number"
                          min="1"
                          value={component.quantity}
                          onChange={(e) => updateQuantity(component.id, parseInt(e.target.value))}
                          className="w-16 px-2 py-1 text-xs border border-gray-300 rounded"
                          disabled={userRole === 'operations'}
                        />
                        <span className="text-xs text-gray-600">
                          ${(component.price * component.quantity / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeComponent(component.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                      disabled={userRole === 'operations'}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cost Summary */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Financial Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-sm text-gray-600">Total CapEx</span>
                <span className="text-lg font-bold text-gray-900">
                  ${(totalCapEx / 1000).toFixed(0)}K
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Est. Monthly OpEx</span>
                <span className="text-sm font-semibold text-gray-700">
                  ${(estimatedOpEx / 1000).toFixed(1)}K/mo
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Est. ROI Period</span>
                <span className="text-sm font-semibold text-brand-green">
                  {estimatedROI} months
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-sm text-gray-600">Lead Time</span>
                <span className="text-sm font-semibold text-gray-900">
                  {maxLeadTime} weeks
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-brand-green/10 rounded-lg p-4 border border-brand-green/20">
            <h3 className="font-semibold text-brand-green mb-3 text-sm">System Highlights</h3>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="flex items-start gap-2">
                <Beaker size={14} className="text-brand-green mt-0.5" />
                <span>Low Pressure Operation (80-170 PSI)</span>
              </div>
              <div className="flex items-start gap-2">
                <Gauge size={14} className="text-brand-green mt-0.5" />
                <span>30-50 min cycle times</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-brand-green mt-0.5" />
                <span>&gt; 99% solvent recovery</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          {userRole !== 'operations' && (
            <div className="space-y-2">
              <button
                className="w-full bg-brand-green text-white py-2 px-4 rounded-lg hover:bg-brand-green/90 transition-colors font-semibold text-sm"
                disabled={selectedComponents.length === 0}
              >
                Generate Quote
              </button>
              {userRole === 'sales' && (
                <button
                  className="w-full border border-brand-green text-brand-green py-2 px-4 rounded-lg hover:bg-brand-green/5 transition-colors font-semibold text-sm"
                  disabled={selectedComponents.length === 0}
                >
                  Request Engineering Review
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Comparison with Legacy Systems */}
      {totalCapEx > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-serif text-gray-900 mb-4">Competitive Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">COMERG LPE</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CO2 System</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ethanol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-gray-900">CapEx</td>
                  <td className="px-4 py-3 font-semibold text-brand-green">${(totalCapEx / 1000).toFixed(0)}K</td>
                  <td className="px-4 py-3 text-gray-600">${(totalCapEx * 5 / 1000).toFixed(0)}K</td>
                  <td className="px-4 py-3 text-gray-600">${(totalCapEx * 2 / 1000).toFixed(0)}K</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">Cycle Time</td>
                  <td className="px-4 py-3 font-semibold text-brand-green">30-50 min</td>
                  <td className="px-4 py-3 text-gray-600">300 min</td>
                  <td className="px-4 py-3 text-gray-600">60-120 min</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">Pressure</td>
                  <td className="px-4 py-3 font-semibold text-brand-green">80-170 PSI</td>
                  <td className="px-4 py-3 text-gray-600">3000-5000 PSI</td>
                  <td className="px-4 py-3 text-gray-600">Ambient</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">Winterization</td>
                  <td className="px-4 py-3 font-semibold text-brand-green">Optional</td>
                  <td className="px-4 py-3 text-gray-600">Mandatory</td>
                  <td className="px-4 py-3 text-gray-600">Mandatory</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">Safety Risk</td>
                  <td className="px-4 py-3 font-semibold text-brand-green">Very Low</td>
                  <td className="px-4 py-3 text-gray-600">Low</td>
                  <td className="px-4 py-3 text-gray-600">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemBuilder;
