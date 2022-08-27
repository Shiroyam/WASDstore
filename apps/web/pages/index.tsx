import { GetServerSideProps } from 'next';
import { ICard } from '../components/cards/types';
import { Popular } from '../components/popular/Popular';
import { Preview } from '../components/preview/Preview';
import { Cards } from '../components/cards/Cards';
import { ItemsSlider } from '../components/itemsSlider/ItemSlider';
import { IAudio } from '../components/itemsSlider/types';
import axios from 'axios';
import styles from './index.module.scss';

export function Index({ keyboardData, audioData, accessorieData }) {
  return (
    <>
      <Preview />
      <Popular>
        {keyboardData.map((item: ICard) => (
          <Cards
            key={item._id}
            title={item.title}
            titleImg={item.titleImg}
            _id={item._id}
            price={item.price}
          />
        ))}
      </Popular>
      <section className={styles.slider}>
        <h3 className={styles.title}>Аудио</h3>
        <ItemsSlider data={audioData} />
      </section>
      <section className={styles.slider}>
        <h3 className={styles.title}>Мыши</h3>
        <ItemsSlider data={accessorieData} />
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseKeyboard = await axios.get<ICard[]>(
    'http://localhost:3333/api/keyboard'
  );
  const responseAudio = await axios.get<IAudio[]>(
    'http://localhost:3333/api/audio'
  );
  const responseAccessorie = await axios.get('http://localhost:3333/api/mouse')

  if (!responseKeyboard) {
    return {
      notFound: true,
    };
  }

  if (!responseAudio) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      keyboardData: responseKeyboard.data,
      audioData: responseAudio.data,
      accessorieData: responseAccessorie.data,
    },
  };
};

export default Index;
