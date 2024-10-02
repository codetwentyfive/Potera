import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
        <section id="hero"className="relative flex items-center justify-center py-16 pt-18">
      {/* Background Image */}
      <div className="absolute inset-0  ">
        <div className="absolute inset-0 bg-[#45b0e5] "></div>
      </div>
      {/* Content */}
      <div className="container mx-auto relative  flex flex-col md:flex-row items-center justify-center px-4">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left p-4 space-y-6 animate-slide-in-left">
          <h1 className="headline text-4xl md:text-5xl font-bold  text-white leading-tight ">
            Über 25 Jahre Erfahrung im Reinigungs<br className="md:hidden"  />service {/* Added line break for smaller screens */}
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Wir bieten professionelle Reinigungsdienste für Ihr Zuhause und Büro mit Fokus auf Qualität und Kundenzufriedenheit.
          </p>
          <div className="flex justify-center  md:justify-start space-x-4">
            <Link href="/contact" className="btn btn-primary">
              Jetzt Buchen
            </Link>
            <Link href="/#services" className="btn btn-secondary bg-white">
              Dienstleistungen Ansehen
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0  flex justify-center items-center md:ml-2 animate-slide-in-right">
          <Image
            src="/images/cleaning-team.png"
            alt="Cleaning Team"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
