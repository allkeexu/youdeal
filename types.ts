export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface ComparisonPoint {
  feature: string;
  traditional: string;
  youdeal: string;
}

export interface ServiceProfile {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconType: 'mail' | 'linkedin';
  gradient: string;
}

export interface PricingTier {
  name: string;
  model: string;
  features: string[];
  highlight?: boolean;
}
