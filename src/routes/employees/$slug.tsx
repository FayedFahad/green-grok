import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getEmployee } from "@/lib/site-data";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Linkedin, Mail, ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/employees/$slug")({
  loader: ({ params }) => {
    const person = getEmployee(params.slug);
    if (!person) throw notFound();
    return { person };
  },
  component: Profile,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.person.name} – ${loaderData.person.role} | Greenstone Solutions`
          : "Employee | Greenstone Solutions",
      },
      {
        name: "robots",
        content: "noindex, follow",
      },
    ],
  }),
});

function Profile() {
  const { person } = Route.useLoaderData();

  return (
    <main id="main">
      <PageHero
        eyebrow="Employee Profile"
        title={person.name}
        lede={person.role}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Employees", to: "/employees" },
          { label: person.name },
        ]}
      />

      <section className="section-tight">
        <div className="wrap grid items-start gap-8 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <aside className="id-card">
              <div className="id-punch" />
              <div className="mx-auto mb-4 size-36 overflow-hidden rounded-2xl ring-2 ring-moss/50">
                <img src={person.photo} alt={person.name} className="size-full object-cover" />
              </div>
              <div className="relative text-center">
                <h2 className="text-2xl text-white">{person.name}</h2>
                <div className="mt-1 font-semibold text-lime">{person.role}</div>
              </div>
              <div className="relative my-4 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-moss/40 bg-moss/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-lime">
                  <span className="pulse-dot" /> Active Employee
                </span>
              </div>
              <dl className="relative grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                <dt className="text-mist/60">Employee ID</dt>
                <dd className="m-0 font-semibold">{person.id}</dd>
                <dt className="text-mist/60">Department</dt>
                <dd className="m-0">{person.department}</dd>
                <dt className="text-mist/60">Start Date</dt>
                <dd className="m-0">{person.start}</dd>
              </dl>
              <div className="relative mt-5 flex items-start gap-2 rounded-xl bg-white/5 p-3 text-xs leading-relaxed text-mist/80">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-moss" />
                <span>
                  This page is the official record used to verify current Greenstone Solutions
                  employment when a company ID badge QR code is scanned.
                </span>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <span className="eyebrow">Employee Profile</span>
              <h2 className="mt-3 text-3xl">About {person.first}</h2>
              <p className="mt-4 text-muted">{person.bio}</p>
              {person.bullets ? (
                <ul className="mt-5 flex flex-col gap-3">
                  {person.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-moss" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}

              <h3 className="mt-8 mb-3 text-xl">Contact</h3>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${person.email}`} className="btn btn-ghost">
                  <Mail size={16} /> {person.email}
                </a>
                {person.linkedin ? (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                ) : null}
              </div>

              {person.placeholder ? (
                <p className="mt-6 rounded-2xl border border-dashed border-border bg-surface p-4 text-sm text-muted">
                  This profile is a placeholder. Send {person.first}'s real photo, start date, and a
                  short bio to replace the initials avatar and complete this page.
                </p>
              ) : null}

              {person.skills ? (
                <div className="mt-10">
                  <h3 className="mb-5 text-xl">Skills</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {person.skills.map((g) => (
                      <div key={g.title} className="panel p-5">
                        <h4 className="mb-3 font-sans text-sm font-bold">{g.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {g.tags.map((tag, i) => (
                            <span
                              key={tag}
                              className="chip"
                              style={{ "--tag-delay": `${i * 30}ms` } as CSSProperties}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {person.certs ? (
                <div className="mt-10">
                  <h3 className="mb-5 text-xl">Certifications</h3>
                  <div className="grid gap-4">
                    {person.certs.map((g) => (
                      <div key={g.title} className="panel p-5">
                        <h4 className="mb-3 font-sans text-sm font-bold">{g.title}</h4>
                        <ul className="space-y-2">
                          {g.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted">
                              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-moss" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
