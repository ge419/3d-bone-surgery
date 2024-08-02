'use client'
import React, {Component} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardVertical from './CardVertical';

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  
    return (
        <div className='w-[80%]'>
            <div className='mt-[4rem]'>
                <Slider {...settings}>
                    <CardVertical heading='Examination' context='ldjflkdjflkdjlfkjdkfjdlfkj' url='https://via.placeholder.com/800x400'/>
                    <CardVertical heading='3D Modeling' context='ldjflkdjflkdjlfkjdkfjdlfkj' url='https://via.placeholder.com/800x400'/>
                    <CardVertical heading='3D Design' context='ldjflkdjflkdjlfkjdkfjdlfkj' url='https://via.placeholder.com/800x400'/>
                    <CardVertical heading='Communication & Cofirm' context='ldjflkdjflkdjlfkjdkfjdlfkj' url='https://via.placeholder.com/800x400'/>
                    <CardVertical heading='3D Printing' context='ldjflkdjflkdjlfkjdkfjdlfkj' url='https://via.placeholder.com/800x400'/>
                    <CardVertical heading='Surgery' context='ldjflkdjflkdjlfkjdkfjdlfkj' url='https://via.placeholder.com/800x400'/>
                </Slider>
            </div>
        </div>
        
    );
  };

export default Carousel