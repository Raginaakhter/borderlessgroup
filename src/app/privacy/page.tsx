import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Borderless Group",
  description:
    "How Borderless Group collects, uses and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="relative px-6 pb-24 pt-16">
      <Reveal className="mx-auto max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Legal
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 text-sm text-muted">Last updated: [date]</p>

        <div className="prose prose-headings:font-display prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted prose-li:text-muted mt-10 max-w-none text-base leading-relaxed text-muted">
          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">1. Who we are</h2>
          <p>
            Borderless Group Pty Ltd (&ldquo;Borderless Group&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) collects and handles personal information in connection with
            the shipping services we provide between Australia and Bangladesh and across
            Australia.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">2. What we collect</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Contact details you provide via our enquiry form (name, email, phone).</li>
            <li>Shipment details (pickup/delivery addresses, item descriptions, weight).</li>
            <li>Communications you send us by phone, email, or WhatsApp.</li>
            <li>Standard web analytics data from visitors to this site.</li>
          </ul>

          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">3. How we use it</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>To respond to your enquiries and provide quotes.</li>
            <li>To arrange collection, carriage, customs and delivery of your shipment.</li>
            <li>To comply with Australian and Bangladeshi customs and biosecurity rules.</li>
            <li>To improve our website and service.</li>
          </ul>

          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">4. Who we share it with</h2>
          <p>
            We only share your information with the carriers, customs agents and delivery
            partners needed to perform your shipment, and with government authorities where
            required by law.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">5. How to contact us</h2>
          <p>
            To access, correct or ask us to delete your personal information, email{" "}
            <a href="mailto:hello@" className="font-semibold text-accent hover:underline">[hello@...]</a>.
          </p>

          <p className="mt-10 rounded-2xl border border-border bg-surface p-4 text-xs text-muted-2">
            This page is a placeholder for a complete Privacy Policy. Replace it with a
            document prepared by your legal advisor before going live.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
