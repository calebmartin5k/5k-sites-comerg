'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technology', href: '/#technology' },
    { name: 'Applications', href: '/#applications' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contacts' },
    { name: 'Team Portal', href: '/internal' },
  ];

  const toolsLinks = [
    { name: 'Tools Overview', href: '/tools' },
    { name: 'ROI Calculator', href: '/tools/roi-calculator' },
    { name: 'Sales Configurator', href: '/tools/sales-configurator' },
  ];

  // Custom Logo Component
  const BrandLogo = ({ className = "h-10 w-10" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6E9934" />
          <stop offset="100%" stopColor="#8BC34A" />
        </linearGradient>
      </defs>
      <path 
        d="M50 10C50 10 20 40 20 65C20 81.5685 33.4315 95 50 95C66.5685 95 80 81.5685 80 65C80 40 50 10 50 10Z" 
        fill="url(#brandGradient)" 
        className="opacity-90"
      />
      <path 
        d="M50 25C50 25 35 45 35 60C35 70 42 75 50 75C58 75 65 70 65 60C65 45 50 25 50 25Z" 
        fill="#ffffff" 
        fillOpacity="0.2"
      />
      <path 
        d="M50 10C50 10 58 35 58 55C58 65 55 70 50 75" 
        stroke="#ffffff" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeOpacity="0.5"
      />
    </svg>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 border-b border-white/5 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Links Left (Desktop) */}
        <div className="hidden md:flex items-center gap-12">
           {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-white hover:text-brand-green transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-green group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          
          {/* Tools Dropdown */}
          <div 
            className="relative group/dropdown"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button className="text-xs font-medium tracking-[0.2em] uppercase text-white hover:text-brand-green transition-colors duration-300 relative group flex items-center gap-2">
              Tools
              <ChevronDown size={14} className={`transition-transform duration-300 ${toolsOpen ? 'rotate-180' : ''}`} />
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-green group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* Invisible bridge to prevent gap */}
            <div className="absolute top-full left-0 w-full h-4"></div>
            
            {toolsOpen && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-brand-dark/95 backdrop-blur-md border border-white/10 shadow-xl z-50">
                {toolsLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-3 text-xs tracking-wider uppercase text-gray-300 hover:text-white hover:bg-brand-green/20 transition-colors border-b border-white/5 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 group">
           <div className="p-1 transition-transform duration-500 group-hover:rotate-12">
             <BrandLogo className="h-10 w-10" />
           </div>
           <div className="flex flex-col items-start">
             <span className="text-2xl font-serif tracking-widest text-white group-hover:text-brand-green transition-colors duration-300">
               COMERG
             </span>
             <span className="text-[8px] tracking-[0.4em] uppercase text-brand-gold/80">
               Natural Extraction
             </span>
           </div>
        </Link>

        {/* Links Right (Desktop) */}
        <div className="hidden md:flex items-center gap-12">
           {navLinks.slice(2).map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-white hover:text-brand-green transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-green group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-white ml-auto hover:text-brand-green transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-dark z-40 transform transition-transform duration-700 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center gap-8">
           <BrandLogo className="h-16 w-16 mb-8" />
           {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-3xl font-serif text-white hover:text-brand-green transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
           
           {/* Mobile Tools Links */}
           <div className="text-center space-y-4 pt-4 border-t border-white/10">
             <div className="text-sm text-gray-500 uppercase tracking-widest">Tools</div>
             {toolsLinks.map((link) => (
               <Link 
                 key={link.name} 
                 href={link.href}
                 className="block text-lg text-gray-300 hover:text-brand-green transition-colors"
                 onClick={() => setMobileOpen(false)}
               >
                 {link.name}
               </Link>
             ))}
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;