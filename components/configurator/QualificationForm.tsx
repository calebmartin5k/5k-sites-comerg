'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { ClipboardCheck, Building, TrendingUp, Clock, DollarSign } from 'lucide-react';

const QualificationForm: React.FC = () => {
  const { qualification, updateQualification, leadScore } = useConfiguratorStore();

  const getLeadQuality = (score: number) => {
    if (score >= 80) return { label: 'High Priority', color: 'text-green-500', bg: 'bg-green-500/20' };
    if (score >= 60) return { label: 'Medium Priority', color: 'text-yellow-500', bg: 'bg-yellow-500/20' };
    if (score >= 40) return { label: 'Low Priority', color: 'text-orange-500', bg: 'bg-orange-500/20' };
    return { label: 'Unqualified', color: 'text-gray-500', bg: 'bg-gray-500/20' };
  };

  const quality = getLeadQuality(leadScore);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-brand-gold"></div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Step 1: Lead Qualification
            </h3>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Discovery Questions <span className="italic text-brand-green">(BANT Framework)</span>
          </h2>
        </div>

        {leadScore > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`px-6 py-4 ${quality.bg} border border-white/10`}
          >
            <div className="text-center">
              <div className={`text-3xl font-serif ${quality.color} mb-1`}>
                {leadScore}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400">
                Lead Score
              </div>
              <div className={`text-xs font-bold mt-2 ${quality.color}`}>
                {quality.label}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
        Ask these questions to understand the prospect's situation and qualify the opportunity. 
        The system automatically calculates a lead score based on Budget, Authority, Need, and Timeline.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Budget */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm font-bold text-white">
            <DollarSign size={18} className="text-brand-green" />
            Budget Range
          </label>
          <select
            value={qualification.budget}
            onChange={(e) => updateQualification('budget', e.target.value)}
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 text-white focus:border-brand-green focus:outline-none"
          >
            <option value="">Select budget range...</option>
            <option value="under_100k">Under $100K</option>
            <option value="100k_500k">$100K - $500K</option>
            <option value="500k_1m">$500K - $1M</option>
            <option value="over_1m">Over $1M</option>
          </select>
          <p className="text-xs text-gray-500">What budget has been allocated for this project?</p>
        </div>

        {/* Authority */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm font-bold text-white">
            <ClipboardCheck size={18} className="text-brand-green" />
            Decision Authority
          </label>
          <select
            value={qualification.authority}
            onChange={(e) => updateQualification('authority', e.target.value)}
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 text-white focus:border-brand-green focus:outline-none"
          >
            <option value="">Select authority level...</option>
            <option value="decision_maker">Final Decision Maker</option>
            <option value="influencer">Key Influencer</option>
            <option value="researcher">Researcher/Scout</option>
          </select>
          <p className="text-xs text-gray-500">What's your role in the purchasing decision?</p>
        </div>

        {/* Need */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm font-bold text-white">
            <TrendingUp size={18} className="text-brand-green" />
            Business Need
          </label>
          <select
            value={qualification.need}
            onChange={(e) => updateQualification('need', e.target.value)}
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 text-white focus:border-brand-green focus:outline-none"
          >
            <option value="">Select urgency level...</option>
            <option value="immediate">Immediate Need (Problem to solve)</option>
            <option value="planning">Planning Phase (Confirmed project)</option>
            <option value="exploring">Exploring Options (Research mode)</option>
          </select>
          <p className="text-xs text-gray-500">What's driving this inquiry?</p>
        </div>

        {/* Timeline */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm font-bold text-white">
            <Clock size={18} className="text-brand-green" />
            Purchase Timeline
          </label>
          <select
            value={qualification.timeline}
            onChange={(e) => updateQualification('timeline', e.target.value)}
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 text-white focus:border-brand-green focus:outline-none"
          >
            <option value="">Select expected timeline...</option>
            <option value="under_3months">Under 3 Months</option>
            <option value="3_6months">3-6 Months</option>
            <option value="6_12months">6-12 Months</option>
            <option value="over_12months">Over 12 Months</option>
          </select>
          <p className="text-xs text-gray-500">When do you need this operational?</p>
        </div>

        {/* Company Name */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm font-bold text-white">
            <Building size={18} className="text-brand-green" />
            Company Name
          </label>
          <input
            type="text"
            value={qualification.companyName}
            onChange={(e) => updateQualification('companyName', e.target.value)}
            placeholder="ABC Extractions Inc."
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none"
          />
        </div>

        {/* Industry */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm font-bold text-white">
            Industry Sector
          </label>
          <select
            value={qualification.industry}
            onChange={(e) => updateQualification('industry', e.target.value)}
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 text-white focus:border-brand-green focus:outline-none"
          >
            <option value="">Select industry...</option>
            <option value="hemp">Hemp/Cannabis</option>
            <option value="pharmaceutical">Pharmaceutical</option>
            <option value="food">Food & Flavor</option>
            <option value="fragrance">Fragrance</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Current Method */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm font-bold text-white">
            Current Extraction Method
          </label>
          <select
            value={qualification.currentMethod}
            onChange={(e) => updateQualification('currentMethod', e.target.value)}
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 text-white focus:border-brand-green focus:outline-none"
          >
            <option value="">Select current method...</option>
            <option value="co2">Supercritical CO₂</option>
            <option value="ethanol">Ethanol</option>
            <option value="hydrocarbon">Hydrocarbon (BHO)</option>
            <option value="none">No Current System</option>
          </select>
        </div>

        {/* Throughput */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm font-bold text-white">
            Target Daily Throughput
          </label>
          <input
            type="text"
            value={qualification.throughput}
            onChange={(e) => updateQualification('throughput', e.target.value)}
            placeholder="e.g., 50kg/day"
            className="w-full px-4 py-3 bg-brand-dark border border-white/10 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none"
          />
        </div>
      </div>

      {leadScore > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-brand-dark/50 border border-white/10"
        >
          <h4 className="text-white font-bold mb-4 text-sm">Lead Scoring Breakdown:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <div className="text-gray-500 mb-1">Budget</div>
              <div className="text-white font-bold">
                {qualification.budget ? '✓' : '—'} <span className="text-gray-500">/ 30</span>
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Authority</div>
              <div className="text-white font-bold">
                {qualification.authority ? '✓' : '—'} <span className="text-gray-500">/ 25</span>
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Need</div>
              <div className="text-white font-bold">
                {qualification.need ? '✓' : '—'} <span className="text-gray-500">/ 25</span>
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Timeline</div>
              <div className="text-white font-bold">
                {qualification.timeline ? '✓' : '—'} <span className="text-gray-500">/ 20</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QualificationForm;
