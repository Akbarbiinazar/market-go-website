import { client, urlForImage } from '@/lib/sanity';
import cartImage from '@/assets/svg/CART.svg';
import logoIcon from '@/assets/logo.png';
import Image from 'next/image';

interface Metadata {
  dimensions: {
    width: number;
    height: number;
  };
}

interface PartnersSectionDto {
  title: string;
  partners: Array<{
    url: string;
    metadata: Metadata;
  }>;
}

async function getData(): Promise<PartnersSectionDto[]> {
  const query = `*[_type == "partners"] {
  title,
  "partners": partners[].asset->{
    url,
    metadata {
      dimensions {
        width,
        height
      }
    }
  }
}`;
  return client.fetch(query);
}

export const PartnersSection = async () => {
  const data = await getData();

  return (
    <section className='mt-[150px]'>
      <div className='container mx-auto'>
        <div className='border-pink_300 relative flex flex-col items-center rounded-[30px] border-4 bg-transparent p-6 shadow-lg'>
          {/* Top Image */}
          <div className='absolute -right-[2rem] -top-[2.5rem] flex items-center justify-center'>
            <Image
              src={cartImage}
              alt='Cart'
              width={67}
              height={63}
              style={{ zIndex: '-1' }}
              //   className='h-6 w-6 object-contain'
            />
          </div>

          {/* Title */}
          <h2 className='mb-4 w-full max-w-[905px] text-center text-5xl text-gray-800'>
            <span className='text-pink_700 font-bold'>
              {data[0].title.split(' ')[0]}
            </span>{' '}
            {data[0].title.split(' ').slice(1).join(' ')}
          </h2>

          {/* Inner Images */}
          <div className='xs:grid-cols-2 mb-[55px] grid place-items-center sm:grid-cols-2 sm:gap-y-[25px] md:grid-cols-3 md:gap-y-[106px] lg:grid-cols-4'>
            {data[0].partners.map((partner, idx) => (
              <Image
                key={idx}
                src={urlForImage(partner.url).url()}
                alt='partner logo'
                width={partner.metadata.dimensions.width / 4}
                height={partner.metadata.dimensions.height / 2}
                style={{ objectFit: 'contain' }}
              />
            ))}
          </div>

          {/* <div className='absolute inset-x-0 bottom-0 h-1 w-5 bg-white'></div> */}

          {/* Bottom Logo */}
          <div className='absolute inset-x-0 -bottom-[5rem] flex items-center justify-center'>
            <div className='relative flex items-center justify-center p-2'>
              <Image
                src={logoIcon}
                width={227}
                height={140}
                alt='Logo'
                //   className='h-full w-full rounded-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
