import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { category } from './env';
// import React, {Component, useContext, useEffect, useState } from "react"; unused component
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




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
        slidesToShow: 2,
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
function CategoriesMob() {
  
    const [category1, setCategory1] = useState(null);
    const [data, setData] = useState([]);
  
    const functioncalling = (e) => {
      console.log("value is there ", e.target.value, e);
      myFun(e.target.value);
    }
  
    const myFun = (val) => {
      setCategory1(val);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
  
      fetch("https://postlogin.onrender.com/form/get", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result); // Log the API response for debugging
          setData(result);
        })
        .catch(error => console.log('error', error));
  
    }
 


  return (
    <>
    
      
      
     <center >
        <div className='row p-1' >
                  
        <center><h3 className='m-3'>Shop By Categories</h3></center>
                <Slider {...settings}>
                 
              
                {category.map((val) => (
          <div  key={val.name} style={{ border: '1px solid red', borderRadius: '10px' }}>
            <Link to={`/product/${val.name}?category=${val.name}`} style={{ textDecoration: 'none' ,color:'black'}}>
             <center ><img src={val.imageSrc} style={{ width: '50px', height: '50px' }} className='m-2'/></center>
              <center><p >{val.name}</p></center>
            </Link>
          </div>
        ))}
      
     
                </Slider>
                </div>
     
     </center>
 
             

    </>
  );
}

export default CategoriesMob;