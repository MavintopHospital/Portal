import neurology from '@/assets/Images/Icons/Neurology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';
import surgery from '@/assets/Images/Icons/Surgery.png';
import seeMoreImage from '@/assets/Images/Icons/seeMoreImage.png';

import Banner1 from '@/assets/Images/Banner1.png';
import Banner2 from '@/assets/Images/Banner2.png';

import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';

import DSC_2614 from '@/assets/Images/Doctors/DSC_2614.png';
import DSC_2620 from '@/assets/Images/Doctors/DSC_2620.png';
import DSC_2622 from '@/assets/Images/Doctors/DSC_2622.png';

import user1 from '@/assets/Images/users/user1.jpg';
import user2 from '@/assets/Images/users/user2.jpg';
import user3 from '@/assets/Images/users/user3.jpg';

import logo from '@/assets/Images/logo.png';

export const links = ['Home', 'Doctors', 'Services', 'Contact']; //, 'Reviews'

export const descNums = [
  {
    num: '500+',
    text: 'Expert Doctors',
  },
  {
    num: '20k+',
    text: 'Happy Patients',
  },
  {
    num: '24/7',
    text: 'Emergency Service',
  },
  {
    num: '100+',
    text: 'Operation Theatres',
  },
  {
    num: '850+',
    text: 'Hospital Rooms',
  },
];

export const ServicesData = [
  {
    img: neurology,
    title: 'Inpatient',
    id: 'inpatient',
    heading: 'Inpatient Facility',
    subheading: '',
    texts: [
      'High risk pregnancy management',
      'Well equipped labour theatre with USG and NST machines with electronic maternal monitoring',
      'High dependency unit (HDU)',
      'Obstetric Intensive care unit (ICU)',
      'Operation theratre',
      'Emergency services -24x7',
      'Newborn care corner (NBCC) with well equipped resuscitation warmer',
      'Newborn Stabilization unit (NBSU)',
      'Neonatal intensive care unit (NICU)',
      'ART centre (Infertility centre)',
    ],
  },
  {
    img: orthopedics,
    title: 'Outpatient',
    id: 'outpatient',
    heading: 'Outpatient Services',
    subheading: 'Paediatric and Neonatal OPD Services',
    texts: [
      'Follow up of a high risk neonate',
      'Preterm care',
      'Immunization/vaccination',
      'Perinatal counselling',
      'Genetic counseling',
      'Lactational counselling',
      'Speciality clinics',
    ],
    subheading1: 'Obstetrics and Gynecology',
    texts1: [
      'Obstetrics OPD ',
      'Adolescent clinic',
      'Infertility clinic',
      'High risk pregnancy clinic',
      'Ultrasonography',
      'Oncology OPD (cancer)',
      'Gynecological cancer screening',
      'Gynecology OPD',
    ],
  },
  {
    img: surgery,
    title: 'Surgery',
    id: 'surgery',
    heading: 'Surgical/Operation Facility',
    subheading: '',
    texts: [
      'Normal vaginal delivery with labor analgesia',
      'Caesarean delivery',
      'Major open surgeries (for gynecological condition)',
      'Gynecological cancer surgeries',
      'Laparoscopic surgeries for gynecological condition',
      'Hysteroscopy (Diagnostic and operative surgeries)',
      'Laparoscopic tubal banding (sterilization)',
      'Vaginal surgeries (non-descent vaginal hysterectomy, vaginal myomectomy, reconstructive vaginal surgeries)',
      'OPU (oocyte pick up) for IVF patients',
    ],
  },
  {
    img: seeMoreImage,
    title: 'Ward',
    id: 'ward',
    heading: 'Ward Facilities',
    subheading: '',
    texts: [
      'General ward',
      'Post operative ward',
      'Semi-special ward (twin sharing)',
      'Single special rooms (with AC/without AC)',
      'Suite rooms',
    ],
  },
];

export const Banner1Data = {
  heading: 'We Are Always Here To Ensure Best Medical Treatment',
  texts: [
    'Easy make appointment',
    'Top specialist doctors',
    '24/7 service',
    'Compassionate and comprehensive care',
    'Enrolment is quick and easy',
  ],
  img: Banner1,
};

