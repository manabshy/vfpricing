export interface ICustomerInfo {
  billing_account_number: string;
  customer_name: string;
  global_account_number: number;
  global_account_name: string;
  industry: string;
  opco: string;
  checked?: boolean;
}

export interface IOpco {
  id: string;
  name: string;
}

export interface ITrend {
  type: string;
  value: number[];
}

export interface ISummary {
  type: string;
  annual: string;
  '3months': string;
  change: string;
  diff: string;
}

export interface IUsage {
  type: string;
  trend: ITrend[];
  summary: ISummary[];
  date: string[];
}

export interface ILabels {
  y: string;
  x: string;
  title: string;
}

export interface IGraphConfig {
  Voice: { labels: ILabels };
  Trend: { labels: ILabels };
  Spend: { labels: ILabels };
  CTNs: { labels: ILabels };
}
