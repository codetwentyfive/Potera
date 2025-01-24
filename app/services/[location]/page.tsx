import { Metadata } from 'next';
import Image from 'next/image';

// Define the correct types for Next.js pages
type Props = {
  params: { location: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface Location {
  name: string;
  title: string;
  description: string;
  services: string[];
  areas: string[];
}

interface Locations {
  [key: string]: Location;
}

const locations: Locations = {
  kulmbach: {
    name: 'Kulmbach',
    title: 'Reinigungsdienste in Kulmbach',
    description: 'Professionelle Reinigungsdienstleistungen in Kulmbach und Umgebung. Ihr lokaler Partner für Gebäude- und Büroreinigung.',
    services: [
      'Gebäudereinigung',
      'Büroreinigung',
      'Haushaltsreinigung',
      'Grundreinigung',
      'Fensterreinigung'
    ],
    areas: [
      'Stadtgebiet Kulmbach',
      'Mainleus',
      'Thurnau',
      'Kasendorf',
      'Trebgast',
      'Neuenmarkt',
      'Burgkunstadt',
      'Lichtenfels',
      'Kronach',
      'Bayreuth'
    ]
  },
  bayreuth: {
    name: 'Bayreuth',
    title: 'Reinigungsdienste in Bayreuth',
    description: 'Zuverlässige Reinigungsservices in Bayreuth. Professionelle Reinigung für Unternehmen und Privathaushalte.',
    services: [
      'Unterhaltsreinigung',
      'Büroreinigung',
      'Praxisreinigung',
      'Treppenhausreinigung',
      'Fensterreinigung'
    ],
    areas: ['Stadtgebiet Bayreuth', 'Bindlach', 'Gesees', 'Heinersreuth', 'Eckersdorf']
  }
};

export async function generateStaticParams() {
  return Object.keys(locations).map((location) => ({
    location,
  }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const location = locations[params.location];

  if (!location) {
    return {
      title: 'Seite nicht gefunden | Potera Reinigungsdienste',
      description: 'Die angeforderte Seite existiert nicht.'
    };
  }

  const areaKeywords = location.areas.map(area => [
    `Reinigungsdienst ${area}`,
    `Gebäudereinigung ${area}`,
    `Reinigungsservice ${area}`
  ]).flat();

  const serviceKeywords = location.services.map(service =>
    `${service} ${location.name}`
  );

  return {
    title: `${location.title} | Potera Reinigungsdienste`,
    description: `${location.description} Wir bieten ${location.services.join(', ')} in ${location.name} und Umgebung an, inklusive ${location.areas.join(', ')}. Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen.`,
    keywords: [
      `Reinigungsdienst ${location.name}`,
      `Gebäudereinigung ${location.name}`,
      `Büroreinigung ${location.name}`,
      `Reinigungsservice ${location.name}`,
      `Reinigungsfirma ${location.name}`,
      'Professionelle Reinigung',
      'Qualitätsreinigung',
      ...areaKeywords,
      ...serviceKeywords,
      'Reinigungsfirma Oberfranken',
      'Gebäudereinigung Oberfranken',
      'Professionelle Reinigung Oberfranken'
    ],
    openGraph: {
      title: `${location.title} | Potera Reinigungsdienste`,
      description: `Professionelle Reinigungsdienstleistungen in ${location.name} und Umgebung. ${location.services.join(', ')}`,
      locale: 'de_DE',
      type: 'website'
    }
  };
}

export default async function LocationPage({ params }: Props) {
  const location = locations[params.location];

  if (!location) {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">Seite nicht gefunden</h1>
        <p>Die angeforderte Seite existiert nicht.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 headline pl-2 font-montserrat">
          {location.title}
        </h1>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg mb-6 font-opensans">
              {location.description}
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 font-montserrat">
                Unsere Services in {location.name}:
              </h2>
              <ul className="list-disc pl-6 space-y-2 font-opensans">
                {location.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-montserrat">
                Servicegebiete um {location.name}:
              </h2>
              <ul className="list-disc pl-6 space-y-2 font-opensans">
                {location.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 font-montserrat">
                Kontaktieren Sie uns in {location.name}
              </h3>
              <p className="mb-4 font-opensans">
                Wir sind Ihr lokaler Ansprechpartner für professionelle Reinigungsdienstleistungen in {location.name} und Umgebung.
              </p>
              <div className="space-y-4">
                <p className="flex items-center font-opensans">
                  <Image
                    src="/icons/mobile.svg"
                    alt="Telefon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  +49 176 3274 7881
                </p>
                <p className="flex items-center font-opensans">
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  kontakt@poterareinigung.de
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}