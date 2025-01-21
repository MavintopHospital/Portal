import React, { useState } from 'react';
import hero from '@/assets/images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import Appointment from '@/Components/Main/Appointment/Appointment';

const Home: React.FC = () => {
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);

  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);

  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="tracking-wider md:tracking-normal max-w-xs lg:max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            Mavintop Hospital
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            Maternal and Child Health | Infertility Care Unit (MICU)
          </h2>
          <h3 className="text-2xl lg:text-3xl font-medium mb-6">
            Where Every Life Begins with Care and Compassion
          </h3>
          <p className="text-base lg:text-lg my-6">
            Dedicated to excellence in maternal, child, and infertility care, empowering families with advanced medical expertise and unwavering compassion.
          </p>
          <button onClick={openAppointment} className="mt-4 p-2 bg-blue-500 text-white rounded">Appointment Now</button>
        </div>
        <div className="max-w-xs md:max-w-none">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <DescNums />
      <Appointment isOpen={isAppointmentOpen} onClose={closeAppointment} />
    </SectionWrapper>
  );
};

export default Home;
