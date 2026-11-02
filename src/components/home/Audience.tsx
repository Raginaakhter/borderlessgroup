"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const groups = [
  { title: "Families & individuals", body: "Sending gifts, essentials and personal items home.", icon: "home" },
  { title: "Students & professionals", body: "Moving belongings between countries.", icon: "cap" },
  { title: "Small businesses & importers", body: "Bringing products in from Bangladesh.", icon: "store" },
  { title: "Online sellers & SMEs", body: "Dependable delivery across Australia.", icon: "cart" },
];

export default function Audience() {
  const reduce = useReducedMotion();
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Who we work with
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            A partner for the people and businesses that keep moving.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Whether you&rsquo;re sending one parcel home or running a growing import operation,
            we treat your shipment like it matters &mdash; because it does, to someone.
          </p>

          <div className="mt-7 flex items-center gap-6">
            <div className="flex -space-x-2">
              {["#14c4b4", "#0b1e3f", "#c08a2a", "#5b6a84"].map((c) => (
                <span
                  key={c}
                  className="inline-block h-9 w-9 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="font-semibold text-foreground">Real people</span> in Sydney &amp; Bangladesh,
              always reachable.
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/port-botany.jpg"
              alt="Port Botany to Chattogram"
              width={1200}
              height={700}
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="h-56 w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/10 to-transparent" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/85 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Port Botany &rarr; Chattogram
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex gap-4 rounded-3xl border border-border bg-white p-5 transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(11,30,63,0.2)]"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <AudIcon name={g.icon} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{g.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{g.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "home")
    return <svg {...common}><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/></svg>;
  if (name === "cap")
    return <svg {...common}><path d="M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v4a6 6 0 0 0 12 0v-4"/></svg>;
  if (name === "store")
    return <svg {...common}><path d="M3 7l1-3h16l1 3"/><path d="M3 7v13h18V7"/><path d="M9 20v-6h6v6"/></svg>;
  return <svg {...common}><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l3 12h11l2-8H6"/></svg>;
}
