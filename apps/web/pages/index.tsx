import { GetServerSideProps } from 'next';
import { ICard } from '../components/cards/types';
import { Popular } from '../components/popular/Popular';
import { Preview } from '../components/preview/Preview';
import { Cards } from '../components/cards/Cards';
import axios from 'axios';

export function Index(data){
  return (
    <>
      <Preview />
      <Popular>
        {data.data.map((item: ICard) => (
          <Cards
            key={item._id}  
            title={item.title}
            titleImg={item.titleImg}
            _id={item._id}
            price={item.price}
          />
        ))}
      </Popular>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get<ICard>('http://localhost:3333/api/keyboard');

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default Index;
