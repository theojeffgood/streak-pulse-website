'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from './ResponsiveArrow.module.css';

export default function ResponsiveArrow() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const arrowSize = isMobile ? 68 : 100;

  return (
    <Image
      src="/arrow.png"
      alt="Arrow"
      width={arrowSize}
      height={arrowSize}
      className={styles.arrow}
    />
  );
} 