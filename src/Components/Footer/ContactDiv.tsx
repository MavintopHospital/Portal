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
        />
        <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
          Send Email
        </button>
      </form>
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
