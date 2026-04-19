import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import 'remixicon/fonts/remixicon.css'
import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const title = "Alejandro Caceres | Fullstack Engineer";
const description = "Alejandro Caceres: Lead Fullstack Engineer with 7+ years experience. Expert in React, Vue, Next.js, Django, Python, TypeScript. Fluent in English, Spanish, German.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  keywords: [
    "Alejandro Caceres",
    "fullstack engineer",
    "fullstack developer",
    "React developer",
    "Vue developer",
    "Django developer",
    "Python developer",
    "TypeScript",
    "Next.js",
    "software engineer",
    "data science",
    "machine learning",
    "hire fullstack engineer",
  ],
  openGraph: {
    type: "profile",
    url: baseUrl,
    title,
    description,
    siteName: "Alejandro Caceres Portfolio",
    images: [{ url: `${baseUrl}/images/profile.jpeg`, width: 300, height: 300, alt: "Alejandro Caceres" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [`${baseUrl}/images/profile.jpeg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Alejandro Caceres",
    "jobTitle": "Lead Fullstack Engineer",
    "description": description,
    "email": "aleda997@gmail.com",
    "url": baseUrl,
    "sameAs": [
      "https://github.com/alecaceres",
      "https://www.linkedin.com/in/caceresale/",
    ],
    "knowsAbout": [
      "React", "Vue", "Next.js", "Nuxt", "TypeScript", "Python",
      "Django", "Tailwind CSS", "Docker", "Data Science", "Machine Learning",
    ],
    "knowsLanguage": ["English", "Spanish", "German"],
    "worksFor": {
      "@type": "Organization",
      "name": "Social Currant",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
