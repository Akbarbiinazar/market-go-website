import { Card, CardHeader } from '@/components/ui/card';
import { client } from '@/lib/sanity';
import { dataset } from '@/sanity/env';

export interface Service {
  icon: string; // URL for the image
  text: string;
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
          text
        }
      }
    `;

  return await client.fetch(query);
}

export const ClientsSection = async () => {
  const data = await getServicesData();
  return (
    <section className='mb-[155px] mt-[115px]'>
      <div className='container'>
        <div className='flex flex-col gap-y-[110px]'>
          <h1 className='title'>{data[0].title}</h1>
          {data[0].services.map((service, idx) => (
            <Card key={idx} hasGradientBorder={idx === 1 ? true : false}>
                <CardHeader>
                    
                </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
