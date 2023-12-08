import React from 'react';
import { Carousel } from 'antd';
import furnitures from '../images/furnitures.png'
import gifts from '../images/gifts.png'
import juice from '../images/juice.jpeg'
import './Banner.css'


const contentStyle = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Banner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          <img src={furnitures} style={{width:'100%'}}/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img src={gifts} style={{width:'100%'}}/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img src={juice} style={{width:'100%'}}/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default Banner;