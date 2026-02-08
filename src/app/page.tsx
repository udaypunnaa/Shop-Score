import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <span className="text-xl font-bold tracking-tight text-primary-600">Shop Score</span>
          <nav className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-slate-600 hover:text-primary-600 transition"
            >
              Admin login
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition"
            >
              User demo
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Shop Score System
          </h1>
          <p className="mt-4 text-lg text-primary-100 sm:text-xl">
            Trust-based scoring for e-commerce buyers. Reduce losses, reward genuine customers, improve delivery success.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/login"
              className="rounded-xl border-2 border-white/80 bg-white/10 px-6 py-3 font-medium backdrop-blur hover:bg-white/20 transition"
            >
              Admin login
            </Link>
            <Link
              href="/dashboard"
              className="rounded-xl bg-white px-6 py-3 font-medium text-primary-700 hover:bg-primary-50 transition"
            >
              User demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-slate-200 bg-slate-50/50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-slate-800">
            The problem
          </h2>
          <p className="mt-4 text-center text-slate-600">
            E-commerce faces return losses, fake orders, and COD misuse — hurting margins and operations.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-2xl">📦</div>
              <h3 className="mt-2 font-semibold text-slate-800">Return losses</h3>
              <p className="mt-1 text-sm text-slate-600">High return rates erode profitability and strain logistics.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-2xl">🚫</div>
              <h3 className="mt-2 font-semibold text-slate-800">Fake orders</h3>
              <p className="mt-1 text-sm text-slate-600">Fraud and abuse increase costs and block real demand.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-2xl">💸</div>
              <h3 className="mt-2 font-semibold text-slate-800">COD misuse</h3>
              <p className="mt-1 text-sm text-slate-600">Cash on delivery refusals and defaults hurt cash flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-slate-800">
            The solution: Shop Score
          </h2>
          <p className="mt-4 text-center text-slate-600">
            A 0–1000 trust score based on returns, cancellations, payment reliability, and delivery success. Use it to reward good buyers and restrict risky ones.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { range: "800–1000", label: "Highly Trusted", color: "bg-green-500" },
              { range: "600–799", label: "Trusted", color: "bg-green-400" },
              { range: "400–599", label: "Moderate", color: "bg-amber-400" },
              { range: "200–399", label: "Risky", color: "bg-orange-500" },
              { range: "0–199", label: "Very Risky", color: "bg-red-500" },
            ].map((t) => (
              <div
                key={t.range}
                className={`rounded-lg px-4 py-2 text-sm font-medium text-white ${t.color}`}
              >
                {t.range} — {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-slate-200 bg-slate-50/50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-slate-800">
            How it works
          </h2>
          <p className="mt-4 text-center text-slate-600">
            Data → Processing → Score → Decision → Benefits
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <span className="rounded-lg bg-primary-100 px-4 py-2 text-primary-800">Data</span>
            <span className="text-slate-400">→</span>
            <span className="rounded-lg bg-primary-100 px-4 py-2 text-primary-800">Processing</span>
            <span className="text-slate-400">→</span>
            <span className="rounded-lg bg-primary-100 px-4 py-2 text-primary-800">Score</span>
            <span className="text-slate-400">→</span>
            <span className="rounded-lg bg-primary-100 px-4 py-2 text-primary-800">Decision</span>
            <span className="text-slate-400">→</span>
            <span className="rounded-lg bg-primary-100 px-4 py-2 text-primary-800">Benefits</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500">
        Shop Score — Trust-based scoring for e-commerce
      </footer>
    </div>
  );
}
