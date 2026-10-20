import Reveal from "@/components/ui/Reveal";

const items = [
  { title: "Sydney headquarters", sub: "and warehouse", icon: "warehouse" },
  { title: "Our own office", sub: "in Bangladesh", icon: "office" },
  { title: "Trusted carrier", sub: "partners", icon: "handshake" },
  { title: "Customs and import", sub: "support included", icon: "docs" },
];

export default function TrustBar() {
  return (
    <section className="relative px-6">
      <div className="mx-auto -mt-8 w-full max-w-7xl">
        <Reveal className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_12px_50px_-24px_rgba(11,30,63,0.2)] md:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`flex items-center gap-4 px-5 py-6 sm:px-6 ${
                i !== 0 ? "md:border-l border-border" : ""
              } ${i >= 2 ? "border-t border-border md:border-t-0" : ""} ${i % 2 !== 0 ? "border-l border-border md:border-l" : ""}`}
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <TrustIcon name={it.icon} />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-foreground">{it.title}</div>
                <div className="text-sm text-muted">{it.sub}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function TrustIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "warehouse")
    return <svg {...common}><path d="M3 10l9-6 9 6v10H3z"/><path d="M8 20v-6h8v6"/></svg>;
  if (name === "office")
    return <svg {...common}><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.2"/><path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1"/><path d="M15 20v-1a3 3 0 0 1 3-3h.5a2.5 2.5 0 0 1 2.5 2.5V20"/></svg>;
  if (name === "handshake")
    return <svg {...common}><path d="M2 12l3-3 4 4 3-3 4 4 3-3 3 3"/><path d="M8 14l2 2 2-2 2 2"/></svg>;
  return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 14l2 2 4-4"/></svg>;
}
