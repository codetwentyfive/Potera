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
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto px-4 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
