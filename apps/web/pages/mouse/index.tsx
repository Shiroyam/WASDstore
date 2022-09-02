import { GetServerSideProps, NextPage } from 'next';
import { ICard } from '../../components/cards/types';
import { IFilter } from '../../components/filter/types';
import { useTypesSelector } from '../../hooks/useTypeSelector';
import { Filter } from '../../components/filter/Filter';
import { Cards } from '../../components/cards/Cards';
import styles from './mouse.module.scss';
import axios from 'axios';

interface MouseProps {
  mousedData: ICard[];
  brandData: IFilter[];
}

const Mouse: NextPage<MouseProps> = ({ mousedData, brandData }) => {
  const { brandFlag, brandName } = useTypesSelector((state) => state.filter);

  return (
    <div className={styles.mousePage}>
      <div className={styles.wrapper}>
        <div className={styles.filterWrapper}>
          <Filter data={brandData} />
        </div>
        <div className={styles.card}>
          {mousedData
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
  const responseMouse = await axios.get<ICard[]>(
    `${process.env.REACT_APP_LOCALHOST}/mouse`
  );
  const responseBrand = await axios.get<IFilter[]>(
    `${process.env.REACT_APP_LOCALHOST}/brand/Mouse`
  );

  if (!responseMouse) {
    return {
      notFound: true,
    };
  }

  if (!responseBrand) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mousedData: responseMouse.data,
      brandData: responseBrand.data,
    },
  };
};

export default Mouse;
