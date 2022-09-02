import { GetServerSideProps, NextPage } from 'next';
import { ICard } from '../../components/cards/types';
import { PhotoSlider } from '../../components/photoSlider/PhotoSlider';
import styles from './audio.module.scss';
import axios from 'axios';
import { TextItem } from '../../components/textItems/TextItem';

interface AudioProps {
    audioData: ICard;
}

const KeyboardItem: NextPage<AudioProps> = ({ audioData }) => {
  const { title, price, img, text } = audioData;
  return (
    <div className={styles.audioItem}>
      <div className={styles.wrapperSlider}>
        <PhotoSlider img={img} />
      </div>
      <TextItem price={price} text={text} title={title} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseAudio = await axios.get<ICard>(
    `${process.env.REACT_APP_LOCALHOST}/audio/${context.params.id}`
  );

  if (!responseAudio) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      audioData: responseAudio.data,
    },
  };
};

export default KeyboardItem;
