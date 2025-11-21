import React from 'react';
import { Target, Map, UserCheck, Calendar, Search, Briefcase } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">为什么选择我们？</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            我们不是工具商，我们是您的GTM（市场进入）战略伙伴。我们卖的不是AI，是实实在在的生意机会。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card 1: Strategy First */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">策略先行：每次出击都瞄准“靶心”</h3>
              <p className="text-slate-400 max-w-md">专家帮您制定GTM（市场进入）打法。不再是随机的盲目尝试，而是精准的战略出击。</p>
            </div>
            <div className="absolute right-4 bottom-4 opacity-20">
                <Map className="w-32 h-32 text-blue-400" />
            </div>
          </div>

          {/* Card 2: Intelligence Report */}
          <div className="md:row-span-2 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/50 transition-colors flex flex-col">
             <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <Search className="w-5 h-5" />
              </div>
            <h3 className="text-2xl font-semibold text-white mb-2">提供“情报”</h3>
            <p className="text-slate-400 mb-8">交付“客户洞察报告”，您的销售接手后可无缝衔接，直奔主题。</p>
            
            <div className="mt-auto space-y-2 relative z-10">
               <div className="p-3 rounded bg-slate-800 border border-slate-700">
                   <div className="h-2 w-1/3 bg-slate-600 rounded mb-2"></div>
                   <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
               </div>
               <div className="p-3 rounded bg-slate-800 border border-slate-700">
                   <div className="h-2 w-1/4 bg-slate-600 rounded mb-2"></div>
                   <div className="h-2 w-full bg-slate-700 rounded"></div>
               </div>
               <div className="text-xs text-emerald-400 font-mono text-right">分析完成</div>
            </div>
          </div>

          {/* Card 3: 1v1 Customization - The "Before/After" Concept */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm flex flex-col relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">逐个定制</h3>
            <p className="text-slate-400 text-sm">不是“Dear Sir”，而是“XX总，注意到贵司Q3新品…”，真正打动客户。</p>
          </div>

          {/* Card 4: Full Cycle Coverage */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm flex flex-col relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">全场景覆盖</h3>
            <p className="text-slate-400 text-sm">从展会前向精准客户发邀约，到展会后“智能化”跟进，以及日常7x24小时的主动拓客。</p>
          </div>

           {/* Card 5: Business Model */}
           <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-slate-800 backdrop-blur-sm flex flex-row items-center justify-between relative overflow-hidden">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-xl font-semibold text-white">灵活合作，效果付费</h3>
                </div>
                <p className="text-slate-400 max-w-lg">我们深知出海不易。您可以选择“按项目”付费，更欢迎选择“按结果”（有效线索）付费。</p>
            </div>
            <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xl">
                ROI
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;