import './globals.css';
import type { Metadata } from 'next';

import { MainLayout } from '@/components/MainLayout';
import { manropeFont } from '@/constants/fonts';

export const metadata: Metadata = {
  title: 'Annibuliful',
  description: 'About Annibuliful Journey',
  authors: {
    url: 'https://twitter.com/annibuliful',
    name: 'Annibuliful',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manropeFont.className} bg-slate-50`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
