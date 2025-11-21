import React from 'react';
import { Search, MoreHorizontal, Filter, Plus, Sparkles, Mail, Check, ArrowUpRight, Layers } from 'lucide-react';

const ProductMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-20 perspective-1000">
      {/* Floating Elements / Decor */}
      <div className="absolute -right-12 top-20 z-30 animate-bounce-gentle hidden md:block">
        <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700 p-4 rounded-xl shadow-2xl shadow-emerald-500/10 max-w-[240px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>
            <span className="text-xs font-semibold text-emerald-400">AI Insight</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            已识别 <span className="text-white font-medium">Prinova</span> 的采购需求与您的新品高度匹配。建议在周二上午 10:00 发送邮件。
          </p>
        </div>
      </div>

      {/* Main Window */}
      <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl shadow-black/50 overflow-hidden transform transition-transform duration-700 hover:scale-[1.01]">
        
        {/* Window Header */}
        <div className="h-12 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs text-slate-400">
               <Layers className="w-3 h-3" />
               <span>YouDeal / Workspace / Global Targets</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-64 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center px-3 gap-2">
              <Search className="w-3 h-3 text-slate-500" />
              <span className="text-xs text-slate-600">Search companies...</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700"></div>
          </div>
        </div>

        <div className="flex h-[500px]">
          {/* Sidebar */}
          <div className="w-16 border-r border-slate-800 flex flex-col items-center py-4 gap-6 bg-slate-900/30">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500"><Layers className="w-5 h-5"/></div>
            <div className="p-2 rounded-lg hover:bg-slate-800 text-slate-500"><Mail className="w-5 h-5"/></div>
            <div className="p-2 rounded-lg hover:bg-slate-800 text-slate-500"><Filter className="w-5 h-5"/></div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Toolbar */}
            <div className="h-14 border-b border-slate-800 flex items-center justify-between px-6">
                <h2 className="text-white font-semibold flex items-center gap-2">
                    潜在客户列表 (Leads)
                    <span className="text-xs font-normal text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">128</span>
                </h2>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-md border border-slate-700 text-slate-400 text-xs hover:text-white transition-colors">Filter</button>
                    <button className="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-500 transition-colors flex items-center gap-1">
                        <Plus className="w-3 h-3" /> Add Target
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <div className="flex-1 overflow-hidden bg-slate-900/20">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-800 text-xs text-slate-500">
                            <th className="font-medium py-3 px-6 pl-6">Company</th>
                            <th className="font-medium py-3 px-6">Status</th>
                            <th className="font-medium py-3 px-6">Contact</th>
                            <th className="font-medium py-3 px-6">AI Signal</th>
                            <th className="font-medium py-3 px-6 w-10"></th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {[
                            { name: 'Caldic', loc: 'Netherlands', status: 'Contacted', contact: 'Procurement VP', signal: 'High Interest', color: 'bg-blue-500' },
                            { name: 'Prinova', loc: 'USA', status: 'Replied', contact: 'R&D Director', signal: 'Meeting Booked', color: 'bg-emerald-500' },
                            { name: 'Nexira', loc: 'France', status: 'Researching', contact: 'Product Manager', signal: 'New Product', color: 'bg-yellow-500' },
                            { name: 'Meurens Natural', loc: 'Belgium', status: 'Contacted', contact: 'CEO', signal: 'Viewing Proposal', color: 'bg-purple-500' },
                            { name: 'Gujarat Ambuja', loc: 'India', status: 'Qualified', contact: 'Sourcing Head', signal: 'High Intent', color: 'bg-blue-500' },
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 group transition-colors">
                                <td className="py-3 px-6 flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white ${row.color}`}>{row.name[0]}</div>
                                    <div>
                                        <div className="text-slate-200 font-medium">{row.name}</div>
                                        <div className="text-xs text-slate-500">{row.loc}</div>
                                    </div>
                                </td>
                                <td className="py-3 px-6">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                        row.status === 'Replied' ? 'bg-emerald-500/10 text-emerald-400' : 
                                        row.status === 'Contacted' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-700/30 text-slate-400'
                                    }`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-slate-400">{row.contact}</td>
                                <td className="py-3 px-6">
                                     <div className="flex items-center gap-1.5">
                                        {row.signal === 'Meeting Booked' ? <Check className="w-3 h-3 text-emerald-500" /> : <ArrowUpRight className="w-3 h-3 text-slate-500" />}
                                        <span className={`text-xs ${row.signal === 'Meeting Booked' ? 'text-emerald-400 font-medium' : 'text-slate-400'}`}>{row.signal}</span>
                                     </div>
                                </td>
                                <td className="py-3 px-6 text-slate-600">
                                    <MoreHorizontal className="w-4 h-4 opacity-0 group-hover:opacity-100 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {/* Fake Scroll Gradient */}
                <div className="h-20 bg-gradient-to-t from-slate-900/40 to-transparent w-full mt-auto pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMockup;