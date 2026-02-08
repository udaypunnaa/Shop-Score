"use client";

import { ScoreMeter } from "@/components/ScoreMeter";
import {
  mockAdminOverview,
  mockCustomers,
  mockActivityLog,
  getTierColor,
} from "@/lib/mockData";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const distributionData = [
  { name: "High trust", value: 62, color: "#22c55e" },
  { name: "Medium", value: 28, color: "#eab308" },
  { name: "Risky", value: 10, color: "#ef4444" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-600">Monitor users and platform metrics</p>
      </div>

      {/* Overview cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Users</p>
          <p className="mt-1 text-2xl font-bold text-slate-800">
            {mockAdminOverview.totalUsers.toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-green-600">↑ Platform size</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">High Risk Users</p>
          <p className="mt-1 text-2xl font-bold text-red-600">
            {mockAdminOverview.highRiskUsers}
          </p>
          <p className="mt-1 text-xs text-slate-500">Require attention</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Avg Score</p>
          <p className="mt-1 text-2xl font-bold text-slate-800">
            {mockAdminOverview.avgScore}
          </p>
          <p className="mt-1 text-xs text-slate-500">Overall trust</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Orders</p>
          <p className="mt-1 text-2xl font-bold text-slate-800">
            {mockAdminOverview.totalOrders.toLocaleString()}
          </p>
          <p className="mt-1 text-xs text-slate-500">Activity</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Customer table */}
        <div className="lg:col-span-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-semibold text-slate-800">Customers</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-500">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-500">Orders</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-500">Returns</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-500">Cancels</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-500">Score</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-500">Tier</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase text-slate-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockCustomers.map((c) => (
                  <tr key={c.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600">
                          {c.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{c.name}</p>
                          <p className="text-xs text-slate-500">{c.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{c.orders}</td>
                    <td className="px-4 py-3 text-slate-700">{c.returns}</td>
                    <td className="px-4 py-3 text-slate-700">{c.cancellations}</td>
                    <td className="px-4 py-3">
                      <ScoreMeter score={c.score} size="sm" showLabel={true} />
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${getTierColor(c.score)}`}>
                        {c.tier}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        <button className="rounded bg-primary-100 px-2 py-1 text-xs font-medium text-primary-700 hover:bg-primary-200">
                          View
                        </button>
                        {c.tier === "Risk" && (
                          <>
                            <button className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-200">
                              Block COD
                            </button>
                            <button className="rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 hover:bg-amber-200">
                              Mark risky
                            </button>
                          </>
                        )}
                        {c.tier === "High" && (
                          <button className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-200">
                            Reward
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right panel: Pie + Status + Activity */}
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-800">User distribution</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {distributionData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-800">System status</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-green-600">
                <span>✔</span> Data collection active
              </li>
              <li className="flex items-center gap-2 text-green-600">
                <span>✔</span> Scoring engine running
              </li>
              <li className="flex items-center gap-2 text-green-600">
                <span>✔</span> AI detection active
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-4 font-semibold text-slate-800">Activity log</h3>
            <ul className="space-y-3 text-sm">
              {mockActivityLog.map((log, i) => (
                <li key={i} className="flex justify-between gap-2 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-slate-600">{log.action}</span>
                  <span className="shrink-0 text-slate-400">{log.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
