import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop Score – Trust Based Scoring for E-Commerce",
  description: "Trust-based scoring system for e-commerce buyers. Reduce returns, reward genuine customers, improve delivery success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
