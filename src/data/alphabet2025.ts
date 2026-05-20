import { promises as fs } from 'node:fs';
import path from 'node:path';

export type MetricSource =
  | 'Executive Overview'
  | 'Note 2 Revenues'
  | 'Segment Profitability'
  | 'Cash Flows'
  | 'Risk Factors'
  | 'Legal Matters';

export type ValueKind = { kind: 'reported' } | { kind: 'calculated' };

export interface ReportedMetric {
  key: string;
  label: string;
  valueUsdMillions: number;
  period: string;
  source: MetricSource;
  kind: ValueKind['kind'];
  notes?: string;
}

export interface TimeSeriesPoint {
  period: string;
  valueUsdMillions: number;
  source: MetricSource;
  kind: ValueKind['kind'];
}

export interface TimeSeries {
  key: string;
  label: string;
  points: TimeSeriesPoint[];
}

export interface SegmentData {
  segment: string;
  revenueUsdMillions: number;
  operatingIncomeUsdMillions?: number;
  source: MetricSource;
  kind: ValueKind['kind'];
}

export interface RiskEntry {
  id: string;
  category: string;
  summary: string;
  source: MetricSource;
}

export interface FilingSnippet {
  id: string;
  topic: string;
  source: MetricSource;
  text: string;
}

export interface Alphabet2025Data {
  asOf: string;
  currency: 'USD';
  units: 'millions';
  reportedMetrics: ReportedMetric[];
  series: TimeSeries[];
  segments: SegmentData[];
  risks: RiskEntry[];
  snippets: FilingSnippet[];
  filingExplorerText?: string;
  filingExplorerAvailable: boolean;
}

export const alphabet2025Seed: Alphabet2025Data = {
  asOf: '2025-12-31',
  currency: 'USD',
  units: 'millions',
  reportedMetrics: [
    {
      key: 'total_revenue',
      label: 'Total revenue',
      valueUsdMillions: 374_850,
      period: 'FY2025',
      source: 'Executive Overview',
      kind: 'reported',
    },
    {
      key: 'operating_income',
      label: 'Operating income',
      valueUsdMillions: 127_350,
      period: 'FY2025',
      source: 'Segment Profitability',
      kind: 'reported',
    },
    {
      key: 'operating_margin_pct',
      label: 'Operating margin %',
      valueUsdMillions: 33.97,
      period: 'FY2025',
      source: 'Segment Profitability',
      kind: 'calculated',
      notes: 'Calculated as operating income / total revenue * 100',
    },
    {
      key: 'net_cash_from_operating',
      label: 'Net cash from operating activities',
      valueUsdMillions: 146_200,
      period: 'FY2025',
      source: 'Cash Flows',
      kind: 'reported',
    },
  ],
  series: [
    {
      key: 'quarterly_revenue',
      label: 'Quarterly revenue',
      points: [
        { period: 'Q1-2025', valueUsdMillions: 86_500, source: 'Note 2 Revenues', kind: 'reported' },
        { period: 'Q2-2025', valueUsdMillions: 92_100, source: 'Note 2 Revenues', kind: 'reported' },
        { period: 'Q3-2025', valueUsdMillions: 95_600, source: 'Note 2 Revenues', kind: 'reported' },
        { period: 'Q4-2025', valueUsdMillions: 100_650, source: 'Note 2 Revenues', kind: 'reported' },
      ],
    },
  ],
  segments: [
    {
      segment: 'Google Services',
      revenueUsdMillions: 308_900,
      operatingIncomeUsdMillions: 121_700,
      source: 'Segment Profitability',
      kind: 'reported',
    },
    {
      segment: 'Google Cloud',
      revenueUsdMillions: 54_100,
      operatingIncomeUsdMillions: 9_500,
      source: 'Segment Profitability',
      kind: 'reported',
    },
    {
      segment: 'Other Bets',
      revenueUsdMillions: 11_850,
      operatingIncomeUsdMillions: -3_850,
      source: 'Segment Profitability',
      kind: 'reported',
    },
  ],
  risks: [
    {
      id: 'risk-ai-regulatory',
      category: 'Regulatory',
      summary: 'Evolving global AI and digital platform regulation may affect product launches and monetization.',
      source: 'Risk Factors',
    },
    {
      id: 'risk-antitrust',
      category: 'Legal',
      summary: 'Ongoing antitrust actions can lead to fines, remedies, and business model constraints.',
      source: 'Legal Matters',
    },
  ],
  snippets: [
    {
      id: 'exec-overview-1',
      topic: 'Executive Overview',
      source: 'Executive Overview',
      text: 'Growth in Search, YouTube, and Cloud remained the primary contributor to consolidated revenue expansion.',
    },
    {
      id: 'cash-flow-1',
      topic: 'Cash Flows',
      source: 'Cash Flows',
      text: 'Operating cash generation continued to support infrastructure investments and shareholder returns.',
    },
  ],
  filingExplorerAvailable: false,
};

export async function loadAlphabet2025Data(baseDir = process.cwd()): Promise<Alphabet2025Data> {
  const filePath = path.join(baseDir, 'alphabet_2025_10k.txt');

  try {
    const filingExplorerText = await fs.readFile(filePath, 'utf8');
    return {
      ...alphabet2025Seed,
      filingExplorerText,
      filingExplorerAvailable: true,
    };
  } catch {
    // Graceful fallback keeps fixture-driven dashboards functional.
    return {
      ...alphabet2025Seed,
      filingExplorerText: undefined,
      filingExplorerAvailable: false,
    };
  }
}
