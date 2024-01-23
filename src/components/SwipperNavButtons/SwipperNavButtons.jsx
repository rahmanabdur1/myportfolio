import React from 'react';
import { useSwiper } from 'swiper/react';

const SwipperNavButtons = () => {
    const swiper =useSwiper();
    return (
        <div>
             <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}></button>
      <button onClick={() => swiper.slideNext()}></button>
    </div>
        </div>
    );
};

export default SwipperNavButtons;