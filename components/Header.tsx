"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: 'Startseite', href: '/#hero' },
    { label: 'Über uns', href: '/#about' },
    { label: 'Dienstleistungen', href: '/#services' },
    // { label: 'FAQs', href: '/faqs' },
    // { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/contact' },
  ];
 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow fixed w-full z-30">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/#hero">
          <Image className="" src="/images/logo.svg" alt="Potera" width={80} height={80} />
        </Link>
        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Call-to-Action Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link href="/estimate" className="btn btn-secondary">
            Kostenlose Schätzung
          </Link>
          <Link href="/book" className="btn btn-primary">
            Jetzt Buchen
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none z-40" aria-label="Toggle menu">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden bg-white fixed top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-start pt-20 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300" onClick={toggleMobileMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4 text-center">
            <Link href="/estimate" className="btn btn-secondary w-48">
              Kostenlose Schätzung
            </Link>
            <Link href="/book" className="btn btn-primary w-48">
              Jetzt Buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};


export default Header;
