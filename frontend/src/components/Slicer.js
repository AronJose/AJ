import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import html from '../Assets/html.png';
import js from '../Assets/js.png';
import react from '../Assets/React.png';
import next from '../Assets/next.jpg';
import node from '../Assets/node.png';
import css from '../Assets/css.png';
import tailwind from '../Assets/tailwindcss.png';
import materialUi from '../Assets/materialui.png';
import angular from '../Assets/angular.png';
import springboot from '../Assets/springboot.png';

function Slicer() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='mt-[50px]'>
      <Slider {...settings}>
        <div>
          <img src={html} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
        <div>
          <img src={js} alt='' className='md:w-[200px] sm:w-[250px] ' />
        </div>
        <div>
          <img src={react} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
        <div>
          <img src={next} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
        <div>
          <img src={node} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
        <div>
          <img src={css} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
        <div>
          <img src={tailwind} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
        <div>
          <img src={materialUi} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
        <div>
          <img src={angular} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
        <div>
          <img src={springboot} alt='' className='md:w-[200px] sm:w-[250px]' />
        </div>
      </Slider>
    </div>
  )
}

export default Slicer