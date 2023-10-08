import { Mali } from 'next/font/google';
import { Manrope } from 'next/font/google';

export const maliFont = Mali({ subsets: ['latin'], weight: ['500'] });

export const manropeFont = Manrope({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '600', '500'],
});
