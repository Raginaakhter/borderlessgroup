import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="relative overflow-hidden rounded-[32px] border border-border bg-gradient-to-br from-white via-surface to-accent-soft p-10 md:p-14">
          <div className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Ready to send?
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                Let&rsquo;s get it moving.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Tell us what you need to ship and our team will come back with a clear quote.
                No obligation.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-contrast shadow-[0_10px_30px_-12px_rgba(11,30,63,0.6)] transition-all hover:-translate-y-0.5"
                >
                  Get a Quote Now
                  <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_30px_60px_-30px_rgba(11,30,63,0.3)]">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <HeadsetIcon />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Talk to our team</div>
                    <div className="text-xs text-muted">Sydney &amp; Dhaka, Mon&ndash;Sat</div>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-surface p-4">
                    <div className="flex items-center gap-3">
                      <WhatsAppIcon />
                      <div className="leading-tight">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                          WhatsApp
                        </div>
                        <div className="text-sm font-semibold text-foreground">+61 [Your Number]</div>
                      </div>
                    </div>
                    <span className="text-accent">&rarr;</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-surface p-4">
                    <div className="flex items-center gap-3">
                      <PhoneIcon />
                      <div className="leading-tight">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                          Call Us
                        </div>
                        <div className="text-sm font-semibold text-foreground">[Phone Number]</div>
                      </div>
                    </div>
                    <span className="text-accent">&rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
      <path d="M20 3.5A10.5 10.5 0 003.6 17.8L2 22l4.3-1.6A10.5 10.5 0 1020 3.5zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.6 1 .9-2.6-.2-.3A8 8 0 1120 12a8 8 0 01-8 8zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.4-.5-.5-.9-1-1.3-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.1 4.9 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.2-.2-.4-.3z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.9 2z" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15v-3a8 8 0 1 1 16 0v3"/>
      <path d="M2 15a2 2 0 0 1 2-2h2v6H4a2 2 0 0 1-2-2v-2zM18 13h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2z"/>
    </svg>
  );
}
