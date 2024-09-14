import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="section bg-light-gray py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/images/about-us.webp" alt="Über uns" width={500} height={400} className="rounded-lg shadow-lg" />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 space-y-6 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center">Wir sind anders in der Reinigungsbranche</h2>
          <p className="text-center">
            Bei Potera glauben wir daran, erstklassige Reinigungsdienste mit einer persönlichen Note zu liefern.<br /> Unser Team ist bestrebt, Ihre Räume zum Strahlen zu bringen und gleichzeitig die Kundenzufriedenheit zu gewährleisten.
          </p>
          <ul className="space-y-4 flex flex-col">
            <li className="flex items-center">
              <Image src="/icons/check.svg" alt="Check" width={24} height={24} className="mr-2" />
              100% Zufriedenheit
            </li>
            <li className="flex items-center">
              <Image src="/icons/check.svg" alt="Check" width={24} height={24} className="mr-2" />
              Versichert und gebunden
            </li>
            <li className="flex items-center">
              <Image src="/icons/check.svg" alt="Check" width={24} height={24} className="mr-2" />
              Qualitätsdienste
            </li>
          </ul>
          <Link href="/about" className="btn btn-secondary">
            Mehr erfahren
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
