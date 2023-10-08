import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { MainLayout } from '@/components/MainLayout';

const mapropeFont = Manrope({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '600', '500'],
});

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
      <body
        className={`${mapropeFont.className} bg-slate-50 min-h-screen`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
