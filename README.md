# Shop Score

Trust-based scoring system for e-commerce buyers. Score (0–1000) based on returns, cancellations, payment reliability, and delivery success.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (Hero, Problem, Solution, Architecture) |
| `/login` | Admin login (placeholder) |
| `/dashboard` | User dashboard (score, benefits, breakdown, orders, savings) |
| `/dashboard/orders` | User order history |
| `/dashboard/settings` | User settings |
| `/admin/dashboard` | Admin dashboard (overview, customer table, analytics) |
| `/admin/customers` | Customers |
| `/admin/risk-users` | Risk users |
| `/admin/orders` | Orders |
| `/admin/reports` | Reports |
| `/admin/settings` | Admin settings |

## Score tiers

- **800–1000** — Highly Trusted (Premium)
- **600–799** — Trusted (Good)
- **400–599** — Moderate (Average)
- **200–399** — Risky
- **0–199** — Very Risky (Restrict)

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts

## Future

- AI risk prediction
- Real-time scoring
- Multi-platform integration
- API for marketplaces
