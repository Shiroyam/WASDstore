import { FC } from 'react';
import { ICard } from './types';
import styles from './cards.module.scss';
import Link from 'next/link';

export const Cards: FC<ICard> = ({ _id, price, title, titleImg}) => {
  return (
    <Link href={`/keyboard/${_id}`}>
      <div className={styles.card}>
        <img className={styles.img} src={titleImg} alt="keyboard" />
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>от {price} ₽</div>
      </div>
    </Link>
  );
};