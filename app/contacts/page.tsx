'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className="font-sans antialiased bg-brand-dark min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <PageHeader 
            title="Get In Touch" 
            subtitle="Connect with our team to discuss your extraction needs."
        />

        <div className="container mx-auto px-6 md:px-12 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                
                {/* Left Column: Contact Info */}
                <div className="space-y-16">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-8">Contact Information</h2>
                        <p className="text-gray-400 font-light leading-relaxed mb-12">
                            COMERG is dedicated to developing technologies with minimum impact to the end product. Utilizing its Liquefied Gas Extraction Technology, our solution is cheaper, faster, and better than popular carbon dioxide technologies.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-gold group-hover:border-brand-green group-hover:text-brand-green transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Us</h4>
                                    <a href="mailto:info@comerg.com" className="text-2xl font-serif text-white hover:text-brand-green transition-colors">
                                        info@comerg.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-gold group-hover:border-brand-green group-hover:text-brand-green transition-all">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Call Us</h4>
                                    <a href="tel:6026666146" className="text-2xl font-serif text-white hover:text-brand-green transition-colors">
                                        602-666-6146
                                    </a>
                                </div>
                            </div>
                            
                             <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-gold group-hover:border-brand-green group-hover:text-brand-green transition-all">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Headquarters</h4>
                                    <span className="text-xl font-serif text-white block">
                                        Phoenix, Arizona
                                    </span>
                                    <span className="text-gray-500 text-sm">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interactive Elements or Map Placeholder */}
                <div className="relative">
                    {/* Decorative Box */}
                    <div className="absolute top-0 right-0 w-full h-full border border-white/5 rounded-sm transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8"></div>
                    
                    <div className="relative bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-sm h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-serif text-white mb-6">Start a Conversation</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                                <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                                <textarea className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-green transition-colors h-32 resize-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="bg-white text-brand-dark px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
