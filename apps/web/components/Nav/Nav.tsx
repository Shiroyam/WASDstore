import { FC } from 'react';
import { Logo } from '../logo/Logo';
import { navItems } from '../../helpers/data/navItems';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './nav.module.scss';
import Link from 'next/link';

export const Nav: FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <MenuIcon className={styles.menuItem} />
      <div className={styles.items}>
        {navItems.map((navItem) => (
          <Link href={`/${navItem.url}`} key={navItem.id}>
            <div className={styles.item}>{navItem.item}</div>
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
        <LoginIcon className={styles.icon} />
        <ShoppingCartIcon className={styles.icon} />
        <SearchIcon className={styles.icon} />
      </div>
    </div>
  );
};
