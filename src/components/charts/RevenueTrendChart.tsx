import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { quarterlyFinancials } from '../../data/fixtures';
import { AccessibleTooltip } from './AccessibleTooltip';

export function RevenueTrendChart() {
  const min = Math.min(...quarterlyFinancials.map((d) => d.revenue), 0);
  const max = Math.max(...quarterlyFinancials.map((d) => d.revenue), 0);

  return (
    <div aria-label="Quarterly revenue trend chart" role="img" className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={quarterlyFinancials} margin={{ top: 8, right: 24, left: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis domain={[min, max]} />
          <ReferenceLine y={0} stroke="#9ca3af" />
          <Tooltip content={<AccessibleTooltip />} />
          <Line type="monotone" dataKey="revenue" name="Revenue ($M)" stroke="#2563eb" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
