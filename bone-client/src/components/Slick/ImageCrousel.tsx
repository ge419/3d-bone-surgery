'use client'
import React, {Component} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Image1 from '@/public/images/amputation/animalTest.jpg';
import Image2 from '@/public/images/amputation/bunny.jpg'
import Image3 from '@/public/images/amputation/model1.jpg'

const ImageCarousel = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
      };
  
    return (
        <div className='w-[80%] relative m-auto left-0 right-0 mt-[2rem]'>
                <Slider {...settings}>
                  <Image src={Image1} alt="profile" className='rounded-lg'/>
                  <Image src={Image3} alt="profile" className='rounded-lg'/>
                  <Image src={Image2} alt="profile" className='rounded-lg'/>
                </Slider>
        </div>
        
    );
  };

export default ImageCarousel