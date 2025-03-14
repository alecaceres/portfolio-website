import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import 'remixicon/fonts/remixicon.css'
import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Alejandro Caceres",
  description: "Alejandro Caceres: Fullstack Engineer with 6+ years experience. Expert in React, Vue, Django, data science, ML. Fluent in English, Spanish, German.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
