import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Hero.css"

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
        >
            <div>
                <SwiperSlide> <img src="https://images.unsplash.com/photo-1682687979601-082a1295b78f?w=900" alt="slide" /> </SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1725381783372-73852121febf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGUlMjBjb21tZXJjZXMlMjBzaXRlJTIwaW1nfGVufDB8fDB8fHww" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1603771929104-df2b577c8724?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGUlMjBjb21tZXJjZXMlMjBzaXRlJTIwaW1nfGVufDB8fDB8fHww" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1588848567248-8203ed798b4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGUlMjBjb21tZXJjZXMlMjBzaXRlJTIwaW1nfGVufDB8fDB8fHww" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1736427581296-313650053c2c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGUlMjBjb21tZXJjZXMlMjBzaXRlJTIwaW1nfGVufDB8fDB8fHww" alt="" /></SwiperSlide>
            </div>
        </Swiper>
    );
};

export default Hero;