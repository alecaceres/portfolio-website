import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import 'remixicon/fonts/remixicon.css';
import "@/globals.css";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const title = "Alejandro Caceres | Fullstack Engineer";
const description = "Alejandro Caceres: Lead Fullstack Engineer with 7+ years experience. Expert in React, Vue, Next.js, Django, Python, TypeScript. Fluent in English, Spanish, German.";

const ogLocale: Record<string, string> = {
  en: "en_US",
  es: "es_ES",
  de: "de_DE",
};

const keywords = [
  "Alejandro Caceres",
  "fullstack engineer",
  "fullstack developer",
  "React developer",
  "Vue developer",
  "Django developer",
  "Python developer",
  "TypeScript",
  "Next.js",
  "AWS",
  "AWS Cloud Practitioner",
  "Terraform",
  "software engineer",
  "data science",
  "machine learning",
  "AI engineer",
  "LangGraph",
  "CrewAI",
  "hire fullstack engineer",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const base = baseUrl || "http://localhost:3000";
  const currentOgLocale = ogLocale[locale] ?? "en_US";
  const alternateOgLocales = Object.values(ogLocale).filter((l) => l !== currentOgLocale);

  return {
    metadataBase: new URL(base),
    title,
    description,
    keywords,
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        en: `${base}/en`,
        es: `${base}/es`,
        de: `${base}/de`,
        "x-default": `${base}/en`,
      },
    },
    openGraph: {
      type: "profile",
      url: `${base}/${locale}`,
      title,
      description,
      siteName: "Alejandro Caceres Portfolio",
      locale: currentOgLocale,
      alternateLocale: alternateOgLocales,
      images: [{ url: `${base}/images/profile.jpeg`, width: 300, height: 300, alt: "Alejandro Caceres" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [`${base}/images/profile.jpeg`],
    },
  };
}

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
      "Django", "Tailwind CSS", "Docker", "AWS", "Terraform",
      "Data Science", "Machine Learning",
      "OpenAI Agents SDK", "CrewAI", "LangGraph", "Autogen",
    ],
    "knowsLanguage": ["English", "Spanish", "German"],
    "worksFor": {
      "@type": "Organization",
      "name": "Social Currant",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
