import React from 'react';
import { contactDetails } from '@/Components/Shared/Consts';

interface AppointmentProps {
  isOpen: boolean;
  onClose: () => void;
}

const Appointment: React.FC<AppointmentProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
          Book an Appointment
        </h2>
        <p className="mb-4 text-center">You can reach us at:</p>
        <ul className="mb-6 text-center">
          {contactDetails.phoneNumbers.map((number, index) => (
            <li key={index} className="mb-2">
              <a
                href={`tel:${number}`}
                className="text-blue-500 hover:underline"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
        <p className="mb-4 text-center">Or email us at:</p>
        <a
          href={`mailto:${contactDetails.email}`}
          className="text-blue-500 hover:underline mb-6 block text-center"
        >
          {contactDetails.email}
        </a>
        <p className="mb-4 text-center">Or send a WhatsApp message to:</p>
        <a
          href={`https://wa.me/91${contactDetails.whatsappNumber}`}
          className="text-blue-500 hover:underline mb-6 block text-center"
        >
          {contactDetails.whatsappNumber}
        </a>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;