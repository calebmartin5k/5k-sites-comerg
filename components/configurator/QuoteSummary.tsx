'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { FileText, Download, Mail, CheckCircle } from 'lucide-react';

const QuoteSummary: React.FC = () => {
  const { qualification, selectedModules, totalPrice, maxLeadTime, leadScore } = useConfiguratorStore();

  const getLeadQuality = (score: number) => {
    if (score >= 80) return { label: 'High Priority', color: 'text-green-500', bg: 'bg-green-500/20' };
    if (score >= 60) return { label: 'Medium Priority', color: 'text-yellow-500', bg: 'bg-yellow-500/20' };
    if (score >= 40) return { label: 'Low Priority', color: 'text-orange-500', bg: 'bg-orange-500/20' };
    return { label: 'Unqualified', color: 'text-gray-500', bg: 'bg-gray-500/20' };
  };

  const quality = getLeadQuality(leadScore);

  const canGenerateQuote = qualification.companyName && selectedModules.length > 0;

  const handleGenerateQuote = () => {
    // In a real implementation, this would generate a PDF or send to CRM
    console.log('Generating quote:', {
      qualification,
      selectedModules,
      totalPrice,
      maxLeadTime,
      leadScore,
    });
    alert('Quote generated! In a real implementation, this would create a PDF and sync to your CRM.');
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-[1px] bg-brand-gold"></div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Step 3: Generate Quote
        </h3>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-serif text-white">
        Quote <span className="italic text-brand-green">Summary</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lead Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 bg-brand-dark/50 border border-white/10">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <FileText size={18} className="text-brand-green" />
              Lead Information
            </h3>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500 mb-1">Company</div>
                <div className="text-white">
                  {qualification.companyName || '—'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Industry</div>
                <div className="text-white capitalize">
                  {qualification.industry || '—'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Budget Range</div>
                <div className="text-white">
                  {qualification.budget ? qualification.budget.replace(/_/g, ' ').replace('k', 'K') : '—'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Timeline</div>
                <div className="text-white">
                  {qualification.timeline ? qualification.timeline.replace(/_/g, ' ') : '—'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Authority Level</div>
                <div className="text-white capitalize">
                  {qualification.authority ? qualification.authority.replace(/_/g, ' ') : '—'}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Need Level</div>
                <div className="text-white capitalize">
                  {qualification.need || '—'}
                </div>
              </div>
            </div>
          </div>

          {/* System Configuration */}
          <div className="p-6 bg-brand-dark/50 border border-white/10">
            <h3 className="text-white font-bold mb-4">System Configuration</h3>
            
            {selectedModules.length > 0 ? (
              <div className="space-y-3">
                {selectedModules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                  >
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{module.name}</div>
                      <div className="text-xs text-gray-500">{module.description}</div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-white font-bold">${(module.price / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-gray-500">{module.leadTime} weeks</div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t-2 border-brand-green/30 flex items-center justify-between">
                  <div className="text-white font-bold">Total System Price</div>
                  <div className="text-2xl font-serif text-brand-green">
                    ${(totalPrice / 1000).toFixed(0)}K
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No modules selected</p>
            )}
          </div>
        </div>

        {/* Quote Actions */}
        <div className="space-y-6">
          {/* Lead Score Card */}
          <div className={`p-6 ${quality.bg} border border-white/10`}>
            <div className="text-center mb-4">
              <div className={`text-5xl font-serif ${quality.color} mb-2`}>
                {leadScore}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                Lead Score
              </div>
              <div className={`inline-block px-4 py-2 ${quality.bg} border border-white/10`}>
                <div className={`text-sm font-bold ${quality.color}`}>
                  {quality.label}
                </div>
              </div>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-2 border-t border-white/10">
                <span className="text-gray-400">Budget</span>
                <span className="text-white">{qualification.budget ? '✓' : '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-white/10">
                <span className="text-gray-400">Authority</span>
                <span className="text-white">{qualification.authority ? '✓' : '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-white/10">
                <span className="text-gray-400">Need</span>
                <span className="text-white">{qualification.need ? '✓' : '—'}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-white/10">
                <span className="text-gray-400">Timeline</span>
                <span className="text-white">{qualification.timeline ? '✓' : '—'}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-brand-dark/50 border border-white/10 text-center">
              <div className="text-2xl font-serif text-white mb-1">
                {selectedModules.length}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Modules
              </div>
            </div>
            <div className="p-4 bg-brand-dark/50 border border-white/10 text-center">
              <div className="text-2xl font-serif text-brand-green mb-1">
                {maxLeadTime}w
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Lead Time
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleGenerateQuote}
              disabled={!canGenerateQuote}
              className={`w-full py-4 font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 ${
                canGenerateQuote
                  ? 'bg-brand-green text-white hover:bg-brand-green/90'
                  : 'bg-gray-800 text-gray-600 cursor-not-allowed'
              }`}
            >
              <CheckCircle size={16} />
              Generate Quote
            </button>

            <button
              disabled={!canGenerateQuote}
              className={`w-full py-3 font-bold uppercase tracking-widest text-xs border transition-colors flex items-center justify-center gap-2 ${
                canGenerateQuote
                  ? 'border-white/20 text-white hover:border-white/40'
                  : 'border-gray-800 text-gray-600 cursor-not-allowed'
              }`}
            >
              <Download size={16} />
              Export PDF
            </button>

            <button
              disabled={!canGenerateQuote}
              className={`w-full py-3 font-bold uppercase tracking-widest text-xs border transition-colors flex items-center justify-center gap-2 ${
                canGenerateQuote
                  ? 'border-white/20 text-white hover:border-white/40'
                  : 'border-gray-800 text-gray-600 cursor-not-allowed'
              }`}
            >
              <Mail size={16} />
              Email Quote
            </button>
          </div>

          {!canGenerateQuote && (
            <p className="text-xs text-gray-500 text-center">
              Complete qualification and add modules to generate quote
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteSummary;
