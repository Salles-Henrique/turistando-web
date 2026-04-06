import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FavoriteProvider } from '@/contexts/FavoriteContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Turistando - Descubra e Reserve Experiências de Viagem Incríveis',
  description:
    'Explore destinos ao redor do mundo e reserve sua próxima aventura com Turistando. Encontre voos, hotéis e pacotes de viagem em um único lugar.',
  keywords: [
    'viagem',
    'reserva',
    'destinos',
    'viagens',
    'férias',
    'hotéis',
    'voos',
  ],
  authors: [{ name: 'Equipe Turistando' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://turistando.com',
    siteName: 'Turistando',
    title: 'Turistando - Descubra e Reserve Experiências de Viagem Incríveis',
    description:
      'Explore destinos ao redor do mundo e reserve sua próxima aventura.',
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <FavoriteProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </FavoriteProvider>
      </body>
    </html>
  );
}
