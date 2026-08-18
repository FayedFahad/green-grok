import { LiveBorder } from "@/components/live-border";
import { SERVICES } from "@/lib/site-data";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
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

  if (sent) {
    return (
      <div className="panel p-8">
        <LiveBorder />
        <p className="eyebrow">Received</p>
        <h3 className="mt-3 text-2xl">Thank you — we'll be in touch.</h3>
        <p className="mt-3 text-muted">
          Prefer email? Write us at{" "}
          <a className="text-moss-ink underline-offset-4 hover:underline" href="mailto:info@greenstonesolutions.net">
            info@greenstonesolutions.net
          </a>
          .
        </p>
        <button type="button" className="btn btn-ghost mt-6" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="panel grid gap-5 p-6 sm:p-8" onSubmit={onSubmit} noValidate>
      <LiveBorder />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required placeholder="Jordan Lee" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" autoComplete="organization" placeholder="Acme Inc." />
        </div>
        <div className="field">
          <label htmlFor="service">Service interest</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Project notes</label>
        <textarea id="message" name="message" required placeholder="What are you building?" />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
