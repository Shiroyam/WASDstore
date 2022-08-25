import { FC, ReactNode } from 'react';
import styles from './popular.module.scss';

interface IPopular {
  children: ReactNode;
}

export const Popular: FC<IPopular> = ({ children }) => {
  return (
    <section className={styles.popular}>
      <h3 className={styles.title}>Популярные</h3>
      <div className={styles.card}>{children}</div>
    </section>
  );
};
