import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex items-end justify-end space-x-4 text-sm">
      <a className="flex items-center text-gray-700 hover:text-blue-600" href="tel:+4917632747881" aria-label="Mobile phone number">
        <Image src="/icons/mobile-red.svg" alt="" width={16} height={16} className="mr-1" aria-hidden="true" />
        +49 176 3274 7881
      </a>
      <a className="flex items-center text-gray-700 hover:text-blue-600" href="tel:+4992213950562" aria-label="Landline phone number">
        <PhoneIcon className="h-4 w-4 mr-1 text-red-500" aria-hidden="true" />
        +49 9221 39 50562
      </a>
      <a className="flex items-center text-gray-700 hover:text-blue-600" href="mailto:kontakt@poterareinigung.de" aria-label="Email address">
        <EnvelopeIcon className="h-4 w-4 mr-1 text-red-500" aria-hidden="true" />
        kontakt@poterareinigung.de
      </a>
    </div>
  );
};

export default ContactInfo;