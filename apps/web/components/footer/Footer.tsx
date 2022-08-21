import { FC } from 'react';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import styles from './footer.module.scss';

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.subscribeWrapper}>
        <p className={styles.header}>Присоединиться к WASD сегодня!</p>
        <Input
          className={styles.input}
          type="email"
          placeholder="Email адрес"
        ></Input>
        <Button>Подписаться</Button>
      </div>
      <div className={styles.icons}>
        <TelegramIcon fontSize="large" className={styles.icon} />
        <FacebookIcon fontSize="large" className={styles.icon} />
        <InstagramIcon fontSize="large" className={styles.icon} />
        <TwitterIcon fontSize="large" className={styles.icon} />
        <RedditIcon fontSize="large" className={styles.icon} />
      </div>
      <div className={styles.copyright}>
        <a className={styles.created} href="https://github.com/Shiroyam">
          Created by Shiroyam
        </a>
        <div className={styles.text}>Copyright © 2022 WASDstore</div>
      </div>
    </div>
  );
};
