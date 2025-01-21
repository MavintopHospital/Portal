import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { SelectedPage } from '@/Components/Shared/Types';
import { useState } from 'react';

import useMediaQuery from '@/Hooks/useMediaQuery';

import Links from './Links';
/* import Button from '../UI/Button'; */
type Props = {
  flexBetween: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ flexBetween, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 900px)');

  return (
    <nav>
      {isAboveMediumScreens && (
        <div className={`${flexBetween} lg:gap-28 gap-20`}>
          <div className={`${flexBetween} gap-16`}>
            <Links
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          {/* <Button>Log In</Button> */}
        </div>
      )}
      {!isAboveMediumScreens && (
        <button onClick={() => setIsMenuToggled((prev) => !prev)}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      )}
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out">
          {/* CLOSE ICON */}
          <div className="absolute top-4 right-4">
            <button onClick={() => setIsMenuToggled(false)} className="text-white">
              <XMarkIcon className="h-10 w-10" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col items-center gap-8 text-2xl text-white">
            <a href="#home" onClick={() => setIsMenuToggled(false)} className="hover:text-gray-300 transition-colors duration-200">Home</a>
            <a href="#services" onClick={() => setIsMenuToggled(false)} className="hover:text-gray-300 transition-colors duration-200">Services</a>
            <a href="#doctors" onClick={() => setIsMenuToggled(false)} className="hover:text-gray-300 transition-colors duration-200">Doctors</a>
            <a href="#contact" onClick={() => setIsMenuToggled(false)} className="hover:text-gray-300 transition-colors duration-200">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
