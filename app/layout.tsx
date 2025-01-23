import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import './lib/fontawesome';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JsonLd from './components/JsonLd';
import {Montserrat, Open_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

// Initialize fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

// Prevent Font Awesome from automatically adding CSS
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.poterareinigung.de'),
  title: 'Potera Reinigungsdienste | Professionelle Reinigung in Kulmbach & Umgebung',
  description: 'Ihr zuverlässiger Reinigungsservice in Kulmbach, Bayreuth und Umgebung. Professionelle Gebäudereinigung, Büroreinigung und Haushaltsreinigung mit über 10 Jahren Erfahrung. Tätig in Neuenmarkt, Burgkunstadt, Lichtenfels, Kronach und weiteren Standorten.',
  keywords: [
    'Reinigungsdienst Kulmbach',
    'Gebäudereinigung Bayreuth',
    'Reinigungsservice Oberfranken',
    'Büroreinigung Kulmbach',
    'Hausreinigung Bayreuth',
    'Reinigungsfirma Kulmbach',
    'Unterhaltsreinigung Oberfranken',
    'Grundreinigung Kulmbach',
    'Fensterreinigung Bayreuth',
    'Teppichreinigung Oberfranken',
    'Gebäudereinigung Neuenmarkt',
    'Reinigungsfirma Burgkunstadt',
    'Reinigungsservice Lichtenfels',
    'Gebäudereinigung Kronach',
    'Büroreinigung Neuenmarkt',
    'Hausreinigung Burgkunstadt',
    'Unterhaltsreinigung Lichtenfels',
    'Reinigungsdienst Kronach'
  ],
  openGraph: {
    title: 'Potera Reinigungsdienste | Professionelle Reinigung in Kulmbach',
    description: 'Professionelle Reinigungsdienstleistungen in Kulmbach, Bayreuth, Neuenmarkt, Burgkunstadt, Lichtenfels, Kronach und Umgebung. Qualität und Zuverlässigkeit seit über 10 Jahren.',
    locale: 'de_DE',
    type: 'website',
    siteName: 'Potera Reinigungsdienste',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Potera Reinigungsdienste - Professionelle Reinigung in Kulmbach und Umgebung',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.poterareinigung.de',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      {
        url: '/images/logo.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    apple: {
      url: '/images/logo.svg',
      type: 'image/svg+xml',
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="de" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="Kulmbach" />
        <meta name="geo.position" content="50.1020;11.4478" />
        <meta name="ICBM" content="50.1020, 11.4478" />
      </head>
      <body>
        <JsonLd />
        <Header />
        <main className="container mx-auto px-4 pt-20" aria-label="Main Content">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
