
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Hausreinigung",
    slug: "hausreinigung",
    description:
      "Halten Sie Ihr Zuhause mit unseren professionellen Hausreinigungsdiensten makellos.",
    icon: "/icons/house-cleaning.svg",
  },
  {
    title: "Büroreinigung",
    slug: "bueroreinigung",
    description:
      "Erhalten Sie eine saubere und produktive Arbeitsumgebung mit unserer Büroreinigung.",
    icon: "/icons/office-cleaning.svg",
  },
  {
    title: "Fassadenreinigung",
    slug: "fassadenreinigung",
    description:
      "Reinigen und pflegen Sie die Außenflächen Ihres Gebäudes für einen erstklassigen Eindruck.",
    icon: "/icons/facade-cleaning.svg",
  },
  {
    title: "Wäscheservice",
    slug: "waescheservice",
    description: "Wir bieten bequeme Wäscheservices, um Ihnen Zeit zu sparen.",
    icon: "/icons/laundry-service.svg",
  },
];

// ServiceCard Component
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 mr-4">
            <Image
              src={service.icon}
              alt={service.title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-semibold">{service.title}</h3>
        </div>
        <p className="mb-6 flex-grow">{service.description}</p>
        <Link
          href={`/services/${service.slug}`}
          aria-label={`Mehr erfahren über ${service.title}`}
          className="btn btn-secondary bg-white text-blue-600 px-4 py-2 rounded transition-colors duration-200 hover:bg-gray-200 text-center"
        >
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-12 section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 animate-slide-in-left">
          Unsere Dienstleistungen
        </h2>
        <div className="flex flex-wrap -mx-4 justify-center animate-slide-in-right">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
