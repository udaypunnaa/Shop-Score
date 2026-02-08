import { mockUser } from "@/lib/mockData";

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

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">Orders</h1>
      <p className="mt-1 text-slate-600">View and track your order history</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-slate-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockUser.orders.map((order) => (
              <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                <td className="px-6 py-4 font-mono text-sm text-slate-600">{order.id}</td>
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
        <div className="flex justify-center border-t border-slate-200 py-3">
          <button className="text-sm font-medium text-primary-600 hover:underline">Load more</button>
        </div>
      </div>
    </div>
  );
}
