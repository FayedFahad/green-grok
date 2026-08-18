import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { TEAM } from "@/lib/site-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/employees/")({
  component: Employees,
  head: () => ({
    meta: [
      { title: "Our Team | Greenstone Solutions" },
      {
        name: "description",
        content: "Meet the Greenstone Solutions team — an Austin, Texas business consulting firm.",
      },
    ],
  }),
});

function Employees() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our Team"
        title="Meet the people behind Greenstone"
        lede="Select a team member to view their full profile, including role, department, and current employment status."
        crumbs={[{ label: "Home", to: "/" }, { label: "Employees" }]}
      />
      <section className="section">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.slug} delay={i * 80}>
              <Link to="/employees/$slug" params={{ slug: m.slug }} className="team-card block">
                <TiltCard className="overflow-hidden p-3">
                  <div className="photo-frame">
                    <img src={m.photo} alt={m.name} />
                  </div>
                  <div className="p-3">
                    <h3 className="text-xl">{m.name}</h3>
                    <div className="mt-1 text-sm font-semibold text-moss-ink">{m.role}</div>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                      View Profile <ArrowRight size={14} />
                    </span>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
