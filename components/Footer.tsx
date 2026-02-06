import React from 'react';
import Link from 'next/link';
import { SITE_DATA } from '../constants';

const BrandLogo = ({ className = "h-10 w-10" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="footerBrandGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6E9934" />
          <stop offset="100%" stopColor="#8BC34A" />
        </linearGradient>
      </defs>
      <path 
        d="M50 10C50 10 20 40 20 65C20 81.5685 33.4315 95 50 95C66.5685 95 80 81.5685 80 65C80 40 50 10 50 10Z" 
        fill="url(#footerBrandGradient)" 
      />
      <path 
        d="M50 25C50 25 35 45 35 60C35 70 42 75 50 75C58 75 65 70 65 60C65 45 50 25 50 25Z" 
        fill="#ffffff" 
        fillOpacity="0.2"
      />
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 border-t border-white/5">
      
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Decorative Line with Center Icon */}
        <div className="flex items-center justify-center mb-24 relative">
           <div className="w-full h-[1px] bg-white/10 absolute top-1/2 left-0 z-0"></div>
           <div className="bg-brand-dark px-4 relative z-10 text-brand-gold">
             <BrandLogo className="h-8 w-8" />
           </div>
        </div>

        {/* Form Area (Simplified Visual) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-32" suppressHydrationWarning>
           <div className="space-y-8" suppressHydrationWarning>
              <div className="group" suppressHydrationWarning>
                <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-brand-green transition-colors" />
              </div>
              <div className="group" suppressHydrationWarning>
                <input type="tel" placeholder="PHONE" className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-brand-green transition-colors" />
              </div>
           </div>
           <div className="space-y-8" suppressHydrationWarning>
              <div className="group" suppressHydrationWarning>
                <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-brand-green transition-colors" />
              </div>
              <div className="group" suppressHydrationWarning>
                <input type="text" placeholder="MESSAGE" className="w-full bg-transparent border-b border-white/20 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-brand-green transition-colors" />
              </div>
           </div>
           
           <div className="md:col-span-2 flex justify-center mt-8">
             <button className="border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all">
               Start A Conversation
             </button>
           </div>
        </div>

        {/* Bottom Nav */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-t border-white/10 pt-12">
          <div className="mb-8 md:mb-0">
             <h4 className="font-serif text-2xl tracking-widest mb-2 flex items-center gap-3">COMERG</h4>
             <p className="text-[10px] text-gray-500 uppercase tracking-widest">{SITE_DATA.tagline}</p>
          </div>

          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <Link href="/#technology" className="hover:text-white transition-colors">Technology</Link>
            <Link href="/#applications" className="hover:text-white transition-colors">Applications</Link>
            <Link href="/news" className="hover:text-white transition-colors">News</Link>
            <Link href="/contacts" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="mt-12 text-[10px] text-gray-600 uppercase tracking-wide text-center">
           <p suppressHydrationWarning>© {new Date().getFullYear()} COMERG Extraction Systems. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
