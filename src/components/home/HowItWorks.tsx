"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Get a Quote",
    body: "Tell us what you need to send. We'll give you a clear, upfront price.",
    icon: "doc",
  },
  {
    n: "02",
    title: "We Collect",
    body: "We pick up from your door or business anywhere in Australia.",
    icon: "box",
  },
  {
    n: "03",
    title: "We Ship",
    body: "Your items are securely shipped with customs clearance support.",
    icon: "ship",
  },
  {
    n: "04",
    title: "We Deliver",
    body: "Delivered safely to your door in Bangladesh or across Australia.",
    icon: "pin",
  },
];

export default function HowItWorks() {
  const reduce = useReducedMotion();
  return (
    <section className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full">
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Simple, transparent &amp; reliable
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Shipping with us in four straightforward steps.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-[0_8px_24px_-10px_rgba(14,165,164,0.6)]">
                  {i + 1}
                </div>
                <div className="mt-5 w-full rounded-2xl border border-border bg-white p-6">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-primary">
                    <StepIcon name={s.icon} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-contrast shadow-[0_10px_30px_-12px_rgba(11,30,63,0.6)] transition-all hover:-translate-y-0.5"
          >
            Start My Quote
            <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function StepIcon({ name }: { name: string }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "doc")
    return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>;
  if (name === "box")
    return <svg {...common}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>;
  if (name === "ship")
    return <svg {...common}><path d="M3 17c2 1 4 1 6 0s4-1 6 0 4 1 6 0"/><path d="M4 14l1-7h14l1 7"/><path d="M12 7V3"/></svg>;
  return <svg {...common}><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
