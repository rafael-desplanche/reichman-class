import { quarterlyFinancials, revenueMix } from './data/fixtures';

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value * 1_000_000);

export const formatPercent = (value: number): string => `${value.toFixed(1)}%`;

export const lastQuarter = () => quarterlyFinancials[quarterlyFinancials.length - 1];

export const totalRevenueMix = () => revenueMix.reduce((sum, item) => sum + item.amount, 0);

export const yoyRevenueGrowth = (): number => {
  const latest = quarterlyFinancials[quarterlyFinancials.length - 1].revenue;
  const previous = quarterlyFinancials[quarterlyFinancials.length - 5].revenue;
  return ((latest - previous) / previous) * 100;
};

export const fcfConversion = (): number => {
  const latest = lastQuarter();
  return (latest.freeCashFlow / latest.operatingIncome) * 100;
};
