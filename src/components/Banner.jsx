import React, { useState } from 'react';
import Slider from 'react-slick';
import leftArrow from '../assets/png/leftArrow.png';
import rightArrow from '../assets/png/rightArrow.png';
import { bannerData } from '../data/banner';

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerSettings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    swipeToSlide: true,
    dots: true,
    infinite: true,
    draggable: true,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          bottom: '15px',
          borderRadius: '10px',
          padding: '10px',
        }}>
        <ul style={{ margin: '0px', color: '#fff' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='d-none d-md-block'>
        {currentIndex === i ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#FFFFFF'>
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
            <circle cx='12' cy='12' r='5' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='15px'
            viewBox='0 0 24 24'
            width='15px'
            fill='#FFFFFF'>
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
          </svg>
        )}
      </div>
    ),
    // beforeChange: (current, next) => setCurrentIndex(current),
    afterChange: (current) => setCurrentIndex(current),
  };
  return (
    <div className='banner-component'>
      <Slider
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
        {...bannerSettings}>
        {bannerData.map((item) => (
          <div className='banner-wrapper' key={item.id}>
            <img className='w-100' src={item.image} alt='' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <span onClick={onClick} className='slider-btns d-none d-md-block'>
      <img src={rightArrow} height='60' alt='' />
    </span>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <span onClick={onClick} className='slider-btns d-none d-md-block'>
      <img src={leftArrow} height='60' alt='' />
    </span>
  );
}
