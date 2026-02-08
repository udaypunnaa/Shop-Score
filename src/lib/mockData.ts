export const SCORE_TIERS = [
  { min: 800, max: 1000, label: "Highly Trusted", short: "Premium" },
  { min: 600, max: 799, label: "Trusted", short: "Good" },
  { min: 400, max: 599, label: "Moderate", short: "Average" },
  { min: 200, max: 399, label: "Risky", short: "Risky" },
  { min: 0, max: 199, label: "Very Risky", short: "Restrict" },
] as const;

export function getTier(score: number) {
  const tier = SCORE_TIERS.find((t) => score >= t.min && score <= t.max);
  return tier ?? SCORE_TIERS[SCORE_TIERS.length - 1];
}

export function getTierColor(score: number) {
  if (score >= 600) return "text-green-600 bg-green-100";
  if (score >= 400) return "text-amber-600 bg-amber-100";
  return "text-red-600 bg-red-100";
}

export const mockUser = {
  name: "Rajesh Kumar",
  score: 845,
  tier: "Highly Trusted Buyer",
  avatar: null,
  savings: 2950,
  benefits: [
    "Full discount eligibility",
    "Fast delivery priority",
    "COD available",
    "Premium offers",
  ],
  stats: {
    successfulOrdersPct: 94,
    returnRate: 4,
    cancellationRate: 2,
    paymentReliability: 98,
  },
  orders: [
    { id: "ORD-1001", product: "Wireless Headphones", date: "2025-02-05", amount: 2499, status: "delivered" },
    { id: "ORD-1002", product: "Smart Watch", date: "2025-02-01", amount: 3999, status: "in_transit" },
    { id: "ORD-1003", product: "Laptop Stand", date: "2025-01-28", amount: 899, status: "delivered" },
    { id: "ORD-1004", product: "USB-C Hub", date: "2025-01-20", amount: 1299, status: "returned" },
  ],
};

export const mockAdminOverview = {
  totalUsers: 12450,
  highRiskUsers: 312,
  avgScore: 672,
  totalOrders: 89420,
};

export const mockCustomers = [
  { id: "C001", name: "Rajesh Kumar", orders: 24, returns: 1, cancellations: 0, score: 845, tier: "High" },
  { id: "C002", name: "Priya Sharma", orders: 18, returns: 3, cancellations: 1, score: 612, tier: "Medium" },
  { id: "C003", name: "Amit Patel", orders: 8, returns: 5, cancellations: 2, score: 285, tier: "Risk" },
  { id: "C004", name: "Sneha Reddy", orders: 42, returns: 0, cancellations: 0, score: 920, tier: "High" },
  { id: "C005", name: "Vikram Singh", orders: 12, returns: 4, cancellations: 3, score: 178, tier: "Risk" },
];

export const mockActivityLog = [
  { time: "10:32 AM", action: "User C005 flagged as risky", type: "flag" },
  { time: "10:28 AM", action: "Score updated for C002", type: "score" },
  { time: "10:15 AM", action: "COD blocked for C003", type: "block" },
];
