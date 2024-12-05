'use client';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { useScreenDetector } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { BiX } from 'react-icons/bi';

export const headerCTAs = [
  {
    name: 'Услуги',
    href: 'services',
    id: 1,
  },
  {
    name: 'Стоимость',
    href: 'prices',
    id: 2,
  },
  {
    name: 'Клиенты',
    href: 'clients',
    id: 3,
  },
  {
    name: 'Контакты',
    href: 'contacts',
    id: 4,
  },
];

export const Header = () => {
  const { isMobile } = useScreenDetector();

  return (
    <>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <section className='bg-[#BC66A026] pt-5'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between'>
              <div className='flex'>
                <Image alt='logo' src={logo} width={150} height={93} />
                <ul className='flex items-center gap-10'>
                  {headerCTAs.map((header) => (
                    <li key={header.id} id={header.href}>
                      {header.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex items-center gap-5'>
                <p className='text-base font-bold leading-4'>
                  8 (903) 962-89-72
                </p>
                <Button
                  type='button'
                  className='rounded-full border border-purple bg-transparent px-5 py-2.5 text-xs font-bold leading-4 text-black transition-all duration-300 ease-in-out hover:bg-purple hover:text-white'
                >
                  Перезвоните мне
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className='mt-2'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex'>
            <Image alt='logo' src={logo} width={63} height={38} />
          </div>

          <div className='flex items-center gap-5'>
            <p className='text-base font-bold leading-4'>8 (903) 962-89-72</p>
            {isMenuOpen ? (
              <button onClick={toggleMenu} aria-label='Close Menu'>
                <BiX className='h-6 w-6 text-magenta_300' />
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                className='flex flex-col items-center justify-center gap-1 p-2 text-black focus:outline-none'
                aria-label='Toggle Menu'
              >
                <span
                  className={`block h-0.5 w-6 bg-magenta_300 transition-all ${isMenuOpen ? 'translate-y-1 rotate-45' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-magenta_300 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-magenta_300 transition-all ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`}
                ></span>
              </button>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='unset-0 fixed mt-5 w-full bg-purple opacity-100 transition-opacity'>
          <nav className='flex flex-col items-center justify-center py-5'>
            <ul className='flex flex-col gap-4'>
              {headerCTAs.map((header) => (
                <li key={header.id} className='cursor-pointer py-2 text-center'>
                  <a href={`#${header.href}`} className='text-lg font-medium'>
                    {header.name}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  type='button'
                  className='w-full rounded-full border border-purple bg-transparent px-5 py-2.5 text-base font-bold leading-4 text-black transition-all duration-300 ease-in-out hover:bg-purple hover:text-white'
                >
                  Перезвоните мне
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
}
