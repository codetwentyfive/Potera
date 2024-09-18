import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Hausreinigung',
    description: 'Halten Sie Ihr Zuhause mit unseren professionellen Hausreinigungsdiensten makellos.',
    icon: '/icons/house-cleaning.svg',
  },
  {
    title: 'Büroreinigung',
    description: 'Erhalten Sie eine saubere und produktive Arbeitsumgebung mit unserer Büroreinigung.',
    icon: '/icons/office-cleaning.svg',
  },
  {
    title: 'Nach der Party Reinigung',
    description: 'Lassen Sie uns das Chaos nach Ihrer Veranstaltung beseitigen, damit Sie sich entspannen können.',
    icon: '/icons/after-party.svg',
  },
  {
    title: 'Wäscheservice',
    description: 'Wir bieten bequeme Wäscheservices, um Ihnen Zeit zu sparen.',
    icon: '/icons/laundry-service.svg',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-12 section">
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Unsere Dienstleistungen</h2>
        <div className="flex flex-wrap -mx-4 justify-center">
          {services.map((service) => (
            <div key={service.title} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4">
                    <Image src={service.icon} alt={service.title} width={48} height={48} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="mb-6 text-white">{service.description}</p>
                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-secondary bg-white text-blue-600">
                  Mehr erfahren
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
