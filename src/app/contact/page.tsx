import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Borderless Group | Get a Shipping Quote",
  description:
    "Get a quote or speak with our team in Sydney or Bangladesh. Call, email, WhatsApp or send us your shipment details online.",
};

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden px-6 pb-10 pt-16">
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
            Contact
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let&rsquo;s talk about your shipment.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Whether you need a quote, want to open a business account or have a question
            about a delivery &mdash; our team in Sydney and Bangladesh is here to help.
          </p>
        </Reveal>
      </section>

      {/* FORM + DETAILS */}
      <section className="relative px-6 py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <EnquiryForm />
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <ContactCard
                city="Sydney, Australia"
                badge="Head office & warehouse"
                lines={[
                  { label: "Address", value: "[Street, Suburb NSW Postcode]", icon: "pin" },
                  { label: "Phone", value: "[+61 X XXXX XXXX]", href: "tel:+61", icon: "phone" },
                  { label: "Email", value: "[hello@...]", href: "mailto:hello@", icon: "mail" },
                  { label: "WhatsApp", value: "[+61 ...]", href: "https://wa.me/", icon: "chat" },
                  { label: "Hours", value: "Mon–Fri 9:00am–5:30pm AEST; Sat by appointment", icon: "clock" },
                ]}
              />
            </Reveal>
            <Reveal delay={0.14}>
              <ContactCard
                city="[City], Bangladesh"
                badge="Bangladesh office"
                lines={[
                  { label: "Address", value: "[Street, Area, City]", icon: "pin" },
                  { label: "Phone", value: "[+880 ...]", href: "tel:+880", icon: "phone" },
                  { label: "WhatsApp", value: "[+880 ...]", href: "https://wa.me/", icon: "chat" },
                  { label: "Hours", value: "Sat–Thu 10:00am–7:00pm BST", icon: "clock" },
                ]}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-gradient-to-br from-white via-surface to-accent-soft p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Business &amp; partnerships
                </div>
                <a
                  href="mailto:business@"
                  className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-accent"
                >
                  [business@...]
                  <span>&rarr;</span>
                </a>
                <div className="mt-5 flex items-center gap-3 text-muted">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-2">
                    Follow us
                  </span>
                  {["facebook", "instagram", "linkedin"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      aria-label={s}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-foreground hover:border-accent hover:text-accent"
                    >
                      <SocialIcon name={s} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="relative px-6 pb-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="relative h-72 overflow-hidden rounded-3xl border border-border bg-surface sm:h-80">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
              alt="Sydney location"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/50 via-primary/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-4 text-white">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                  Sydney, Australia
                </div>
                <div className="font-display text-xl font-semibold">
                  Drop-off welcome by appointment
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-semibold text-primary backdrop-blur hover:bg-white"
              >
                Get directions
                <span>&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="font-display text-xl font-medium text-foreground sm:text-2xl">
            One partner. Two countries. Every delivery.
          </p>
        </div>
      </section>
    </>
  );
}

type Line = { label: string; value: string; href?: string; icon: string };

function ContactCard({ city, badge, lines }: { city: string; badge: string; lines: Line[] }) {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(11,30,63,0.2)]">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div className="leading-tight">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            {badge}
          </div>
          <div className="font-display text-lg font-semibold text-foreground">{city}</div>
        </div>
      </div>
      <ul className="mt-5 space-y-3">
        {lines.map((l) => (
          <li key={l.label} className="flex items-start gap-3 text-sm">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-accent">
              <ContactIcon name={l.icon} />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-2">
                {l.label}
              </span>
              {l.href ? (
                <a href={l.href} className="mt-0.5 block break-words font-medium text-foreground hover:text-accent">
                  {l.value}
                </a>
              ) : (
                <span className="mt-0.5 block break-words text-foreground">{l.value}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactIcon({ name }: { name: string }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "pin") return <svg {...common}><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>;
  if (name === "phone") return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.9 2z"/></svg>;
  if (name === "mail") return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>;
  if (name === "chat") return <svg {...common}><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
}

function SocialIcon({ name }: { name: string }) {
  const common = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "currentColor" } as const;
  if (name === "facebook")
    return <svg {...common}><path d="M13 22v-8h3l1-4h-4V7c0-1.1.4-2 2-2h2V1h-3c-3 0-5 2-5 5v4H6v4h3v8h4z"/></svg>;
  if (name === "instagram")
    return <svg {...common}><path d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-2.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>;
  return <svg {...common}><path d="M6.9 20H3V9h3.9v11zM5 7.5A2.3 2.3 0 112.6 5 2.3 2.3 0 015 7.5zM21 20h-3.9v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9.3V9h3.7v1.5h.1a4.1 4.1 0 013.7-2c3.9 0 4.7 2.6 4.7 6V20z"/></svg>;
}
