"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

type NavChild = { href: string; label: string; description?: string };
type NavItem = { href: string; label: string; children?: NavChild[] };

const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services#au-bd",
        label: "Australia ⇄ Bangladesh",
        description: "Door-to-door shipping both directions",
      },
      {
        href: "/services#interstate",
        label: "Interstate Courier",
        description: "Capital cities & regional Australia",
      },
      {
        href: "/services#3pl",
        label: "3PL & Fulfilment",
        description: "Store, pick, pack & ship (coming soon)",
      },
      {
        href: "/services#customs",
        label: "Customs & Import",
        description: "Paperwork handled on both sides",
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  // ignore hash fragments for matching
  const base = href.split("#")[0];
  return pathname === base || pathname.startsWith(base + "/");
}

export default function Header() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [lastPathname, setLastPathname] = useState(pathname);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // close mobile menu on route change — storing prev state is React's endorsed
  // way to react to prop changes without a setState-in-effect cascade.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
    setDropdownOpen(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setDropdownOpen(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(label);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(null), 120);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <div
        className={`mx-auto w-full max-w-7xl px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-4 rounded-full border bg-white/85 px-4 py-2.5 backdrop-blur-xl transition-all sm:px-5 ${
            scrolled
              ? "border-border-strong shadow-[0_10px_40px_-20px_rgba(11,30,63,0.25)]"
              : "border-border shadow-[0_6px_30px_-20px_rgba(11,30,63,0.15)]"
          }`}
        >
          <Link href="/" className="flex items-center" aria-label="Borderless Group home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && enter(item.label)}
                  onMouseLeave={() => item.children && leave()}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-expanded={item.children ? dropdownOpen === item.label : undefined}
                    className={`group relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-accent" : "text-foreground/80 hover:text-accent"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className={`transition-transform ${
                          dropdownOpen === item.label ? "rotate-180" : ""
                        } opacity-70`}
                        aria-hidden="true"
                      >
                        <path
                          d="M1 3 L5 7 L9 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-accent/10"
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                      />
                    )}
                    {!active && (
                      <span className="pointer-events-none absolute inset-x-4 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.children && dropdownOpen === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full z-40 mt-3 w-80 -translate-x-1/2"
                      >
                        <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-[0_30px_80px_-20px_rgba(11,30,63,0.3)]">
                          {item.children.map((c) => {
                            const sub = isActive(pathname, c.href);
                            return (
                              <Link
                                key={c.href}
                                href={c.href}
                                aria-current={sub ? "page" : undefined}
                                className={`group flex items-start gap-3 rounded-xl p-3 transition-colors ${
                                  sub ? "bg-accent-soft text-accent" : "hover:bg-surface"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                                    sub ? "bg-accent text-white" : "bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white"
                                  } transition-colors`}
                                >
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 5l7 7-7 7" />
                                  </svg>
                                </span>
                                <span className="min-w-0 leading-tight">
                                  <span className={`block text-sm font-semibold ${sub ? "text-accent" : "text-foreground"}`}>
                                    {c.label}
                                  </span>
                                  {c.description && (
                                    <span className="mt-0.5 block text-[12px] text-muted">
                                      {c.description}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast shadow-[0_10px_28px_-14px_rgba(11,30,63,0.6)] transition-all hover:-translate-y-0.5 hover:bg-foreground sm:inline-flex"
            >
              Get a Quote
              <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-white text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded bg-current transition-transform ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[2px] w-full rounded bg-current transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[2px] w-full rounded bg-current transition-transform ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-[0_20px_60px_-20px_rgba(11,30,63,0.2)] lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <div className="flex items-stretch">
                        <Link
                          href={item.href}
                          className={`flex flex-1 items-center justify-between rounded-xl px-3 py-3 text-base transition ${
                            active
                              ? "bg-accent-soft text-accent"
                              : "text-foreground/90 hover:bg-surface hover:text-accent"
                          }`}
                        >
                          <span className="font-medium">{item.label}</span>
                          {!item.children && <span className="text-accent">&rarr;</span>}
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={dropdownOpen === item.label}
                            onClick={() =>
                              setDropdownOpen((v) => (v === item.label ? null : item.label))
                            }
                            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-foreground hover:border-accent hover:text-accent"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 10 10"
                              className={`transition-transform ${
                                dropdownOpen === item.label ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            >
                              <path d="M1 3 L5 7 L9 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        )}
                      </div>
                      <AnimatePresence>
                        {item.children && dropdownOpen === item.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map((c) => {
                              const sub = isActive(pathname, c.href);
                              return (
                                <li key={c.href}>
                                  <Link
                                    href={c.href}
                                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
                                      sub ? "text-accent" : "text-muted hover:text-accent"
                                    }`}
                                  >
                                    {c.label}
                                    <span className="text-accent">&rarr;</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/contact"
                    className="mt-1 flex items-center justify-center rounded-xl bg-primary px-3 py-3 text-base font-semibold text-primary-contrast"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
