import logo from '@/assets/logo.png';
import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <Image src={logo} height={100} width={100} />
    </>
  );
};
