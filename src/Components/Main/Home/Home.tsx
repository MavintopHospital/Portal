// import React, { useState } from 'react';
import hero from '@/assets/images/hero.png';
import { AboutUsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
// import Appointment from '@/Components/Main/Appointment/Appointment';

const Home: React.FC = () => {
  // const [isAppointmentOpen, setAppointmentOpen] = useState(false);

  // const openAppointment = () => setAppointmentOpen(true);
  // const closeAppointment = () => setAppointmentOpen(false);

  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="tracking-wider md:tracking-normal max-w-xs lg:max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-gradient">
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
          {/* <button onClick={openAppointment} className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300">
            Appointment Now
          </button> */}
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300">
  <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">Contact Us</a>
</button>
        </div>
        <div className="w-full">
          <img src={hero} alt="hero" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto text-center mt-12">
  <h5 className="text-4xl font-extrabold mb-6 text-gradient">
    {AboutUsData.heading}
  </h5>
  <p className="text-lg md:text-xl leading-relaxed text-gray-800">
    <span className="font-semibold text-primary">Mavintop Hospital</span> is a speciality hospital dedicated to women's health, maternal and child health, established in 2010. We provide care in areas of preconceptional counselling, complete evaluation of infertility couple and provide services like ART Treatment (IVF & ICSI), IUI, Antenatal ultrasound, Antenatal care (maternal and fetal workup), genetic evaluation of couple and fetus, high risk pregnancy management, intrapartum care, labour analgesia, delivery services (24x7), equipped with HDU, obstetric ICU (24X7) & NICU, postnatal care, family planning services.
  </p>
  <p className="text-lg md:text-xl leading-relaxed text-gray-800 mt-4">
    Routine gynaecological care, perimenopausal and postmenopausal, menstrual disorders, routine gynaecological cancer screening, HPV vaccination, gynae-oncology services, surgeries for gynecological pathology, minimal invasive surgery (hysteroscopy & laparoscopy), specialised in vaginal surgeries.
  </p>
  <p className="text-lg md:text-xl leading-relaxed text-gray-800 mt-4">
    Specialised in providing perinatal counselling evaluation, newborn intensive care, equipped with neonatal ventilators and incubators, complete vaccination of child from birth, lactational counselling, high risk neonate follow up, newborn screening for metabolic disorders, preterm care.
  </p>
</div>
      {/* <Appointment isOpen={isAppointmentOpen} onClose={closeAppointment} /> */}
    </SectionWrapper>
  );
};

export default Home;
