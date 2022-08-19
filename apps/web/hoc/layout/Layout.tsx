import { FC, ReactNode } from 'react';
import styles from './layout.module.scss';

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>nav</nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
};
