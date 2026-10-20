import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PagePlaceholder({ eyebrow, title, description }: Props) {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </div>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
        <div className="mt-10 inline-flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
          >
            <span>&larr;</span> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
