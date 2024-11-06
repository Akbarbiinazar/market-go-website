"use client"
import { clsx, type ClassValue } from 'clsx';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useScreenDetector = () => {
  const [width, setWidth] = useState<number | undefined>(undefined); 

  const handleWindowSizeChange = () => {
    if (typeof window !== 'undefined') setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    }
  }
  }, []);

  const isMobile = width !== undefined && width <= 768;
  const isTablet = width !== undefined && width <= 1024;
  const isDesktop = width !== undefined && width > 1024;

  return { isMobile, isTablet, isDesktop };
};

