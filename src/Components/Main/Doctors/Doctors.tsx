import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Doctor from './Doctor';

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      <h3 className="text-4xl font-bold text-center mb-20">
        {DoctorsData.heading}
      </h3>
      <div className="flex flex-wrap justify-center gap-10 px-5 md:px-0">
        {DoctorsData.doctors.map((doctor, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs"
          >
            <Doctor doc={doctor} />
          </div>
        ))}
      </div>
      {/* <h4 className="text-3xl tracking-wider font-bold text-center my-10 md:mt-20">
        {DoctorsData.heading2}
      </h4>
      <div className="mb-5 m-auto text-center max-w-2xl text-xs sm:text-base md:text-lg">
        {DoctorsData.desc}
      </div> */}
      <img className="m-auto max-w-full h-auto" src={DoctorsData.img} alt="Doctors" />
    </SectionWrapper>
  );
};

export default Doctors;
