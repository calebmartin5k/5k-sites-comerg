'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Statement: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const words = textRef.current?.querySelectorAll('.word');
    
    gsap.fromTo(words, 
      { opacity: 0.05, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%', // Starts animation when top of section hits 75% of viewport height
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef });

  const text = "Our mission is simple: Get into the molecular structure of the plant near its low point and extract the purest essence without damaging the raw material.";

  return (
    <section ref={containerRef} className="py-40 bg-brand-dark text-white flex items-center justify-center border-t border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.3] max-w-6xl mx-auto text-gray-400">
          {text.split(' ').map((word, i) => (
            <span key={i} className="word inline-block mr-2 md:mr-4">
              {word.toLowerCase().includes('molecular') || word.toLowerCase().includes('essence') ? <span className="italic text-brand-green">{word}</span> : word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default Statement;