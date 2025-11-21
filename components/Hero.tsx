import React from 'react';
import { HERO_CONTENT, METRICS } from '../constants';
import { ArrowRight, Play } from 'lucide-react';
import ProductMockup from './ProductMockup';

interface HeroProps {
  onOpenConsultation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Global Network Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">{HERO_CONTENT.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {HERO_CONTENT.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {HERO_CONTENT.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 text-slate-950 font-bold text-base hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              {HERO_CONTENT.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#why-us"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800/50 border border-slate-700 text-white font-semibold text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              {HERO_CONTENT.ctaSecondary}
            </a>
          </div>
        </div>
        
        {/* Product Interface Mockup */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
           <ProductMockup />
        </div>

        {/* Metrics Strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {METRICS.map((metric, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-2">{metric.label}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;