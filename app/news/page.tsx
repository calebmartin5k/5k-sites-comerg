'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { ArrowUpRight } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="font-sans antialiased bg-brand-dark min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <PageHeader 
            title="News & Updates" 
            subtitle="Technological breakthroughs and company announcements."
        />

        <div className="container mx-auto px-6 md:px-12 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Sidebar / About Content */}
                <div className="lg:col-span-4 space-y-12">
                     <div className="sticky top-32">
                        <div className="w-12 h-[1px] bg-brand-gold mb-8"></div>
                        <h3 className="text-2xl font-serif text-white mb-6">About COMERG</h3>
                        <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm tracking-wide">
                            Dedicated to developing technologies with minimum impact to the end product. Utilizing Liquefied Gas Extraction Technology, our solutions are cheaper, faster, and superior to conventional carbon dioxide methods.
                        </p>
                        
                        <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
                            <h4 className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4">Quick Facts</h4>
                            <ul className="space-y-4 text-xs text-gray-500 font-medium">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Founded</span>
                                    <span className="text-gray-300">2015</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Headquarters</span>
                                    <span className="text-gray-300">Phoenix, AZ</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Specialty</span>
                                    <span className="text-gray-300">LPE Technology</span>
                                </li>
                            </ul>
                        </div>
                     </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-8 space-y-20">
                     
                     {/* Article: Expo West */}
                     <article className="group">
                        <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-brand-gold mb-4 uppercase">
                            <span>Technology</span>
                            <span className="w-8 h-[1px] bg-brand-gold/50"></span>
                            <span>Featured</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight group-hover:text-brand-green transition-colors">
                            Unveiling Atomic LPE Technology at Natural Products Expo West
                        </h2>
                        
                        <div className="prose prose-invert max-w-none text-gray-400 font-light leading-relaxed">
                            <p className="mb-6 text-lg text-gray-300">
                                The new Low Pressure Extraction (LPE) technology, which COMERG calls Atomic, is significantly safer, produces higher yields, and operates at a fraction of the cost of current carbon dioxide extraction machines.
                            </p>
                            
                            <blockquote className="border-l-2 border-brand-green pl-6 py-2 my-8 text-white italic text-lg bg-white/5 p-6">
                                "Our new Low Pressure Extraction technology is a game-changer for the food, pharmacy and perfume industries because it can produce up to six times higher yield than the CO2 technology in one-sixth of the time."
                                <footer className="text-sm text-brand-gold mt-4 not-italic font-bold tracking-widest uppercase">— Dr. George Stantchev, CEO</footer>
                            </blockquote>

                            <h3 className="text-xl font-serif text-white mt-12 mb-4">How It Works</h3>
                            <p className="mb-6">
                                Low Pressure Extraction combines novel extraction methods based on tetrafluoroethane (TFE). TFE has long been overlooked to extract a wide range of compounds. It has a very low boiling point and separates completely from the most volatile components, leaving no residue.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                {[
                                    "Down to 20% CapEx of CO2 extractors",
                                    "Higher yields on shorter run times",
                                    "Higher solubility for food & medicine",
                                    "Preserves fragile natural ingredients",
                                    "Low Pressure & Fire Safe (GRAS)",
                                    "Full solvent recovery, no residue"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0"></div>
                                        <span className="text-sm text-gray-400">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                     </article>

                     <div className="w-full h-[1px] bg-white/10"></div>

                     {/* Article: PURE5 */}
                     <article>
                        <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-gray-500 mb-4 uppercase">
                            <span>Brand</span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                             <div className="flex-1">
                                <h2 className="text-2xl font-serif text-white mb-4">PURE5™ Extraction</h2>
                                <p className="text-gray-400 font-light leading-relaxed mb-6">
                                    PURE5 is a trademark of COMERG for the development of next generation hemp extraction, distillation and remediation technologies. Owning the IP, know-how and global exclusive rights to Low Pressure Extraction (LPE), we have successfully extracted over 150 botanicals.
                                </p>
                             </div>
                             <div className="bg-white p-4 rounded-sm flex-shrink-0">
                                <img src="https://comerg.com/images/P5_Logo_2.png" alt="PURE5" className="h-12 object-contain" />
                             </div>
                        </div>
                     </article>

                     <div className="w-full h-[1px] bg-white/10"></div>

                     {/* Article Group: Grants & Projects */}
                     <div className="space-y-12">
                        <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-8">EU Projects & Grants</h3>
                        
                        {/* Grant 1 */}
                        <article className="bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-brand-green/30 transition-colors">
                            <div className="flex items-start justify-between mb-4">
                                <h4 className="text-xl font-serif text-white">Restoring SMEs by Improving Energy Efficiency</h4>
                                <img src="https://comerg.com/images/Program.png" alt="Program" className="h-8 opacity-70" />
                            </div>
                            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                <strong>Project:</strong> BG16RFOP002-6.002-0226-C01<br/>
                                <strong>Goal:</strong> Recovering from economic consequences of COVID-19 by improving energy efficiency.<br/>
                                <strong>Value:</strong> BGN 272,205.00 (BGN 136,102.50 European funding)
                            </p>
                            <div className="text-xs text-brand-gold tracking-widest uppercase">
                                16/09/2022 - 16/07/2023
                            </div>
                        </article>

                        {/* Grant 2 */}
                        <article className="bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-brand-green/30 transition-colors">
                             <div className="flex items-start justify-between mb-4">
                                <h4 className="text-xl font-serif text-white">Small Enterprise Support</h4>
                                <img src="https://comerg.com/images/Program.png" alt="Program" className="h-8 opacity-70" />
                            </div>
                            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                <strong>Project:</strong> BG16RFOP002-2.089-5250-C01<br/>
                                Support for small enterprises with turnover over BGN 500,000 to overcome economic consequences of the pandemic.
                            </p>
                            <div className="text-xs text-brand-gold tracking-widest uppercase">
                                Started 12.11.2021
                            </div>
                        </article>

                        {/* Grant 3 */}
                        <article className="bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-brand-green/30 transition-colors">
                             <div className="flex items-start justify-between mb-4">
                                <h4 className="text-xl font-serif text-white">Liquidity Support</h4>
                                <img src="https://comerg.com/images/Program.png" alt="Program" className="h-8 opacity-70" />
                            </div>
                            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                <strong>Project:</strong> BG16RFOP002-2.073-24889-C01<br/>
                                Overcoming lack of funds and liquidity resulting from the epidemic outbreak.
                            </p>
                            <div className="text-xs text-brand-gold tracking-widest uppercase">
                                Started 29.09.2020
                            </div>
                        </article>
                     </div>

                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
