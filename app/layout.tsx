// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Potera Cleaning Services',
  description: 'Professional cleaning services for your home and office.',
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
