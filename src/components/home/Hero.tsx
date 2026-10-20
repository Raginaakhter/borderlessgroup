"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import StaticGlobe from "./StaticGlobe";

const sidebarStats = [
  { label: "Countries", value: "2+", icon: "globe" },
  { label: "Business Partners", value: "15+", icon: "handshake" },
  { label: "Shipments", value: "500+", icon: "box" },
  { label: "Support", value: "24/7", icon: "clock" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {/* port banner as hero background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/banner-port.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        {/* soft white wash so hero text stays readable */}
        <div className="absolute inset-0 bg-white/70" />
        {/* subtle brand tints */}
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        {/* soft bottom fade into page */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr_auto] lg:gap-10 lg:pt-16">
        {/* LEFT: text */}
        <div className="relative z-10 flex flex-col justify-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-foreground/80 shadow-[0_4px_18px_-10px_rgba(11,30,63,0.2)]"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            GLOBAL TRADE &middot; IMPORT &middot; EXPORT &middot; LOGISTICS
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-6 font-display text-[44px] font-semibold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-[62px]"
          >
            Delivering Quality.
            <br />
            Connecting{" "}
            <span className="relative inline-block text-accent">
              Worlds.
              <span className="absolute inset-x-0 -bottom-1 block h-[6px] rounded-full bg-accent/20" />
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            Borderless Group is a Sydney-based logistics company with its own team in
            Bangladesh. Through <span className="font-medium text-foreground">Borderless Cargo</span>,
            we ship parcels and freight in both directions between the two countries,
            deliver interstate across Australia, and handle the paperwork so you don&rsquo;t
            have to.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-contrast shadow-[0_12px_30px_-14px_rgba(11,30,63,0.6)] transition-all hover:-translate-y-0.5"
            >
              Explore Our Services
              <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-white px-7 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
            >
              Contact Us
              <PhoneSmall />
            </Link>
          </motion.div>
        </div>

        {/* CENTER: vibrant SVG globe */}
        <div className="relative order-first lg:order-none">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            {/* outer orbit rings */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/30"
                style={{ animation: reduce ? undefined : "orbit 32s linear infinite" }}
              />
              <div
                className="absolute left-1/2 top-1/2 h-[124%] w-[124%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/25"
                style={{ animation: reduce ? undefined : "orbit 70s linear infinite reverse" }}
              />
            </div>
            <div className="absolute inset-0">
              <StaticGlobe />
            </div>

            {/* floating photo card: cargo plane */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -left-3 bottom-6 hidden h-28 w-44 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_40px_-18px_rgba(11,30,63,0.35)] lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=600&q=80"
                alt="Air cargo"
                fill
                sizes="176px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute inset-x-3 bottom-2 text-white">
                <div className="text-[9px] font-semibold uppercase tracking-wider opacity-80">Air freight</div>
                <div className="text-xs font-semibold">Sydney &rarr; Dhaka</div>
              </div>
            </motion.div>

            {/* floating photo card: container ship */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -right-3 top-10 hidden h-28 w-44 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_40px_-18px_rgba(11,30,63,0.35)] lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80"
                alt="Container terminal"
                fill
                sizes="176px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute inset-x-3 bottom-2 text-white">
                <div className="text-[9px] font-semibold uppercase tracking-wider opacity-80">Sea freight</div>
                <div className="text-xs font-semibold">Chattogram port</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT: stats panel */}
        <motion.aside
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 hidden flex-col justify-center gap-6 self-center rounded-[28px] border border-border bg-white/90 px-5 py-7 backdrop-blur-xl lg:flex"
        >
          {sidebarStats.map((s, i) => (
            <div key={s.label} className="relative flex items-center gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent">
                <StatIcon name={s.icon} />
              </div>
              <div className="leading-tight">
                <div className="font-display text-[22px] font-semibold text-foreground">
                  {s.value}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted">
                  {s.label}
                </div>
              </div>
              {i < sidebarStats.length - 1 && (
                <span className="absolute -bottom-3 left-14 right-0 h-px bg-border" />
              )}
            </div>
          ))}
        </motion.aside>
      </div>
    </section>
  );
}

function PhoneSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.9 2z"/>
    </svg>
  );
}

function StatIcon({ name }: { name: string }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "globe")
    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
  if (name === "handshake")
    return <svg {...common}><path d="M2 12l3-3 4 4 3-3 4 4 3-3 3 3"/><path d="M8 14l2 2 2-2 2 2"/></svg>;
  if (name === "box")
    return <svg {...common}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
}
