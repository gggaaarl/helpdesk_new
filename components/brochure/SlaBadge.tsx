type SlaTone = "ok" | "warn" | "danger" | "neutral";

const styles: Record<SlaTone, string> = {
  ok: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  warn: "bg-amber-50 text-amber-800 ring-amber-600/20",
  danger: "bg-rose-50 text-rose-700 ring-rose-600/20",
  neutral: "bg-slate-100 text-slate-600 ring-slate-200",
};

export function SlaBadge({ label, tone }: { label: string; tone: SlaTone }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${styles[tone]}`}
    >
      {label}
    </span>
  );
}
