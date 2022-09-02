import { GetServerSideProps, NextPage } from 'next';
import { ICard } from '../../components/cards/types';
import { PhotoSlider } from '../../components/photoSlider/PhotoSlider';
import { TextItem } from '../../components/textItems/TextItem';
import styles from './mouse.module.scss';
import axios from 'axios';

interface KeyboardProps {
    mouseData: ICard;
}

const KeyboardItem: NextPage<KeyboardProps> = ({ mouseData }) => {
  const { title, price, img, text } = mouseData;
  return (
    <div className={styles.mouseItem}>
      <div className={styles.wrapperSlider}>
        <PhotoSlider img={img} />
      </div>
      <TextItem price={price} text={text} title={title} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseMouse = await axios.get<ICard>(
    `${process.env.REACT_APP_LOCALHOST}/mouse/${context.params.id}`
  );

  if (!responseMouse) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mouseData: responseMouse.data,
    },
  };
};

export default KeyboardItem;
