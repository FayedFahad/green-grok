import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as SERVICES, t as COMPANY } from "./utils-Bm_k1c6h.mjs";
import { g as Mail, h as MapPin, v as Linkedin } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Reveal } from "./split-words-DQX_cG5j.mjs";
import { t as PageHero } from "./page-hero-Dyc2CcQ7.mjs";
import { t as TiltCard } from "./tilt-card-DJdF0Ltw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BBINbpkE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactForm() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") || "").trim();
		const email = String(data.get("email") || "").trim();
		const message = String(data.get("message") || "").trim();
		if (!name || !email || !message) {
			toast.error("Please fill in your name, email, and message.");
			return;
		}
		setSending(true);
		window.setTimeout(() => {
			setSending(false);
			setSent(true);
			form.reset();
			toast.success("Message ready — we'll reply within one business day.");
		}, 650);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-2xl",
				children: "Thank you — we'll be in touch."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [
					"Prefer email? Write us at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-moss-ink underline-offset-4 hover:underline",
						href: "mailto:info@greenstonesolutions.net",
						children: "info@greenstonesolutions.net"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn btn-ghost mt-6",
				onClick: () => setSent(false),
				children: "Send another message"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "panel grid gap-5 p-6 sm:p-8",
		onSubmit,
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "name",
						name: "name",
						autoComplete: "name",
						required: true,
						placeholder: "Jordan Lee"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "email",
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true,
						placeholder: "you@company.com"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "company",
						children: "Company"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "company",
						name: "company",
						autoComplete: "organization",
						placeholder: "Acme Inc."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "field",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "service",
						children: "Service interest"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "service",
						name: "service",
						defaultValue: "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select a service"
							}),
							SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s.id,
								children: s.title
							}, s.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "other",
								children: "Something else"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "field",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "message",
					children: "Project notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "message",
					name: "message",
					required: true,
					placeholder: "What are you building?"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn btn-primary w-full sm:w-auto",
				disabled: sending,
				children: sending ? "Sending…" : "Send message"
			})
		]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Get In Touch",
			title: "Let's talk about your project",
			lede: "Reach out directly — we typically respond within one business day.",
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Contact" }]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid min-w-0 gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl",
							children: "Contact Information"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Prefer email or want to visit our office? Here's how to reach Greenstone Solutions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
									className: "flex items-start gap-4 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-well mb-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: "Office Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											COMPANY.address,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											COMPANY.city
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
									className: "flex items-start gap-4 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-well mb-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg",
											children: "Email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												className: "text-moss-ink hover:underline",
												href: `mailto:${COMPANY.email}`,
												children: COMPANY.email
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													className: "hover:text-moss-ink",
													href: `mailto:${COMPANY.careers}`,
													children: COMPANY.careers
												}),
												" ",
												"— careers"
											]
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
									className: "flex items-start gap-4 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon-well mb-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg",
										children: "LinkedIn"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "text-moss-ink hover:underline",
											href: COMPANY.linkedin,
											target: "_blank",
											rel: "noopener noreferrer",
											children: "Greenstone Solutions LLC"
										})
									})] })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap mt-10 min-w-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[20px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						className: "map-frame",
						src: "https://www.google.com/maps?q=5900+Balcones+Drive,+Suite+100,+Austin,+TX+78731&output=embed",
						title: "Map showing Greenstone Solutions office at 5900 Balcones Drive, Suite 100, Austin, TX 78731",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			})]
		})]
	});
}
//#endregion
export { Contact as component };
