import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Services | Australia–Bangladesh Shipping, Interstate Courier & 3PL | Borderless",
  description:
    "International shipping between Australia and Bangladesh, interstate courier across Australia, customs support, and 3PL fulfilment from our Sydney warehouse (coming soon).",
};

const jump = [
  { href: "#au-bd", label: "Australia → Bangladesh" },
  { href: "#bd-au", label: "Bangladesh → Australia" },
  { href: "#interstate", label: "Interstate Courier" },
  { href: "#3pl", label: "3PL & Fulfilment" },
  { href: "#customs", label: "Customs" },
  { href: "#faq", label: "FAQs" },
];

export default function ServicesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden px-6 pb-16 pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/banner-port.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-background" />
        </div>
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Our services
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Logistics services, end to end.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            From a single parcel to regular commercial freight, we handle collection,
            paperwork and delivery &mdash; with one team accountable the whole way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {jump.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                {j.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* AU -> BD */}
      <ServiceBlock
        id="au-bd"
        eyebrow="Service 1"
        title="Shipping from Australia to Bangladesh"
        intro="Send gifts, clothing, cosmetics, vitamins, electronics, documents and commercial goods from anywhere in Australia to anywhere in Bangladesh. We consolidate shipments to keep costs down, and our Bangladesh team manages clearance and final delivery."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Export operations"
        included={[
          "Collection from your door [Sydney metro / where available] or drop-off at our Sydney location",
          "Packing and consolidation advice, and repacking where needed",
          "Customs declarations prepared for you",
          "Delivery to the door across Bangladesh [confirm: all districts / major cities]",
          "Updates from pickup to delivery",
        ]}
        notes={[
          "Estimated delivery: [X–Y business days] from dispatch, subject to customs.",
          "Pricing is by weight and item category. Ask for a quote or see our price guide.",
          "Some items are restricted or prohibited. Check our Prohibited Items list before packing.",
        ]}
        ctas={[{ href: "/contact?topic=au-bd", label: "Get an AU → BD Quote", primary: true }]}
      />

      {/* BD -> AU */}
      <ServiceBlock
        id="bd-au"
        eyebrow="Service 2"
        title="Shipping from Bangladesh to Australia"
        intro="Bring personal items, traditional clothing, food items (where permitted), samples and commercial stock from Bangladesh to Australia. Our own team in Bangladesh collects, checks and prepares your shipment, and we handle arrival and delivery in Australia."
        image="https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Import operations"
        reverse
        included={[
          "Pickup across Bangladesh [confirm coverage] by our local team",
          "Item checks against Australian import and biosecurity rules before dispatch",
          "Import paperwork support for personal and commercial shipments",
          "Delivery to your door anywhere in Australia",
        ]}
        notes={[
          "Importing products from Bangladesh? We can help with supplier coordination, consolidation of multiple orders into one shipment, and import documentation, so your stock arrives ready to sell.",
        ]}
        ctas={[
          { href: "/contact?topic=bd-au", label: "Get a BD → AU Quote", primary: true },
          { href: "/contact?topic=importing", label: "Talk to Us About Importing", primary: false },
        ]}
      />

      {/* INTERSTATE */}
      <ServiceBlock
        id="interstate"
        eyebrow="Service 3"
        title="Interstate courier across Australia"
        intro="Reliable parcel and freight delivery between Sydney and every Australian state and territory. Whether it's one carton or a regular weekly run, we book it, manage it and keep you informed, with a local team you can actually call."
        image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Interstate truck delivery"
        included={[
          "Parcels and cartons of all sizes",
          "Palletised freight [confirm]",
          "Business-to-business and business-to-customer deliveries",
          "Regular scheduled runs for business accounts",
        ]}
        notes={[
          "One contact, many carriers. We match each shipment to the right carrier network for the route, size and timeframe.",
          "Business accounts: shipping regularly? Talk to us about account rates and consolidated monthly invoicing.",
          "Real support. If something goes wrong, you call us — not a hotline.",
          "Estimated delivery: Sydney to capital cities [X–Y business days]; regional areas [X–Y business days].",
        ]}
        ctas={[
          { href: "/contact?topic=interstate", label: "Book an Interstate Delivery", primary: true },
          { href: "/contact?topic=account", label: "Open a Business Account", primary: false },
        ]}
      />

      {/* 3PL */}
      <ServiceBlock
        id="3pl"
        eyebrow="Coming soon"
        title="3PL & Fulfilment: launching [month 2026/27]"
        intro="Focus on selling. We'll handle the rest. Our Sydney warehouse will store your stock, receive orders automatically from your online store, and pick, pack and ship every order on time — including stock imported from Bangladesh."
        image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Fulfilment warehouse"
        reverse
        included={[
          "Secure storage in our Sydney warehouse",
          "Store integration with Shopify and major marketplaces [confirm: Amazon AU, eBay], so orders flow in automatically",
          "Pick, pack and dispatch with your packaging and inserts [confirm]",
          "Multi-carrier shipping for the best fit on cost and speed",
        ]}
        notes={[
          "Import-to-shelf. We can bring your stock in from Bangladesh, clear it and put it straight into your fulfilment inventory — one partner, door to customer.",
          "Founding-client offer: we're taking a limited number of founding clients. Join the early-access list to get priority onboarding and introductory rates.",
        ]}
        ctas={[
          { href: "/contact?topic=3pl", label: "Join the 3PL Early-Access List", primary: true },
        ]}
      />

      {/* CUSTOMS SUPPORT */}
      <section id="customs" className="relative scroll-mt-28 px-6 py-16">
        <div className="mx-auto w-full max-w-5xl">
          <Reveal className="rounded-3xl border border-border bg-gradient-to-br from-white via-surface to-accent-soft p-8 sm:p-10">
            <div className="flex items-start gap-5">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Supporting service
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Customs and import support
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Paperwork is where most shipments get stuck. We help with customs
                  declarations, commercial invoices, import documentation and consolidation
                  &mdash; and our team at both ends knows what each side needs.
                </p>
                <p className="mt-4 rounded-2xl border border-border bg-white p-4 text-xs leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">Please note:</span> we
                  provide logistics and documentation support. For complex duty, tariff or
                  legal questions, we can refer you to a licensed customs broker.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative scroll-mt-28 px-6 py-20">
        <div className="mx-auto w-full max-w-4xl">
          <Reveal className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Answers
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group rounded-2xl border border-border bg-white p-5 open:border-accent/60 open:shadow-[0_12px_30px_-16px_rgba(11,30,63,0.25)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                      {f.q}
                    </span>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-transform group-open:rotate-180">
                      <svg width="12" height="12" viewBox="0 0 10 10" aria-hidden="true">
                        <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-sm leading-relaxed text-muted">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <Reveal className="relative overflow-hidden rounded-[32px] border border-border bg-primary p-10 text-primary-contrast md:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Not sure which service you need?
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80">
                  Tell us what you&rsquo;re moving and where. We&rsquo;ll recommend the best
                  option and give you a clear quote.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-primary-contrast transition-all hover:-translate-y-0.5">
                  Get a Quote
                  <span>&rarr;</span>
                </Link>
                <a href="https://wa.me/" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

type ServiceBlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  included: string[];
  notes: string[];
  ctas: { href: string; label: string; primary: boolean }[];
};

function ServiceBlock({
  id,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  reverse,
  included,
  notes,
  ctas,
}: ServiceBlockProps) {
  return (
    <section id={id} className="relative scroll-mt-28 px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-surface">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {eyebrow}
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>

            <div className="mt-6 rounded-2xl border border-border bg-white p-5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                What&rsquo;s included
              </div>
              <ul className="mt-3 space-y-2.5">
                {included.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            {notes.length > 0 && (
              <div className="mt-4 space-y-2 rounded-2xl border border-border bg-surface p-5 text-xs leading-relaxed text-muted">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground/80">
                  Good to know
                </div>
                {notes.map((n) => (
                  <p key={n}>{n}</p>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              {ctas.map((c) =>
                c.primary ? (
                  <Link
                    key={c.href + c.label}
                    href={c.href}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast transition-all hover:-translate-y-0.5"
                  >
                    {c.label}
                    <span>&rarr;</span>
                  </Link>
                ) : (
                  <Link
                    key={c.href + c.label}
                    href={c.href}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
                  >
                    {c.label}
                  </Link>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How do I get a quote?",
    a: "Fill in our quote form, call us or message us on WhatsApp with what you're sending, its approximate weight and size, and where it's going. We usually reply within [X business hours].",
  },
  {
    q: "How is the price calculated?",
    a: "International shipments are priced by weight (or volume, for large light items) and item category. Interstate deliveries are priced by size, weight and destination. Your quote shows the full price before you commit.",
  },
  {
    q: "What can’t I send?",
    a: "Items such as flammables, weapons, cash, certain medicines and many food, plant and animal products are restricted or prohibited. See our full Prohibited Items list or ask us before you pack.",
  },
  {
    q: "Can I track my shipment?",
    a: "Yes. We'll share tracking details and update you at key stages until your shipment is delivered.",
  },
  {
    q: "Do you offer pickup?",
    a: "Yes, from [areas] in Australia and across [coverage] in Bangladesh. You can also drop off at our Sydney location.",
  },
  {
    q: "Is my shipment insured?",
    a: "[Confirm: optional transit insurance is available for an additional fee / standard carrier liability applies]. Ask us when you book.",
  },
  {
    q: "Do you work with businesses?",
    a: "Yes. We offer business accounts for regular interstate and international shipping, and 3PL fulfilment is launching soon.",
  },
];
