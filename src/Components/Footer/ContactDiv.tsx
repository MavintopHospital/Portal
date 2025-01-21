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
    <div className="max-w-xs">
      <p className="ml-1 font-bold max-w-[250px]">
        Have Something To Talk About With Our Professionals?
      </p>
      <form onSubmit={handleSubmit}>
        <Input 
          placeholder="Your Email" 
          value={email} 
          onChange={handleEmailChange} 
          className="w-3/4 p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button 
          type="submit" 
          className="w-1/2 py-3 bg-primary text-white rounded-full shadow-md hover:bg-[#158ace] transition-all duration-300"
        >
          Send Email
        </button>
      </form>
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
