"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "facebook", href: "#", label: "Facebook" },
  { name: "twitter", href: "#", label: "Twitter" },
  { name: "linkedin", href: "#", label: "LinkedIn" },
  { name: "instagram", href: "#", label: "Instagram" },
];

export default function SocialSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-screen w-12 items-center xl:flex"
      aria-hidden="false"
    >
      <div className="pointer-events-auto flex flex-col items-center gap-4">
        <span className="h-20 w-px bg-gradient-to-b from-transparent to-border-strong" />
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            aria-label={s.label}
            className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_6px_16px_-10px_rgba(20,196,180,0.5)]"
          >
            <SocialIcon name={s.name} />
          </a>
        ))}
        <span className="h-20 w-px bg-gradient-to-b from-border-strong to-transparent" />
      </div>
    </motion.aside>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "currentColor" } as const;
  if (name === "facebook")
    return <svg {...common}><path d="M13 22v-8h3l1-4h-4V7c0-1.1.4-2 2-2h2V1h-3c-3 0-5 2-5 5v4H6v4h3v8h4z"/></svg>;
  if (name === "twitter")
    return <svg {...common}><path d="M22 5.9a8.4 8.4 0 0 1-2.4.6 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1A4.1 4.1 0 0 0 12 9a11.7 11.7 0 0 1-8.4-4.3 4.1 4.1 0 0 0 1.3 5.5A4.1 4.1 0 0 1 3 9.6v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 18.3a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 22 5.9z"/></svg>;
  if (name === "linkedin")
    return <svg {...common}><path d="M6.9 20H3V9h3.9v11zM5 7.5A2.3 2.3 0 112.6 5 2.3 2.3 0 015 7.5zM21 20h-3.9v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9.3V9h3.7v1.5h.1a4.1 4.1 0 013.7-2c3.9 0 4.7 2.6 4.7 6V20z"/></svg>;
  return <svg {...common}><path d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-2.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>;
}
