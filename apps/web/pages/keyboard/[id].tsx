import { GetServerSideProps, NextPage } from 'next';
import { ICard } from '../../components/cards/types';
import { PhotoSlider } from '../../components/photoSlider/PhotoSlider';
import styles from './keyboard.module.scss';
import axios from 'axios';
import { TextItem } from '../../components/textItems/TextItem';

interface KeyboardProps {
  keyboardData: ICard;
}

const KeyboardItem: NextPage<KeyboardProps> = ({ keyboardData }) => {
  const { title, price, img, text } = keyboardData;
  return (
    <div className={styles.keyboardItem}>
      <div className={styles.wrapperSlider}>
        <PhotoSlider img={img} />
      </div>
      <TextItem price={price} text={text} title={title} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseKeyboard = await axios.get<ICard>(
    `${process.env.REACT_APP_LOCALHOST}/kyboard/${context.params.id}`
  );

  if (!responseKeyboard) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      keyboardData: responseKeyboard.data,
    },
  };
};

export default KeyboardItem;
