import React from 'react';
import { PhoneIcon, MailIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex items-end justify-end space-x-4 text-sm">
      <a className="flex items-center text-gray-700 hover:text-blue-600" href="tel:+4917632747881">
        <Image src="/icons/mobile-red.svg" alt="Mobile" width={16} height={16} className="mr-1"  />
        +49 176 3274 7881
      </a>
      <a className="flex items-center text-gray-700 hover:text-blue-600" href="tel:+4992213950562">
        <PhoneIcon className="h-4 w-4 mr-1 text-red-500" />
        +49 9221 39 50562
      </a>
      <a className="flex items-center text-gray-700 hover:text-blue-600" href="mailto:kontakt@poterareinigung.de">
        <MailIcon className="h-4 w-4 mr-1 text-red-500" />
        kontakt@poterareinigung.de
      </a>
    </div>
  );
};

export default ContactInfo;