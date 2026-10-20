"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const points = [
  {
    title: "Both ends covered",
    body: "With our own team in Sydney and in Bangladesh, your shipment is handled by people who answer to us from pickup to delivery.",
    icon: "both-ends",
  },
  {
    title: "One point of contact",
    body: "One team handles your quote, booking, customs and delivery. You won't be passed between companies or call centres.",
    icon: "contact",
  },
  {
    title: "Clear, upfront pricing",
    body: "You get a written quote before you ship, so you know what you're paying and what's included.",
    icon: "pricing",
  },
  {
    title: "Paperwork handled",
    body: "Customs declarations, import documents and consolidation are part of the service. We tell you what's needed before it becomes a delay.",
    icon: "docs",
  },
];

export default function WhyBorderless() {
  const reduce = useReducedMotion();
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Why Borderless
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Why customers choose Borderless
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Honest, hands-on logistics on both sides of the border.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(11,30,63,0.2)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <WhyIcon name={p.icon} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-accent/5 blur-2xl transition-all group-hover:bg-accent/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "both-ends")
    return <svg {...common}><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><path d="M7.5 12H16.5"/></svg>;
  if (name === "contact")
    return <svg {...common}><path d="M3 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M18 8v6M15 11h6"/></svg>;
  if (name === "pricing")
    return <svg {...common}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
  return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 14l2 2 4-4"/></svg>;
}
