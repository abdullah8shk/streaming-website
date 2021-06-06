import React from 'react';
import Slider from 'react-slick';
import leftArrow from '../assets/svg/leftArrow.svg';
import rightArrow from '../assets/svg/rightArrow.svg';
import play from '../assets/svg/playCircleWhite.svg';
import { Link } from 'react-router-dom';

export default function Rails(props) {
  const { title, data } = props;
  let slider;
  const railsSettings = {
    swipeToSlide: true,
    draggable: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1,
          style: { marginLeft: '25%', marginRight: '4%' },
        },
      },
    ],
  };

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  return (
    <div className='w-100 mt-3 rails'>
      <div className='d-flex justify-content-between'>
        <div className='rails__titleContainer'>
          <p className='rails__title'>{title}</p>
        </div>
        <div className='d-none d-sm-inline'>
          <button onClick={previous} className='btn p-0 bg-dark'>
            <img src={leftArrow} width='25' alt='left' />
          </button>
          <button onClick={next} className='btn p-0 bg-dark'>
            <img src={rightArrow} width='25' alt='right' />
          </button>
        </div>
      </div>
      <div className='railsSliderWrapper'>
        <Slider
          ref={(c) => (slider = c)}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
          {...railsSettings}>
          {data.map((item) => (
            <Link
              to='/play'
              key={item.id}
              className='card text-white d-flex justify-content-center'>
              <img src={item.image} className='card-img' alt='...' />
              <div className='card-img-overlay'>
                <span className='d-flex justify-content-center align-items-center'>
                  <img
                    className='play-button'
                    height='50'
                    width='50'
                    src={play}
                    alt=''
                  />
                </span>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
