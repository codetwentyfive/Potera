import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";

const Footer: React.FC = () => {
  return (
    <footer role="contentinfo" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-12">
      <div className="container mx-auto py-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">
          Lassen Sie Ihre Flächen reinigen. Es ist einfach und erschwinglich.
        </h2>
        <Link
          href="/contact"
          className="btn btn-secondary bg-white text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-colors duration-300 inline-block"
        >
          Angebot einholen
        </Link>
        <div className="flex flex-col items-center space-y-4 text-black">
          <p className="text-xl font-bold text-white">Rufen Sie uns an unter:</p>
          <a className="flex items-center" href="tel:+4917632747881" aria-label="Mobile phone number">
            <Image src="/icons/mobile.svg" alt="" width={20} height={20} className="mr-2" aria-hidden="true" />
            +49 176 3274 7881
          </a>
          <a className="flex items-center" href="tel:+4992213950562" aria-label="Landline phone number">
            <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            +49 9221 39 50562
          </a>
          <p className="text-xl font-bold text-white">oder schreiben Sie uns eine E-Mail:</p>
          <a
            className="flex items-center"
            href="mailto:kontakt@poterareinigung.de"
            aria-label="Email address"
          >
            <MailIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            kontakt@poterareinigung.de
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-2">
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
          <div className="mt-4 md:mt-0 flex items-center">
            <Image
              src="/icons/logo-footer.svg"
              alt="Potera Logo"
              width={60}
              height={50}
            />
            <span className="ml-2 text-xs">
              Website by <a href="http://www.chingis.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Chingis Zwecker E.</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;