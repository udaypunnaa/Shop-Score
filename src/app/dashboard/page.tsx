"use client";

import { ScoreMeter } from "@/components/ScoreMeter";
import { mockUser } from "@/lib/mockData";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const breakdownData = [
  { name: "Successful orders %", value: mockUser.stats.successfulOrdersPct, color: "#22c55e" },
  { name: "Return rate", value: mockUser.stats.returnRate, color: "#ef4444" },
  { name: "Cancellation rate", value: mockUser.stats.cancellationRate, color: "#eab308" },
  { name: "Payment reliability", value: mockUser.stats.paymentReliability, color: "#3b82f6" },
];

const statusColor: Record<string, string> = {
  delivered: "bg-green-100 text-green-800",
  in_transit: "bg-amber-100 text-amber-800",
  returned: "bg-red-100 text-red-800",
};

const statusLabel: Record<string, string> = {
  delivered: "Delivered",
  in_transit: "In transit",
  returned: "Returned",
};

export default function UserDashboardPage() {
  const user = mockUser;

  return (
    <div className="space-y-8">
      {/* Welcome + Score */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary-600">
              {user.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
              <p className="text-slate-600">{user.tier}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <ScoreMeter score={user.score} size="lg" />
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Highly Trusted Buyer
            </span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-slate-800">Your benefits</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {user.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                ✓
              </span>
              <span className="font-medium text-slate-800">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Score breakdown */}
        <section className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-800">Score breakdown</h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="h-48 w-48 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={breakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {breakdownData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => `${v}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3">
              {[
                { label: "Successful orders", value: user.stats.successfulOrdersPct, color: "bg-green-500" },
                { label: "Return rate", value: user.stats.returnRate, color: "bg-red-500" },
                { label: "Cancellation rate", value: user.stats.cancellationRate, color: "bg-amber-500" },
                { label: "Payment reliability", value: user.stats.paymentReliability, color: "bg-blue-500" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">{s.label}</span>
                    <span className="font-medium text-slate-800">{s.value}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-100">
                    <div
                      className={`h-2 rounded-full ${s.color}`}
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Savings card */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-xl bg-primary-50 p-4 text-center">
            <p className="text-sm font-medium text-primary-800">You saved</p>
            <p className="mt-1 text-3xl font-bold text-primary-700">₹{user.savings.toLocaleString()}</p>
            <p className="mt-2 text-xs text-primary-600">from good behavior & offers</p>
            <button className="mt-4 w-full rounded-lg bg-primary-600 py-2 text-sm font-medium text-white hover:bg-primary-700 transition">
              Check personalized offers
            </button>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Tips: Avoid cancellations, choose prepaid, maintain delivery success to keep your score high.
          </p>
        </section>
      </div>

      {/* Order history */}
      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">Order history</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {user.orders.map((order) => (
                <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="px-6 py-4 text-slate-800">{order.product}</td>
                  <td className="px-6 py-4 text-slate-600">{order.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">₹{order.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[order.status]}`}
                    >
                      {statusLabel[order.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center border-t border-slate-200 py-3">
          <button className="text-sm font-medium text-primary-600 hover:underline">Load more</button>
        </div>
      </section>
    </div>
  );
}
