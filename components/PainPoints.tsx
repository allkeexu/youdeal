import React, { useEffect, useRef, useState } from 'react';
import { PAIN_POINTS } from '../constants';

const PainPoints: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pain-points" ref={sectionRef} className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">您的“出海之痛”，我们都懂</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            产品过硬，出海却“有劲使不出”？因为传统低效的方式，您是否正面临这些难题？
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((point, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-700 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors duration-300 ${isVisible ? 'animate-bounce-gentle' : ''}`}>
                {point.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{point.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;