import type { ReactNode } from 'react';

type KpiCardProps = {
  title: string;
  value: string;
  delta?: string;
  tone?: 'positive' | 'negative' | 'neutral';
  sourceNote?: ReactNode;
};

const toneClass: Record<NonNullable<KpiCardProps['tone']>, string> = {
  positive: 'text-green-700',
  negative: 'text-red-700',
  neutral: 'text-gray-600',
};

export function KpiCard({ title, value, delta, tone = 'neutral', sourceNote }: KpiCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm" aria-label={`${title} KPI`}>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
      {delta ? <p className={`mt-1 text-sm ${toneClass[tone]}`}>{delta}</p> : null}
      {sourceNote ? <p className="mt-3 text-xs text-gray-500">Source: {sourceNote}</p> : null}
    </article>
  );
}
