/**
 * Shop Score – Dummy data (no backend)
 * Score range: 0–1000
 * 800–1000: Trusted (green) | 500–799: Normal (orange) | 0–499: Risk (red)
 */

const USERS = [
  { username: 'ravi',  password: '1234', score: 850, orders: 45, cancellations: 2,  codFailures: 0, returnRate: 4,  loyaltyScore: 92 },
  { username: 'raju',  password: '1234', score: 650, orders: 28, cancellations: 5,  codFailures: 2, returnRate: 12, loyaltyScore: 68 },
  { username: 'anil',  password: '1234', score: 380, orders: 12, cancellations: 8,  codFailures: 4, returnRate: 25, loyaltyScore: 35 },
  { username: 'sita',  password: '1234', score: 920, orders: 78, cancellations: 1,  codFailures: 0, returnRate: 2,  loyaltyScore: 98 },
  { username: 'kiran', password: '1234', score: 540, orders: 22, cancellations: 6,  codFailures: 3, returnRate: 18, loyaltyScore: 52 },
];

const ADMINS = [
  { username: 'flipkart', password: 'admin123', companyName: 'Flipkart' },
  { username: 'amazon',   password: 'admin123', companyName: 'Amazon' },
  { username: 'meesho',  password: 'admin123', companyName: 'Meesho' },
];

/** Platform-level stats for admin dashboard (analysis report values) */
const PLATFORM_STATS = {
  totalCustomers: 1235,
  highRiskCustomers: 284,
  averageShopScore: 72,
  totalOrders: 45600,
};
/** Shop Score overview pie: High / Medium / Low (percent) */
const PIE_DISTRIBUTION = { high: 45.2, medium: 31.5, low: 23.3 };

/** System status modules */
const SYSTEM_MODULES = [
  { name: 'Data Collection Module', status: 'active' },
  { name: 'Analysis & Scoring Engine', status: 'active' },
  { name: 'Recommendation Engine', status: 'active' },
  { name: 'Integration/API Module', status: 'active' },
];

/** Activity log for admin dashboard */
const ACTIVITY_LOG = [
  { time: '2 min ago', message: 'Policy updated: COD threshold for new users' },
  { time: '15 min ago', message: 'Customer status changed: Amit Desai → Risk review' },
  { time: '1 hour ago', message: 'Score recalculation completed for 1,235 customers' },
  { time: '2 hours ago', message: 'Risk alert: 12 customers moved to High Risk tier' },
  { time: 'Yesterday', message: 'Recommendation engine v2.1 deployed' },
];

/** Customers list for admin dashboard (with Customer ID) */
const CUSTOMERS = [
  { id: 'CUS001', name: 'Ravi',   score: 850, orders: 45, cancellations: 2,  codFailures: 0 },
  { id: 'CUS002', name: 'Raju',   score: 650, orders: 28, cancellations: 5,  codFailures: 2 },
  { id: 'CUS003', name: 'Anil',   score: 380, orders: 12, cancellations: 8,  codFailures: 4 },
  { id: 'CUS004', name: 'Sita',   score: 920, orders: 78, cancellations: 1,  codFailures: 0 },
  { id: 'CUS005', name: 'Kiran',  score: 540, orders: 22, cancellations: 6,  codFailures: 3 },
  { id: 'CUS006', name: 'Priya',  score: 780, orders: 56, cancellations: 3,  codFailures: 1 },
  { id: 'CUS007', name: 'Vikram', score: 410, orders: 15, cancellations: 7,  codFailures: 5 },
  { id: 'CUS008', name: 'Neha',   score: 890, orders: 62, cancellations: 2,  codFailures: 0 },
  { id: 'CUS009', name: 'Arun',   score: 720, orders: 34, cancellations: 4,  codFailures: 1 },
  { id: 'CUS010', name: 'Kavita', score: 290, orders: 8,  cancellations: 6,  codFailures: 4 },
];

/** Order history per user (product, date, price, status) */
const ORDER_HISTORY_BY_USER = {
  ravi:  [
    { product: 'Wireless Earbuds Pro', date: '2025-02-10', price: '₹2,499', status: 'Delivered' },
    { product: 'Smart Watch Series 5', date: '2025-02-05', price: '₹4,999', status: 'Delivered' },
    { product: 'USB-C Hub', date: '2025-01-28', price: '₹1,299', status: 'Delivered' },
    { product: 'Running Shoes', date: '2025-01-15', price: '₹3,499', status: 'Returned' },
    { product: 'Backpack', date: '2025-01-02', price: '₹1,899', status: 'In Transit' },
  ],
  raju:  [
    { product: 'Bluetooth Speaker', date: '2025-02-08', price: '₹1,799', status: 'Delivered' },
    { product: 'Phone Stand', date: '2025-01-20', price: '₹399', status: 'Delivered' },
    { product: 'Power Bank', date: '2025-01-12', price: '₹999', status: 'Returned' },
  ],
  anil:  [
    { product: 'LED Desk Lamp', date: '2025-02-01', price: '₹649', status: 'Delivered' },
    { product: 'Mouse Pad', date: '2025-01-18', price: '₹299', status: 'Cancelled' },
  ],
  sita:  [
    { product: 'Laptop Sleeve', date: '2025-02-12', price: '₹899', status: 'In Transit' },
    { product: 'Mechanical Keyboard', date: '2025-02-06', price: '₹5,499', status: 'Delivered' },
    { product: 'Monitor Arm', date: '2025-01-25', price: '₹2,199', status: 'Delivered' },
    { product: 'Webcam HD', date: '2025-01-10', price: '₹3,299', status: 'Delivered' },
  ],
  kiran: [
    { product: 'Headphones', date: '2025-02-09', price: '₹2,199', status: 'Delivered' },
    { product: 'Tablet Case', date: '2025-01-22', price: '₹599', status: 'Returned' },
    { product: 'Screen Guard', date: '2025-01-08', price: '₹349', status: 'Delivered' },
  ],
};

/** Savings (₹) per user for Savings & Offers section */
const SAVINGS_BY_USER = { ravi: 2950, raju: 1200, anil: 0, sita: 4100, kiran: 850 };

function getScoreTier(score) {
  if (score >= 800) return 'trusted';
  if (score >= 500) return 'normal';
  return 'risk';
}

function getScoreTierLabel(score) {
  if (score >= 800) return 'Trusted Customer';
  if (score >= 500) return 'Normal Customer';
  return 'Risk Customer';
}
