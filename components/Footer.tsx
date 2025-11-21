import React from 'react';
import { Globe, Mail, Phone, Database } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-slate-950">
                        <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold text-white">YouDeal</span>
                </div>
                <p className="text-slate-400 max-w-sm leading-relaxed">
                    您的产品，值得被世界看见。期待与您携手，共拓全球市场。我们帮您建立“渠道+品牌”的增长飞轮。
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-semibold mb-6">服务</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                    <li><a href="#services" className="hover:text-emerald-400 transition-colors">AI Cold Email</a></li>
                    <li><a href="#services" className="hover:text-emerald-400 transition-colors">LinkedIn 品牌运营</a></li>
                    <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">GTM 市场策略</a></li>
                    <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">市场调研</a></li>
                </ul>
            </div>

             <div>
                <h4 className="text-white font-semibold mb-6">联系我们</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                    <li className="flex items-center gap-2">
                        <span className="font-semibold text-white">袁佳燕 (Jiayan Yuan)</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <Phone className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                        <span>+86-138-1711-3216</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <Mail className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
                        <a href="mailto:Jiayan.yuan@outlook.com" className="hover:text-emerald-400 transition-colors">Jiayan.yuan@outlook.com</a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600">
                &copy; 2025 YouDeal. 保留所有权利.
            </div>
            <div className="flex items-center gap-4">
                <div className="text-sm text-slate-600">
                    Precision. Strategy. Results.
                </div>
                {/* Admin Trigger for Demo Purposes */}
                <button 
                    onClick={onOpenAdmin}
                    className="text-slate-800 hover:text-emerald-500 transition-colors p-1"
                    title="Open Database"
                >
                    <Database className="w-3 h-3" />
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;