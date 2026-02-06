'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useConfiguratorStore } from '@/store/configuratorStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QualificationForm from '@/components/configurator/QualificationForm';
import SystemBuilder from '@/components/configurator/SystemBuilder';
import QuoteSummary from '@/components/configurator/QuoteSummary';
import { Settings, RefreshCw } from 'lucide-react';

export default function SalesConfigurator() {
  const { reset } = useConfiguratorStore();

  return (
    <div className="font-sans antialiased selection:bg-brand-green selection:text-white bg-brand-dark min-h-screen">
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 border border-white/30 bg-white/10 mb-8"
              >
                <Settings size={16} className="text-white" />
                <span className="text-xs uppercase tracking-widest text-white font-bold">
                  Internal Sales Tool
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6"
              >
                Sales <br />
                <span className="italic text-brand-green">Configurator</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
              >
                A streamlined tool for sales teams to qualify leads, configure custom equipment packages, 
                and generate accurate quotes instantly. No more waiting for engineering approval or spreadsheet confusion.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={() => {
                    if (confirm('Reset all fields and start over?')) {
                      reset();
                    }
                  }}
                  className="group flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-brand-dark transition-all duration-500"
                >
                  <RefreshCw size={14} />
                  Reset Form
                </button>
                
                <a
                  href="/tools"
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-400 pb-1 hover:text-white hover:border-white transition-colors"
                >
                  Back to Tools Overview
                </a>
              </motion.div>

              {/* Demo Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 p-6 bg-white/5 border border-white/10"
              >
                <p className="text-xs text-gray-400 leading-relaxed">
                  <strong className="text-white">Demo Mode:</strong> This is a functional demonstration 
                  of a sales configurator tool. In a real implementation, this would integrate with your 
                  CRM, ERP, and inventory systems to provide real-time data and automated quote generation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Configurator Interface */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="space-y-32">
              
              {/* Step 1: Qualification */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <QualificationForm />
              </motion.div>

              {/* Divider */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-white/10 to-transparent">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-brand-dark">
                  <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Step 2: System Builder */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SystemBuilder />
              </motion.div>

              {/* Divider */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-brand-dark">
                  <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Step 3: Quote Summary */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <QuoteSummary />
              </motion.div>

            </div>
          </div>
        </section>

        {/* How It Helps Section */}
        <section className="py-20 bg-brand-dark/50 border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                How This Tool <span className="italic text-brand-green">Helps Your Team</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-brand-dark border border-white/10">
                <h3 className="text-xl font-serif text-white mb-4">
                  Faster Quotes
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Sales reps can generate accurate quotes in minutes instead of waiting days for engineering 
                  approval. The system automatically calculates pricing and lead times based on current inventory.
                </p>
                <div className="text-brand-green font-bold text-2xl">-60% quote time</div>
              </div>

              <div className="p-8 bg-brand-dark border border-white/10">
                <h3 className="text-xl font-serif text-white mb-4">
                  Better Qualification
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  The BANT framework ensures consistent lead qualification. Automatic scoring helps prioritize 
                  high-value opportunities so sales managers can allocate resources effectively.
                </p>
                <div className="text-brand-green font-bold text-2xl">+40% win rate</div>
              </div>

              <div className="p-8 bg-brand-dark border border-white/10">
                <h3 className="text-xl font-serif text-white mb-4">
                  Accurate Pricing
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Pre-configured modules with approved pricing eliminate quoting errors. Sales reps can&apos;t 
                  accidentally quote below cost or promise unrealistic delivery dates.
                </p>
                <div className="text-brand-green font-bold text-2xl">99% accuracy</div>
              </div>

              <div className="p-8 bg-brand-dark border border-white/10">
                <h3 className="text-xl font-serif text-white mb-4">
                  CRM Integration
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  In a full implementation, all lead data and configuration details sync automatically to 
                  HubSpot or Salesforce, creating a seamless handoff from sales to production.
                </p>
                <div className="text-brand-green font-bold text-2xl">100% synced</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
