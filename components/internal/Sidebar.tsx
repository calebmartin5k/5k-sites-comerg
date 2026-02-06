import React from 'react';
import { LayoutDashboard, FileText, Box, TrendingUp, BarChart3, LogOut, User } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  userRole: string;
  username: string;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, userRole, username, onLogout }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['sales', 'engineering', 'operations'] },
    { id: 'discovery', label: 'Discovery Script', icon: FileText, roles: ['sales'] },
    { id: 'builder', label: 'System Builder', icon: Box, roles: ['sales', 'engineering'] },
    { id: 'scoring', label: 'Lead Scoring', icon: TrendingUp, roles: ['sales', 'operations'] },
    { id: 'pipeline', label: 'Pipeline View', icon: BarChart3, roles: ['operations', 'sales'] },
  ];

  const filteredNavItems = navItems.filter(item => item.roles.includes(userRole));

  return (
    <aside className="w-64 bg-brand-dark text-white flex flex-col">
      <div className="p-6 border-b border-brand-green/20">
        <h1 className="text-2xl font-serif text-brand-green">Intel-Logic</h1>
        <p className="text-xs text-gray-400 mt-1">Sales Configurator</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {filteredNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeView === item.id
                      ? 'bg-brand-green text-white'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-brand-green/20">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="bg-brand-green/20 p-2 rounded-full">
            <User size={16} className="text-brand-green" />
          </div>
          <div>
            <p className="text-sm font-medium capitalize">{username}</p>
            <p className="text-xs text-gray-400 capitalize">{userRole}</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 rounded-lg transition-colors"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
