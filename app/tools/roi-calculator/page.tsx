'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useROIStore } from '@/store/roiStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BiomassSelector from '@/components/roi/BiomassSelector';
import MethodSelector from '@/components/roi/MethodSelector';
import OperationalInputs from '@/components/roi/OperationalInputs';
import ComparisonCharts from '@/components/roi/ComparisonCharts';
import LeadCaptureModal from '@/components/roi/LeadCaptureModal';
import { ArrowRight, Calculator, TrendingDown } from 'lucide-react';

export default function ROICalculator() {
  const [showModal, setShowModal] = useState(false);
  const { engagementScore, interactionCount, calculateROI } = useROIStore();

  // Calculate ROI on mount
  useEffect(() => {
    calculateROI();
  }, [calculateROI]);

  // Show modal after significant engagement
  useEffect(() => {
    if (interactionCount >= 8 && !showModal) {
      // User has interacted with at least 8 inputs
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [interactionCount, showModal]);

  const scrollToComparison = () => {
    document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased selection:bg-brand-green selection:text-white bg-brand-dark min-h-screen">
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 border border-brand-green/30 bg-brand-green/10 mb-8"
              >
                <Calculator size={16} className="text-brand-green" />
                <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
                  Interactive ROI Tool
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6"
              >
                Calculate Your <br />
                <span className="italic text-brand-green">Extraction ROI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
              >
                Discover how much you could save by switching to COMERG's Low Pressure Extraction technology. 
                Our interactive tool provides a personalized financial analysis based on your specific operation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={scrollToComparison}
                  className="group flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-brand-dark transition-all duration-500"
                >
                  Start Calculator
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => setShowModal(true)}
                  className="text-xs font-bold uppercase tracking-widest text-brand-green border-b border-brand-green pb-1 hover:text-white hover:border-white transition-colors"
                >
                  Get Professional Analysis
                </button>
              </motion.div>

              {/* Stats Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-16 border-t border-white/10"
              >
                <div>
                  <div className="text-3xl font-serif text-white mb-2">80%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Lower CapEx</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-white mb-2">85%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Energy Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-white mb-2">4-8</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Month ROI</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Calculator Interface */}
        <section id="comparison" className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="space-y-24">
              {/* Step 1: Biomass Selection */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <BiomassSelector />
              </motion.div>

              {/* Current Method Selection */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <MethodSelector />
              </motion.div>

              {/* Divider */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-white/10 to-transparent">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-brand-dark">
                  <TrendingDown size={20} className="text-brand-gold" />
                </div>
              </div>

              {/* Step 2: Operational Inputs */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <OperationalInputs />
              </motion.div>

              {/* Divider */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-brand-dark">
                  <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Step 3: Comparison & Results */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ComparisonCharts />
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-12 bg-gradient-to-br from-brand-green/20 via-brand-green/5 to-transparent border border-brand-green/30 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                    Ready to <span className="italic text-brand-green">Transform</span> Your Operation?
                  </h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Get a detailed professional analysis from our extraction specialists. 
                    We'll provide equipment recommendations, implementation timeline, and a comprehensive financial model.
                  </p>
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-green/90 transition-colors"
                  >
                    Request Professional Analysis
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Educational Section */}
        <section className="py-20 bg-brand-dark/50 border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Why <span className="italic text-brand-green">COMERG LPE?</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our Low Pressure Extraction technology using tetrafluoroethane (TFE) delivers 
                superior results across multiple dimensions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-brand-dark border border-white/10">
                <h3 className="text-xl font-serif text-white mb-4">
                  Mega Spectrum™ Extracts
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Go beyond full spectrum. Our technology preserves essential oils, oleoresins, flavonoids, 
                  and esters that are often destroyed by high-temperature or high-pressure methods.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>33.1% terpene concentration (vs 15-20% traditional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>Preserved native scent profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>Enhanced entourage effect</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-brand-dark border border-white/10">
                <h3 className="text-xl font-serif text-white mb-4">
                  Operational Excellence
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Dramatically reduce complexity, energy consumption, and labor requirements while 
                  maintaining the highest safety standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>80-170 PSI operating pressure (vs 3000-5000 PSI CO₂)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>GRAS-certified solvent (FDA approved)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green mt-1">✓</span>
                    <span>No winterization required (&lt;5% wax content)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
