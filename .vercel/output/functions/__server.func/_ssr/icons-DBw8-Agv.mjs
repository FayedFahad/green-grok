import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Compass, D as ChartColumn, E as Check, M as Activity, O as Brain, S as GitFork, T as Cloud, _ as Lock, a as TrendingUp, b as KeyRound, c as Smartphone, d as ShieldCheck, g as Mail, h as MapPin, k as BookOpen, l as ShoppingCart, n as Users, o as Target, p as MessageCircle, r as Truck, u as ShoppingBag, w as CodeXml, x as HeartPulse, y as Layers } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./split-words-DQX_cG5j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/icons-DBw8-Agv.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title, body, primary = {
	to: "/contact",
	label: "Get in Touch"
}, secondary }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-tight",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "wrap",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cta-band",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "orb orb-a !top-auto !right-0 !opacity-40",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "relative max-w-2xl text-3xl text-white sm:text-4xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mt-3 max-w-xl text-mist/80",
						children: body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: primary.to,
							className: "btn btn-primary",
							children: primary.label
						}), secondary && "href" in secondary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: secondary.href,
							className: "btn btn-on-dark",
							children: secondary.label
						}) : secondary && "to" in secondary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: secondary.to,
							className: "btn btn-on-dark",
							children: secondary.label
						}) : null]
					})
				]
			}) })
		})
	});
}
var MAP = {
	"code-2": CodeXml,
	cloud: Cloud,
	smartphone: Smartphone,
	compass: Compass,
	"map-pin": MapPin,
	mail: Mail,
	"shield-check": ShieldCheck,
	check: Check,
	target: Target,
	"book-open": BookOpen,
	activity: Activity,
	"key-round": KeyRound,
	layers: Layers,
	lock: Lock,
	"git-fork": GitFork,
	"shopping-bag": ShoppingBag,
	brain: Brain,
	"bar-chart-3": ChartColumn,
	"message-circle": MessageCircle,
	truck: Truck,
	"shopping-cart": ShoppingCart,
	users: Users,
	"heart-pulse": HeartPulse,
	"trending-up": TrendingUp
};
function NamedIcon({ name, className }) {
	const Icon = MAP[name] ?? CodeXml;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		strokeWidth: 1.8
	});
}
//#endregion
export { NamedIcon as n, CtaBand as t };
