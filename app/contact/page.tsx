"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../../components/Modal';

const ContactPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for success modal

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsModalOpen(true); // Open success modal
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="flex flex-col mb-8">
            <p className="mr-8 mb-4 text-white">
              <a className="flex items-center" href="tel:+4917632747881">
                <Image src="/icons/mobile.svg" alt="Mobile" width={20} height={20} className="mr-2 invert" />
                +49 176 3274 7881
              </a>
              <a className="flex items-center" href="tel:+4992213950562">
                <Image src="/icons/phone.svg" alt="Phone" width={20} height={20} className="mr-2 invert" />
                +49 9221 39 50562
              </a>
            </p>
            <p className="mb-4">
              <a className="flex items-center text-white" href="mailto:kontakt@poterareinigung.de">
                <Image src="/icons/envelope.svg" alt="Email" width={20} height={20} className="mr-2 invert" />
                kontakt@poterareinigung.de
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
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Nachricht abschicken'}
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
          <div>
            <Image
              src="/images/secretary.jpg"
              alt="Kontakt Bild"
              width={600} 
              height={400} 
              className="w-full h-auto rounded"
            />
          </div>
        </div>
        
      </div>
      
      {/* Location Section */}
      <div className="text-center mt-8">
        <div className="flex items-center justify-center mt-2">
          <i className="fas fa-map-marker-alt text-yellow-400 mr-2"></i>
          <h2 className="text-xl font-bold text-white ">Blumenstraße. 5,<br className="md:hidden" /> 95326 Kulmbach, Deutschland</h2>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Blumenstraße+5,+95326+Kulmbach,+Germany"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-2 inline-block"
        >
          In Google Maps öffnen
        </a>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Erfolg"
      >
        <p className="text-green-500">Ihre Nachricht wurde erfolgreich gesendet!</p>
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={submitStatus === 'error'}
        onClose={() => setSubmitStatus(null)}
        title="Fehler"
      >
        <p className="text-red-500">Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.</p>
      </Modal>
    </section>
  );
};

export default ContactPage;