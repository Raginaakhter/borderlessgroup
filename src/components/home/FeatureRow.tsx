"use client";

import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Both Ends Covered",
    body: "Our own team in Sydney and in Bangladesh, handling pickup through to delivery.",
    icon: "globe",
  },
  {
    title: "Efficient Logistics",
    body: "Trusted carrier partners and route optimisation for safe, timely delivery.",
    icon: "truck",
  },
  {
    title: "Clear, Upfront Pricing",
    body: "A written quote before you ship. No surprises, no changing fees.",
    icon: "shield",
  },
  {
    title: "Real Customer Support",
    body: "Reachable people in Sydney and Dhaka by phone, email and WhatsApp.",
    icon: "headset",
  },
];

export default function FeatureRow() {
  const reduce = useReducedMotion();
  return (
    <section className="px-6">
      <div className="mx-auto w-full max-w-7xl rounded-[32px] border border-border bg-white shadow-[0_30px_80px_-40px_rgba(11,30,63,0.25)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`group flex flex-col gap-3 p-7 lg:p-8 ${
                i !== 0 ? "lg:border-l border-border" : ""
              } ${
                i >= 2 ? "md:border-t border-border lg:border-t-0" : ""
              } ${i % 2 !== 0 ? "md:border-l border-border lg:border-l" : ""}`}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "globe")
    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
  if (name === "truck")
    return <svg {...common}><rect x="2" y="7" width="13" height="10" rx="2"/><path d="M15 10h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
  if (name === "shield")
    return <svg {...common}><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>;
  return <svg {...common}><path d="M4 15v-3a8 8 0 1 1 16 0v3"/><path d="M2 15a2 2 0 0 1 2-2h2v6H4a2 2 0 0 1-2-2v-2zM18 13h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2z"/></svg>;
}
