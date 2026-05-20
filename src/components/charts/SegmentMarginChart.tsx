import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { segmentProfitability } from '../../data/fixtures';
import { AccessibleTooltip } from './AccessibleTooltip';

export function SegmentMarginChart() {
  const vals = segmentProfitability.map((s) => s.margin);
  return (
    <div aria-label="Segment margin bar chart" role="img" className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={segmentProfitability}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="segment" />
          <YAxis domain={[Math.min(...vals, 0) - 2, Math.max(...vals, 0) + 2]} />
          <ReferenceLine y={0} stroke="#9ca3af" />
          <Tooltip content={<AccessibleTooltip />} />
          <Bar dataKey="margin" name="Operating Margin %" fill="#7c3aed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
