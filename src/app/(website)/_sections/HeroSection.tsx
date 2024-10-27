import { client } from '@/lib/sanity';

async function getData() {
  const query = `
    *[_type == 'hero']{
  title,
  subtitle,
  "form": form.placeholder,
  "cta": {
    name,
    subtext,
    colorScheme
  },
  "cards": cards[]{
    text,
    count,
    "image": {
      "url": image.asset._ref,
      "id": image.asset._id,
      "width": image.asset.metadata.dimensions.width,
      "height": image.asset.metadata.dimensions.height
    },
    "stars": {
      "url": stars.asset._ref,
      "id": stars.asset._id,
      "width": stars.asset.metadata.dimensions.width,
      "height": stars.asset.metadata.dimensions.height
    }
  }
}`;

  const data = await client.fetch(query);

  return data;
}

export const HeroSection = async () => {
  const data = await getData();

  return (
    <section className=''>
      <div className='my-28 flex justify-between'>
        <div className='container mx-auto px-4'>
          <div className='flex max-w-xl flex-col'>
            <h1 className='from-pink via-magenta to-blue inline-block bg-gradient-to-r bg-clip-text text-5xl font-extrabold text-transparent'>
              {data[0].title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
