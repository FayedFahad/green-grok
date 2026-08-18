import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as cn } from "./utils-Bm_k1c6h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tilt-card-DJdF0Ltw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TiltCard({ children, className, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width;
		const py = (e.clientY - r.top) / r.height;
		el.style.setProperty("--rx", `${((.5 - py) * 6.5).toFixed(2)}deg`);
		el.style.setProperty("--ry", `${((px - .5) * 6.5).toFixed(2)}deg`);
		el.style.setProperty("--spot-x", `${(px * 100).toFixed(1)}%`);
		el.style.setProperty("--spot-y", `${(py * 100).toFixed(1)}%`);
	}
	function onLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.setProperty("--rx", "0deg");
		el.style.setProperty("--ry", "0deg");
		el.style.setProperty("--spot-x", "50%");
		el.style.setProperty("--spot-y", "50%");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("panel tilt-card", className),
		onPointerMove: onMove,
		onPointerLeave: onLeave,
		style: {
			"--rx": "0deg",
			"--ry": "0deg"
		},
		children
	});
}
//#endregion
export { TiltCard as t };
