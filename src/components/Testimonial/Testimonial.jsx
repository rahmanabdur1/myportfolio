
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonial.css';
import { Keyboard, Pagination } from 'swiper/modules';
import rayhan from '../../assets/myskills/rayhan.jpg';
import abu from '../../assets/myskills/abu.jpg';
import hero from '../../assets/myskills/hero.jpg';
import imran from '../../assets/myskills/imran.jpg';

const testimonials = [
  {
    author: 'Rayhan Uddin Farhad',
    role: 'SWE Engineer',
    feedback:
      'Rahman is very smart and grasped ideas very quickly. In one of the high profile and critical automotive projects and creative person with a great programmer.',
      image:rayhan,
  },
  {
    author: 'Programming Hero',
    role: 'WEB Development Course',
    feedback:
      'Rahman was a Good Student in our Course, and during that time I found out that Rahman is a hard-working and creative person with a great programmer. ',
    image: hero,
  },
  {
    author: 'IMRAN',
    role: 'SWE Engineer',
    feedback:
      ' Rahman is a Good Softwere Developer.Generally he Disscuse for Any Programming Logic.I noticed on her learning ability.her learning ability is good.',
    image: imran,
  },
  {
    author: 'ABU',
    role: 'React Native',
    feedback:
      'I supervised Rahman  while he was a Good Learner, I also found him a team player who strongly apprehends the concepts of programming.',
    image: abu,
  },
];


const Testimonial = () => {
  const swiperBreakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  };

  return (
    <div className='testimonial-container'>
      <div className='container'>
        <Swiper
           breakpoints={swiperBreakpoints}
           spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, Pagination]}
          className="mySwiper"

          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='testimonial'>
                <div className='img'>
                  <img src={testimonial.image} alt={`Testimonial ${index + 1} Image`} />
                </div>
                <div className='content'>
                  <p>{testimonial.feedback}</p>
                  <div className='content_auth-role'>
                    <span>
                      {testimonial.author}
                    </span>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Testimonial;
