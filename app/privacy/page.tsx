   import React from 'react';

   const Privacy: React.FC = () => {
     return (
       <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-4xl">
         <h1 className="text-3xl sm:text-4xl font-bold mb-6 headline">Datenschutzrichtlinie</h1>
         <p className="mb-4 text-sm sm:text-base">
           Willkommen bei Potera Reinigungsdienste. Ihre Privatsphäre ist uns wichtig.
           In dieser Datenschutzrichtlinie erklären wir, wie wir Ihre personenbezogenen Daten sammeln, verwenden und schützen.
         </p>

         <h2 className="text-xl sm:text-2xl font-semibold mt-6">1. Datenerfassung</h2>
         <p className="mb-4 text-sm sm:text-base">
           Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, sowie Daten, die automatisch durch Ihre Nutzung unserer Dienste gesammelt werden.
         </p>

         <h2 className="text-xl sm:text-2xl font-semibold mt-6">2. Datenverwendung</h2>
         <p className="mb-4 text-sm sm:text-base">
           Die gesammelten Daten werden verwendet, um unsere Dienstleistungen bereitzustellen, zu verbessern und anzupassen sowie um mit Ihnen zu kommunizieren.
         </p>

         <h2 className="text-xl sm:text-2xl font-semibold mt-6">3. Datensicherheit</h2>
         <p className="mb-4 text-sm sm:text-base">
           Wir setzen angemessene Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Änderung oder Verlust zu schützen.
         </p>

         <h2 className="text-xl sm:text-2xl font-semibold mt-6">4. Datenweitergabe</h2>
         <p className="mb-4 text-sm sm:text-base">
           Ihre Daten werden nicht an Dritte weitergegeben, es sei denn, es ist gesetzlich vorgeschrieben oder zur Erbringung unserer Dienstleistungen erforderlich.
         </p>

         <h2 className="text-xl sm:text-2xl font-semibold mt-6">5. Ihre Rechte</h2>
         <p className="mb-4 text-sm sm:text-base">
           Sie haben das Recht, Zugriff auf Ihre personenbezogenen Daten zu verlangen, diese zu korrigieren oder ihre Löschung zu beantragen. Bitte kontaktieren Sie uns, wenn Sie von diesen Rechten Gebrauch machen möchten.
         </p>

         <h2 className="text-xl sm:text-2xl font-semibold mt-6 ">6. Änderungen der Datenschutzrichtlinie</h2>
         <p className="mb-4 text-sm sm:text-base">
           Wir behalten uns das Recht vor, diese Datenschutzrichtlinie bei Bedarf zu aktualisieren. Änderungen werden auf dieser Seite veröffentlicht.
         </p>

         <h2 className="text-xl sm:text-2xl font-semibold mt-6 headline">Kontakt</h2>
         <p className="mb-4 text-sm sm:text-base">
           Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter{' '}
           <a href="mailto:kontakt@poterareinigung.de" className="text-blue-400 hover:underline break-words">
             kontakt@poterareinigung.de
           </a>.
         </p>
       </div>
     );
   };

   export default Privacy;