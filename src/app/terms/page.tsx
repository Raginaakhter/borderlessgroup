import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions | Borderless Group",
  description:
    "The terms that apply when you book shipping or courier services with Borderless Group.",
};

export default function TermsPage() {
  return (
    <section className="relative px-6 pb-24 pt-16">
      <Reveal className="mx-auto max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Legal
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-5 text-sm text-muted">Last updated: [date]</p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">1. Our services</h2>
            <p className="mt-3">
              Borderless Group Pty Ltd (operating as{" "}
              <span className="font-semibold text-foreground">Borderless Cargo</span>) provides
              international shipping between Australia and Bangladesh, interstate courier
              across Australia, and &mdash; from [launch date] &mdash; 3PL fulfilment
              services from our Sydney warehouse.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">2. Quotes &amp; pricing</h2>
            <p className="mt-3">
              All quotes are based on the information you provide. Final charges may differ
              if actual weight, dimensions or item category differ from what was declared.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">3. Prohibited &amp; restricted items</h2>
            <p className="mt-3">
              You must not ship any item on our{" "}
              <span className="font-semibold text-foreground">Prohibited Items</span> list or
              prohibited by applicable law. Items found to be prohibited may be returned,
              surrendered to customs or destroyed at your cost.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">4. Insurance &amp; liability</h2>
            <p className="mt-3">
              [Confirm: optional transit insurance is available for an additional fee /
              standard carrier liability applies.] Our liability for loss, damage or delay is
              limited as set out in these terms and the applicable carrier conditions.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">5. Customs &amp; biosecurity</h2>
            <p className="mt-3">
              You are responsible for ensuring your shipment complies with Australian and
              Bangladeshi customs, duty and biosecurity rules. Any taxes, duties or holding
              fees imposed by authorities are payable by you.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">6. Changes to these terms</h2>
            <p className="mt-3">
              We may update these terms from time to time. The current version will always
              be available on this page.
            </p>
          </section>

          <p className="rounded-2xl border border-border bg-surface p-4 text-xs text-muted-2">
            This page is a placeholder. Replace it with Terms &amp; Conditions prepared by
            your legal advisor before going live.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
