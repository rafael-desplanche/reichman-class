import { Bar, CartesianGrid, ComposedChart, Line, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { quarterlyFinancials } from '../../data/fixtures';
import { AccessibleTooltip } from './AccessibleTooltip';

export function CashFlowChart() {
  const values = quarterlyFinancials.flatMap((q) => [q.freeCashFlow, q.buybacks]);
  return (
    <div aria-label="Free cash flow and buybacks chart" role="img" className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={quarterlyFinancials}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis domain={[Math.min(...values, 0) - 500, Math.max(...values, 0) + 500]} />
          <ReferenceLine y={0} stroke="#9ca3af" />
          <Tooltip content={<AccessibleTooltip />} />
          <Bar dataKey="buybacks" name="Buybacks ($M)" fill="#0d9488" />
          <Line dataKey="freeCashFlow" name="Free Cash Flow ($M)" stroke="#dc2626" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
