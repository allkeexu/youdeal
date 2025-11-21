import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { Check, X } from 'lucide-react';

const CostComparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">传统方式 vs 智能拓客</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                为什么要从被动的展会/广告模式，转向主动的 AI 智能开发？
            </p>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
                <thead>
                    <tr>
                        <th className="text-left py-6 px-6 text-slate-500 font-medium uppercase tracking-wider w-1/4">特点</th>
                        <th className="text-left py-6 px-6 text-slate-400 font-medium uppercase tracking-wider w-1/3 bg-slate-900/50 rounded-tl-xl">传统方式 (展会/广告)</th>
                        <th className="text-left py-6 px-6 text-emerald-400 font-bold uppercase tracking-wider w-1/3 bg-emerald-900/10 rounded-tr-xl border-t border-emerald-500/20">我们的“智能拓客”</th>
                    </tr>
                </thead>
                <tbody>
                    {COMPARISON_DATA.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-800 last:border-0">
                            <td className="py-6 px-6 text-white font-semibold">{row.feature}</td>
                            <td className="py-6 px-6 text-slate-400 bg-slate-900/20">
                                <div className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    {row.traditional}
                                </div>
                            </td>
                            <td className="py-6 px-6 text-white bg-emerald-900/5 border-x border-emerald-500/10">
                                <div className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    {row.youdeal}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        {/* Visual Email Comparison Block - Simplified from PDF Slide 10 */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 opacity-70">
                <div className="text-red-400 font-bold mb-4 flex items-center gap-2"><X className="w-4 h-4"/> BEFORE: 骚扰式群发</div>
                <div className="bg-slate-950 p-4 rounded font-mono text-xs text-slate-500 leading-relaxed">
                    "Hello Dear Sir,<br/><br/>
                    We are factory for raw materials. Good price good quality.<br/>
                    Please see attachment.<br/><br/>
                    Best regards,"
                </div>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-emerald-500/30 relative">
                 <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">获胜策略</div>
                 <div className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Check className="w-4 h-4"/> AFTER: 1v1 定制化开发信</div>
                 <div className="bg-slate-950 p-4 rounded font-mono text-xs text-slate-300 leading-relaxed">
                    "Hi [First Name],<br/><br/>
                    注意到贵司在 Q3 推出了 [新产品系列]。 <br/>
                    我们的新提取技术能显著提升 [特定成分] 的稳定性，这恰好能解决您近期 R&D 报告中提到的货架期痛点...<br/>"
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;