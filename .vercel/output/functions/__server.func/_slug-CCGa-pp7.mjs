import { x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { E as Check, d as ShieldCheck, g as Mail, v as Linkedin } from "./_libs/lucide-react.mjs";
import { n as Route$1 } from "./_ssr/router-Cz9hughP.mjs";
import { t as Reveal } from "./_ssr/split-words-DQX_cG5j.mjs";
import { t as PageHero } from "./_ssr/page-hero-Dyc2CcQ7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CCGa-pp7.js
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	const { person } = Route$1.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Employee Profile",
			title: person.name,
			lede: person.role,
			crumbs: [
				{
					label: "Home",
					to: "/"
				},
				{
					label: "Employees",
					to: "/employees"
				},
				{ label: person.name }
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid items-start gap-8 lg:grid-cols-[320px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "id-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "id-punch" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-4 size-36 overflow-hidden rounded-2xl ring-2 ring-moss/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: person.photo,
								alt: person.name,
								className: "size-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl text-white",
								children: person.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-semibold text-lime",
								children: person.role
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative my-4 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-moss/40 bg-moss/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-lime",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot" }), " Active Employee"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "relative grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-mist/60",
									children: "Employee ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "m-0 font-semibold",
									children: person.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-mist/60",
									children: "Department"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "m-0",
									children: person.department
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-mist/60",
									children: "Start Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "m-0",
									children: person.start
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-5 flex items-start gap-2 rounded-xl bg-white/5 p-3 text-xs leading-relaxed text-mist/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-4 shrink-0 text-moss" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "This page is the official record used to verify current Greenstone Solutions employment when a company ID badge QR code is scanned." })]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Employee Profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl",
							children: ["About ", person.first]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: person.bio
						}),
						person.bullets ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-col gap-3",
							children: person.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-moss" }), b]
							}, b))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 mb-3 text-xl",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${person.email}`,
								className: "btn btn-ghost",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }),
									" ",
									person.email
								]
							}), person.linkedin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: person.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn btn-ghost",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 }), " LinkedIn"]
							}) : null]
						}),
						person.placeholder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 rounded-2xl border border-dashed border-border bg-surface p-4 text-sm text-muted",
							children: [
								"This profile is a placeholder. Send ",
								person.first,
								"'s real photo, start date, and a short bio to replace the initials avatar and complete this page."
							]
						}) : null,
						person.skills ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-5 text-xl",
								children: "Skills"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: person.skills.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "panel p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mb-3 font-sans text-sm font-bold",
										children: g.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: g.tags.map((tag, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "chip",
											style: { "--tag-delay": `${i * 30}ms` },
											children: tag
										}, tag))
									})]
								}, g.title))
							})]
						}) : null,
						person.certs ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-5 text-xl",
								children: "Certifications"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4",
								children: person.certs.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "panel p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mb-3 font-sans text-sm font-bold",
										children: g.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2",
										children: g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-sm text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-4 shrink-0 text-moss" }), item]
										}, item))
									})]
								}, g.title))
							})]
						}) : null
					] })
				})]
			})
		})]
	});
}
//#endregion
export { Profile as component };
