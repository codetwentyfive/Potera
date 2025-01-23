import React from "react";
import Image from "next/image";

interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string; 
}

const services: Service[] = [
  {
    title: "Unterhaltsreinigung",
    slug: "unterhaltsreinigung",
    description:
      "Sauberkeit und Zuverlassigkeit. Unser Unterhaltsservice sorgt für glänzende Ergebnisse, Tag für Tag!",
    icon: "/icons/maintenance-cleaning.svg", 
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
    title: "Grundreinigung",
    slug: "grundreinigung",
    description: "Wir bieten bequeme Grundreinigungsservices, um Ihnen Zeit zu sparen.",
    icon: "/icons/cleaning-icon.svg", 
  },
];

// ServiceCard Component
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4" role="listitem">
      <div className="service-card-gradient animate-gradient p-6 rounded-lg shadow-lg h-full relative overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-3 bg-white/10 rounded-full p-2">
            <Image
              src={service.icon}
              alt=""
              width={48}
              height={48}
              className="object-contain filter brightness-0 invert"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-xl font-bold text-white leading-tight mb-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            {service.title}
          </h3>
          <p className="text-white/95 leading-relaxed font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 animate-slide-in-left font-montserrat">
          Unsere Dienstleistungen
        </h2>
        <div className="flex flex-wrap justify-center -mx-4 animate-slide-in-right">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;