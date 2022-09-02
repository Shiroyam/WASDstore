import { FC } from 'react';
import { useAppDispatch, useTypesSelector } from '../../hooks/useTypeSelector';
import { onClickBrand, onClickClear } from '../../redux/filter/reducer';
import { IFilter, Props } from './types';
import styles from './filter.module.scss';
import cn from 'classnames';
import { Button } from '../ui/Button/Button';

export const Filter: FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const { brandName } = useTypesSelector((state) => state.filter);
  return (
    <section className={styles.filter}>
      <div className={styles.brandWrapper}>
        <header className={styles.header}>БРЕНДЫ</header>
        {data.map((item: IFilter) => (
          <div
            onClick={() => dispatch(onClickBrand(item.name))}
            key={item._id}
            className={cn(
              styles.brands,
              brandName === item.name && styles.active
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
      <Button onClick={() => dispatch(onClickClear())}>Сбросить</Button>
    </section>
  );
};
