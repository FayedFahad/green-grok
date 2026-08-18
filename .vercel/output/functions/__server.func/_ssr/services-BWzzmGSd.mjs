import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PROCESS, o as SERVICES } from "./utils-Bm_k1c6h.mjs";
import { E as Check } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./split-words-DQX_cG5j.mjs";
import { t as PageHero } from "./page-hero-Dyc2CcQ7.mjs";
import { n as NamedIcon, t as CtaBand } from "./icons-DBw8-Agv.mjs";
import { t as TiltCard } from "./tilt-card-DJdF0Ltw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BWzzmGSd.js
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "What We Do",
				title: "Services built around your business",
				lede: "From a single custom tool to full product builds, here's how Greenstone Solutions can help.",
				crumbs: [{
					label: "Home",
					to: "/"
				}, { label: "Services" }]
			}),
			SERVICES.map((s, i) => {
				const flip = i % 2 === 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: s.id,
					className: flip ? "section bg-[color-mix(in_oklab,var(--color-moss)_6%,transparent)]" : "section",
					"aria-labelledby": `${s.id}-h`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap grid items-center gap-10 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							variant: flip ? "right" : "left",
							className: flip ? "lg:order-2" : "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "icon-well",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedIcon, { name: s.icon })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: `${s.id}-h`,
									className: "mt-2 text-3xl sm:text-4xl",
									children: s.id === "custom-software" ? "Custom Software Development" : s.id === "mobile" ? "Mobile App Development" : s.id === "consulting" ? "IT Consulting & Strategy" : s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "lede mt-4 mb-6",
									children: s.lede
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-col gap-3",
									children: s.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-5 shrink-0 text-moss" }), item]
									}, item))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							variant: flip ? "left" : "right",
							className: flip ? "lg:order-1" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
								className: "grid min-h-[240px] place-items-center p-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-28 place-items-center rounded-3xl bg-moss/12 text-moss",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedIcon, {
										name: s.icon,
										className: "size-14"
									})
								})
							})
						})]
					})
				}, s.id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section",
				"aria-labelledby": "process-heading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mb-12 max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow justify-center",
							children: "How We Work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "process-heading",
							className: "mt-3 text-3xl sm:text-4xl",
							children: "A straightforward process"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "process-line",
							"aria-hidden": "true"
						}), PROCESS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 90,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "relative h-full p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-well font-display text-lg font-semibold",
										children: p.step
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-2 text-xl",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: p.body
									})
								]
							})
						}, p.step))]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				title: "Not sure where to start?",
				body: "Tell us about your project and we'll help you figure out the right approach.",
				primary: {
					to: "/contact",
					label: "Get a Free Consultation"
				}
			})
		]
	});
}
//#endregion
export { Services as component };