export const DoctorsData = {
  heading: 'Meet Our Specialists',
  doctors: [
    {
      img: DSC_2620,
      name: 'Dr. K.S.Mavintop, M.B.B.S, DGO, M.D(OBG)',
      job: 'Senior obstetrician, gynecologist, laparoscopic surgeon and infertility specialist',
    },
    {
      img: doc2,
      name: 'Dr. Aruna.S.Bythnal, M.B.B.S, M.D(Pathology)',
      job: 'Senior pathologist and embryologist',
    },
    {
      img: DSC_2622,
      name: 'Dr. Prajna.K.Mavintop, M.B.B.S, M.S( OBG) , FRM',
      job: 'Fellowship in advance laparoscopy , fellowship in cosmetic and regenerative gynaecology',
    },
    {
      img: DSC_2614,
      name: 'Dr. Sachin.K.G, M.B.B.S, M.D(Pediatrics), D.M(Neonatology)',
      job: 'Consultant pediatrician and neonatal intensivist',
    },
    {
      img: doc3,
      name: 'Dr. Chethan, (M.S)',
      job: '',
    },
    {
      img: doc4,
      name: 'Dr. Divya S H, (M.B.B.S)',
      job: '',
    },
    {
      img: doc4,
      name: 'Dr. Abhilasha',
      job: '',
    },
  ],
  img: Banner2,
};

export const FeedbackData = {
  heading: 'Patient Feedback',
  feedbacks: [
    {
      img: user1,
      name: 'Ralph Edwards',
      job: 'Businessman',
      desc: 'My experience with this hospital has been great. I highly recommend their services to anyone in need of quility healthcare. they truly prioritize patients care!',
    },
    {
      img: user2,
      name: 'Josh Smith',
      job: 'Engineer',
      desc: 'The healthcare professionals were top-natch. they were knowledgeable, attentive, and took the time to answer all of my questions and address my concerns',
    },
    {
      img: user3,
      name: 'Eleanor Pena',
      job: 'Teacher',
      desc: "One thing that stood out to me was the efficiency of the service, i didn't have to wait long for my appointment, and the entire process was hassle-free experience",
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['Mavintop Hospital', 'Shamanur road, Davanagere-577004'],
  phone: '08192-222266',
  email: 'mavintophospital@gmail.com',
  /* , 9845148562, 9483743532, 8722966603 */
  departments: [
    'Maternal and Child Health',
    'Infertility Care Unit (MICU)',
    'Obstetrics and Gynecology',
    'Pediatrics and Neonatology',
    'Pathology and Embryology',
    'Emergency and Intensive Care',
    'More',
  ],
  links: links,
};

export const timingsAndHolidays = {
  neonatalPediatricOPD: '1 PM to 2:30 PM, Evening 6 PM to 8 PM',
  obstetricsGynecologyOPD: '9.30 AM to 5 PM',
  sunday: 'Holiday',
  generalHolidays: '10 AM to 1 PM',
  emergencyServices: '24 x 7',
  appointmentsOnSpot: 'OPD on spot registration starts from 8 AM to 2 PM',
  appointmentsPhone: 'only from 9 AM to 10 AM',
  email: 'mavintophospital@gmail.com',
  contact: '08192-222266, 9845148562, 9483743532, 8722966603'
};

export const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.536232374245!2d75.90268957423086!3d14.45386998065401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba257c81c3b4c9%3A0x3b2eb38f33f42532!2sMavintop%20Hospital!5e0!3m2!1sen!2sin!4v1737458762819!5m2!1sen!2sin";

export const contactDetails = {
  phoneNumbers: ['08192-222266', '9845148562', '9483743532', '8722966603'],
  email: 'mavintophospital@gmail.com',
  whatsappNumber: '9845148562',
};

export const AboutUsData = {
  heading: '',
  description: `Mavintop Hospital is a speciality hospital dedicated to women's health, maternal and child health, established in 2010. We provide care in areas of preconceptional counselling, complete evaluation of infertility couple and provide services like ART treatment (IVF & ICSI), IUI, Antenatal ultrasound, Antenatal care (maternal and fetal workup), genetic evaluation of couple and fetus, high risk pregnancy management, intrapartum care, labour analgesia, delivery services (24x7), equipped with HDU, obstetric ICU (24X7) & NICU, postnatal care, family planning services. Routine gynaecological care, perimenopausal and postmenopausal, menstrual disorders, routine gynaecological cancer screening, HPV vaccination, gynae-oncology services, surgeries for gynecological pathology, minimal invasive surgery (hysteroscopy & laparoscopy), specialised in vaginal surgeries. Specialised in providing perinatal counselling evaluation, newborn intensive care, equipped with neonatal ventilators and incubators, complete vaccination of child from birth, lactational counselling, high risk neonate follow up, newborn screening for metabolic disorders, preterm care.`,
};
