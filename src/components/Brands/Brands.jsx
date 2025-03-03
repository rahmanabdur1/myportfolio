
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel} from 'swiper/modules';

import './Brands.css';
import brand1 from '../../assets/myskills/brand-2.svg';
import brand2 from '../../assets/myskills/brand-3.svg';
import brand3 from '../../assets/myskills/brand-4.svg';
import brand4 from '../../assets/myskills/brand-5.svg';
import brand5 from '../../assets/myskills/brand-6.svg';
import brand6 from '../../assets/myskills/brand-7.svg';
import brand7 from '../../assets/myskills/brand-1.svg';

const servicesData = [
    { imgSrc: brand1 },
    { imgSrc: brand2 },
    { imgSrc: brand3 },
    { imgSrc: brand4 },
    { imgSrc: brand5 },
    { imgSrc: brand6 },
    { imgSrc: brand7 },
];

const Brands = () => {
    return (
        <div className='brands-container' >
            <div className='brands'>
                <Swiper
                    direction={'horizontal'}
                    slidesPerView={2}
                    spaceBetween={6}
                    breakpoints={{
                       
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                          },
                      }}
                    mousewheel={true}
                    modules={[Mousewheel]}
                    className="mySwiper"
                >
                    {servicesData.map((service, index) => (
                        <SwiperSlide key={index}>
                            <img key={index} src={service.imgSrc} alt={`Brand ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Brands;
