import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as cn } from "./utils-Bm_k1c6h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/split-words-DQX_cG5j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className, delay = 0, variant = "up" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
			el.classList.add("is-visible");
			return;
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					el.classList.add("is-visible");
					io.unobserve(el);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -30px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", variant === "left" && "reveal-left", variant === "right" && "reveal-right", className),
		style: { "--reveal-delay": `${delay}ms` },
		children
	});
}
function SplitWords({ text, className, highlight, delay = 80 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline", className),
		children: text.split(" ").map((word, i) => {
			const clean = word.replace(/[.,!]/g, "");
			const isHi = highlight && clean.toLowerCase() === highlight.toLowerCase();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "split-word",
				style: { animationDelay: `${i * delay}ms` },
				children: [isHi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-word",
					children: word
				}) : word, i < text.split(" ").length - 1 ? "\xA0" : null]
			}, `${word}-${i}`);
		})
	});
}
//#endregion
export { SplitWords as n, Reveal as t };
