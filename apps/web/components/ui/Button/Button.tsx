import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
}

export const Button: FC<IButton> = ({ className, children, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
