import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Prohibited Items | Borderless Group",
  description:
    "Items that cannot be shipped through Borderless Group between Australia and Bangladesh or within Australia. Check before you pack.",
};

const categories = [
  {
    title: "Dangerous goods",
    items: ["Flammables, aerosols, explosives", "Lithium batteries loose or unprotected", "Compressed gases", "Corrosives, poisons, oxidisers"],
  },
  {
    title: "Weapons & restricted items",
    items: ["Firearms, ammunition, replicas", "Knives and bladed weapons", "Military or tactical equipment"],
  },
  {
    title: "Currency & valuables",
    items: ["Cash and bearer bonds", "Precious metals in bullion form", "Loose gemstones [confirm]"],
  },
  {
    title: "Medicines",
    items: ["Prescription medicines without appropriate paperwork", "Controlled substances", "Herbal products with restricted ingredients"],
  },
  {
    title: "Food, plant & animal products",
    items: [
      "Fresh produce, meat, dairy (biosecurity)",
      "Seeds, bulbs, soil, timber items",
      "Animal products including leather [confirm], feathers, bones",
    ],
  },
  {
    title: "Other restricted",
    items: ["Counterfeit goods", "Obscene or illegal material", "Items infringing intellectual property"],
  },
];

export default function ProhibitedItemsPage() {
  return (
    <>
      <section className="relative px-6 pb-10 pt-16">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Prohibited items
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Check before you pack.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Some items are restricted or prohibited by Australian or Bangladeshi law, carrier
            rules or biosecurity requirements. If you&rsquo;re unsure, ask us first &mdash;
            that&rsquo;s cheaper than a shipment held at customs.
          </p>
        </Reveal>
      </section>

      <section className="relative px-6 py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05} className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto w-full max-w-4xl">
          <Reveal className="rounded-3xl border border-border bg-gradient-to-br from-white via-surface to-accent-soft p-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Not sure about something?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Message us before you pack. We&rsquo;ll check it against current customs and
              carrier rules so your shipment doesn&rsquo;t get held or returned.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast transition-all hover:-translate-y-0.5">
                Ask our team
                <span>&rarr;</span>
              </Link>
              <a href="https://wa.me/" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent">
                WhatsApp us
              </a>
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-muted-2">
              This list is a guide. Customs and biosecurity rules change &mdash; always
              confirm with us or the carrier at the time of booking.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
