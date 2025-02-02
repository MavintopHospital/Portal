import { FooterData } from '../Shared/Consts';
import ContactDiv from './ContactDiv';

const Footer = () => {
  return (
    <div className="bg-[#aed4ff] mt-20 p-10 md:px-16">
      <div className="max-w-[1250px] m-auto flex justify-center gap-14 flex-wrap md:flex-nowrap">
        <div className="font-bold text-center md:text-left">
          <img className="mx-auto md:mx-0 mb-4" width={50} src={FooterData.logo} alt="Logo" />
          <div className="space-y-3">
            {FooterData.addresses.map((address, index) => (
              <p key={index}>
                {address}
              </p>
            ))}
          </div>
          <p className="mt-4">{FooterData.phone}</p>
          <p className="mt-2">{FooterData.email}</p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="font-bold text-lg">Departments</p>
            <ul>
              {FooterData.departments.map((department, index) => (
                <li key={index}>{department}</li>
              ))}
            </ul>
          </div>
          <ul>
            {FooterData.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <ContactDiv />
      </div>
    </div>
  );
};

export default Footer;
