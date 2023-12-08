import React, {  useEffect, useState } from "react";
// import React, {Component, useContext, useEffect, useState } from "react"; unused component
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ban from '../images/ban.jpg';
import veg from '../images/veg.png';
import black from '../images/black.png';
import './BannerMob.css'




var settings = {
  

  dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 2,

  //   speed: 5000,
  //   autoplaySpeed: 1000,
  // cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 5,
        infinite: true,
        dots: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 2,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
  ],
};
function BannerMob() {
  
  
 


  return (
    <>
    
      
      
     <center >
        <div className='row ' >
                  
            
                <Slider {...settings}>
                 
                <div >
        <img src={ban} style={{width:'100%',height:'300px'}}/>
        <div className="text-overlay">
                <p>Your Text Here</p>
              </div>
      </div>
      <div >
        <img src={veg} style={{width:'100%',height:'300px'}}/>
        <div className="text-overlay">
                <p>Your Text Here</p>
              </div>
      </div>
      <div >
        <img src={black} style={{width:'100%',height:'300px'}}/>
        <div className="text-overlay">
                <p>Your Text Here</p>
              </div>
      </div>
     
                </Slider>
                </div>
     
     </center>
 
             

    </>
  );
}

export default BannerMob;