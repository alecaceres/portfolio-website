import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alejandro Caceres",
  description: "Fullstack react, vue and django engineer with background in data science and mechatronics engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
        rel="stylesheet"
        precedence="default"
      />
    </html>
  );
}
