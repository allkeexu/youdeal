import React from 'react';
import { SERVICES } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

const Agents: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">我们的核心服务：策略 + 执行</h2>
             <p className="text-slate-400 max-w-2xl">结合 AI 的高效与专家的策略规划，为您带来实实在在的销售业绩。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.title} className="relative p-1 rounded-3xl bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden group">
               <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
               
               <div className="relative h-full bg-slate-950 rounded-[22px] p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                        {service.iconType === 'mail' ? <Mail className="w-8 h-8 text-white" /> : <Linkedin className="w-8 h-8 text-white" />}
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          <div className="text-emerald-400 font-medium">{service.subtitle}</div>
                      </div>
                  </div>

                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-sm text-slate-400">{feature}</span>
                          </div>
                      ))}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;