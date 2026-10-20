import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "0+", label: "Shipments Delivered", icon: "box" },
  { value: "0+", label: "Happy Customers", icon: "smile" },
  { value: "0+", label: "Years in Operation", icon: "calendar" },
  { value: "2", label: "Countries Connected", icon: "globe" },
];

export default function Stats() {
  return (
    <section className="px-6">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary text-primary-contrast">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(20,196,180,0.35) 0, transparent 42%), radial-gradient(circle at 80% 50%, rgba(20,196,180,0.2) 0, transparent 45%)",
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center gap-4 px-6 py-8 ${
                  i !== 0 ? "md:border-l border-white/10" : ""
                } ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${i % 2 !== 0 ? "border-l border-white/10 md:border-l" : ""}`}
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent">
                  <StatIcon name={s.icon} />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-3xl font-semibold text-accent">{s.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-white/70">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "box")
    return <svg {...common}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>;
  if (name === "smile")
    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 10h.01M15 10h.01"/></svg>;
  if (name === "calendar")
    return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
}
