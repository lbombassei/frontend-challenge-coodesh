import './globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

const sourceSansPro = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real Estate Platform',
  description: 'Find your perfect property',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceSansPro.className}>{children}</body>
    </html>
  );
}