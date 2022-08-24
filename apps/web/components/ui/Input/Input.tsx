import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './input.module.scss';

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
}

export const Input: FC<IInput> = ({ children, className, ...props }) => {
  return <input className={cn(styles.input, className)} {...props}></input>;
};
