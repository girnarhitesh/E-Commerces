import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';
import { Row, Col } from 'antd';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Kids from '../../Categories/Kids/Kids';

const Hero = () => {
  return (
    <>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1567266230512-eabb325d4b62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBpbWd8ZW58MHx8MHx8fDA%3D"
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1600201319331-27d31ecd7850?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3BwaW5nJTIwaW1nfGVufDB8fDB8fHww"
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1728464864676-8504ab36f6d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcHBpbmclMjBpbWclMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1555448049-67b919120e75?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNob3BwaW5nJTIwaW1nJTIwcHJvZHVjdHMlMjB0b3lzfGVufDB8fDB8fHww"
            alt="slide"
          />
        </SwiperSlide>
      </Swiper>
<Kids/>

    </>
  );
};

export default Hero;