'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useROIStore } from '@/store/roiStore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from 'recharts';
import { TrendingDown, DollarSign, Zap, Clock } from 'lucide-react';

const ComparisonCharts: React.FC = () => {
  const {
    currentCapEx,
    currentOpEx,
    lpeCapEx,
    lpeOpEx,
    dailyThroughput,
    currentMethod,
    operatingDaysPerYear,
  } = useROIStore();

  const annualSavings = currentOpEx - lpeOpEx;
  const capExSavings = currentCapEx - lpeCapEx;
  const roiMonths = lpeCapEx > 0 ? (lpeCapEx / (annualSavings / 12)) : 0;
  const savingsPercentage = currentOpEx > 0 ? ((annualSavings / currentOpEx) * 100) : 0;

  // Cost comparison data
  const costComparisonData = [
    {
      name: 'Capital Investment',
      current: currentCapEx,
      lpe: lpeCapEx,
    },
    {
      name: 'Annual Operating',
      current: currentOpEx,
      lpe: lpeOpEx,
    },
  ];

  // ROI Timeline data (5 years)
  const roiTimelineData = useMemo(() => {
    const years = 5;
    const data = [];
    
    for (let year = 0; year <= years; year++) {
      const currentTotal = currentCapEx + (currentOpEx * year);
      const lpeTotal = lpeCapEx + (lpeOpEx * year);
      
      data.push({
        year: year === 0 ? 'Start' : `Year ${year}`,
        current: Math.round(currentTotal),
        lpe: Math.round(lpeTotal),
        savings: Math.round(currentTotal - lpeTotal),
      });
    }
    
    return data;
  }, [currentCapEx, currentOpEx, lpeCapEx, lpeOpEx]);

  // Find break-even point
  const breakEvenData = useMemo(() => {
    const months = 60; // 5 years
    const data = [];
    
    for (let month = 0; month <= months; month++) {
      const currentTotal = currentCapEx + ((currentOpEx / 12) * month);
      const lpeTotal = lpeCapEx + ((lpeOpEx / 12) * month);
      
      data.push({
        month,
        current: Math.round(currentTotal),
        lpe: Math.round(lpeTotal),
      });
    }
    
    return data;
  }, [currentCapEx, currentOpEx, lpeCapEx, lpeOpEx]);

  const methodName = {
    co2: 'Supercritical CO₂',
    ethanol: 'Ethanol',
    hydrocarbon: 'Hydrocarbon',
  }[currentMethod];

  const energySavings = ((17.5 - 0.4) / 17.5) * 100; // CO2 vs LPE
  const cycleTimeImprovement = ((300 - 45) / 300) * 100;

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="w-16 h-[1px] bg-brand-gold"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Step 3: ROI Analysis
        </h3>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-serif text-white">
          The <span className="italic text-brand-green">COMERG Advantage</span>
        </h2>
        
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          Based on your inputs, here's a comprehensive comparison showing how COMERG's LPE technology delivers superior economics compared to {methodName}.
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gradient-to-br from-brand-green/20 to-brand-green/5 border border-brand-green/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-brand-green/20 rounded-full">
              <DollarSign size={20} className="text-brand-green" />
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">Annual Savings</span>
          </div>
          <div className="text-3xl font-serif text-white">
            ${(annualSavings / 1000).toFixed(0)}K
          </div>
          <div className="text-xs text-brand-green mt-1">
            {savingsPercentage.toFixed(0)}% reduction in OpEx
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 bg-brand-dark/50 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/5 rounded-full">
              <Clock size={20} className="text-brand-gold" />
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">ROI Timeline</span>
          </div>
          <div className="text-3xl font-serif text-white">
            {roiMonths.toFixed(1)} <span className="text-lg">months</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Break-even point
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-brand-dark/50 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/5 rounded-full">
              <Zap size={20} className="text-brand-gold" />
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">Energy Savings</span>
          </div>
          <div className="text-3xl font-serif text-white">
            {energySavings.toFixed(0)}%
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Less energy consumption
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-brand-dark/50 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-white/5 rounded-full">
              <TrendingDown size={20} className="text-brand-gold" />
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">CapEx Savings</span>
          </div>
          <div className="text-3xl font-serif text-white">
            ${(capExSavings / 1000).toFixed(0)}K
          </div>
          <div className="text-xs text-gray-500 mt-1">
            80% lower initial investment
          </div>
        </motion.div>
      </div>

      {/* Cost Comparison Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-8 bg-brand-dark/50 border border-white/10"
      >
        <h3 className="text-xl font-serif text-white mb-6">
          Cost Comparison: <span className="text-brand-green">{methodName} vs COMERG LPE</span>
        </h3>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={costComparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#9ca3af"
              style={{ fontSize: '12px' }}
              tickFormatter={(value: number | undefined) => value ? `$${(value / 1000).toFixed(0)}K` : '$0K'}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a2e1a',
                border: '1px solid #6E9934',
                borderRadius: '4px',
              }}
              formatter={(value: number | undefined) => value ? `$${value.toLocaleString()}` : '$0'}
            />
            <Legend />
            <Bar dataKey="current" fill="#D4C5A5" name={methodName} />
            <Bar dataKey="lpe" fill="#6E9934" name="COMERG LPE" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* ROI Timeline Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-8 bg-brand-dark/50 border border-white/10"
      >
        <h3 className="text-xl font-serif text-white mb-2">
          5-Year Total Cost of Ownership
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          Lower is better. See where the lines cross to identify your break-even point.
        </p>
        
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={roiTimelineData}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4C5A5" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#D4C5A5" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorLpe" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6E9934" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6E9934" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis
              dataKey="year"
              stroke="#9ca3af"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="#9ca3af"
              style={{ fontSize: '12px' }}
              tickFormatter={(value: number | undefined) => value ? `$${(value / 1000).toFixed(0)}K` : '$0K'}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a2e1a',
                border: '1px solid #6E9934',
                borderRadius: '4px',
              }}
              formatter={(value: number | undefined) => value ? `$${value.toLocaleString()}` : '$0'}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#D4C5A5"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCurrent)"
              name={methodName}
            />
            <Area
              type="monotone"
              dataKey="lpe"
              stroke="#6E9934"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorLpe)"
              name="COMERG LPE"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Break-even Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-8 bg-gradient-to-br from-brand-green/10 to-transparent border border-brand-green/20"
      >
        <div className="flex items-start gap-6">
          <div className="p-3 bg-brand-green/20 rounded-full">
            <TrendingDown size={24} className="text-brand-green" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-serif text-white mb-3">
              Value Inflection Point
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              At your current production volume of <strong className="text-white">{dailyThroughput}kg/day</strong> over <strong className="text-white">{operatingDaysPerYear} days/year</strong>, 
              the COMERG LPE system reaches break-even in approximately <strong className="text-brand-green">{roiMonths.toFixed(1)} months</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              After that point, you'll save approximately <strong className="text-brand-green">${(annualSavings / 1000).toFixed(0)}K annually</strong> compared 
              to your current {methodName} system. Over 5 years, your cumulative savings will reach <strong className="text-brand-green">${((annualSavings * 5 + capExSavings) / 1000).toFixed(0)}K</strong>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Technical Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="p-6 bg-brand-dark/50 border border-white/10">
          <h4 className="text-brand-green font-bold mb-2 text-sm uppercase tracking-wider">
            Process Efficiency
          </h4>
          <p className="text-2xl font-serif text-white mb-2">85%</p>
          <p className="text-xs text-gray-500">
            Faster cycle times (30-50 min vs 300 min)
          </p>
        </div>

        <div className="p-6 bg-brand-dark/50 border border-white/10">
          <h4 className="text-brand-green font-bold mb-2 text-sm uppercase tracking-wider">
            Solvent Recovery
          </h4>
          <p className="text-2xl font-serif text-white mb-2">99.9%</p>
          <p className="text-xs text-gray-500">
            Minimal solvent loss vs 90-95% with conventional methods
          </p>
        </div>

        <div className="p-6 bg-brand-dark/50 border border-white/10">
          <h4 className="text-brand-green font-bold mb-2 text-sm uppercase tracking-wider">
            Winterization Reduction
          </h4>
          <p className="text-2xl font-serif text-white mb-2">&lt;5%</p>
          <p className="text-xs text-gray-500">
            Wax content - eliminates expensive post-processing
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ComparisonCharts;
