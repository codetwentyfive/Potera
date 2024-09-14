import React from 'react';
import Image from 'next/image';

const steps = [
  {
    title: 'Buchen',
    description: 'Wählen Sie das Datum und die Uhrzeit, zu der Ihr Profi erscheinen soll.',
    icon: '/icons/book-online.svg',
  },
  {
    title: 'Wir reinigen',
    description: 'Ein zertifizierter Reiniger kommt vorbei und reinigt Ihr Zuhause.',
    icon: '/icons/we-clean.svg',
  },
  {
    title: 'Sie entspannen',
    description: 'Lehnen Sie sich zurück und entspannen Sie sich. Genießen Sie Ihr strahlendes Zuhause!',
    icon: '/icons/you-relax.svg',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="section w-full py-12 bg-light-gray">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">So funktioniert es</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12 px-6">
          {steps.map((step, index) => (
            <div key={step.title} className="flex-1 mb-8 md:mb-0">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24">
                  <Image src={step.icon} alt={step.title} width={96} height={96} />
                </div>
                <h3 className="text-2xl font-semibold">{`${index + 1}. ${step.title}`}</h3>
                <p className="text-gray-700 max-w-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
