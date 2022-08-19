import { FC, ReactNode } from 'react';
import { Footer } from '../../components/footer/Footer';
import { Nav } from '../../components/nav/Nav';
import styles from './layout.module.scss';

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Nav />
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};
