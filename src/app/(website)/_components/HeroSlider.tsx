'use client';
import { useState } from 'react';
import { HeroData } from '../_sections/HeroSection';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';
import { ArrowIcon } from '@/assets/ArrowIcon';

export const HeroSlider = ({ cards }: { cards: HeroData['cards'] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < cards.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className='relative -right-[20%] flex w-full flex-col overflow-hidden'>
      <div className='w-full overflow-hidden'>
        <div
          className='flex transition-all duration-500'
          style={{
            transform: `translateX(-${activeIndex * 350}px)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={card.count}
              className={`min-h[375.43px] relative mx-[20px] max-w-[280px] flex-shrink-0 transition-transform duration-300 ${
                index === activeIndex
                  ? 'max-w-[323.88px] scale-105 bg-white/90 shadow-[0px_4px_37px_rgba(0,0,0,0.15)]' // Active styles
                  : 'max-w-[308.35px] bg-white/75 opacity-80 shadow-[0px_4px_35px_rgba(0,0,0,0.15)]' // Non-active styles
              }`}
              style={{
                transform: `translateX(${index === activeIndex ? '-10px' : '0'})`,
                borderRadius: index === activeIndex ? '18.9067px' : '18px',
              }}
            >
              <div
                className={`p-6 rounded-[${index === activeIndex ? '18.9067px' : '18px'}]`}
              >
                <span className='text-xs text-[#88888880]'>{card.count}</span>
                <Image
                  alt='service image'
                  src={urlForImage(card.image).url()}
                  width={196}
                  height={209.37}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto',
                    maxHeight: '200px',
                  }}
                />

                <Image
                  alt='service image'
                  src={urlForImage(card.stars).url()}
                  width={128}
                  height={20}
                  style={{ objectFit: 'cover' }}
                />
                <p className='mt-4 text-[14px] text-[#888888]'>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-[60px] flex justify-center gap-x-8 pr-[10%]'>
        <button onClick={handlePrev} disabled={activeIndex === 0}>
          <ArrowIcon isActive={activeIndex > 0} side='left' />
        </button>
        <button
          onClick={handleNext}
          disabled={activeIndex === cards.length - 1}
        >
          <ArrowIcon isActive={activeIndex < cards.length - 1} side='right' />
        </button>
      </div>
    </div>
  );
};
