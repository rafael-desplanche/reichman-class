export type QuarterPoint = {
  quarter: string;
  revenue: number;
  operatingIncome: number;
  segmentMargin: number;
  capex: number;
  aiInfraSpend: number;
  freeCashFlow: number;
  buybacks: number;
};

export type RevenueMixPoint = {
  name: string;
  amount: number;
};

export type RiskItem = {
  category: string;
  severity: number;
  openCases: number;
};

export const quarterlyFinancials: QuarterPoint[] = [
  { quarter: 'Q1-2025', revenue: 41200, operatingIncome: 8300, segmentMargin: 20.1, capex: 6500, aiInfraSpend: 2200, freeCashFlow: 5100, buybacks: 1800 },
  { quarter: 'Q2-2025', revenue: 43800, operatingIncome: 8800, segmentMargin: 20.5, capex: 7200, aiInfraSpend: 2600, freeCashFlow: 4700, buybacks: 2100 },
  { quarter: 'Q3-2025', revenue: 42900, operatingIncome: 7900, segmentMargin: 18.4, capex: 7600, aiInfraSpend: 3100, freeCashFlow: 3900, buybacks: 1900 },
  { quarter: 'Q4-2025', revenue: 45600, operatingIncome: 9600, segmentMargin: 21.1, capex: 8100, aiInfraSpend: 3500, freeCashFlow: 5600, buybacks: 2400 },
  { quarter: 'Q1-2026', revenue: 46300, operatingIncome: 8900, segmentMargin: 19.2, capex: 8400, aiInfraSpend: 3900, freeCashFlow: -600, buybacks: 1500 },
];

export const revenueMix: RevenueMixPoint[] = [
  { name: 'Product', amount: 52800 },
  { name: 'Services', amount: 27400 },
  { name: 'Cloud', amount: 34100 },
  { name: 'Ads', amount: 9500 },
];

export const segmentProfitability = [
  { segment: 'Consumer', margin: 16.2 },
  { segment: 'Enterprise', margin: 28.7 },
  { segment: 'Cloud + AI', margin: 11.4 },
  { segment: 'Other Bets', margin: -9.8 },
];

export const riskDashboard: RiskItem[] = [
  { category: 'Antitrust', severity: 5, openCases: 6 },
  { category: 'Privacy', severity: 4, openCases: 4 },
  { category: 'IP/Patent', severity: 3, openCases: 9 },
  { category: 'Cybersecurity', severity: 2, openCases: 3 },
];
