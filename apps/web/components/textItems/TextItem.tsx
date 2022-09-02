import { FC } from 'react';
import { Button } from '../ui/Button/Button';
import styles from './textItem.module.scss';

interface TextItemsProps {
  title: string;
  text: string;
  price: string;
}

export const TextItem: FC<TextItemsProps> = ({ price, text, title }) => {
  return (
    <div className={styles.textItem}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
      <div className={styles.price}>{price} ₽</div>
      <Button>Добавить в корзину</Button>
    </div>
  );
};
