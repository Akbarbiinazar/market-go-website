import { client, urlForImage } from '@/lib/sanity';
import Image from 'next/image';

import hornImage from '@/assets/ic_horn.png';
import sideDots from '@/assets/Group (1).png';

export interface Service {
  icon: string;
  text: string;
}

interface FrequentServicesData {
  _id: string;
  title: string;
  services: Service[];
}
// Promise<FrequentServicesData[]>
async function getData(): Promise<FrequentServicesData[]> {
  const query = `*[_type == "frequent-services"]{
        _id,
        title,
        services[]{
          "icon": Icon.asset->url,
          text,
        }
      }`;

  return await client.fetch(query);
}

export const FrequentServicesSection = async () => {
  const data = await getData();

  return (
    <section className='relative h-full w-full bg-[#FBFAFE]'>
      <div className='absolute -left-6 -top-8 sm:hidden lg:block'>
        <Image alt='horn image' src={hornImage} width={183} height={152} />
      </div>
      <div className='absolute bottom-0 right-0'>
        <Image alt='dots image' src={sideDots} width={100} height={100} />
      </div>
      <div className='pb-[70px] pt-[60px]'>
        <div className='container mx-auto'>
          <h1 className='m-auto max-w-[750px] text-center text-[40px] font-extrabold uppercase leading-[47px]'>
            {data[0]?.title ?? ''}
          </h1>
          <div className='mt-[65px] grid w-full gap-[75px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {data[0].services.map((service) => (
              <div className='flex h-[122px] w-full max-w-[298px] items-center gap-5 rounded-[30px] border-[2px] border-[#6E679C] bg-[#17022d] p-[43px] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-white hover:text-black hover:filter sm:justify-center'>
                <Image
                  alt='service logo'
                  src={urlForImage(service.icon).url()}
                  width={55}
                  height={55}
                  style={{ objectFit: 'cover' }}
                />
                <p className='max-w-[175px] text-center'>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
