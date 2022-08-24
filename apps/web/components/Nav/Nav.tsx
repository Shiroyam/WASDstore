import { FC } from 'react';
import { Logo } from '../logo/Logo';
import { navItems } from '../../helpers/data/navItems';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import styles from './nav.module.scss';

export const Nav: FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.items}>
        {navItems.map((navItem) => (
          <div className={styles.item} key={navItem.id}>
            {navItem.item}
          </div>
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
