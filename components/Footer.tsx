import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white mt-12">
      <div className="container mx-auto py-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Lassen Sie Ihr Zuhause reinigen. Es ist einfach und erschwinglich.
        </h2>
        <Link href="/quote" className="btn btn-secondary bg-white text-blue-600">
          Angebot einholen
        </Link>
        <div className="flex justify-center items-center space-x-4">
          <Image src="/icons/phone.svg" alt="Telefon" width={24} height={24} />
          <p className="text-xl">Rufen Sie uns an unter (123) 456-7890</p>
        </div>
      </div>
      <div className="bg-blue-700 p-2 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Potera Reinigungsdienste</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <Link href="/privacy" className="hover:text-gray-300">
                Datenschutzrichtlinie
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-300">
                Nutzungsbedingungen
              </Link>
            </li>
          </ul>
          {/* Logo in Footer */}
          <div className="mt-4 md:mt-0">
            <Image src="/icons/logo-footer.svg" alt="Potera" width={60} height={50} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
