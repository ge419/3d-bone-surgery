'use client'
import React, {Component} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardVertical from './CardVertical';
import ExaminationImg from '@/public/images/forpatients/Examination1.png'
import DesignImg from '@/public/images/forpatients/design1.png'
import CommunicationImg from '@/public/images/forpatients/communication.jpg'
import PrintingImg from '@/public/images/forpatients/printing.jpg'
import CheckImg from '@/public/images/forpatients/check.png'
import SurgeryImg from '@/public/images/forpatients/aftersurgery.jpg'

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
        <div className='w-[80%] relative m-auto left-0 right-0 mt-[2rem]'>
                <Slider {...settings}>
                    <CardVertical heading='Examination' context='ldjflkdjflkdjlfkjdkfjdlfkj' url={ExaminationImg}/>
                    <CardVertical heading='3D Design' context='ldjflkdjflkdjlfkjdkfjdlfkj' url={DesignImg}/>
                    <CardVertical heading='Communication & Cofirm' context='ldjflkdjflkdjlfkjdkfjdlfkj' url={CommunicationImg}/>
                    <CardVertical heading='3D Printing' context='ldjflkdjflkdjlfkjdkfjdlfkj' url={PrintingImg}/>
                    <CardVertical heading='Pre Operation Check' context='ldjflkdjflkdjlfkjdkfjdlfkj' url={CheckImg}/>
                    <CardVertical heading='Surgery' context='ldjflkdjflkdjlfkjdkfjdlfkj' url={SurgeryImg}/>
                </Slider>
        </div>
        
    );
  };

export default Carousel