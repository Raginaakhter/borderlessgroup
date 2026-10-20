"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

type Product = {
  title: string;
  tagline: string;
  image: string;
  tag: string;
  tone: "teal" | "gold" | "navy";
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

const products: Product[] = [
  {
    title: "Fashion & Apparel",
    tagline: "Traditional wear, modern fashion, accessories.",
    image: u("photo-1483985988355-763728e1935b"),
    tag: "Popular",
    tone: "teal",
  },
  {
    title: "Food & Groceries",
    tagline: "Spices, dry goods, snacks & specialty items.",
    image: u("photo-1498579150354-977475b7ea0b"),
    tag: "Compliant",
    tone: "gold",
  },
  {
    title: "Beauty & Cosmetics",
    tagline: "Skincare, haircare and personal care products.",
    image: u("photo-1596462502278-27bfdc403348"),
    tag: "",
    tone: "teal",
  },
  {
    title: "Electronics & Gadgets",
    tagline: "Phones, laptops, accessories & small electronics.",
    image: u("photo-1593642632559-0c6d3fc62b89"),
    tag: "",
    tone: "navy",
  },
  {
    title: "Jewellery & Accessories",
    tagline: "Gifts, bridal items and personal jewellery.",
    image: u("photo-1515562141207-7a88fb7ce338"),
    tag: "Insured",
    tone: "gold",
  },
  {
    title: "Gifts & Parcels",
    tagline: "Family hampers, birthdays & special occasions.",
    image: u("photo-1549465220-1a8b9238cd48"),
    tag: "",
    tone: "teal",
  },
  {
    title: "Handicrafts & Decor",
    tagline: "Handmade crafts, textiles and home decor.",
    image: u("photo-1620916566398-39f1143ab7be"),
    tag: "",
    tone: "navy",
  },
  {
    title: "Documents & Paperwork",
    tagline: "Legal papers, academic documents, secure courier.",
    image: u("photo-1512621776951-a57141f2eefd"),
    tag: "Priority",
    tone: "teal",
  },
];

export default function ProductCategories() {
  const reduce = useReducedMotion();

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Product categories
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            What our customers ship most
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            From a parcel of saris to a pallet of electronics &mdash; we move most
            consumer and commercial goods across the Australia&ndash;Bangladesh corridor,
            with customs guidance included.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group"
            >
              <Link
                href="/contact?topic=products"
                className="relative block h-72 overflow-hidden rounded-3xl border border-border bg-surface"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />

                {p.tag && (
                  <span
                    className={`absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      p.tone === "gold"
                        ? "bg-gold text-white"
                        : p.tone === "navy"
                        ? "bg-primary text-white"
                        : "bg-accent text-white"
                    }`}
                  >
                    {p.tag}
                  </span>
                )}

                <div className="absolute inset-x-5 bottom-5 text-white">
                  <div className="font-display text-[17px] font-semibold leading-tight">
                    {p.title}
                  </div>
                  <p className="mt-1 text-xs leading-snug text-white/85 line-clamp-2">
                    {p.tagline}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Get a quote
                    <span>&rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-white/80 p-6 backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold text-foreground">
                Not sure what you can send?
              </div>
              <p className="text-sm text-muted">
                Check our prohibited items list or ask us before you pack.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/services#prohibited"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
            >
              Prohibited items
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast transition-all hover:-translate-y-0.5"
            >
              Ask our team
              <span>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
