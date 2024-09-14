import React from 'react';
import HeroSection from '../components/HeroSection';
// import EstimateSection from '../components/EstimateSection';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      {/* <EstimateSection /> */}
      <AboutUsSection />
      <ServicesSection />
      <HowItWorksSection />
    </>
  );
};

export default HomePage;
