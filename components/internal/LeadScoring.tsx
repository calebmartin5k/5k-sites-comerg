'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface LeadScoringProps {
  userRole: string;
}

interface Lead {
  id: number;
  company: string;
  contact: string;
  industry: string;
  score: number;
  scoreChange: number;
  budget: string;
  authority: string;
  timeline: string;
  engagement: number;
  lastActivity: string;
}

const LeadScoring: React.FC<LeadScoringProps> = ({ userRole }) => {
  const leads: Lead[] = [
    {
      id: 1,
      company: 'Oregon Botanicals LLC',
      contact: 'Sarah Chen',
      industry: 'Craft Cannabis',
      score: 92,
      scoreChange: 8,
      budget: '$450K',
      authority: 'Decision Maker',
      timeline: '0-3 months',
      engagement: 85,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      company: 'PharmaBio Solutions',
      contact: 'Dr. James Rodriguez',
      industry: 'Pharmaceutical',
      score: 88,
      scoreChange: -3,
      budget: '$1.2M',
      authority: 'Influencer',
      timeline: '3-6 months',
      engagement: 72,
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      company: 'Natural Flavors Co',
      contact: 'Maria Thompson',
      industry: 'Food & Flavor',
      score: 75,
      scoreChange: 12,
      budget: '$320K',
      authority: 'Decision Maker',
      timeline: '6-12 months',
      engagement: 68,
      lastActivity: '3 days ago'
    },
    {
      id: 4,
      company: 'Essence Extracts',
      contact: 'Tom Wilson',
      industry: 'Fragrance',
      score: 68,
      scoreChange: 0,
      budget: '$180K',
      authority: 'Gatekeeper',
      timeline: '6-12 months',
      engagement: 45,
      lastActivity: '1 week ago'
    },
    {
      id: 5,
      company: 'Green Valley Hemp',
      contact: 'Lisa Martinez',
      industry: 'Hemp Processing',
      score: 82,
      scoreChange: 5,
      budget: '$550K',
      authority: 'Decision Maker',
      timeline: '0-3 months',
      engagement: 78,
      lastActivity: '4 hours ago'
    },
    {
      id: 6,
      company: 'Herbal Innovations',
      contact: 'David Park',
      industry: 'Nutraceutical',
      score: 71,
      scoreChange: -5,
      budget: '$290K',
      authority: 'Influencer',
      timeline: '6-12 months',
      engagement: 52,
      lastActivity: '5 days ago'
    },
    {
      id: 7,
      company: 'Rose & Co Fragrances',
      contact: 'Emily Johnson',
      industry: 'Fragrance',
      score: 79,
      scoreChange: 15,
      budget: '$380K',
      authority: 'Decision Maker',
      timeline: '3-6 months',
      engagement: 81,
      lastActivity: '1 day ago'
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-red-600 bg-red-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-blue-600 bg-blue-50';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return { label: 'Hot', color: 'bg-red-100 text-red-800 border-red-200' };
    if (score >= 60) return { label: 'Warm', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' };
    return { label: 'Cold', color: 'bg-blue-100 text-blue-800 border-blue-200' };
  };

  const scoringFactors = [
    { name: 'Budget (B)', weight: 30, description: 'Budget allocated and range' },
    { name: 'Authority (A)', weight: 25, description: 'Decision-making power' },
    { name: 'Need (N)', weight: 20, description: 'Number and severity of pain points' },
    { name: 'Timeline (T)', weight: 20, description: 'Purchase timeline urgency' },
    { name: 'Engagement', weight: 5, description: 'Website and email interaction' },
  ];

  const sortedLeads = [...leads].sort((a, b) => b.score - a.score);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Lead Scoring Algorithm</h1>
        <p className="text-gray-600">Predictive scoring based on BANT framework and behavioral signals</p>
      </div>

      {/* Scoring Methodology */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-serif text-gray-900 mb-4">Scoring Methodology</h2>
        <p className="text-sm text-gray-600 mb-4">
          Lead scores are calculated using a weighted algorithm based on qualification factors and engagement metrics.
        </p>
        
        <div className="space-y-3">
          {scoringFactors.map((factor) => (
            <div key={factor.name} className="flex items-center gap-4">
              <div className="w-32">
                <span className="text-sm font-semibold text-gray-900">{factor.name}</span>
                <span className="text-xs text-gray-500 ml-2">{factor.weight}%</span>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-brand-green h-2 rounded-full"
                    style={{ width: `${factor.weight * 3.33}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-64 text-xs text-gray-600">{factor.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-brand-green/10 rounded-lg border border-brand-green/20">
          <p className="text-sm text-gray-700">
            <strong className="text-brand-green">Formula:</strong> Score = (0.3 × Budget) + (0.25 × Authority) + (0.2 × Need) + (0.2 × Timeline) + (0.05 × Engagement)
          </p>
        </div>
      </div>

      {/* Score Distribution */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Hot Leads</h3>
            <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">80-100</div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {leads.filter(l => l.score >= 80).length}
          </p>
          <p className="text-xs text-gray-500 mt-1">High priority, immediate action</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Warm Leads</h3>
            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">60-79</div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {leads.filter(l => l.score >= 60 && l.score < 80).length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Active nurturing required</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Cold Leads</h3>
            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">0-59</div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {leads.filter(l => l.score < 60).length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Long-term nurture campaign</p>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-serif text-gray-900">All Leads</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Authority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedLeads.map((lead) => {
                const badge = getScoreBadge(lead.score);
                return (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${getScoreColor(lead.score).split(' ')[0]}`}>
                            {lead.score}
                          </span>
                          {lead.scoreChange > 0 && (
                            <TrendingUp size={14} className="text-green-600" />
                          )}
                          {lead.scoreChange < 0 && (
                            <TrendingDown size={14} className="text-red-600" />
                          )}
                          {lead.scoreChange === 0 && (
                            <Minus size={14} className="text-gray-400" />
                          )}
                        </div>
                        <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full border ${badge.color}`}>
                          {badge.label}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{lead.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{lead.contact}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{lead.industry}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{lead.budget}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{lead.authority}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{lead.timeline}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-brand-green h-2 rounded-full"
                            style={{ width: `${lead.engagement}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600">{lead.engagement}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xs text-gray-500">{lead.lastActivity}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-serif text-gray-900 mb-4">AI-Powered Insights</h2>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-sm font-semibold text-red-900 mb-1">🔥 Urgent Action Required</h3>
            <p className="text-sm text-red-800">
              Oregon Botanicals LLC and Green Valley Hemp both have hot scores (90+) and immediate timelines. 
              Schedule demos within 48 hours to maintain momentum.
            </p>
          </div>
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-sm font-semibold text-yellow-900 mb-1">⚠️ Score Decrease Alert</h3>
            <p className="text-sm text-yellow-800">
              PharmaBio Solutions score dropped by 3 points. Last engagement was 1 day ago. 
              Consider sending personalized follow-up with relevant case study.
            </p>
          </div>
          
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-sm font-semibold text-green-900 mb-1">📈 Rising Stars</h3>
            <p className="text-sm text-green-800">
              Rose & Co Fragrances increased by 15 points this week. High engagement indicates strong interest. 
              Move to warm nurture sequence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadScoring;
