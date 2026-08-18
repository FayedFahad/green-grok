import { Link } from "@tanstack/react-router";
import { SplitWords } from "@/components/split-words";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  crumbs: { label: string; to?: string }[];
}) {
  return (
    <section className="hero hero-simple">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" />
      <div className="wrap relative">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 ? <span aria-hidden="true">/</span> : null}
              {c.to ? (
                <Link to={c.to} className="hover:text-moss">
                  {c.label}
                </Link>
              ) : (
                <span className="text-fg">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-3 max-w-4xl text-4xl sm:text-5xl md:text-6xl">
          <SplitWords text={title} />
        </h1>
        <p className="lede mt-5">{lede}</p>
      </div>
    </section>
  );
}
