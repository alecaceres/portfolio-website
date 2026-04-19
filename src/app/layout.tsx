import type { ReactNode } from 'react';

// Minimal root layout — only wraps the root redirect page.
// Full html/body structure is provided by app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children as never;
}
