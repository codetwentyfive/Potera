"use client";

import React, { useState } from 'react';
import {
  PhoneIcon,
  MailIcon,
  PrinterIcon,
} from '@heroicons/react/outline';

const ContactPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section
      className="container  mx-auto py-16"
      style={{
        background: 'linear-gradient(to left, rgba(255, 255, 255, 0.0), rgba(0, 0, 0, 0.8)), url(/images/bg-contact.jpg)', // Gradient with background image
        backgroundSize: 'cover', // Cover the entire section
        backgroundPosition: 'center', // Center the image
      }}
    >
      <div className="flex flex-wrap justify-center items-center ">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 px-4">
          {/* Headline */}
          <div className=" headline pl-2 mb-8">
            <h1 className="text-4xl font-bold text-white">Kontaktieren Sie uns</h1>
          </div>

          {/* Subheadline Text */}
          <div className="mb-6 bg-white/10 backdrop-blur-md p-4 rounded-lg">
            <p className='text-white  '>
              Haben Sie Fragen zu unserem Angebot? <br />Wir sind gerne für
              Sie da. <br /> Füllen Sie einfach das Kontaktformular aus, und wir
              setzen uns zeitnah mit Ihnen in Verbindung. <br /> Natürlich
              können Sie uns auch telefonisch erreichen oder Sie
              besuchen uns direkt vor Ort <br /> – wir freuen uns auf Sie!
            </p>
          </div>

          {/* Office Hours */}
          <div className="mb-8 text-white">
            <div className="font-bold headline pl-2">Bürozeiten:</div>
            <div className="flex mt-1 ">
              <ul className="mr-8">
                <li>Mo – Do.</li>
                <li>Freitag</li>
                <li>Sa – So.</li>
              </ul>
              <ul>
                <li>8:00 – 15:30</li>
                <li>8:00 – 13:30</li>
                <li>Geschlossen</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col mb-8" >
            <p className="mr-8 mb-4 text-white">
              <a className="flex items-center" href="tel:+492022548333">
                <PhoneIcon className="h-5 w-5 text-white mr-2" />
                +49 123 456 789 23
              </a>
            </p>
            <p className="mr-8 mb-4 flex items-center text-white">
              <PrinterIcon className="h-5 w-5 text-white mr-2" />
              +49 123 456 789
            </p>
            <p className="mb-4">
              <a
                className="flex items-center text-white"
                href="mailto:mailto@mittler-gmbh.de"
              >
                <MailIcon className="h-5 w-5  mr-2 text-white" />
                potera@reinigung.de
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="Ihr Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="Ihre Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Nachricht</label>
              <textarea
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="Ihre Nachricht"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded"
            >
              Nachricht abschicken
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
          <div>
            <img
              src="/images/secretary.jpg"
              alt="Kontakt Bild"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
        
      </div>
      
      {/* Location Section */}
      <div className="text-center mt-8">
        <div className="flex items-center justify-center mt-2">
          <i className="fas fa-map-marker-alt text-yellow-400 mr-2"></i>
          <h2 className="text-xl font-bold text-white ">Wunschadresse 2,<br className="md:hidden" /> 1234 Ort, Germany</h2>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Wunschadresse+2,+1234+Ort,+Germany"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-2 inline-block"
        >
          Größere Karte anzeigen
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
