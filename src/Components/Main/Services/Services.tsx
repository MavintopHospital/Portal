import { ServicesData } from '@/Components/Shared/Consts';
import Service from './Service';
import { useState } from 'react';
import { SelectedService } from '@/Components/Shared/Types';
import ListItem from './ListItem';
import Banner1 from './Banner1';
import SectionWrapper from '../SectionWrapper';
import Appointment from '@/Components/Main/Appointment/Appointment';

const Services = () => {
  const [SelectService, setSelectService] = useState<SelectedService>(
    SelectedService.Inpatient
  );
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);

  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);

  const selectedServiceData = ServicesData.find(
    (service) => service.id === SelectService
  );
  return (
    <SectionWrapper id="services">
      <h2 className="text-4xl font-bold text-center mb-10">Services</h2>
      <div className="flex flex-col justify-between lg:flex-row gap-10 lg:gap-5">
        <div className="grid grid-cols-2 gap-5">
          {ServicesData?.map((service, index) => (
            <Service
              key={index}
              service={service}
              SelectService={SelectService}
              setSelectService={setSelectService}
            />
          ))}
        </div>
        <div className="lg:min-w-[30rem] lg:max-w-[30rem]">
          <h3 className="text-xl xs:text-2xl font-bold mb-4">
            {selectedServiceData?.heading}
          </h3>
          <div className="lg:ml-5 min-h-[33.4375rem]">
            <ul className="grid grid-cols-1 gap-4 md:gap-6">
              {selectedServiceData?.texts.map((text, index) => (
                <ListItem key={index} text={text} />
              ))}
            </ul>
          </div>
          <div className="lg:ml-5 mt-1">
          <button onClick={openAppointment} className="mt-4 p-2 bg-blue-500 text-white rounded">Appointment Now</button>
          </div>
        </div>
      </div>
      <Banner1 />
      <Appointment isOpen={isAppointmentOpen} onClose={closeAppointment} />
    </SectionWrapper>
  );
};

export default Services;
