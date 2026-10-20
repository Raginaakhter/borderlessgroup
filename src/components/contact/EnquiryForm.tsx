"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const topics = [
  { value: "au-bd", label: "Australia → Bangladesh" },
  { value: "bd-au", label: "Bangladesh → Australia" },
  { value: "interstate", label: "Interstate courier" },
  { value: "3pl", label: "3PL early access" },
  { value: "account", label: "Business account" },
  { value: "other", label: "Other" },
];

type Field = "name" | "email" | "phone" | "topic" | "items" | "size" | "route" | "message";

type FormState = Record<Field, string> & { consent: boolean };

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  items: "",
  size: "",
  route: "",
  message: "",
  consent: false,
};

export default function EnquiryForm() {
  const [state, setState] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<Field | "consent", string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setState((s) => ({ ...s, [k]: v }));
    if (errors[k as Field | "consent"]) {
      setErrors((e) => {
        const n = { ...e };
        delete n[k as Field | "consent"];
        return n;
      });
    }
  };

  const validate = () => {
    const e: Partial<Record<Field | "consent", string>> = {};
    if (!state.name.trim()) e.name = "Please tell us your name.";
    if (!/.+@.+\..+/.test(state.email)) e.email = "A valid email address, please.";
    if (!state.phone.trim()) e.phone = "A phone or WhatsApp number helps us reply quickly.";
    if (!state.topic) e.topic = "Pick the service you’re asking about.";
    if (!state.consent) e.consent = "Please agree to our Privacy Policy.";
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    // mock send; wire up to your form backend later
    setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-border bg-white p-10 text-center shadow-[0_30px_80px_-30px_rgba(11,30,63,0.3)]"
      >
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
          Thanks, we&rsquo;ve received your enquiry.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          A member of our team will be in touch within{" "}
          <span className="font-semibold text-foreground">[X business hours]</span>. Need us
          sooner? Message us on WhatsApp at{" "}
          <span className="font-semibold text-foreground">[number]</span>.
        </p>
        <button
          type="button"
          onClick={() => {
            setState(initial);
            setStatus("idle");
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="relative rounded-3xl border border-border bg-white p-6 shadow-[0_30px_80px_-30px_rgba(11,30,63,0.25)] sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold text-foreground">
        Request a quote
      </h3>
      <p className="mt-1.5 text-sm text-muted">
        Tell us what you&rsquo;re shipping and we&rsquo;ll come back with a clear price.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input
            type="text"
            autoComplete="name"
            value={state.name}
            onChange={(e) => set("name", e.target.value)}
            className="input"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            value={state.email}
            onChange={(e) => set("email", e.target.value)}
            className="input"
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Phone / WhatsApp" required error={errors.phone}>
          <input
            type="tel"
            autoComplete="tel"
            value={state.phone}
            onChange={(e) => set("phone", e.target.value)}
            className="input"
            placeholder="+61 ..."
          />
        </Field>
        <Field label="I’m enquiring about" required error={errors.topic}>
          <select
            value={state.topic}
            onChange={(e) => set("topic", e.target.value)}
            className="input appearance-none pr-10"
          >
            <option value="">Pick a service&hellip;</option>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="What are you sending?" className="sm:col-span-2">
          <input
            type="text"
            value={state.items}
            onChange={(e) => set("items", e.target.value)}
            className="input"
            placeholder="e.g. clothing, cosmetics, electronics, commercial stock"
          />
        </Field>

        <Field label="Approximate weight & size">
          <input
            type="text"
            value={state.size}
            onChange={(e) => set("size", e.target.value)}
            className="input"
            placeholder="e.g. 12kg, 40x30x25cm"
          />
        </Field>
        <Field label="Pickup → Delivery suburb / city">
          <input
            type="text"
            value={state.route}
            onChange={(e) => set("route", e.target.value)}
            className="input"
            placeholder="e.g. Parramatta → Dhaka"
          />
        </Field>

        <Field label="Message" className="sm:col-span-2">
          <textarea
            rows={4}
            value={state.message}
            onChange={(e) => set("message", e.target.value)}
            className="input resize-y"
            placeholder="Anything else we should know?"
          />
        </Field>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={state.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-border-strong text-accent focus:ring-accent"
        />
        <span>
          I agree to Borderless Group&rsquo;s{" "}
          <a href="/privacy" className="font-semibold text-accent underline-offset-2 hover:underline">
            Privacy Policy
          </a>
          .
          {errors.consent && (
            <span className="mt-1 block text-xs font-semibold text-rose-600">{errors.consent}</span>
          )}
        </span>
      </label>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted">We usually reply within [X business hours].</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-contrast shadow-[0_12px_30px_-14px_rgba(11,30,63,0.6)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send My Enquiry"}
          <span>&rarr;</span>
        </button>
      </div>

      <AnimatePresence>
        {Object.keys(errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-semibold text-rose-700"
          >
            Please check the fields above and try again.
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: #fff;
          padding: 12px 14px;
          font-size: 14px;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .input::placeholder {
          color: var(--muted-2);
        }
        .input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 4px rgba(20, 196, 180, 0.15);
        }
        select.input {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M1 3 L5 7 L9 3' stroke='%235b6a84' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 10px 10px;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[12px] font-semibold text-foreground">
        {label}
        {required && <span className="ml-1 text-rose-500">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs font-semibold text-rose-600">{error}</span>
      )}
    </label>
  );
}
