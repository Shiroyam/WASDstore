import { GetServerSideProps, NextPage } from 'next';
import { ICard } from '../../components/cards/types';
import { Cards } from '../../components/cards/Cards';
import { IFilter } from '../../components/filter/types';
import { Filter } from '../../components/filter/Filter';
import styles from './keyboard.module.scss';
import axios from 'axios';
import { useTypesSelector } from '../../hooks/useTypeSelector';
interface IKeyboardPage {
  keyboardData: ICard[];
  brandData: IFilter[];
}

const KeyboardPage: NextPage<IKeyboardPage> = ({ keyboardData, brandData }) => {
  const { brandFlag, brandName } = useTypesSelector((state) => state.filter);

  return (
    <div className={styles.keyboardPage}>
      <div className={styles.wrapper}>
        <div className={styles.filterWrapper}>
          <Filter data={brandData} />
        </div>
        <div className={styles.card}>
          {keyboardData
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
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseKeyboard = await axios.get<ICard[]>(
    `${process.env.REACT_APP_LOCALHOST}/keyboard`
  );
  const responseBrand = await axios.get<IFilter[]>(
    `${process.env.REACT_APP_LOCALHOST}/brand/Keyboard`
  );

  if (!responseKeyboard) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      keyboardData: responseKeyboard.data,
      brandData: responseBrand.data,
    },
  };
};

export default KeyboardPage;
