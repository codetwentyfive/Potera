"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EstimateSection: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/estimate?zip=${zipCode}`);
  };

  return (
    <section className="bg-blue-100 text-gray-800 py-12">
      <div className="container mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Starten Sie mit Ihrer kostenlosen Schätzung</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            placeholder="Geben Sie Ihre Postleitzahl ein"
            className="w-64 p-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Los
          </button>
        </form>
      </div>
    </section>
  );
};

export default EstimateSection;
