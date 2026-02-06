'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface PipelineViewProps {
  userRole: string;
}

const PipelineView: React.FC<PipelineViewProps> = ({ userRole }) => {
  const pipelineStages = [
    { stage: 'Discovery', count: 18, value: 890000 },
    { stage: 'Qualification', count: 12, value: 1450000 },
    { stage: 'Proposal', count: 8, value: 1280000 },
    { stage: 'Negotiation', count: 5, value: 980000 },
    { stage: 'Closed-Won', count: 3, value: 620000 },
  ];

  const industryBreakdown = [
    { name: 'Craft Cannabis', value: 35, color: '#6E9934' },
    { name: 'Pharmaceutical', value: 25, color: '#D4C5A5' },
    { name: 'Food & Flavor', value: 20, color: '#8B9D6F' },
    { name: 'Fragrance', value: 12, color: '#A8BF7D' },
    { name: 'Other', value: 8, color: '#C5D4A5' },
  ];

  const monthlyTrend = [
    { month: 'Aug', revenue: 420000, deals: 4 },
    { month: 'Sep', revenue: 580000, deals: 5 },
    { month: 'Oct', revenue: 720000, deals: 6 },
    { month: 'Nov', revenue: 890000, deals: 7 },
    { month: 'Dec', revenue: 1050000, deals: 8 },
    { month: 'Jan', revenue: 1240000, deals: 9 },
  ];

  const activeDeals = [
    { id: 1, company: 'Oregon Botanicals LLC', stage: 'Negotiation', value: 450000, probability: 85, nextAction: 'Final proposal review', daysInStage: 12 },
    { id: 2, company: 'PharmaBio Solutions', stage: 'Proposal', value: 1200000, probability: 70, nextAction: 'Engineering demo scheduled', daysInStage: 8 },
    { id: 3, company: 'Natural Flavors Co', stage: 'Qualification', value: 320000, probability: 55, nextAction: 'Discovery call follow-up', daysInStage: 5 },
    { id: 4, company: 'Green Valley Hemp', stage: 'Negotiation', value: 550000, probability: 90, nextAction: 'Contract finalization', daysInStage: 18 },
    { id: 5, company: 'Rose & Co Fragrances', stage: 'Proposal', value: 380000, probability: 65, nextAction: 'Technical specifications review', daysInStage: 6 },
  ];

  const totalPipelineValue = pipelineStages.reduce((sum, stage) => sum + stage.value, 0);
  const weightedPipeline = activeDeals.reduce((sum, deal) => sum + (deal.value * deal.probability / 100), 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Sales Pipeline Overview</h1>
        <p className="text-gray-600">Real-time visibility into sales performance and forecasting</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Total Pipeline Value</h3>
          <p className="text-3xl font-bold text-gray-900">${(totalPipelineValue / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-green-600 mt-1">+18% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Weighted Pipeline</h3>
          <p className="text-3xl font-bold text-gray-900">${(weightedPipeline / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-gray-500 mt-1">Based on probabilities</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Active Deals</h3>
          <p className="text-3xl font-bold text-gray-900">{activeDeals.length}</p>
          <p className="text-xs text-gray-500 mt-1">Across all stages</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-1">Avg Deal Size</h3>
          <p className="text-3xl font-bold text-gray-900">
            ${((totalPipelineValue / pipelineStages.reduce((sum, s) => sum + s.count, 0)) / 1000).toFixed(0)}K
          </p>
          <p className="text-xs text-gray-500 mt-1">Current quarter</p>
        </div>
      </div>

      {/* Pipeline Stages */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-serif text-gray-900 mb-6">Pipeline by Stage</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={pipelineStages}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="stage" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value: number, name: string) => {
                if (name === 'value') return [`$${(value / 1000).toFixed(0)}K`, 'Value'];
                return [value, 'Count'];
              }}
            />
            <Bar dataKey="value" fill="#6E9934" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="grid grid-cols-5 gap-4 mt-6">
          {pipelineStages.map((stage) => (
            <div key={stage.stage} className="text-center">
              <p className="text-sm font-medium text-gray-900">{stage.count} deals</p>
              <p className="text-xs text-gray-500">${(stage.value / 1000).toFixed(0)}K</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Industry Breakdown */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Industry Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={industryBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {industryBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number | undefined) => value ? `${value}%` : 'N/A'} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Trend */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-serif text-gray-900 mb-6">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value: number | undefined) => value ? [`$${(value / 1000).toFixed(0)}K`, 'Revenue'] : ['N/A', 'Revenue']}
              />
              <Bar dataKey="revenue" fill="#6E9934" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Deals */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-serif text-gray-900">Active Deals</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Probability</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weighted Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days in Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeDeals.map((deal) => (
                <tr key={deal.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{deal.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      deal.stage === 'Negotiation' ? 'bg-green-100 text-green-800' :
                      deal.stage === 'Proposal' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {deal.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">${(deal.value / 1000).toFixed(0)}K</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-brand-green h-2 rounded-full"
                          style={{ width: `${deal.probability}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-700">{deal.probability}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${(deal.value * deal.probability / 100 / 1000).toFixed(0)}K</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${deal.daysInStage > 14 ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                      {deal.daysInStage} days
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{deal.nextAction}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Forecast */}
      {userRole === 'operations' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-serif text-gray-900 mb-4">Production Forecast</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 bg-brand-green/5 rounded-lg border border-brand-green/20">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Next 30 Days</h3>
              <p className="text-2xl font-bold text-brand-green mb-1">2-3 systems</p>
              <p className="text-xs text-gray-600">Based on 80%+ probability deals</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Next 60 Days</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">5-6 systems</p>
              <p className="text-xs text-gray-600">Including 60%+ probability deals</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Next 90 Days</h3>
              <p className="text-2xl font-bold text-gray-600 mb-1">8-10 systems</p>
              <p className="text-xs text-gray-600">Full pipeline projection</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PipelineView;
