import React, { useEffect, useState } from 'react';
import { X, Database, Trash2, RefreshCw } from 'lucide-react';
import { db, Submission } from '../utils/db';

interface DatabaseViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const DatabaseViewer: React.FC<DatabaseViewerProps> = ({ isOpen, onClose }) => {
  const [data, setData] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const records = await db.getAll();
      setData(records);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    if (confirm('确定要清空所有数据吗？此操作不可恢复。')) {
      await db.clear();
      loadData();
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-slate-900 border border-slate-800 rounded-xl w-full max-w-4xl h-[80vh] flex flex-col shadow-2xl animate-fade-in-up">
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-500" />
            <h3 className="text-lg font-bold text-white">后台数据管理 (Admin)</h3>
            <span className="bg-slate-800 text-slate-400 text-xs px-2 py-0.5 rounded-full">
              {data.length} 条记录
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={loadData}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="刷新"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button 
              onClick={handleClear}
              className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors"
              title="清空数据"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-slate-700 mx-2"></div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          {data.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500">
              <Database className="w-12 h-12 mb-4 opacity-20" />
              <p>暂无数据提交</p>
            </div>
          ) : (
            <div className="rounded-lg border border-slate-800 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950 text-slate-400">
                  <tr>
                    <th className="p-4 font-medium">提交时间</th>
                    <th className="p-4 font-medium">姓名</th>
                    <th className="p-4 font-medium">电话</th>
                    <th className="p-4 font-medium">行业</th>
                    <th className="p-4 font-medium">留言/需求</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                  {data.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 text-slate-500 whitespace-nowrap">
                        {new Date(row.createdAt).toLocaleString()}
                      </td>
                      <td className="p-4 text-white font-medium">{row.name}</td>
                      <td className="p-4 text-slate-300">{row.phone}</td>
                      <td className="p-4 text-slate-300">
                        <span className="bg-slate-800 px-2 py-1 rounded text-xs">
                          {row.industry || '-'}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400 max-w-xs truncate" title={row.message}>
                        {row.message || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatabaseViewer;