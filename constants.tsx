import React from 'react';
import { Globe, MessageSquare, Layout, Target, Search, Zap, BarChart2, Mail, Linkedin } from 'lucide-react';
import { Metric, ComparisonPoint, ServiceProfile } from './types';

export const NAV_LINKS = [
  { label: '核心服务', href: '#services' },
  { label: '为什么选择我们', href: '#why-us' },
  { label: '优势对比', href: '#comparison' },
  { label: '联系我们', href: '#contact' },
];

export const HERO_CONTENT = {
  title: "您的好原料，如何精准卖向全球？",
  subtitle: "告别低效开拓，让智能 AI 帮您主动开发海外客户。",
  badge: "海外智能拓客专家",
  ctaPrimary: "开启增长",
  ctaSecondary: "为什么选择我们"
};

export const METRICS: Metric[] = [
  { label: "效果翻倍", value: "2x", description: "让展会投入回报翻倍" },
  { label: "全天候运营", value: "24/7", description: "永不“断线”的自动搜寻与触达" },
  { label: "精准获客", value: "500+", description: "展会前向精准客户发专属邀请" },
  { label: "数据透明", value: "100%", description: "全程透明的数据报告" }
];

export const PAIN_POINTS = [
  {
    title: "展会“豪赌”",
    description: "花了几十万参展，收回的名片是否足够，效果如何衡量？成本高且回报不确定。",
    icon: <Target className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "沟通“卡壳”",
    description: "销售英文不地道，客户“没感觉”；懂外语的又不懂产品技术，难以深入交流。",
    icon: <MessageSquare className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "形象“吃亏”",
    description: "展位和手册设计千篇一律，无法体现企业真实力，抓不住海外客户的眼球。",
    icon: <Layout className="w-6 h-6 text-emerald-400" />
  }
];

export const COMPARISON_DATA: ComparisonPoint[] = [
  {
    feature: "策略 (Strategy)",
    traditional: "随机、被动",
    youdeal: "策略先行、主动出击"
  },
  {
    feature: "内容 (Content)",
    traditional: "千篇一律",
    youdeal: "一对一、高度定制"
  },
  {
    feature: "结果 (Result)",
    traditional: "线索量少、质量层次不齐",
    youdeal: "高意向线索 + 客户情报"
  },
  {
    feature: "成本 (Cost)",
    traditional: "成本固定（效果无保障）",
    youdeal: "可控、灵活、按效果付费"
  }
];

export const SERVICES: ServiceProfile[] = [
  {
    title: "智能精准拓客",
    subtitle: "AI Cold Email",
    description: "如同一个“超级销售专家团”。我们帮您【瞄准 – 研究 – 搜寻 – 触达 – 跟进】，并撰写 1v1 的专属定制化开发信，直达目标企业联系人。",
    features: ["绘制目标客户画像", "AI批量研究企业", "生成定制化邮件", "自动多轮跟进"],
    iconType: 'mail',
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "海外专业形象代运营",
    subtitle: "LinkedIn (领英) 运营",
    description: "这是您在海外的“官方企业名片”和“信任状”。当客户搜索您时，专业形象能立刻建立信任，促成沟通。",
    features: ["个人档案优化", "内容策略发布", "建立信任", "获取被动流量"],
    iconType: 'linkedin',
    gradient: "from-blue-600 to-indigo-600"
  }
];

export const PROCESS_STEPS = [
  { title: "GTM策略梳理", desc: "制定市场开拓策略" },
  { title: "目标客户画像", desc: "搜寻目标企业名单" },
  { title: "AI深度研究", desc: "目标企业研究与销售策略" },
  { title: "1v1定制触达", desc: "生成高度定制化开发信" },
  { title: "跟进孵化", desc: "多轮邮件触达与数据追踪" }
];

export const INDUSTRY_OPTIONS = [
  { value: 'manufacturing', label: '制造业 (Manufacturing)' },
  { value: 'technology', label: '科技/软件 (Technology)' },
  { value: 'ecommerce', label: '跨境电商 (E-commerce)' },
  { value: 'food_beverage', label: '食品饮料 (Food & Beverage)' },
  { value: 'healthcare', label: '医疗健康 (Healthcare)' },
  { value: 'other', label: '其他 (Other)' }
];
