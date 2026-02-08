import Link from "next/link";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/dashboard" className="text-lg font-bold text-primary-600">
            Shop Score
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-slate-600 hover:text-primary-600 text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/dashboard/orders" className="text-slate-600 hover:text-primary-600 text-sm font-medium">
              Orders
            </Link>
            <Link href="/dashboard/settings" className="text-slate-600 hover:text-primary-600 text-sm font-medium">
              Settings
            </Link>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm font-medium">
              R
            </button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
