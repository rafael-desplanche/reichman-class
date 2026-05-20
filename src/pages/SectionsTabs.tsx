import { KpiCard } from '../components/KpiCard';
import { SourceBadge } from '../components/SourceBadge';
import { CashFlowChart } from '../components/charts/CashFlowChart';
import { RevenueTrendChart } from '../components/charts/RevenueTrendChart';
import { SegmentMarginChart } from '../components/charts/SegmentMarginChart';
import { quarterlyFinancials, revenueMix, riskDashboard } from '../data/fixtures';
import { fcfConversion, formatCurrency, formatPercent, lastQuarter, totalRevenueMix, yoyRevenueGrowth } from '../finance';

const filingLink = 'https://www.sec.gov/ixviewer/';

function SourceNote({ label }: { label: string }) {
  return <SourceBadge label={label} href={filingLink} />;
}

export function SectionsTabs() {
  const latest = lastQuarter();

  return (
    <div className="space-y-8">
      <section aria-labelledby="overview">
        <h2 id="overview">Executive Overview</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <KpiCard title="Latest Revenue" value={formatCurrency(latest.revenue)} delta={formatPercent(yoyRevenueGrowth()) + ' YoY'} tone="positive" sourceNote={<SourceNote label="MD&A – Results of Operations" />} />
          <KpiCard title="Operating Income" value={formatCurrency(latest.operatingIncome)} sourceNote={<SourceNote label="Consolidated Statements of Income" />} />
          <KpiCard title="FCF Conversion" value={formatPercent(fcfConversion())} tone={fcfConversion() < 0 ? 'negative' : 'neutral'} sourceNote={<SourceNote label="Liquidity and Capital Resources" />} />
        </div>
      </section>

      <section><h2>Revenue Mix</h2><p>Total mix base: {formatCurrency(totalRevenueMix())}</p><RevenueTrendChart /><SourceNote label="Note 2 – Revenue" /></section>
      <section><h2>Segment Profitability</h2><SegmentMarginChart /><SourceNote label="Segment Reporting" /></section>
      <section><h2>Cost, Capex, and AI Infrastructure</h2><p>Latest Capex: {formatCurrency(latest.capex)} | AI infra: {formatCurrency(latest.aiInfraSpend)}</p><RevenueTrendChart /><SourceNote label="Property & Equipment + Capex" /></section>
      <section><h2>Cash Flow and Capital Allocation</h2><CashFlowChart /><SourceNote label="Cash Flows + Share Repurchases" /></section>
      <section><h2>Risk and Legal Dashboard</h2><ul>{riskDashboard.map((r) => <li key={r.category}>{r.category}: severity {r.severity}, open cases {r.openCases}</li>)}</ul><SourceNote label="Legal Proceedings + Risk Factors" /></section>
      <section><h2>Filing Explorer</h2><ul>{quarterlyFinancials.map((q) => <li key={q.quarter}>{q.quarter}: revenue {formatCurrency(q.revenue)}</li>)}</ul><p>Reference sections by quarter and metric mapping.</p><SourceNote label="Form 10-Q Index" /></section>
      <section><h3>Revenue Categories</h3><ul>{revenueMix.map((item) => <li key={item.name}>{item.name}: {formatCurrency(item.amount)}</li>)}</ul></section>
    </div>
  );
}
