import { FC } from 'react';
import styles from './filter.module.scss';
import { IFilter, Props } from './types';

export const Filter: FC<Props> = ({ data }) => {
  return (
    <section className={styles.filter}>
      <div className={styles.brandWrapper}>
        <header className={styles.header}>БРЕНДЫ</header>
        {data.map((item: IFilter) => (
          <div key={item._id} className={styles.brands}>
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
};
