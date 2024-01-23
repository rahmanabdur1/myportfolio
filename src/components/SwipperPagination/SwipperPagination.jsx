// SwipperPagination.jsx
import React from 'react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const SwipperPagination = ({ swiper }) => {

  return (
   <div>
     <div className="swiper-pagination">
      {Array.from({ length: swiper?.slides.length }).map((_, index) => (
        <div key={index} className="swiper-pagination-bullet"></div>
      ))}
    </div>
   </div>
  );
};

export default SwipperPagination;
