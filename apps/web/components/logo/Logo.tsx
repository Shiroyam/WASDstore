import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './logo.module.scss';

export const Logo: FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src="/logoWASD.svg" alt="logoWASD" width={100} height={50} />
    </Link>
  );
};
