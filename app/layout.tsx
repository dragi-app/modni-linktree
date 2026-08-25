import type { Metadata } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'MODNI FLOW — Links',
  description: 'Усі офіційні посилання MODNI FLOW в одному місці.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'HUSTLE with modni.',
    description: 'Усі офіційні посилання MODNI FLOW в одному місці.',
    images: [{ url: `${siteUrl}/og.jpg`, width: 1200, height: 630, alt: 'HUSTLE with modni.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HUSTLE with modni.',
    description: 'Усі офіційні посилання MODNI FLOW в одному місці.',
    images: [`${siteUrl}/og.jpg`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
