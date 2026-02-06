'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { IMAGES } from '../constants';
import { FlaskConical } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    // Animate Keyline
    tl.from('.deco-line', { scaleX: 0, duration: 1, ease: 'power3.inOut', transformOrigin: 'left' })
      .from('.about-title', { y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, "-=0.5")
      .from('.about-desc', { opacity: 0, duration: 1 }, "-=0.5")
      .from('.about-image', { y: 50, opacity: 0, duration: 1.2, ease: 'power2.out' }, "-=1");

  }, { scope: containerRef });

  return (
    <section id="technology" ref={containerRef} className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left: Text Content */}
          <div className="relative">
            {/* Decorative Element */}
            <div className="flex items-center gap-4 mb-8">
              <div className="deco-line w-16 h-[1px] bg-brand-gold"></div>
              <div className="p-2 border border-brand-gold/30 rounded-full text-brand-gold">
                <FlaskConical size={16} strokeWidth={1.5} />
              </div>
            </div>

            <h2 className="about-title text-5xl md:text-6xl font-serif leading-tight mb-8">
              Why Choose <br/>
              <span className="italic text-brand-green">Tetrafluoroethane?</span>
            </h2>

            <div className="about-desc space-y-8">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-gold">
                Pure & Inert Technology
              </p>
              
              <p className="text-gray-400 font-light leading-relaxed text-lg max-w-md">
                TFE has been overlooked to extract a wide range of compounds since industry adopted CO2. However, the benefits of TFE are scientifically established, offering superior selectivity and energy efficiency.
              </p>

              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
                 <div>
                    <h4 className="text-2xl font-serif text-white mb-2">2-9 <span className="text-sm text-brand-gold uppercase">bars</span></h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Low Operating Pressure</p>
                 </div>
                 <div>
                    <h4 className="text-2xl font-serif text-white mb-2">99.9<span className="text-sm text-brand-gold uppercase">%</span></h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Solvent Recovery</p>
                 </div>
              </div>

              <button className="text-xs font-bold uppercase tracking-widest border-b border-brand-green pb-1 hover:text-brand-green transition-colors">
                Explore The Science
              </button>
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="relative mt-12 lg:mt-0">
             <div className="about-image relative z-10">
               {/* Image Frame effect */}
               <div className="absolute -top-6 -right-6 w-full h-full border border-brand-gold/20 z-0 hidden md:block"></div>
               <img 
                 src={IMAGES.atomic}
                 alt="Lab Equipment" 
                 className="w-full aspect-[3/4] object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
               />
               
               <div className="absolute bottom-0 left-0 bg-brand-dark/90 backdrop-blur p-6 border-t border-r border-white/10 max-w-xs">
                 <p className="text-xs text-gray-400 leading-relaxed font-mono">
                   FIG 1.0 — COMERG PATENTED EXTRACTION UNIT. DESIGNED FOR LOW PRESSURE OPERATION.
                 </p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
