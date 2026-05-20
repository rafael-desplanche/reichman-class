export const safeDivide = (numerator: number, denominator: number): number | null => {
  if (denominator === 0) return null;
  return numerator / denominator;
};

export const yoyGrowth = (current: number, previous: number): number | null => {
  if (previous === 0) return null;
  return (current - previous) / Math.abs(previous);
};

export const revenueShare = (segmentRevenue: number, totalRevenue: number): number | null =>
  safeDivide(segmentRevenue, totalRevenue);

export const segmentOperatingMargin = (
  segmentOperatingIncome: number,
  segmentRevenue: number,
): number | null => safeDivide(segmentOperatingIncome, segmentRevenue);

export const advertisingShare = (advertisingRevenue: number, totalRevenue: number): number | null =>
  safeDivide(advertisingRevenue, totalRevenue);

export const freeCashFlow = (operatingCashFlow: number, capex: number): number =>
  operatingCashFlow - Math.abs(capex);

export const capexIntensity = (capex: number, revenue: number): number | null =>
  safeDivide(Math.abs(capex), revenue);

export const rdIntensity = (rdExpense: number, revenue: number): number | null =>
  safeDivide(rdExpense, revenue);

export const gaIntensity = (gaExpense: number, revenue: number): number | null =>
  safeDivide(gaExpense, revenue);

export const tacPctOfAdvertising = (tac: number, advertisingRevenue: number): number | null =>
  safeDivide(tac, advertisingRevenue);

export const cashAndMarketableSecuritiesToTotalAssets = (
  cashAndMarketableSecurities: number,
  totalAssets: number,
): number | null => safeDivide(cashAndMarketableSecurities, totalAssets);

export const debtToEquity = (totalDebt: number, totalEquity: number): number | null =>
  safeDivide(totalDebt, totalEquity);

export const netIncomeMargin = (netIncome: number, revenue: number): number | null =>
  safeDivide(netIncome, revenue);
