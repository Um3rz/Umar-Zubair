import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Umar Zubair — AI Product Manager",
  description: "Product thinking at the intersection of AI, infrastructure, and user research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
