import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TEAM, l as VALUES, t as COMPANY } from "./utils-Bm_k1c6h.mjs";
import { t as Reveal } from "./split-words-DQX_cG5j.mjs";
import { t as PageHero } from "./page-hero-Dyc2CcQ7.mjs";
import { n as NamedIcon, t as CtaBand } from "./icons-DBw8-Agv.mjs";
import { t as TiltCard } from "./tilt-card-DJdF0Ltw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BiouyNu6.js
var import_jsx_runtime = require_jsx_runtime();
var SNAPSHOT = [
	["Legal Name", COMPANY.legal],
	["Entity Type", COMPANY.entity],
	["Founded", COMPANY.founded],
	["Headquarters", COMPANY.hq],
	["Industry", COMPANY.industry]
];
function About() {
	const founder = TEAM[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "About Us",
				title: "Consulting built on clarity and results.",
				lede: "Greenstone Solutions LLC was formed in Texas to help businesses navigate complex challenges with clarity, strategy, and confidence.",
				crumbs: [{
					label: "Home",
					to: "/"
				}, { label: "About" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section",
				"aria-labelledby": "story-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap grid items-center gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Our Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "story-heading",
							className: "mt-3 text-3xl sm:text-4xl",
							children: "Founded on a simple idea"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Greenstone Solutions LLC was officially registered as a Texas Limited Liability Company on ",
									COMPANY.foundedFull,
									", and is headquartered at ",
									COMPANY.address,
									",",
									" ",
									COMPANY.city,
									"."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We started Greenstone around a simple idea: businesses deserve consulting partners who communicate clearly, follow through on commitments, and stay accountable long after an engagement begins — not just through the initial project. As a member-managed company, we operate with a hands-on, client-focused approach, emphasizing integrity, accountability, and results." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our services are grounded in strong analytical practices, sound financial insight, and a commitment to delivering practical, actionable solutions aligned with each client's unique goals. With a flexible and adaptive business model, we're positioned to engage in consulting and other lawful business activities that create long-term value for our clients and partners." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"That idea is where our tagline comes from:",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-fg",
										children: COMPANY.tagline
									})
								] })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							className: "p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-5 text-2xl",
								children: "Company Snapshot"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-sm",
								children: SNAPSHOT.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "contents",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-semibold text-muted",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "m-0",
										children: v
									})]
								}, k))
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section bg-[color-mix(in_oklab,var(--color-moss)_6%,transparent)]",
				"aria-labelledby": "values-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mb-12 max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow justify-center",
							children: "What We Believe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "values-heading",
							className: "mt-3 text-3xl sm:text-4xl",
							children: "Our Values"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 md:grid-cols-3",
						children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "h-full p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-well",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedIcon, { name: v.icon })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-2 text-xl",
										children: v.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: v.body
									})
								]
							})
						}, v.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section",
				"aria-labelledby": "leadership-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mb-10 max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow justify-center",
							children: "Leadership"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "leadership-heading",
							className: "mt-3 text-3xl sm:text-4xl",
							children: "Led by our founder"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel mx-auto flex max-w-3xl flex-wrap items-center gap-7 p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: founder.photo,
							alt: founder.name,
							className: "size-[120px] shrink-0 rounded-full object-cover ring-4 ring-moss"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-[220px] flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl",
									children: founder.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 font-semibold text-moss-ink",
									children: founder.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 text-sm text-muted",
									children: "Bwalya founded Greenstone Solutions in 2024 and leads the company's strategy, client relationships, and day-to-day operations from Houston, Texas."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/employees/$slug",
									params: { slug: founder.slug },
									className: "btn btn-ghost",
									children: "View Full Profile"
								})
							]
						})]
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				title: "Want to work together?",
				body: "Reach out and tell us about your project — we'll respond within one business day.",
				primary: {
					to: "/contact",
					label: "Contact Us"
				},
				secondary: {
					to: "/employees",
					label: "Meet the Team"
				}
			})
		]
	});
}
//#endregion
export { About as component };
