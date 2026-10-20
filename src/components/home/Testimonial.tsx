"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function Testimonial() {
  const reduce = useReducedMotion();
  return (
    <section className="relative px-6">
      <div className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-[1fr_1.2fr]">
        <Reveal className="relative h-56 overflow-hidden rounded-3xl border border-border md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
            alt="Warehouse operations"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/50 via-primary/10 to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/90 text-primary backdrop-blur">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-6 9 6v10H3z"/><path d="M8 20v-6h8v6"/></svg>
            </div>
            <div className="leading-tight">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/80">Sydney Warehouse</div>
              <div className="font-display text-sm font-semibold">Operations hub</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-12">
          <svg width="42" height="42" viewBox="0 0 24 24" className="text-accent/30" fill="currentColor" aria-hidden="true">
            <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V9a2 2 0 0 0 0-2zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V9a2 2 0 0 0 0-2z"/>
          </svg>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 font-display text-xl font-medium leading-relaxed text-foreground md:text-2xl"
          >
            Reliable, transparent and always on time. Borderless Group makes international
            shipping simple.
          </motion.p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted">&mdash; Business Customer</span>
          </div>
          <p className="mt-6 text-xs text-muted-2">
            Real customer reviews will appear here once we&rsquo;ve collected them with permission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
