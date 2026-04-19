"use client";
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'de', label: 'DE' },
];

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-0.5">
      {locales.map(({ code, label }, i) => (
        <span key={code} className="flex items-center">
          <button
            onClick={() => router.replace(pathname, { locale: code })}
            className={`px-1.5 py-1 text-sm font-medium transition-colors ${
              locale === code ? 'text-white' : 'text-[#ADB7BE] hover:text-white'
            }`}
            aria-label={`Switch to ${label}`}
          >
            {label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-[#33353F] select-none">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
