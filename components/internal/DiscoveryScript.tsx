'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, Circle, AlertCircle } from 'lucide-react';

interface DiscoveryScriptProps {
  userRole: string;
}

interface FormData {
  // BANT
  budget: string;
  budgetRange: string;
  authority: string;
  decisionMakers: string;
  need: string;
  currentMethod: string;
  painPoints: string[];
  timeline: string;
  
  // GPCT
  goals: string;
  throughput: string;
  plans: string;
  challenges: string;
  technicalReqs: string[];
}

const DiscoveryScript: React.FC<DiscoveryScriptProps> = ({ userRole }) => {
  const [step, setStep] = useState(1);
  const [leadScore, setLeadScore] = useState(0);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const painPoints = [
    'High operational costs',
    'Long cycle times',
    'Poor extract quality',
    'Safety concerns',
    'Complex winterization',
    'High energy usage'
  ];

  const technicalReqs = [
    'GMP compliance',
    'Gas Chromatography integration',
    'Automated batch tracking',
    'Remote monitoring',
    'Multi-solvent capability'
  ];

  const calculateScore = (data: any) => {
    let score = 0;
    
    // Budget scoring
    if (data.budgetRange === '$500K+') score += 30;
    else if (data.budgetRange === '$250K-$500K') score += 25;
    else if (data.budgetRange === '$100K-$250K') score += 15;
    
    // Authority scoring
    if (data.authority === 'Decision Maker') score += 25;
    else if (data.authority === 'Influencer') score += 15;
    
    // Need scoring (pain points)
    score += (data.painPoints?.length || 0) * 5;
    
    // Timeline scoring
    if (data.timeline === 'Immediate (0-3 months)') score += 20;
    else if (data.timeline === 'Short-term (3-6 months)') score += 15;
    else if (data.timeline === 'Mid-term (6-12 months)') score += 10;
    
    return Math.min(score, 100);
  };

  const onSubmit = (data: FormData) => {
    const score = calculateScore(data);
    setLeadScore(score);
    console.log('Discovery Data:', data);
    console.log('Lead Score:', score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-red-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-blue-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Hot Lead';
    if (score >= 60) return 'Warm Lead';
    return 'Cold Lead';
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Guided Discovery Script</h1>
        <p className="text-gray-600">Follow the BANT & GPCT framework to qualify leads effectively</p>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((num) => (
            <React.Fragment key={num}>
              <div className="flex items-center">
                {step > num ? (
                  <CheckCircle className="text-brand-green" size={24} />
                ) : step === num ? (
                  <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white text-sm font-bold">
                    {num}
                  </div>
                ) : (
                  <Circle className="text-gray-300" size={24} />
                )}
                <span className={`ml-2 text-sm font-medium ${step >= num ? 'text-gray-900' : 'text-gray-400'}`}>
                  {num === 1 ? 'Budget' : num === 2 ? 'Authority' : num === 3 ? 'Need' : 'Timeline'}
                </span>
              </div>
              {num < 4 && <div className={`flex-1 h-0.5 mx-4 ${step > num ? 'bg-brand-green' : 'bg-gray-200'}`} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1: Budget */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-serif text-gray-900 mb-6">Budget Assessment</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Has the prospect allocated a budget for extraction equipment?
                </label>
                <select
                  {...register('budget', { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="Yes - Allocated">Yes - Budget Allocated</option>
                  <option value="Yes - Flexible">Yes - Flexible Budget</option>
                  <option value="No - Exploring">No - Exploring Options</option>
                  <option value="No - Future">No - Future Planning</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  {...register('budgetRange', { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                >
                  <option value="">Select range...</option>
                  <option value="$500K+">$500K+</option>
                  <option value="$250K-$500K">$250K - $500K</option>
                  <option value="$100K-$250K">$100K - $250K</option>
                  <option value="Under $100K">Under $100K</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Next: Authority
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Authority */}
        {step === 2 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-serif text-gray-900 mb-6">Authority & Decision Making</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What is the contact&apos;s role in the decision process?
                </label>
                <select
                  {...register('authority', { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                >
                  <option value="">Select role...</option>
                  <option value="Decision Maker">Decision Maker (CEO, Owner)</option>
                  <option value="Influencer">Influencer (Director, Manager)</option>
                  <option value="Gatekeeper">Gatekeeper (Procurement)</option>
                  <option value="End User">End User (Operator)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Who else is involved in the decision?
                </label>
                <textarea
                  {...register('decisionMakers')}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="List other stakeholders, their roles, and influence level..."
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-gray-600 hover:text-gray-900 px-6 py-2"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Next: Need
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Need */}
        {step === 3 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-serif text-gray-900 mb-6">Need & Pain Points</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Extraction Method
                </label>
                <select
                  {...register('currentMethod', { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                >
                  <option value="">Select method...</option>
                  <option value="CO2">Supercritical CO2</option>
                  <option value="Ethanol">Ethanol Extraction</option>
                  <option value="Hydrocarbon">Hydrocarbon (BHO/PHO)</option>
                  <option value="None">No Current System</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Primary Pain Points (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {painPoints.map((point) => (
                    <label key={point} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('painPoints')}
                        value={point}
                        className="rounded text-brand-green focus:ring-brand-green"
                      />
                      <span className="text-sm text-gray-700">{point}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Goals
                </label>
                <textarea
                  {...register('goals')}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="What are they trying to achieve? Increase throughput? Improve quality? Reduce costs?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Daily Throughput (kg)
                </label>
                <input
                  type="text"
                  {...register('throughput')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="e.g., 50-100 kg/day"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-gray-600 hover:text-gray-900 px-6 py-2"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Next: Timeline
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Timeline */}
        {step === 4 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-serif text-gray-900 mb-6">Timeline & Technical Requirements</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purchase Timeline
                </label>
                <select
                  {...register('timeline', { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                >
                  <option value="">Select timeline...</option>
                  <option value="Immediate (0-3 months)">Immediate (0-3 months)</option>
                  <option value="Short-term (3-6 months)">Short-term (3-6 months)</option>
                  <option value="Mid-term (6-12 months)">Mid-term (6-12 months)</option>
                  <option value="Long-term (12+ months)">Long-term (12+ months)</option>
                  <option value="No specific timeline">No specific timeline</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Plans & Alternatives
                </label>
                <textarea
                  {...register('plans')}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="Are they evaluating other solutions? What&apos;s their backup plan?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Challenges & Obstacles
                </label>
                <textarea
                  {...register('challenges')}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="What might prevent or delay this purchase?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Technical Requirements
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {technicalReqs.map((req) => (
                    <label key={req} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('technicalReqs')}
                        value={req}
                        className="rounded text-brand-green focus:ring-brand-green"
                      />
                      <span className="text-sm text-gray-700">{req}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="text-gray-600 hover:text-gray-900 px-6 py-2"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green/90 transition-colors font-semibold"
              >
                Calculate Lead Score
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Lead Score Result */}
      {leadScore > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif text-gray-900">Lead Score Result</h2>
            <AlertCircle className="text-brand-green" size={24} />
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <div className={`text-6xl font-bold ${getScoreColor(leadScore)} mb-2`}>
                {leadScore}
              </div>
              <div className={`text-lg font-semibold ${getScoreColor(leadScore)}`}>
                {getScoreLabel(leadScore)}
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className={`h-4 rounded-full ${
                leadScore >= 80 ? 'bg-red-600' :
                leadScore >= 60 ? 'bg-yellow-600' :
                'bg-blue-600'
              }`}
              style={{ width: `${leadScore}%` }}
            ></div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Recommended Next Steps:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {leadScore >= 80 && (
                <>
                  <li>• Schedule demo with engineering team immediately</li>
                  <li>• Prepare custom system configuration</li>
                  <li>• Fast-track quote generation</li>
                  <li>• Assign senior sales rep as primary contact</li>
                </>
              )}
              {leadScore >= 60 && leadScore < 80 && (
                <>
                  <li>• Send detailed technical documentation</li>
                  <li>• Schedule follow-up call in 1-2 weeks</li>
                  <li>• Provide case study relevant to their industry</li>
                  <li>• Continue nurturing via email campaign</li>
                </>
              )}
              {leadScore < 60 && (
                <>
                  <li>• Add to long-term nurture campaign</li>
                  <li>• Send educational content about LPE benefits</li>
                  <li>• Check back in 30-60 days</li>
                  <li>• Focus on building authority and need recognition</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscoveryScript;
