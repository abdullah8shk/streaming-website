import React, { useState } from 'react';
import Slider from 'react-slick';
import leftArrow from '../assets/png/leftArrow.png';
import rightArrow from '../assets/png/rightArrow.png';
import { bannerData } from '../data/banner';
import { CircleChecked, CircleUnchecked } from '../Icons/SvgIcons';

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
        {currentIndex === i ? <CircleChecked /> : <CircleUnchecked />}
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
