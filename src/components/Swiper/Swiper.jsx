import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classes from './Swiper.module.sass';
import './swiper.css'

export default () => {
    return (
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={classes.swiper}
      >
        <SwiperSlide>
          <div className={classes.slide}>
            <div className={`${classes.slide__text} container`}>
              <div className={classes.slide__text_end}>
                <h1>1</h1>
                <hr />
                <p>Feel the work of our bot on mobile devices,<br/>the possibility of voice control as well as the intelligent<br/> ability to control your device</p>
              </div>
              <h2>Our bot works the<br/>same way on mobile<br/> devices</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={classes.slide}>
            <div className={`${classes.slide__text} container`}>
              <div className={classes.slide__text_end}>
                <h1>1</h1>
                <hr />
                <p>Feel the work of our bot on mobile devices,<br/>the possibility of voice control as well as the intelligent<br/> ability to control your device</p>
              </div>
              <h2>Our bot works the<br/>same way on mobile<br/> devices</h2>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    );
};

