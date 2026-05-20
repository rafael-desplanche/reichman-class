import type { TooltipProps } from 'recharts';

export function AccessibleTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded border bg-white p-2 text-xs shadow" role="status" aria-live="polite">
      <p className="font-semibold">{label}</p>
      <ul>
        {payload.map((entry) => (
          <li key={entry.name}>
            <span>{entry.name}: </span>
            <strong>{entry.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
