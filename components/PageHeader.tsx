import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bgImage }) => {
  return (
    <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
        {/* Background */}
        <div className="absolute inset-0 z-0">
             {bgImage ? (
                <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-30 grayscale" />
             ) : (
                <div className="w-full h-full bg-brand-dark/80"></div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/80"></div>
             {/* Grain Texture */}
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center pt-20">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wide">{title}</h1>
            {subtitle && (
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-[1px] bg-brand-gold"></div>
                    <p className="text-gray-300 text-sm md:text-base tracking-wide max-w-2xl mx-auto font-light leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            )}
        </div>
    </section>
  );
};

export default PageHeader;
