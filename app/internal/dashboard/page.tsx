'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '@/components/internal/Dashboard';
import DiscoveryScript from '@/components/internal/DiscoveryScript';
import SystemBuilder from '@/components/internal/SystemBuilder';
import LeadScoring from '@/components/internal/LeadScoring';
import PipelineView from '@/components/internal/PipelineView';
import Sidebar from '@/components/internal/Sidebar';

const DashboardPage: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [userRole, setUserRole] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const user = localStorage.getItem('username');
    
    if (!role || !user) {
      router.push('/internal');
    } else {
      setUserRole(role);
      setUsername(user);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    router.push('/internal');
  };

  if (!userRole) {
    return null;
  }

  return (
    <div className="min-h-screen bg-brand-light flex">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView}
        userRole={userRole}
        username={username}
        onLogout={handleLogout}
      />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {activeView === 'dashboard' && <Dashboard userRole={userRole} />}
          {activeView === 'discovery' && <DiscoveryScript userRole={userRole} />}
          {activeView === 'builder' && <SystemBuilder userRole={userRole} />}
          {activeView === 'scoring' && <LeadScoring userRole={userRole} />}
          {activeView === 'pipeline' && <PipelineView userRole={userRole} />}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
