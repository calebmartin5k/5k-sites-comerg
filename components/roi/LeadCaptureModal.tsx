'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useROIStore } from '@/store/roiStore';
import { X, FileText, Mail, Building, User, Phone } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    role: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const { currentOpEx, lpeOpEx, dailyThroughput, biomassType } = useROIStore();
  const annualSavings = currentOpEx - lpeOpEx;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send data to your CRM/backend
    console.log('Lead captured:', {
      ...formData,
      roi_data: {
        annualSavings,
        dailyThroughput,
        biomassType,
        currentOpEx,
        lpeOpEx,
      },
    });

    setSubmitted(true);
    
    // Close modal after 3 seconds
    setTimeout(() => {
      onClose();
      setTimeout(() => setSubmitted(false), 500);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-brand-dark border border-brand-green/30 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="p-8 border-b border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-brand-green/20 rounded-full">
                      <FileText size={24} className="text-brand-green" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif text-white">
                        Get Your Detailed <span className="text-brand-green">ROI Report</span>
                      </h2>
                      <p className="text-sm text-gray-400 mt-1">
                        Receive a comprehensive analysis tailored to your operation
                      </p>
                    </div>
                  </div>

                  {/* Savings Preview */}
                  <div className="p-4 bg-brand-green/10 border border-brand-green/30 rounded">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Your Potential Annual Savings:</span>
                      <span className="text-2xl font-serif text-brand-green">
                        ${(annualSavings / 1000).toFixed(0)}K
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-300">
                        <User size={16} className="text-brand-green" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-300">
                        <Mail size={16} className="text-brand-green" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-300">
                        <Building size={16} className="text-brand-green" />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-300">
                        <Phone size={16} className="text-brand-green" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-gray-300">
                      <Building size={16} className="text-brand-green" />
                      Your Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 text-white placeholder-gray-500 focus:border-brand-green focus:outline-none transition-colors"
                      placeholder="e.g., Operations Manager, CEO, Procurement Officer"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-4">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 accent-brand-green"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-400 leading-relaxed">
                      I agree to receive the detailed ROI analysis and understand that COMERG may contact me 
                      regarding their extraction solutions. I can unsubscribe at any time.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-green text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-green/90 transition-colors"
                  >
                    Get My Professional Analysis
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    Your data is secure and will never be shared with third parties.
                  </p>
                </form>
              </>
            ) : (
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-block p-4 bg-brand-green/20 rounded-full mb-6"
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-16 h-16 text-brand-green"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                <h3 className="text-2xl font-serif text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-300 mb-2">
                  Your detailed ROI analysis is on its way.
                </p>
                <p className="text-sm text-gray-500">
                  A COMERG specialist will reach out within 24 hours to discuss your specific needs.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
