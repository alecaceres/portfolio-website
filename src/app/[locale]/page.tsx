import { setRequestLocale } from 'next-intl/server';
import GradientSpot from "@/components/GradientSpot";
import { About, Education, Experience, Hero, Navbar, Technologies, Projects, ContactForm, Footer } from "@/sections";
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col">
      <GradientSpot />
      <Navbar />
      <div className="flex flex-col container mt-24 mx-auto px-6 md:px-10 lg:px-12 py-4 relative gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24">
        <Hero />
        <Technologies />
        <About />
        <Experience />
        <Education />
        <Projects />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
