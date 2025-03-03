// Import necessary libraries and styles
import  { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Create the Slider component
const Slick = () => {
  useEffect(() => {
    // Initialize the slick slider using React Slick
    const sliderSettings = {
      slidesToShow: 3,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
  
    // Use React Slick to initialize the slider
    const slickSlider = new Slider('.slider', sliderSettings);
  
    // Clean up the slider when the component unmounts
    return () => {
      slickSlider.destroy();
    };
  }, []); // Empty dependency array ensures that the effect runs only once after initial render
  
  return (
    <div className="slider">
      <div className="item">
        <div className="back-con">
          <div className="back" style={{ backgroundColor: 'red' }}></div>
        </div>
      </div>
      <div className="item">
        <div className="back-con">
          <div className="back" style={{ backgroundColor: 'blue' }}></div>
        </div>
      </div>
      <div className="item">
        <div className="back-con">
          <div className="back" style={{ backgroundColor: 'green' }}></div>
        </div>
      </div>
      <div className="item">
        <div className="back-con">
          <div className="back" style={{ backgroundColor: 'skyblue' }}></div>
        </div>
      </div>
      <div className="item">
        <div className="back-con">
          <div className="back" style={{ backgroundColor: 'darkblue' }}></div>
        </div>
      </div>
      <div className="item">
        <div className="back-con">
          <div className="back" style={{ backgroundColor: 'gold' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Slick;
