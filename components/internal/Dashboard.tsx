import React from 'react';
import { Users, DollarSign, Target, Clock } from 'lucide-react';

interface DashboardProps {
  userRole: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userRole }) => {
  const stats = [
    { label: 'Active Leads', value: '47', change: '+12%', icon: Users, color: 'brand-green' },
    { label: 'Pipeline Value', value: '$2.4M', change: '+8%', icon: DollarSign, color: 'brand-green' },
    { label: 'Conversion Rate', value: '24%', change: '+3%', icon: Target, color: 'brand-green' },
    { label: 'Avg. Quote Time', value: '2.3h', change: '-15%', icon: Clock, color: 'brand-green' },
  ];

  const recentLeads = [
    { id: 1, company: 'Oregon Botanicals LLC', industry: 'Craft Cannabis', score: 92, status: 'Hot', budget: '$450K' },
    { id: 2, company: 'PharmaBio Solutions', industry: 'Pharmaceutical', score: 88, status: 'Warm', budget: '$1.2M' },
    { id: 3, company: 'Natural Flavors Co', industry: 'Food & Flavor', score: 75, status: 'Warm', budget: '$320K' },
    { id: 4, company: 'Essence Extracts', industry: 'Fragrance', score: 68, status: 'Cold', budget: '$180K' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your sales pipeline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-${stat.color}/10 p-3 rounded-lg`}>
                  <Icon className={`text-${stat.color}`} size={24} />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-serif text-gray-900">Recent High-Priority Leads</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{lead.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{lead.industry}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-brand-green h-2 rounded-full"
                          style={{ width: `${lead.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{lead.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      lead.status === 'Hot' ? 'bg-red-100 text-red-800' :
                      lead.status === 'Warm' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {lead.budget}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {userRole === 'operations' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-serif text-gray-900 mb-4">Production Capacity</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Atomic LPE Units</span>
                  <span className="text-sm font-medium text-gray-900">6/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-green h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Crystallization Reactors</span>
                  <span className="text-sm font-medium text-gray-900">8/12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-green h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-serif text-gray-900 mb-4">Lead Time Forecast</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Standard Config</span>
                <span className="text-sm font-bold text-brand-green">4-6 weeks</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Custom Config</span>
                <span className="text-sm font-bold text-brand-green">8-12 weeks</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">GC Integration</span>
                <span className="text-sm font-bold text-brand-green">10-14 weeks</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
