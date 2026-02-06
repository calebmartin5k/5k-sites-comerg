'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calculator, Settings, ArrowRight, Lightbulb, Zap, Target, Users, TrendingUp } from 'lucide-react';

export default function ToolsPage() {
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
                className="inline-flex items-center gap-3 px-4 py-2 border border-brand-green/30 bg-brand-green/10 mb-8"
              >
                <Lightbulb size={16} className="text-brand-green" />
                <span className="text-xs uppercase tracking-widest text-brand-green font-bold">
                  Demonstration Tools
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6"
              >
                Custom Digital Tools for
                <br />
                <span className="italic text-brand-green">Complex Business Needs</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12"
              >
                We researched your industry and built these demonstration tools based on common challenges 
                in botanical extraction businesses. While we don't claim to know your specific pain points, 
                these examples showcase our ability to create sophisticated, data-driven solutions tailored 
                to any operational need.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-8 bg-brand-dark/50 border border-brand-green/20 text-left max-w-2xl mx-auto"
              >
                <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-3">
                  <Target size={20} className="text-brand-green" />
                  Our Capability Demonstration
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  These tools represent <strong className="text-white">what's possible</strong> when you combine 
                  industry research with modern web technology. We can build custom interactive tools, dashboards, 
                  calculators, configurators, or any digital solution your team needs to work more efficiently 
                  or serve your customers better.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Tool 1: ROI Calculator */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-brand-green/10 via-brand-dark to-brand-dark border border-brand-green/30 p-8 hover:border-brand-green/50 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-brand-green/20 rounded-full">
                      <Calculator size={32} className="text-brand-green" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-brand-gold bg-brand-dark/50 px-3 py-1 border border-brand-gold/30">
                      Customer-Facing
                    </span>
                  </div>

                  <h2 className="text-3xl font-serif text-white mb-4">
                    ROI Calculator
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    An interactive calculator that helps potential customers understand the financial benefits 
                    of switching extraction technologies. Think of it like a "mortgage calculator" but for 
                    industrial equipment – users input their current operation details and instantly see 
                    potential savings.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="border-l-2 border-brand-green/50 pl-4">
                      <h4 className="text-brand-green text-xs uppercase tracking-wider mb-2 font-bold">
                        What It Does
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>Calculates cost savings by comparing different extraction methods</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>Shows break-even timeline and ROI in months</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>Visualizes 5-year total cost of ownership</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>Captures qualified leads automatically</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-brand-gold/50 pl-4">
                      <h4 className="text-brand-gold text-xs uppercase tracking-wider mb-2 font-bold">
                        Example Use Case
                      </h4>
                      <p className="text-sm text-gray-400">
                        A hemp processor currently using CO₂ extraction enters their daily throughput (50kg), 
                        utility costs ($0.15/kWh), and labor costs ($30/hour). The calculator instantly shows 
                        they could save $127,000 annually with a 6.2 month payback period.
                      </p>
                    </div>

                    <div className="border-l-2 border-white/20 pl-4">
                      <h4 className="text-white text-xs uppercase tracking-wider mb-2 font-bold">
                        Business Impact
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <div className="text-brand-green font-bold text-lg">+200%</div>
                          <div className="text-gray-500">Qualified Leads</div>
                        </div>
                        <div>
                          <div className="text-brand-green font-bold text-lg">-30%</div>
                          <div className="text-gray-500">Sales Cycle</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="/tools/roi-calculator"
                    className="group/btn flex items-center justify-between px-6 py-4 bg-brand-green text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-green/90 transition-colors"
                  >
                    <span>Try ROI Calculator</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Tool 2: Sales Configurator */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative bg-gradient-to-br from-brand-dark via-brand-dark to-brand-dark border border-white/20 p-8 hover:border-white/40 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-white/10 rounded-full">
                      <Settings size={32} className="text-white" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-white bg-brand-dark/50 px-3 py-1 border border-white/30">
                      Internal Team
                    </span>
                  </div>

                  <h2 className="text-3xl font-serif text-white mb-4">
                    Sales Configurator
                  </h2>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    A guided system builder for sales teams to configure custom equipment packages. 
                    Think of it like "building a car" on an automotive website – select components, 
                    see the price update in real-time, and get accurate quotes without waiting for 
                    engineering approval.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="border-l-2 border-white/50 pl-4">
                      <h4 className="text-white text-xs uppercase tracking-wider mb-2 font-bold">
                        What It Does
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>Guides sales reps through qualification questions (BANT framework)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>Drag-and-drop equipment configuration with live pricing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>Automatic lead scoring based on budget, authority, need, and timeline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-green mt-1">•</span>
                          <span>Checks real-time inventory to provide accurate delivery dates</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-brand-gold/50 pl-4">
                      <h4 className="text-brand-gold text-xs uppercase tracking-wider mb-2 font-bold">
                        Example Use Case
                      </h4>
                      <p className="text-sm text-gray-400">
                        A sales rep receives an inquiry from a pharmaceutical company. They use the configurator 
                        to ask qualifying questions, build a system with 3x 150L extraction vessels + GC analysis 
                        module + crystallization reactor. The tool instantly provides a $487,000 quote with 
                        12-week lead time and scores the lead as "High Priority" (92/100).
                      </p>
                    </div>

                    <div className="border-l-2 border-white/20 pl-4">
                      <h4 className="text-white text-xs uppercase tracking-wider mb-2 font-bold">
                        Business Impact
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <div className="text-brand-green font-bold text-lg">-60%</div>
                          <div className="text-gray-500">Quote Time</div>
                        </div>
                        <div>
                          <div className="text-brand-green font-bold text-lg">+40%</div>
                          <div className="text-gray-500">Quote Accuracy</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="/tools/sales-configurator"
                    className="group/btn flex items-center justify-between px-6 py-4 bg-white text-brand-dark font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors"
                  >
                    <span>Try Sales Configurator</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why These Tools Section */}
        <section className="py-20 bg-brand-dark/50 border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Why We Built <span className="italic text-brand-green">These Examples</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
                Through research into the botanical extraction industry, we identified common operational 
                challenges. These tools demonstrate how custom software can solve real business problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 bg-brand-dark border border-white/10 text-center">
                <div className="inline-flex p-4 bg-brand-green/10 rounded-full mb-4">
                  <Zap size={24} className="text-brand-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Research-Driven
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We studied your industry to understand pain points in customer acquisition 
                  and internal operations.
                </p>
              </div>

              <div className="p-6 bg-brand-dark border border-white/10 text-center">
                <div className="inline-flex p-4 bg-brand-green/10 rounded-full mb-4">
                  <Users size={24} className="text-brand-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  User-Centered
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Each tool solves a specific problem: helping customers make decisions 
                  and helping teams work faster.
                </p>
              </div>

              <div className="p-6 bg-brand-dark border border-white/10 text-center">
                <div className="inline-flex p-4 bg-brand-green/10 rounded-full mb-4">
                  <TrendingUp size={24} className="text-brand-green" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Results-Focused
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Built with measurable outcomes in mind: more leads, faster sales cycles, 
                  and better operational efficiency.
                </p>
              </div>
            </div>

            <div className="p-12 bg-gradient-to-br from-brand-green/20 via-brand-green/5 to-transparent border border-brand-green/30">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  Your Challenges Are Unique
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We don't claim to know exactly what your business needs. These tools are demonstrations 
                  of <strong className="text-white">capability</strong>, not prescriptions. The real value 
                  comes when we work with you to understand your specific challenges and build custom 
                  solutions that fit your exact workflow.
                </p>
                <p className="text-sm text-gray-400 mb-8">
                  Whether you need a customer portal, internal dashboard, inventory system, analytics tool, 
                  or something entirely different – we can build it.
                </p>
                <a 
                  href="/contacts"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-green/90 transition-colors"
                >
                  Let's Discuss Your Needs
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-white mb-4">
                What We Can Build
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                These tools showcase just a fraction of what's possible with modern web technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Calculators & Tools', desc: 'ROI, TCO, sizing, comparison tools' },
                { title: 'Configurators', desc: 'Product builders, quote generators' },
                { title: 'Dashboards', desc: 'Analytics, reporting, KPI tracking' },
                { title: 'Portals', desc: 'Customer and team member portals' },
                { title: 'Workflows', desc: 'Guided processes, form builders' },
                { title: 'Integrations', desc: 'CRM, ERP, inventory systems' },
                { title: 'Data Visualization', desc: 'Charts, graphs, real-time data' },
                { title: 'Mobile Apps', desc: 'Responsive tools for any device' },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-6 bg-brand-dark/50 border border-white/10 hover:border-brand-green/30 transition-colors"
                >
                  <h4 className="text-white font-bold mb-2 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
