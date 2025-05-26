import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const geistSans = GeistSans({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const geistMono = GeistMono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});
