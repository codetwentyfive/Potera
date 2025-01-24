import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: { location: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/*
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

export default function LocationPage({ params }: Props): React.JSX.Element {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Under Construction</h1>
      <p>This page is currently being updated.</p>
    </div>
  );
}
*/