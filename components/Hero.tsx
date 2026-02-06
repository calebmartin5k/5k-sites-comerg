'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { IMAGES, SITE_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-line', {
      scaleX: 0,
      duration: 1.5,
      ease: 'power3.inOut',
      transformOrigin: 'left'
    })
    .from('.hero-title-word', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.out'
    }, "-=0.5")
    .from('.hero-sub', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, "-=0.8");

    // Parallax
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="hero-bg absolute inset-0 scale-110">
          <img 
            src={IMAGES.hero} 
            alt="Scientific Extraction" 
            className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark/40"></div>
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-20">
        
        <div ref={textRef} className="max-w-5xl">
          <div className="overflow-hidden mb-8">
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1]">
               <span className="hero-title-word block">Developing Technologies</span>
               <span className="hero-title-word block italic text-brand-green">With Minimum Impact</span>
               <span className="hero-title-word block">To The End Product</span>
             </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-8">
            <div className="hero-line w-24 h-[1px] bg-brand-gold"></div>
            <p className="hero-sub text-gray-300 font-light text-sm tracking-wide max-w-md leading-relaxed uppercase">
              {SITE_DATA.techIntro}
            </p>
            <a href="/tools/roi-calculator" className="hero-sub group flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-brand-dark transition-all duration-500">
              Calculate Your ROI
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 text-white/30 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <span className="animate-bounce">↓</span>
      </div>

    </section>
  );
};

export default Hero;