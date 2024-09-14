"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const navItems = [
    { label: 'Startseite', href: '/#hero' },
    { label: 'Über uns', href: '/#about' },
    { label: 'Dienstleistungen', href: '/#services' },
    // { label: 'FAQs', href: '/faqs' },
    // { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow fixed w-full z-10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/#hero">
          <Image src="/images/logo.svg" alt="Potera" width={80} height={80} />
        </Link>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Call-to-Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/estimate" className="btn btn-secondary">
            Kostenlose Schätzung
          </Link>
          <Link href="/book" className="btn btn-primary">
            Jetzt Buchen
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* Implement mobile menu toggle if needed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
