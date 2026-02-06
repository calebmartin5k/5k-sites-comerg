'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SECTIONS } from '../constants';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Applications: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);
  const imageRef = useRef(null);
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const activeSection = SECTIONS.find(s => s.id === activeTab) || SECTIONS[0];

  // Initial scroll animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.from(titleRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 1, 
      ease: 'power3.out' 
    })
    .from(navRef.current, { 
      x: -30, 
      opacity: 0, 
      duration: 0.8, 
      ease: 'power3.out' 
    }, "-=0.5")
    .from(imageRef.current, { 
      x: 30, 
      opacity: 0, 
      duration: 0.8, 
      ease: 'power3.out' 
    }, "-=0.6");
  }, { scope: containerRef });

  // Image change animation
  useGSAP(() => {
    gsap.fromTo(imageRef.current, 
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, { dependencies: [activeTab] });

  return (
    <section id="applications" ref={containerRef} className="py-32 bg-[#152015] text-white relative">
      
      <div className="container mx-auto px-6 md:px-12">
        
        <div ref={titleRef} className="mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">
            Industrial <br/> <span className="italic text-brand-green">Applications</span>
          </h2>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            Scalable Solutions For Purity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full min-h-[600px]">
          
          {/* Left Navigation List */}
          <div ref={navRef} className="relative h-full flex flex-col justify-center">
             {/* Vertical Line Indicator Track */}
             <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10 hidden md:block"></div>
             
             <div className="flex flex-col gap-8 md:pl-12">
               <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-md">
                 Comerg technology allows for the extraction of specific flavor and aroma substances from the plant with excellent selectivity. The process is non-polar and runs at low pressures, ensuring no residue.
               </p>

               <div className="flex flex-col items-start gap-4">
                 {SECTIONS.map((section) => (
                   <button
                     key={section.id}
                     onClick={() => setActiveTab(section.id)}
                     className={`group flex items-center gap-4 text-left transition-all duration-300 ${
                       activeTab === section.id ? 'opacity-100 translate-x-4' : 'opacity-40 hover:opacity-70'
                     }`}
                   >
                     <div className={`h-[1px] bg-brand-green transition-all duration-300 ${activeTab === section.id ? 'w-12' : 'w-0'}`}></div>
                     <span className="text-lg font-serif tracking-wide uppercase">{section.title}</span>
                   </button>
                 ))}
               </div>

               <div className="mt-12 pt-8 border-t border-white/10">
                 <button className="text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors flex items-center gap-2">
                   View Technical Specifications <ArrowRight size={14} />
                 </button>
               </div>
             </div>
          </div>

          {/* Right Image Display */}
          <div className="relative h-[500px] lg:h-auto w-full overflow-hidden">
             <div ref={imageRef} className="w-full h-full">
               <img 
                 src={activeSection.image} 
                 alt={activeSection.title} 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#152015] to-transparent opacity-60"></div>
             </div>
             
             {/* Caption Overlay */}
             <div className="absolute bottom-8 left-8 z-20 max-w-md bg-brand-dark/95 backdrop-blur-sm p-6 border-l-2 border-brand-green">
               <span className="block text-[10px] font-mono uppercase text-brand-green mb-2">Sector Focus</span>
               <h3 className="text-3xl font-serif text-white mb-4">{activeSection.subtitle}</h3>
               <div 
                 className="text-xs text-gray-300 leading-relaxed max-h-40 overflow-y-auto prose prose-invert prose-sm [&_h4]:text-white [&_p]:text-gray-300 [&_strong]:text-brand-green [&_li]:text-gray-300"
                 dangerouslySetInnerHTML={{ __html: activeSection.description }}
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Applications;
