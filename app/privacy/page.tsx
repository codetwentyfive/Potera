   import React from 'react';

   const Privacy: React.FC = () => {
     return (
       <div className="container mx-auto py-12 px-4">
         <h1 className="text-4xl font-bold mb-6 headline pl-2">Datenschutzrichtlinie</h1>
         <p className="mb-4">
           Willkommen bei Potera Reinigungsdienste. Ihre Privatsphäre ist uns wichtig.
           In dieser Datenschutzrichtlinie erklären wir, wie wir Ihre personenbezogenen Daten sammeln, verwenden und schützen.
         </p>

         <h2 className="text-2xl font-semibold mt-6">1. Datenerfassung</h2>
         <p className="mb-4">
           Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, sowie Daten, die automatisch durch Ihre Nutzung unserer Dienste gesammelt werden.
         </p>

         <h2 className="text-2xl font-semibold mt-6">2. Datenverwendung</h2>
         <p className="mb-4">
           Die gesammelten Daten werden verwendet, um unsere Dienstleistungen bereitzustellen, zu verbessern und anzupassen sowie um mit Ihnen zu kommunizieren.
         </p>

         <h2 className="text-2xl font-semibold mt-6">3. Datensicherheit</h2>
         <p className="mb-4">
           Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Änderung oder Verlust zu schützen.
         </p>

         <h2 className="text-2xl font-semibold mt-6">4. Datenweitergabe</h2>
         <p className="mb-4">
           Ihre Daten werden nicht an Dritte weitergegeben, es sei denn, es ist gesetzlich vorgeschrieben oder zur Erbringung unserer Dienstleistungen erforderlich.
         </p>

         <h2 className="text-2xl font-semibold mt-6">5. Ihre Rechte</h2>
         <p className="mb-4">
           Sie haben das Recht, Zugriff auf Ihre personenbezogenen Daten zu verlangen, diese zu korrigieren oder ihre Löschung zu beantragen. Bitte kontaktieren Sie uns, wenn Sie von diesen Rechten Gebrauch machen möchten.
         </p>

         <h2 className="text-2xl font-semibold mt-6">6. Änderungen der Datenschutzrichtlinie</h2>
         <p className="mb-4">
           Wir behalten uns das Recht vor, diese Datenschutzrichtlinie bei Bedarf zu aktualisieren. Änderungen werden auf dieser Seite veröffentlicht.
         </p>

         <h2 className="text-2xl font-semibold mt-6 headline pl-2">Kontakt</h2>
         <p className="mb-4">
           Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter <a href="mailto:kontakt@poterareinigung.de" className="text-blue-400 hover:underline">kontakt@poterareinigung.de</a>.
         </p>
       </div>
     );
   };

   export default Privacy;