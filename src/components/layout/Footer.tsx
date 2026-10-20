import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-white">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-white" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Sydney-based logistics, connecting Australia and Bangladesh.
            Operating brand: <span className="font-medium text-foreground">Borderless Cargo</span>.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {["facebook", "whatsapp", "instagram", "linkedin"].map((n) => (
              <a
                key={n}
                href="#"
                aria-label={n}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon name={n} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Quick Links
          </h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            <li><Link href="/" className="transition-colors hover:text-accent">Home</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-accent">About Us</Link></li>
            <li><Link href="/services" className="transition-colors hover:text-accent">Services</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-accent">Contact Us</Link></li>
            <li><Link href="/prohibited-items" className="transition-colors hover:text-accent">Prohibited Items</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Our Services
          </h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            <li><Link href="/services#au-bd" className="transition-colors hover:text-accent">Australia &harr; Bangladesh Shipping</Link></li>
            <li><Link href="/services#interstate" className="transition-colors hover:text-accent">Interstate Courier (Australia)</Link></li>
            <li><Link href="/services#3pl" className="transition-colors hover:text-accent">3PL Fulfilment (Coming Soon)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Contact Us
          </h4>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
            <li className="flex items-center gap-2"><PhoneIcon /> [Phone Number]</li>
            <li className="flex items-center gap-2"><MailIcon /> [Email Address]</li>
            <li className="flex items-center gap-2"><ChatIcon /> [WhatsApp Number]</li>
            <li className="flex items-center gap-2"><PinIcon /> Sydney, NSW, Australia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-2 md:flex-row">
          <p>Borderless Group Pty Ltd | ABN [XX XXX XXX XXX]</p>
          <p>&copy; 2026 Borderless Group. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="transition-colors hover:text-accent">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="transition-colors hover:text-accent">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "currentColor" };
  if (name === "facebook")
    return <svg {...common}><path d="M13 22v-8h3l1-4h-4V7c0-1.1.4-2 2-2h2V1h-3c-3 0-5 2-5 5v4H6v4h3v8h4z"/></svg>;
  if (name === "whatsapp")
    return <svg {...common}><path d="M20 3.5A10.5 10.5 0 003.6 17.8L2 22l4.3-1.6A10.5 10.5 0 1020 3.5zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.6 1 .9-2.6-.2-.3A8 8 0 1120 12a8 8 0 01-8 8zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.4-.5-.5-.9-1-1.3-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.1 4.9 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.2-.2-.4-.3z"/></svg>;
  if (name === "instagram")
    return <svg {...common}><path d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-2.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>;
  return <svg {...common}><path d="M6.9 20H3V9h3.9v11zM5 7.5A2.3 2.3 0 112.6 5 2.3 2.3 0 015 7.5zM21 20h-3.9v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9.3V9h3.7v1.5h.1a4.1 4.1 0 013.7-2c3.9 0 4.7 2.6 4.7 6V20z"/></svg>;
}

function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0 text-accent"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.9 2z"/></svg>;
}
function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0 text-accent"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M22 6l-10 7L2 6"/></svg>;
}
function ChatIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0 text-accent"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>;
}
function PinIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0 text-accent"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg>;
}
