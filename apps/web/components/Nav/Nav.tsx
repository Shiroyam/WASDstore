import { FC } from 'react';
import { Logo } from '../logo/Logo';
import styles from './nav.module.scss';

export const Nav: FC = () => {
  return (
    <div className={styles.nav}>
      <Logo />
    </div>
  );
};
