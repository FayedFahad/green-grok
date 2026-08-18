import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({
    meta: [{ title: "Sign in | Greenstone Solutions" }],
  }),
});

function Login() {
  return (
    <main id="main" className="section">
      <div className="wrap grid min-h-[60vh] place-items-center">
        <div className="panel w-full max-w-md p-8">
          <span className="eyebrow">Client portal</span>
          <h1 className="mt-3 text-3xl">Sign in</h1>
          <p className="mt-2 text-sm text-muted">
            Use your Google or X account to continue. The public site stays open without signing in.
          </p>
          <div className="mt-6 space-y-3">
            {authEnabled ? (
              GROK_PROVIDERS.map((p) => (
                <button
                  key={p.providerId}
                  type="button"
                  onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                  className="btn btn-ghost w-full"
                >
                  Continue with {p.label}
                </button>
              ))
            ) : (
              <p className="text-sm text-muted">Sign-in is disabled.</p>
            )}
          </div>
          <Link to="/" className="mt-6 inline-block text-sm font-semibold text-moss-ink hover:underline">
            Back to the site
          </Link>
        </div>
      </div>
    </main>
  );
}
