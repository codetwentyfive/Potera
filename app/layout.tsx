import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import './lib/fontawesome';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Prevent Font Awesome from automatically adding CSS
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Potera Reinigungsdienste',
  description: 'Professionelle Reinigungsdienste in der Nähe von Bamberg und Umgebung',
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
    <html lang="de">
      <body>
        <Header />
        <main className="container mx-auto px-4 pt-20" aria-label="Main Content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
