import React from 'react';

const JsonLd = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    name: 'Potera Reinigungsdienste',
    image: 'https://www.poterareinigung.de/images/logo.svg',
    '@id': 'https://www.poterareinigung.de',
    url: 'https://www.poterareinigung.de',
    telephone: '+4917632747881',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Blumenstraße 5',
      addressLocality: 'Kulmbach',
      postalCode: '95326',
      addressCountry: 'DE',
      addressRegion: 'Bayern'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.1020',
      longitude: '11.4478'
    },
    description: 'Professionelle Reinigungsdienstleistungen in Kulmbach, Bayreuth und Umgebung. Spezialisiert auf Gebäude-, Büro- und Haushaltsreinigung. Qualität und Zuverlässigkeit seit über 10 Jahren.',
    areaServed: [
      {
        '@type': 'City',
        name: 'Kulmbach',
        '@id': 'https://www.wikidata.org/wiki/Q494312'
      },
      {
        '@type': 'City',
        name: 'Bayreuth',
        '@id': 'https://www.wikidata.org/wiki/Q3950'
      },
      {
        '@type': 'City',
        name: 'Neuenmarkt'
      },
      {
        '@type': 'City',
        name: 'Burgkunstadt'
      },
      {
        '@type': 'City',
        name: 'Lichtenfels'
      },
      {
        '@type': 'City',
        name: 'Kronach'
      }
    ],
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '15:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:00',
        closes: '13:30'
      }
    ],
    sameAs: [
      'https://www.facebook.com/poterareinigung',
      'https://www.instagram.com/poterareinigung'
    ],
    serviceType: [
      'Gebäudereinigung',
      'Büroreinigung',
      'Haushaltsreinigung',
      'Unterhaltsreinigung',
      'Grundreinigung',
      'Fensterreinigung',
      'Praxisreinigung',
      'Treppenhausreinigung'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Reinigungsdienstleistungen',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Gebäudereinigung',
          description: 'Professionelle Reinigung von Geschäfts- und Bürogebäuden'
        },
        {
          '@type': 'OfferCatalog',
          name: 'Büroreinigung',
          description: 'Regelmäßige und gründliche Reinigung von Büroräumen'
        },
        {
          '@type': 'OfferCatalog',
          name: 'Haushaltsreinigung',
          description: 'Umfassende Reinigungsservices für Privathaushalte'
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd; 