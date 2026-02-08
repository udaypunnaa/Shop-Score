"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">Admin login</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to the Shop Score admin panel</p>
        </div>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/admin/dashboard");
          }}
        >
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="admin@company.com"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-800 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary-600 py-2.5 font-medium text-white hover:bg-primary-700 transition"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-500">
          Demo: use any email/password to proceed to admin dashboard.
        </p>
        <Link
          href="/admin/dashboard"
          className="mt-4 block text-center text-sm text-primary-600 hover:underline"
        >
          Skip to Admin Dashboard →
        </Link>
      </div>
      <Link href="/" className="mt-6 text-sm text-slate-500 hover:text-slate-700">
        ← Back to home
      </Link>
    </div>
  );
}
