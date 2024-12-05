// import SanityImage from '@/components/ui/SanityImage';
import { client } from '@/lib/sanity';
import { HeroSlider } from '../_components/HeroSlider';

interface Card {
  text: string;
  count: number;
  image: Asset;
  stars: Asset;
}

export interface HeroData {
  title: string;
  subtitle: string;
  form: string;
  cta: CTA;
  cards: Card[];
}

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
    image,
    stars,
  }
}`;

  const data: HeroData[] = await client.fetch(query);

  return data;
}

export const HeroSection = async () => {
  const data = await getData();

  return (
    <section className='flex overflow-x-hidden bg-[#BC66A026] py-20'>
      <div className='container mx-auto flex px-4'>
        <div className='flex max-w-[34rem] flex-col gap-[3.625rem]'>
          <h1 className='inline-block bg-gradient-to-r from-pink via-magenta bg-clip-text text-5xl font-extrabold leading-12 tracking-[0.01em] text-transparent'>
            {data[0].title}
          </h1>
          <p className='text-lg font-light text-[#342F55]'>
            {data[0].subtitle}
          </p>

          <div className='flex flex-col gap-y-[1.25rem]'>
            <form className='flex h-[55.63px] w-full items-center overflow-hidden rounded-full border border-gray-300'>
              <input
                type='email'
                placeholder='Enter your email'
                className='h-full flex-grow rounded-l-full border-[1.8px] border-[#7879F1] px-4 focus:outline-none focus:ring-2'
                required
              />
              <button
                type='submit'
                className='h-full w-[205px] rounded-r-full bg-blue_700 font-bold text-white transition-colors duration-300'
              >
                Оставить заявку
              </button>
            </form>
            <p className='text-sm font-light text-[#888888]'>
              Оставьте заявку и узнайте, как за счет внешнего трафика увеличить
              продажи на маркетплейсах минимум в 2 раза
            </p>
          </div>
        </div>
        <HeroSlider cards={data[0].cards} />
      </div>
    </section>
  );
};
