import React from 'react';
import { timingsAndHolidays, googleMapUrl } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';

const Contact: React.FC = () => {
    return (
        <SectionWrapper id="contact">
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Timings and Holidays</h2>
                <ul className="list-disc list-inside space-y-2 pl-5">
                    <li><strong>Neonatal and pediatric OPD:</strong> {timingsAndHolidays.neonatalPediatricOPD}</li>
                    <li><strong>Obstetrics and gynaecology OPD:</strong> {timingsAndHolidays.obstetricsGynecologyOPD}</li>
                    <li><strong>Sunday:</strong> {timingsAndHolidays.sunday}</li>
                    <li><strong>General holidays:</strong> {timingsAndHolidays.generalHolidays}</li>
                    <li><strong>Emergency services:</strong> {timingsAndHolidays.emergencyServices}</li>
                    <li><strong>For Appointments:</strong> {timingsAndHolidays.appointmentsOnSpot}</li>
                    <li><strong>For Appointments over Phone:</strong> {timingsAndHolidays.appointmentsPhone}</li>
                </ul>
                <p className="mt-4"><strong>Email:</strong> {timingsAndHolidays.email}</p>
                <p className="mt-4"><strong>Contact:</strong> {timingsAndHolidays.contact}</p>
            </div>
            <div className="my-8 px-4">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Our Location</h2>
                <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200" style={{ paddingTop: '56.25%' }}>
                    <iframe 
                        src={googleMapUrl} 
                        className="absolute top-0 left-0 w-full h-full" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location">
                    </iframe>
                </div>
            </div>
        </div>
        </SectionWrapper>
    );
};

export default Contact;