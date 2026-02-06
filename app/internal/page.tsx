'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '', role: 'sales' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (in production, this would be a real auth system)
    const validUsers = {
      sales: { password: 'sales123', role: 'sales' },
      engineer: { password: 'eng123', role: 'engineering' },
      ops: { password: 'ops123', role: 'operations' }
    };

    const user = validUsers[credentials.username as keyof typeof validUsers];
    
    if (user && user.password === credentials.password) {
      localStorage.setItem('userRole', user.role);
      localStorage.setItem('username', credentials.username);
      router.push('/internal/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-brand-green p-4 rounded-full">
            <Lock className="text-white" size={32} />
          </div>
        </div>
        
        <h1 className="text-3xl font-serif text-center text-gray-900 mb-2">Intel-Logic</h1>
        <p className="text-center text-gray-600 mb-8">Sales Configurator Portal</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-green text-white font-semibold py-3 rounded-lg hover:bg-brand-green/90 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">Demo Credentials:</p>
          <div className="space-y-1 text-xs text-gray-600">
            <div>Sales Rep: <span className="font-mono">sales / sales123</span></div>
            <div>Engineering: <span className="font-mono">engineer / eng123</span></div>
            <div>Operations: <span className="font-mono">ops / ops123</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
