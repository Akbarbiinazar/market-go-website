import Chip from '@/components/ui/chip';
import { client, urlForImage } from '@/lib/sanity';
import Image from 'next/image';

export interface Service {
  icon: string; // URL for the image
  text: string;
  isGradient: boolean;
}

export interface ServicesData {
  _id: string;
  title: string;
  services: Service[];
}
export async function getServicesData(): Promise<ServicesData[]> {
  const query = `
     *[_type == "services"]{
        _id,
        title,
        services[]{
          "icon": Icon.asset->url,
          text,
          isGradient
        }
      }
    `;

  return await client.fetch(query);
}

export const ClientsSection = async () => {
  const data = await getServicesData();
  return (
    <section className='mb-[155px] mt-[115px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-[110px]'>
          <h1 className='text-center text-[40px] font-extrabold uppercase leading-[47px]'>
            {data[0].title}
          </h1>
          <div className='flex w-full justify-around gap-x-5'>
            {/* <Chip
              // key={idx}
              // hasBorderGradient={idx === 1}
              className='h-full min-h-[197px] w-[298px]'
            >
              <Image
                alt='service logo'
                src={urlForImage(data[0].services[0].icon).url()}
                width={55}
                height={55}
                style={{ objectFit: 'cover' }}
              />
              <p className='max-w-[200px]'>{data[0].services[0].text}</p>
            </Chip> */}
            {data[0].services.map((service, idx) => (
              <Chip
                key={idx}
                hasBorderGradient={idx === 1}
                className='flex h-full min-h-[197px] w-full max-w-[298px] gap-y-5'
              >
                <Image
                  alt='service logo'
                  src={urlForImage(service.icon).url()}
                  width={55}
                  height={55}
                  style={{ objectFit: 'cover' }}
                />
                <p className='max-w-[200px] text-center'>{service.text}</p>
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
