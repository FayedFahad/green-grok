import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TEAM, n as MARQUEE, o as SERVICES, s as SKILL_GROUPS, u as WHY } from "./utils-Bm_k1c6h.mjs";
import { E as Check, j as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SplitWords, t as Reveal } from "./split-words-DQX_cG5j.mjs";
import { n as NamedIcon, t as CtaBand } from "./icons-DBw8-Agv.mjs";
import { t as TiltCard } from "./tilt-card-DJdF0Ltw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D4_B2f-I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATS = [
	{
		value: "2024",
		label: "Texas-Registered LLC"
	},
	{
		value: "100%",
		label: "Client-Focused Partnership"
	},
	{
		value: "Full-Stack",
		label: "Engineering Team"
	},
	{
		value: "AI-Ready",
		label: "Modern, Secure Technology"
	}
];
var PARTICLES = Array.from({ length: 14 }, (_, p) => ({
	size: 3 + p % 5,
	x: (p * 17 + 8) % 94,
	y: (p * 29 + 9) % 88,
	dx: (p % 2 ? 1 : -1) * (16 + p % 4 * 9),
	dy: -(28 + p % 5 * 10),
	duration: 6.5 + p % 6 * 1.1,
	delay: -p * .47,
	opacity: .22 + p % 4 * .09
}));
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				title: "Ready to start your project?",
				body: "Tell us what you're building and we'll get back to you within one business day.",
				secondary: {
					href: "mailto:info@greenstonesolutions.net",
					label: "Email Us Directly"
				}
			})
		]
	});
}
function Hero() {
	const visual = (0, import_react.useRef)(null);
	function onMove(e) {
		const el = visual.current;
		if (!el) return;
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		const rect = e.currentTarget.getBoundingClientRect();
		const nx = (e.clientX - rect.left) / rect.width - .5;
		const ny = (e.clientY - rect.top) / rect.height - .5;
		el.style.setProperty("--hero-x", `${(nx * 12).toFixed(1)}px`);
		el.style.setProperty("--hero-y", `${(ny * 9).toFixed(1)}px`);
	}
	function onLeave() {
		const el = visual.current;
		if (!el) return;
		el.style.setProperty("--hero-x", "0px");
		el.style.setProperty("--hero-y", "0px");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero",
		onPointerMove: onMove,
		onPointerLeave: onLeave,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb orb-a",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb orb-b",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden",
				"aria-hidden": "true",
				children: PARTICLES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hero-particle",
					style: {
						"--size": `${p.size}px`,
						"--x": `${p.x}%`,
						"--y": `${p.y}%`,
						"--dx": `${p.dx}px`,
						"--dy": `${p.dy}px`,
						"--duration": `${p.duration}s`,
						"--delay": `${p.delay}s`,
						"--opacity": p.opacity
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Business Consulting · Austin, TX · Est. 2024"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-xl text-4xl sm:text-5xl lg:text-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
							text: "Building tomorrow's solutions, today.",
							highlight: "solutions,"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mt-6",
						children: "Greenstone Solutions LLC is a Texas-based consulting firm dedicated to helping businesses navigate complex challenges with clarity, strategy, and confidence. We provide tailored consulting services designed to support sustainable growth, operational efficiency, and informed decision-making across a wide range of industries."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "btn btn-primary",
							children: "Start a Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "btn btn-ghost",
							children: "Explore Services"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							className: "p-4 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "stat-num block",
								style: { animationDelay: `${450 + i * 90}ms` },
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: s.label
							})]
						}, s.label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: visual,
					className: "relative",
					style: {
						transform: "translate3d(var(--hero-x, 0), var(--hero-y, 0), 0)",
						transition: "transform 200ms ease"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-moss/30 bg-moss/10 px-3 py-1 text-sm font-semibold text-moss-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Accepting new projects" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-4 text-2xl",
								children: "Why teams choose Greenstone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-col gap-3.5 text-sm",
								children: [
									"Direct access to the people building your software",
									"Solutions scoped around your business goals, not templates",
									"U.S.-based team, headquartered in Austin, Texas"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-0.5 size-5 shrink-0 text-moss",
										strokeWidth: 2.2
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						]
					}), [
						"Cloud",
						"Web",
						"Mobile",
						"AI"
					].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute hidden rounded-full border border-moss/25 bg-surface/80 px-3 py-1 text-xs font-bold tracking-wide text-moss-ink shadow-soft backdrop-blur xl:inline-flex",
						style: {
							top: `${18 + i * 18}%`,
							right: i % 2 === 0 ? "4%" : "auto",
							left: i % 2 === 1 ? "4%" : "auto",
							animation: `orb-float ${4.7 + i * .8}s ease-in-out infinite`,
							animationDelay: `${-i * .75}s`
						},
						children: label
					}, label))]
				})]
			})
		]
	});
}
function Marquee() {
	const items = [...MARQUEE, ...MARQUEE];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "marquee-item",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" }), item]
			}, `${item}-${i}`))
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		"aria-labelledby": "services-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head mx-auto mb-12 max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow justify-center",
							children: "What We Do"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "services-heading",
							className: "mt-3 text-3xl sm:text-4xl",
							children: "Our Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mx-auto mt-4",
							children: "From custom applications to cloud infrastructure, we help businesses design and ship reliable software."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							className: "h-full p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "icon-well",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedIcon, { name: s.icon })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mb-2 text-xl",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: s.short
								})
							]
						})
					}, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "btn btn-ghost",
						children: "View All Services"
					})
				})
			]
		})
	});
}
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section bg-[color-mix(in_oklab,var(--color-moss)_6%,transparent)]",
		"aria-labelledby": "why-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-12 max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow justify-center",
					children: "Why Greenstone"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "why-heading",
					className: "mt-3 text-3xl sm:text-4xl",
					children: "A team you can actually reach"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: WHY.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
						className: "h-full p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "icon-well",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NamedIcon, { name: w.icon })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2 text-xl",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: w.body
							})
						]
					})
				}, w.title))
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		"aria-labelledby": "skills-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mb-12 max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow justify-center",
							children: "What We Bring"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "skills-heading",
							className: "mt-3 text-3xl sm:text-4xl",
							children: "Technical Skills"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lede mx-auto mt-4",
							children: "Consulting backed by real engineering depth — the technologies our team designs, builds, and delivers with."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: SKILL_GROUPS.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel h-full p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-4 font-sans text-sm font-bold tracking-wide",
								children: g.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: g.tags.map((tag, ti) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chip",
									style: { "--tag-delay": `${Math.min(ti * 28, 280)}ms` },
									children: tag
								}, tag))
							})]
						})
					}, g.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/portfolio",
						className: "btn btn-ghost",
						children: "See It In Action — View Portfolio"
					})
				})
			]
		})
	});
}
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section bg-[color-mix(in_oklab,var(--color-moss)_6%,transparent)]",
		"aria-labelledby": "team-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-12 max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow justify-center",
						children: "Meet the Team"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "team-heading",
						className: "mt-3 text-3xl sm:text-4xl",
						children: "The people behind Greenstone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lede mx-auto mt-4",
						children: "Small, hands-on, and directly accountable for the work we deliver."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
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
			})]
		})
	});
}
//#endregion
export { Home as component };
