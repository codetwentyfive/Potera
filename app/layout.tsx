import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Potera Reinigungsdienste',
  description: 'Professional cleaning services',
  icons: {
    icon: '/images/logo.svg',
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
