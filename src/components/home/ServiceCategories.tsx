"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

type Category = {
  title: string;
  tagline: string;
  image: string;
  art: "shipping" | "parcel" | "cargo" | "warehouse" | "customs";
  href: string;
};

// Unsplash photo URLs with crop + quality params for Next/Image.
const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&h=1100&q=80`;

const categories: Category[] = [
  {
    title: "Shipping & Logistics",
    tagline: "AU ↔ BD, door to door",
    image: u("photo-1494412574643-ff11b0a5c1c3"),
    art: "shipping",
    href: "/services#au-bd",
  },
  {
    title: "Parcels & Documents",
    tagline: "Gifts, personal items, papers",
    image: u("photo-1566576912321-d58ddd7a6088"),
    art: "parcel",
    href: "/services#au-bd",
  },
  {
    title: "Interstate Courier",
    tagline: "Capital cities & regional AU",
    image: u("photo-1601584115197-04ecc0da31d7"),
    art: "cargo",
    href: "/services#interstate",
  },
  {
    title: "3PL Fulfilment",
    tagline: "Sydney warehouse (soon)",
    image: u("photo-1553413077-190dd305871c"),
    art: "warehouse",
    href: "/services#3pl",
  },
  {
    title: "Customs & Import",
    tagline: "Paperwork handled for you",
    image: u("photo-1554224155-6726b3ff858f"),
    art: "customs",
    href: "/services",
  },
];

export default function ServiceCategories() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto w-full max-w-7xl rounded-[32px] border border-border bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(11,30,63,0.25)] backdrop-blur sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-end">
          <Reveal className="max-w-md">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Our services
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[40px]">
              Our Service Categories
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Diverse logistics solutions across the Australia&ndash;Bangladesh corridor and
              interstate across Australia.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View All Services
              <span>&rarr;</span>
            </Link>
          </Reveal>

          <div className="relative lg:col-start-2 lg:col-end-4">
            <div
              ref={trackRef}
              className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-1"
            >
              {categories.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="snap-start"
                  style={{ flex: "0 0 260px" }}
                >
                  <Link
                    href={c.href}
                    className="group relative block h-80 overflow-hidden rounded-3xl border border-border bg-surface"
                  >
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="260px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 text-white">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/90 text-primary backdrop-blur">
                        <CatIcon art={c.art} />
                      </div>
                      <div className="min-w-0 leading-tight">
                        <div className="font-display text-[15px] font-semibold">{c.title}</div>
                        <div className="truncate text-[11px] text-white/85">{c.tagline}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                aria-label="Previous"
                onClick={() => scrollBy(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                &larr;
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollBy(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CatIcon({ art }: { art: Category["art"] }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (art === "shipping")
    return <svg {...common}><path d="M3 17c2 1 4 1 6 0s4-1 6 0 4 1 6 0"/><path d="M4 14l1-7h14l1 7"/><path d="M12 7V3"/></svg>;
  if (art === "parcel")
    return <svg {...common}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>;
  if (art === "cargo")
    return <svg {...common}><rect x="2" y="7" width="13" height="10" rx="2"/><path d="M15 10h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
  if (art === "warehouse")
    return <svg {...common}><path d="M3 10l9-6 9 6v10H3z"/><path d="M8 20v-6h8v6"/></svg>;
  return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 14l2 2 4-4"/></svg>;
}
