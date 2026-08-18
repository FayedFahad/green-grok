import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SplitWords } from "./split-words-DQX_cG5j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-Dyc2CcQ7.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lede, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero hero-simple",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb orb-a",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mb-6 flex flex-wrap items-center gap-2 text-sm text-muted",
						"aria-label": "Breadcrumb",
						children: crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "/"
							}) : null, c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: c.to,
								className: "hover:text-moss",
								children: c.label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: c.label
							})]
						}, c.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-4xl text-4xl sm:text-5xl md:text-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: title })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-5",
						children: lede
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
