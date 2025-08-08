import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Lusitana } from 'next/font/google';
export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
export const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['400', '500', '700'],
});
export const lusitana = Lusitana({
    subsets: ['latin'],
    variable: '--font-lusitana',
    weight: ['400', '700'],
})