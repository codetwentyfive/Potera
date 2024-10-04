"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  const pictureWheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = pictureWheelRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentRef.classList.add('animate-spin-wheel');
          } else {
            currentRef.classList.remove('animate-spin-wheel');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []); // No dependencies needed

  const experiences = [
    {  company: 'Edeka' },
    {  company: 'Karstadt' },
    {  company: 'Kaufland' },
    {  company: 'Aldi' },
  ];

  return (
    <div className="container mx-auto py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 headline pl-2">Über uns</h1>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg mb-4">
              Potera ist Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen. Seit unserer Gründung haben wir uns darauf spezialisiert, hochwertige Reinigungslösungen für Unternehmen und Privathaushalte anzubieten.
            </p>
            <p className="text-lg mb-4">
              Unser engagiertes Team besteht aus erfahrenen Fachkräften, die mit modernsten Techniken und umweltfreundlichen Reinigungsmitteln arbeiten. Wir legen großen Wert auf Qualität, Zuverlässigkeit und Kundenzufriedenheit.
            </p>
            <p className="text-lg">
              Mit Potera entscheiden Sie sich für einen Partner, der Ihre individuellen Bedürfnisse versteht und maßgeschneiderte Lösungen anbietet. Lassen Sie uns gemeinsam für eine saubere und gesunde Umgebung sorgen.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div ref={pictureWheelRef} className="relative w-64 h-64">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="absolute w-24 h-24"
                  style={{
                    transform: `rotate(${(index - 1) * 90}deg) translateY(-100px)`,
                    transformOrigin: 'center center',
                  }}
                >
                  <Image
                    src={`/images/text(${index}).svg`}
                    alt={`Text ${index}`}
                    width={96} // Adjusted width
                    height={96} // Adjusted height
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 headline pl-2">Unsere Erfahrungen</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex">
              <div className="w-24 text-right mr-4">
              {/*   <span className="font-bold">{exp.year}</span> */}
              </div>
              <div className="w-px bg-blue-500 relative">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1 top-1.5"></div>
              </div>
              <div className="flex-grow pl-4">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-gray-600">
                  Erfolgreiche Zusammenarbeit und Bereitstellung von Reinigungsdienstleistungen.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8 headline pl-2">Unser Versprechen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 flex items-center">
              <Image src="/icons/check-red.svg" alt="Check" width={24} height={24} className="mr-2" />
              Erprobte und professionelle Reinigung
            </h3>
            <p className="text-gray-700">
              Wir garantieren Ihnen eine erstklassige Reinigungserfahrung. Unser Team besteht aus erfahrenen und professionellen Reinigungsexperten, die sich bemühen, Ihre Räume sauber und hygienisch zu halten.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 flex items-center">
              <Image src="/icons/check-red.svg" alt="Check" width={24} height={24} className="mr-2" />
              Qualitätsgarantie
            </h3>
            <p className="text-gray-700">
              Wir sind stolz auf unsere Arbeit und garantieren Ihnen eine Reinigung von höchster Qualität. Wenn Sie nicht zufrieden sind, arbeiten wir mit Ihnen zusammen, um sicherzustellen, dass Ihre Anforderungen erfüllt werden.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4 flex items-center">
              <Image src="/icons/check-red.svg" alt="Check" width={24} height={24} className="mr-2" />
              Verbindliche Dienstleistungen
            </h3>
            <p className="text-gray-700">
              Wir bieten Ihnen verbindliche und zuverlässige Dienstleistungen an. Unser Team ist immer pünktlich und bereit, Ihre Reinigungsbedürfnisse zu erfüllen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;