import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  navItems: { label: string; href: string }[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, isOpen, onClose }) => {
  return (
    <div
      id="mobile-menu"
      tabIndex={-1}
      className={`md:hidden bg-white fixed top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-16 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out focus:outline-none`}
    >
      <ul className="space-y-6 text-center mt-16">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300"
              onClick={onClose}
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
          onClick={onClose}
        >
          Kostenlose Schätzung
        </Link>
        <Link
          href="/book"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 w-48 block"
          onClick={onClose}
        >
          Jetzt Buchen
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;