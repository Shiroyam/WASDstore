import { FC } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import styles from "./PhotoSlider.module.scss"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface PhotoSliderProps {
  img: string[];
}

export const PhotoSlider: FC<PhotoSliderProps> = ({ img }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {img.map((item) => (
          <>
            <SwiperSlide>
              <img
                style={{ width: '100%', height: 'auto' }}
                src={item}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{ width: 'auto' }}
      >
        {img.map((item) => (
          <>
            <SwiperSlide>
              <img
                style={{ width: '100%', height: 'auto' }}
                src={item}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};
