import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type ChipProps = {
  children: React.ReactNode;
  hasBorderGradient?: boolean;
  className?: string;
  layout?: 'row' | 'column'; // 'row' for image and text in a row, 'column' for image above text
};

const Chip: React.FC<ChipProps> = ({
  children,
  hasBorderGradient = false,
  className = '',
  layout = 'column',
}) => {
  return hasBorderGradient ? (
    <div
      className={twMerge(
        'flex items-center justify-center gap-y-5 rounded-[30px] bg-gradient-to-b from-purple via-pink to-red-500 p-1 dark:from-gray-800',
        className
      )}
    >
      <div
        className={twMerge(
          'flex items-center justify-center rounded-[calc(1.5rem-1px)] bg-white p-12 dark:bg-gray-900',
          clsx({
            'flex-row': layout === 'row',
            'flex-col': layout === 'column',
          })
        )}
      >
        {children}
      </div>
    </div>
  ) : (
    <div
      className={twMerge(
        'flex items-center justify-center gap-y-5 rounded-[30px] border border-gray-200 bg-white px-12 dark:bg-gray-900',
        clsx({
          'flex-row': layout === 'row',
          'flex-col': layout === 'column',
        })
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
