// import React, { useState } from 'react';
import hero from '@/assets/Images/Hero/hero.png';
import hero1 from '@/assets/Images/Hero/hero1.png';
import hero2 from '@/assets/Images/Hero/hero2.png';
import hero3 from '@/assets/Images/Hero/hero3.png';
import hero4 from '@/assets/Images/Hero/hero4.png';
import hero5 from '@/assets/Images/Hero/hero5.png';
import hero6 from '@/assets/Images/Hero/hero6.png';
import hero7 from '@/assets/Images/Hero/hero7.png';
import hero8 from '@/assets/Images/Hero/hero8.png';
import hero9 from '@/assets/Images/Hero/hero9.png';
import hero10 from '@/assets/Images/Hero/hero10.png';
import hero11 from '@/assets/Images/Hero/hero11.png';
import hero12 from '@/assets/Images/Hero/hero12.png';
import hero13 from '@/assets/Images/Hero/hero13.png';
import hero14 from '@/assets/Images/Hero/hero14.png';
import hero15 from '@/assets/Images/Hero/hero15.png';
import { AboutUsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
// import Appointment from '@/Components/Main/Appointment/Appointment';
import { useState } from 'react';

const heroImages = [
  hero, hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11, hero12, hero13, hero14, hero15
];

const Home: React.FC = () => {
  // const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const totalSlides = heroImages.length;

  // const openAppointment = () => setAppointmentOpen(true);
  // const closeAppointment = () => setAppointmentOpen(false);
  const goToSlide = (idx: number) => setCurrentSlide(idx);
  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);

  // Optional: Auto-slide every 5s
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 5000);
  //   return () => clearInterval(timer);
  // }, [currentSlide]);

  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="tracking-wider md:tracking-normal max-w-xs md:max-w-xs lg:max-w-sm flex-shrink-0 text-center md:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-gradient">
            Mavintop Hospital
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">
            Maternal and Child Health | Infertility Care Unit (MICU)
          </h2>
          <h3 className="text-lg lg:text-xl font-medium mb-4">
            Where Every Life Begins with Care and Compassion
          </h3>
          <p className="text-sm lg:text-base my-4">
            Dedicated to excellence in maternal, child, and infertility care, empowering families with advanced medical expertise and unwavering compassion.
          </p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 text-sm lg:text-base">
            <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">Contact Us</a>
          </button>
        </div>
        <div className="w-full md:w-[65%] lg:w-[70%] xl:w-[75%] relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[16/9] bg-gray-100 cursor-pointer group" onClick={() => openLightbox(currentSlide)}>
            {heroImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`hero${idx}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ pointerEvents: idx === currentSlide ? 'auto' : 'none' }}
              />
            ))}
            {/* Overlay for click hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 z-20">
              <span className="text-white text-lg font-semibold bg-black/50 rounded px-4 py-2">Click to view full screen</span>
            </div>
          </div>
          {/* Slide Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-200 ${idx === currentSlide ? 'bg-blue-500 scale-125 shadow' : 'bg-white/70 hover:bg-blue-200'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          {/* Lightbox Overlay */}
          {isLightboxOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all animate-fadeIn"
              onClick={closeLightbox}
              tabIndex={-1}
            >
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="absolute top-6 right-8 text-white text-4xl font-bold bg-black/40 rounded-full p-2 hover:bg-black/70 transition-all z-60"
                aria-label="Close"
              >
                &times;
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + totalSlides) % totalSlides); }}
                className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-3 z-60"
                aria-label="Previous image"
              >
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              <img
                src={heroImages[lightboxIndex]}
                alt={`hero${lightboxIndex}`}
                className="max-h-[95vh] max-w-[98vw] rounded-2xl shadow-2xl object-contain transition-all bg-white"
                onClick={e => e.stopPropagation()}
              />
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % totalSlides); }}
                className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-3 z-60"
                aria-label="Next image"
              >
                <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          )}
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
