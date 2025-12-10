
import type { Metadata } from 'next';
import { Cinzel, Lato } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'LearnVerse - Studygram',
  description: 'Your Studygram Universe for curated educational content.',
};

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark', cinzel.variable, lato.variable)}>
      <body>
        <main className="font-body antialiased">{children}</main>
      </body>
    </html>
  );
}
