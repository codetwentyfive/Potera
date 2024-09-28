   import React from 'react';

   const Terms: React.FC = () => {
     return (
       <div className="container mx-auto py-12 px-4">
         <h1 className="text-4xl font-bold mb-6 headline pl-2   ">Nutzungsbedingungen</h1>
         <p className="mb-4">
           Durch die Nutzung unserer Dienstleistungen stimmen Sie den folgenden Bedingungen zu:
         </p>

         <h2 className="text-2xl font-semibold mt-6">1. Leistungsbeschreibung</h2>
         <p className="mb-4">
           Potera Reinigungsdienste bietet professionelle Reinigungsdienstleistungen für Ihr Zuhause und Ihr Unternehmen.
         </p>

         <h2 className="text-2xl font-semibold mt-6">2. Vertragsabschluss</h2>
         <p className="mb-4">
           Ein Vertrag kommt zustande, sobald Sie ein Angebot annehmen und wir die Dienstleistung erbringen.
         </p>

         <h2 className="text-2xl font-semibold mt-6">3. Preise und Zahlung</h2>
         <p className="mb-4">
           Die Preise für unsere Dienstleistungen sind in der jeweiligen Angebotsunterlage angegeben. Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung fällig.
         </p>

         <h2 className="text-2xl font-semibold mt-6">4. Haftung</h2>
         <p className="mb-4">
           Potera Reinigungsdienste haftet nur für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten verursacht wurden.
         </p>

         <h2 className="text-2xl font-semibold mt-6">5. Vertragsdauer und Kündigung</h2>
         <p className="mb-4">
           Verträge werden auf unbestimmte Zeit geschlossen und können von beiden Seiten mit einer Frist von 30 Tagen gekündigt werden.
         </p>

         <h2 className="text-2xl font-semibold mt-6">6. Änderungen der Nutzungsbedingungen</h2>
         <p className="mb-4">
           Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht.
         </p>

         <h2 className="text-2xl font-semibold mt-6 headline pl-2">Kontakt</h2>
         <p className="mb-4">
           Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter <a href="mailto:kontakt@poterareinigung.de" className="text-blue-400 hover:underline">kontakt@poterareinigung.de</a>.
         </p>
       </div>
     );
   };

export default Terms;