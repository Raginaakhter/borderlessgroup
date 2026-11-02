import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Borderless Group | Sydney Logistics Connecting Australia & Bangladesh",
  description:
    "Borderless Group is a Sydney-based logistics company with its own team in Bangladesh, built to make shipping between the two countries simple, honest and reliable.",
};

export default function AboutPage() {
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
            About us
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Built on both sides of the border.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            We started Borderless Group because moving goods between Australia and Bangladesh
            shouldn&rsquo;t depend on guesswork, middlemen or unanswered messages.
          </p>
        </Reveal>
      </section>

      {/* OUR STORY */}
      <section className="relative px-6 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
              <Image
                src="/images/about-team.jpg"
                alt="Our team"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-4 shadow-[0_20px_50px_-20px_rgba(11,30,63,0.35)] backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  Founder
                </div>
                <div className="mt-1 font-display text-sm font-semibold text-foreground">
                  [Founder name]
                </div>
                <p className="mt-1 text-xs text-muted">
                  &ldquo;Add your personal quote here &mdash; a single real line about why
                  Borderless Group exists.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Our story
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              A corridor that was growing &mdash; and a service that wasn&rsquo;t keeping up.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Borderless Group was founded in Sydney by{" "}
                <span className="font-semibold text-foreground">[Founder name]</span>, whose
                background spans sales, logistics and e-commerce operations, and who has
                strong personal and business ties to both Australia and Bangladesh.
              </p>
              <p>
                Time and again, we saw the same problem: families waiting weeks for parcels
                with no updates, small businesses struggling with customs paperwork, and
                costs that changed after the goods had already left.
              </p>
              <p>
                So we built a logistics business with people on the ground at both ends.
                Today, through our operating brand{" "}
                <span className="font-semibold text-foreground">Borderless Cargo</span>, we
                ship parcels and freight between Australia and Bangladesh in both directions,
                deliver interstate across Australia, and are preparing to launch warehousing
                and order fulfilment for online sellers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative px-6 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-[0_20px_60px_-30px_rgba(11,30,63,0.2)]">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">Our mission</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">
              To make shipping between Australia and Bangladesh, and across Australia,
              simple, transparent and dependable for every customer &mdash; whether they&rsquo;re
              sending one gift or running a growing business.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative overflow-hidden rounded-3xl border border-border bg-primary p-8 text-primary-contrast shadow-[0_20px_60px_-30px_rgba(5,15,40,0.5)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">Our vision</h3>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              To be the most trusted logistics partner on the Australia&ndash;Bangladesh
              corridor &mdash; known for doing what we say we&rsquo;ll do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="relative px-6 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              What we stand for
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              The four things we won&rsquo;t compromise on.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Honesty first", body: "Clear quotes, realistic timeframes and straight answers, even when the answer isn't what you hoped to hear.", icon: "shield" },
              { title: "Ownership", body: "When we take your shipment, we take responsibility for it. One team, accountable from start to finish.", icon: "hand" },
              { title: "Respect for what you send", body: "A gift for family and a pallet of stock both matter to someone. We handle them that way.", icon: "box" },
              { title: "Always reachable", body: "Real people in Sydney and Bangladesh, on the phone, by email and on WhatsApp.", icon: "phone" },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="group relative rounded-3xl border border-border bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(11,30,63,0.25)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <ValueIcon name={v.icon} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PRESENCE */}
      <section className="relative px-6 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Our presence
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              People on the ground, both ends of the corridor.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Reveal className="group relative overflow-hidden rounded-3xl border border-border bg-white">
              <div className="relative h-44">
                <Image
                  src="/images/sydney-city.jpg"
                  alt="Sydney"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur">
                  Head office
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Sydney, Australia
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Head office &amp; warehouse. Customer service, collections, packing,
                  consolidation and interstate dispatch. From{" "}
                  <span className="font-semibold text-foreground">[launch date]</span>, this is
                  also our 3PL warehouse.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="group relative overflow-hidden rounded-3xl border border-border bg-white">
              <div className="relative h-44">
                <Image
                  src="/images/bangladesh-city.jpg"
                  alt="Bangladesh"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur">
                  On-the-ground
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  [City], Bangladesh
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Our Bangladesh team manages local pickups, customs clearance support,
                  carrier coordination and on-the-ground customer support.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="group relative overflow-hidden rounded-3xl border border-border bg-white">
              <div className="relative h-44">
                <Image
                  src="/images/carrier-network.jpg"
                  alt="Carrier network"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary backdrop-blur">
                  Network
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Carrier partners
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We work with established carrier partners{" "}
                  <span className="font-semibold text-foreground">[list confirmed carriers]</span>{" "}
                  to move goods reliably across Australia and internationally.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR BRANDS */}
      <section className="relative px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white via-surface to-accent-soft p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Our brands
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Borderless Cargo
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  The operating brand of Borderless Group. It delivers our international
                  shipping, interstate courier and upcoming 3PL services.
                </p>
                <a
                  href="https://borderlesscargo.com.au"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  Visit borderlesscargo.com.au
                  <span>&rarr;</span>
                </a>
              </div>
              <div className="hidden h-32 w-px bg-border-strong md:block" />
              <div className="md:pl-6">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-[0_12px_30px_-16px_rgba(11,30,63,0.3)]">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-contrast">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17c2 1 4 1 6 0s4-1 6 0 4 1 6 0"/><path d="M4 14l1-7h14l1 7"/><path d="M12 7V3"/></svg>
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">Operating brand</div>
                    <div className="font-display text-base font-semibold text-foreground">Borderless Cargo</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <Reveal className="relative overflow-hidden rounded-[32px] border border-border bg-primary p-10 text-center text-primary-contrast md:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let&rsquo;s move something together.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-primary-contrast transition-all hover:-translate-y-0.5"
              >
                Get a Quote
                <span>&rarr;</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ValueIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "shield") return <svg {...common}><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>;
  if (name === "hand") return <svg {...common}><path d="M9 11V5a2 2 0 1 1 4 0v6"/><path d="M9 11V3a2 2 0 1 0-4 0v11a7 7 0 0 0 14 0V8a2 2 0 1 0-4 0v3"/></svg>;
  if (name === "box") return <svg {...common}><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>;
  return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.9 2z"/></svg>;
}
