import { FC } from 'react';
import { ISliderProps } from './types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './itemSlider.module.scss';
import 'swiper/css/navigation';
import 'swiper/css';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';

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
          425: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item) => (
          <>
            <SwiperSlide key={item._id}>
              <Link href={`/audio/${item._id}`}>
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
