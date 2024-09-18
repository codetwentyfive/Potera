"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { label: 'Startseite', href: '/#hero' },
    { label: 'Über uns', href: '/#about' },
    { label: 'Dienstleistungen', href: '/#services' },
    // { label: 'FAQs', href: '/faqs' },
    // { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
      // Trap focus within the mobile menu
      mobileMenuRef.current?.focus();
    } else {
      document.body.classList.remove('overflow-hidden');
      // Return focus to the hamburger button
      hamburgerButtonRef.current?.focus();
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !hamburgerButtonRef.current?.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow fixed w-full z-50">
      <nav className="container mx-auto py-2 px-4">
        <div className="flex items-center justify-between">
          {/* Left Section: Hamburger Menu on Mobile, Logo on Desktop */}
          <div className="flex items-center">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              ref={hamburgerButtonRef}
              className="md:hidden flex flex-col justify-between w-6 h-6 cursor-pointer group focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {/* Bar 1 */}
              <span
                className={`h-1 w-full bg-gray-700 rounded-lg transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              {/* Bar 2 */}
              <span
                className={`h-1 w-full bg-gray-700 rounded-lg transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              {/* Bar 3 */}
              <span
                className={`h-1 w-full bg-gray-700 rounded-lg transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </button>

            {/* Logo for Desktop */}
            <Link href="/#hero" className="hidden md:flex items-center ml-4">
              <Image
                src="/images/logo.svg"
                alt="Potera"
                width={80}
                height={80}
              />
            </Link>
          </div>

          {/* Center Section: Logo on Mobile */}
          <div className="flex-1 flex justify-center md:hidden pr-5">
            <Link href="/#hero" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Potera"
                width={60}
                height={60}
              />
            </Link>
          </div>

          {/* Right Section: Navigation on Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Call-to-Action Buttons */}
            <div className="flex space-x-4">
              <Link
                href="/estimate"
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
              >
                Kostenlose Schätzung
              </Link>
              <Link
                href="/book"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Jetzt Buchen
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          tabIndex={-1}
          className={`md:hidden bg-white fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-start pt-16 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out focus:outline-none`}
        >
          <ul className="space-y-6 text-center mt-16">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4 text-center">
            <Link
              href="/estimate"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300 w-48 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kostenlose Schätzung
            </Link>
            <Link
              href="/book"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 w-48 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Jetzt Buchen
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;