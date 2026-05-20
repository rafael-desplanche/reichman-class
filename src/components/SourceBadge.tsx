type SourceBadgeProps = {
  label: string;
  href: string;
};

export function SourceBadge({ label, href }: SourceBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
      aria-label={`Source section: ${label}`}
    >
      {label}
    </a>
  );
}
