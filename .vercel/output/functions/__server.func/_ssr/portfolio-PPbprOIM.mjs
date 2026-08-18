import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PORTFOLIO } from "./utils-Bm_k1c6h.mjs";
import { t as Reveal } from "./split-words-DQX_cG5j.mjs";
import { t as PageHero } from "./page-hero-Dyc2CcQ7.mjs";
import { n as NamedIcon, t as CtaBand } from "./icons-DBw8-Agv.mjs";
import { t as TiltCard } from "./tilt-card-DJdF0Ltw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-PPbprOIM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Portfolio() {
	const cats = (0, import_react.useMemo)(() => ["All", ...Array.from(new Set(PORTFOLIO.map((p) => p.category)))], []);
	const [active, setActive] = (0, import_react.useState)("All");
	const items = active === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Our Work",
				title: "Consulting backed by things we've actually built",
				lede: "A selection of the platforms, systems, and applications our team has designed and delivered for clients across industries.",
				crumbs: [{
					label: "Home",
					to: "/"
				}, { label: "Portfolio" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-10 flex flex-wrap justify-center gap-2",
						children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(c),
							className: active === c ? "btn btn-primary !min-h-10 px-4 text-sm" : "btn btn-ghost !min-h-10 px-4 text-sm",
							children: c
						}, c))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: Math.min(i * 50, 250),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								className: "flex h-full flex-col p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "icon-well mb-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedIcon, { name: p.icon })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "chip is-static",
											children: p.category
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-3 text-xl",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 flex flex-wrap gap-1.5",
										children: p.tags.map((tag, ti) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "chip",
											style: { "--tag-delay": `${ti * 40}ms` },
											children: tag
										}, tag))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: p.body
									})
								]
							})
						}, p.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				title: "Have a project in mind?",
				body: "Tell us what you're building and we'll get back to you within one business day.",
				primary: {
					to: "/contact",
					label: "Start a Project"
				},
				secondary: {
					to: "/services",
					label: "Explore Services"
				}
			})
		]
	});
}
//#endregion
export { Portfolio as component };
