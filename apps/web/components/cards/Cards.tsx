import { FC } from 'react';
import { ICard } from './types';
import styles from './cards.module.scss';
import Link from 'next/link';

export const Cards: FC<ICard> = ({ _id, price, title, titleImg, type }) => {
  return (
    <Link href={`/${type}/${_id}`}>
      <div className={styles.card}>
        <img className={styles.img} src={titleImg} alt={type} />
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>от {price} ₽</div>
      </div>
    </Link>
  );
};
