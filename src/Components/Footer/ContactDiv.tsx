import React, { useState } from 'react';
import SocialsDiv from '../Socials/SocialsDiv';
import Input from '../UI/Input';

const ContactDiv = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:mavintophospital@gmail.com?subject=Contact&body=Email: ${email}`;
  };

  return (
    <div className="max-w-xs mx-auto p-4 space-y-4">
      <p className="font-bold text-center">
        Have Something To Talk About With Our Professionals?
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <Input 
          placeholder="Your Email" 
          value={email} 
          onChange={handleEmailChange} 
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button 
          type="submit" 
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Send Email
        </button>
      </form>
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
