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
function CatScroll() {
  const arr = [
    {id:1,im:'https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?b=1&s=612x612&w=0&k=20&c=1AJ_DbtX-tJZsdh8ujrvg5Q7Xl2BWi1wL7pkVSxv0LQ=',title:'Veg Hotels'},
    {id:1,im:'https://images.pexels.com/photos/18510254/pexels-photo-18510254/free-photo-of-soup-with-seafood.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Non-Veg Hotels'},
    {id:1,im:'https://images.pexels.com/photos/5947108/pexels-photo-5947108.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Hotels'},
    {id:1,im:'https://images.pexels.com/photos/5947108/pexels-photo-5947108.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Hotels'},

  ]
  
 


  return (
    <>
    
      
      
    
        <div className='row ' style={{border:'1px solid #0000001a',borderRadius:'10px'}} >
                  
            <h4 style={{textAlign:'left'}} className="m-2">Hotels</h4>
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
     
  
 
             

    </>
  );
}

export default CatScroll;