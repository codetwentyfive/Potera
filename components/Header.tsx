"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import ContactInfo from './ContactInfo';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hash, setHash] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  const navItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Über uns', href: '/about' },
    { label: 'Dienstleistungen', href: '/#services' },
    { label: 'Kontakt', href: '/contact' },
  ];

  return (
    <header role="banner" className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        {/* Contact Info (hidden on mobile) */}
        <div className="hidden md:block py-1">
          <ContactInfo />
        </div>
        
        <div className="flex justify-between items-center py-4 sm:pb-4 sm:pt-0 ">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/logo.svg"
                alt="Potera Logo"
                width={80}
                height={80}
                className="w-14 h-14 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px]"
              />
            </Link>
          </div>

          {/* Right Section: Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
            {navItems.map((item) => {
              let isActive = false;

              if (item.href === '/') {
                // "Startseite" is active only when pathname is '/' and no hash
                isActive = pathname === '/' && hash === '';
              } else if (item.href === '/#services') {
                // "Dienstleistungen" is active when pathname is '/' and hash is '#services'
                isActive = pathname === '/' && hash === '#services';
              } else {
                // Other links are active based on the pathname
                isActive = pathname === item.href;
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                    isActive ? 'text-blue-600' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {/* Underline for active and hover states */}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 
                      ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'}
                    `}
                    aria-hidden="true"
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu navItems={navItems} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};


export default Header;