import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AllProducts.css'

var settings = {
  

    dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
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

const AllProducts = () => {
    const arr = [
        {id:1,im:'https://images.pexels.com/photos/6466292/pexels-photo-6466292.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Hotels',para:'A Taste of Tradition and Innovation'},
        {id:1,im:'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Provision Stores',para:'From Our Shelves to Your Table, Always Fresh'},
        {id:1,im:'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Clothes',para:'Because every outfit tells a story'},
        {id:1,im:'https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Fruits',para:'Fruits for a Healthier, Happier You'},
        {id:1,im:'https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Furnitures',para:'Furniture that Speaks Comfort and Style'},
        {id:1,im:'https://images.pexels.com/photos/268364/pexels-photo-268364.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Bakery',para:'Where Every Bite Feels Like Home'},
        {id:1,im:'https://images.pexels.com/photos/269887/pexels-photo-269887.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Gift Center',para:'Curating Joyful Surprises for Every Occasion'},
        {id:1,im:'https://images.pexels.com/photos/2803295/pexels-photo-2803295.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Pets',para:'From Our Family to Yours: Happy Pets, Happy Hearts'},
        {id:1,im:'https://images.pexels.com/photos/7494029/pexels-photo-7494029.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Juice Center',para:'Sip the Difference, Taste the Freshness'},
        {id:1,im:'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Mobiles',para:'The Best Deals on the Latest Smartphones'},
        {id:1,im:'https://images.pexels.com/photos/2255924/pexels-photo-2255924.jpeg?auto=compress&cs=tinysrgb&w=1600',title:'Vegetables',para:'Fresh and Locally Sourced Produce'},


    
      ]
  return (
    <>
 <div>
      <div className='row mt-3'>
        <div className='col-lg-1'></div>
        <div className='col-lg-10'>
          <div className='row'>
            <h4>All Products</h4>
            <Slider {...settings}>
              {arr.map((val) => (
                <div className='col-lg-3 m-1 p-2'>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 10, left: 10, right: 0, backgroundColor: '#ffc500', color: 'white', padding: '10px', borderRadius: '10px',width:'200px' }}>
                      <center><b style={{fontSize:'18px',fontWeight:'500',color:'black'}}>{val.title}</b></center>
                    </div>
                    <img src={val.im} style={{ width: '100%', height: '250px', borderRadius: '10px' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '10px', borderRadius: '0 0 10px 10px' }}>
                     <center> <b style={{fontSize:'18px',fontWeight:'500'}}>{val.para}</b></center>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AllProducts