import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TEAM } from "./utils-Bm_k1c6h.mjs";
import { j as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./split-words-DQX_cG5j.mjs";
import { t as PageHero } from "./page-hero-Dyc2CcQ7.mjs";
import { t as TiltCard } from "./tilt-card-DJdF0Ltw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/employees-D--uW2Cj.js
var import_jsx_runtime = require_jsx_runtime();
function Employees() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Team",
			title: "Meet the people behind Greenstone",
			lede: "Select a team member to view their full profile, including role, department, and current employment status.",
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Employees" }]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: TEAM.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/employees/$slug",
						params: { slug: m.slug },
						className: "team-card block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							className: "overflow-hidden p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "photo-frame",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: m.photo,
									alt: m.name
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl",
										children: m.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm font-semibold text-moss-ink",
										children: m.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold",
										children: ["View Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
									})
								]
							})]
						})
					})
				}, m.slug))
			})
		})]
	});
}
//#endregion
export { Employees as component };
