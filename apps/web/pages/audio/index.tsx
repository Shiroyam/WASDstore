import { GetServerSideProps, NextPage } from 'next';
import { ICard } from '../../components/cards/types';
import { Cards } from '../../components/cards/Cards';
import { IFilter } from '../../components/filter/types';
import { Filter } from '../../components/filter/Filter';
import styles from './audio.module.scss';
import axios from 'axios';
import { useTypesSelector } from '../../hooks/useTypeSelector';

interface IAudioPage {
  audioData: ICard[];
  brandData: IFilter[];
}

const AudioPage: NextPage<IAudioPage> = ({ audioData, brandData }) => {
  const { brandFlag, brandName } = useTypesSelector((state) => state.filter);

  return (
    <div className={styles.audioPage}>
      <div className={styles.wrapper}>
        <div className={styles.filterWrapper}>
          <Filter data={brandData} />
        </div>
        <div className={styles.card}>
          {audioData
            .filter((item: ICard) => {
              if (brandFlag) {
                return item.brand === brandName;
              }
              return true;
            })
            .map((item: ICard) => (
              <Cards
                key={item._id}
                title={item.title}
                titleImg={item.titleImg}
                _id={item._id}
                price={item.price}
                brand={item.brand}
                type={item.type}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseKeyboard = await axios.get<ICard[]>(
    `${process.env.REACT_APP_LOCALHOST}/audio`
  );
  const responseBrand = await axios.get<IFilter[]>(
    `${process.env.REACT_APP_LOCALHOST}/brand/Audio`
  );

  if (!responseKeyboard) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      audioData: responseKeyboard.data,
      brandData: responseBrand.data,
    },
  };
};

export default AudioPage;
