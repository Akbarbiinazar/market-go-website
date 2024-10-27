import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
  return (
    <section className='mt-5'>
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
            <p className='text-base font-bold leading-4'>8 (903) 962-89-72</p>
            <Button
              type='button'
              className='border-purple hover:bg-purple rounded-full border bg-transparent px-5 py-2.5 text-xs font-bold leading-4 text-black transition-all duration-300 ease-in-out hover:text-white'
            >
              Перезвоните мне
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
