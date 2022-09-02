import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './itemSlider.module.scss';
import 'swiper/css/navigation';
import 'swiper/css';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';
import { ICard } from '../cards/types';

interface ISliderProps {
  data: ICard[];
}

export const ItemsSlider: FC<ISliderProps> = ({ data }) => {
  return (
    <div className={styles.itemSlider}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
          1290: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 4,
          }
        }}
      >
        {data.map((item) => (
          <>
            <SwiperSlide key={item._id}>
              <Link href={`/${item.type}/${item._id}`}>
                <div className={styles.item}>
                  <img className={styles.img} src={item.titleImg} alt="audio" />
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.price}>от {item.price} ₽</div>
                </div>
              </Link>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};
