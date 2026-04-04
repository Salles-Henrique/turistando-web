import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Turistando - Discover & Book Amazing Travel Experiences',
  description:
    'Explore destinations around the world and book your next adventure with Turistando. Find flights, hotels, and travel packages all in one place.',
  keywords: [
    'travel',
    'booking',
    'destinations',
    'trips',
    'vacations',
    'hotels',
    'flights',
  ],
  authors: [{ name: 'Turistando Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://turistando.com',
    siteName: 'Turistando',
    title: 'Turistando - Discover & Book Amazing Travel Experiences',
    description:
      'Explore destinations around the world and book your next adventure.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
