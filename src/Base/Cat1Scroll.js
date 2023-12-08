import React, {  useEffect, useState } from "react";
// import React, {Component, useContext, useEffect, useState } from "react"; unused component
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ban from '../images/ban.jpg';
import veg from '../images/veg.png';
import black from '../images/black.png';





var settings = {
  

  dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,

     speed: 5000,
   autoplaySpeed: 1000,
  // cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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
function Cat1Scroll() {
  const arr = [
    {id:1,im:'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Comfy Sofa'},
    {id:1,im:'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Chair'},
    {id:1,im:'https://images.pexels.com/photos/1612726/pexels-photo-1612726.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Lamp'},
    {id:1,im:'https://images.pexels.com/photos/271696/pexels-photo-271696.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Dining Table'},

  ]
  
 


  return (
    <>
    
      
      
     <center >
        <div className='row ' style={{border:'1px solid #0000001a',borderRadius:'10px'}} >
                  
            <h4 style={{textAlign:'left'}} className="m-2">Furnitures</h4>
                <Slider {...settings}>
                {arr.map((val)=>{
                    return(
                        <div className="col-lg-2 m-1 p-3">
                            <img src={val.im} style={{width:'100%',height:'150px',borderRadius:'10px'}}/>
                             <center>{val.title}</center>
                        </div>
                    )
                })} 
               
     
                </Slider>
                </div>
     
     </center>
 
             

    </>
  );
}

export default Cat1Scroll;