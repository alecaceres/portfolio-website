import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function RootPage() {
  const acceptLanguage = headers().get('accept-language') ?? '';
  const lang = acceptLanguage.split(',')[0]?.split(';')[0]?.split('-')[0] ?? 'en';
  const locale = ['en', 'es', 'de'].includes(lang) ? lang : 'en';
  redirect(`/${locale}`);
}
