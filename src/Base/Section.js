import React from 'react'
import bb from '../images/bb.png';
import bc from '../images/bc.png';

const Section = () => {
    const textOverImageStyle = {
        position: 'relative',
      };
    
      const textStyle = {
        position: 'absolute',
        top: '40%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'left',
        color: 'black',
        zIndex: 1,
      };
     
  return (
   <>
   <div className='row'>
   <div className='col-lg-1'></div>
   <div className='col-lg-5' style={textOverImageStyle}>
          <img src={bb} alt="Background" style={{ width: '100%', height: '400px',borderRadius:'10px' }} />
          <div style={textStyle}>
            <p style={{color:'#0baf9a'}}>ORGANIC</p>
            <h2 style={{fontWeight:'bold',color:'white'}}>100% Fresh</h2>
            <h4 style={{color:'white'}}>Fruit & Vegetables</h4>
            <b style={{color:'white'}}>Free shipping on all your order. we<br/> deliver you enjoy</b><br/>
            <button className='mt-3 p-2' style={{border:'1px solid #0baf9a',borderRadius:'5px',backgroundColor:'#0baf9a',color:'white',fontWeight:'bold'}}>Shop Now</button>
          </div>
        </div>
        <div className='col-lg-5' style={textOverImageStyle}>
          <img src={bc} alt="Background" style={{ width: '100%', height: '400px',borderRadius:'10px' }} />
          <div style={textStyle}>
            <p style={{color:'#0baf9a'}}>ORGANIC</p>
            <h2 style={{fontWeight:'bold'}}>100% Fresh</h2>
            <h4 style={{color:'#4a5568'}}>Fruit & Vegetables</h4>
            <b style={{color:'#4a5568'}}>Free shipping on all your order. we<br/> deliver you enjoy</b><br/>
            <button className='mt-3 p-2' style={{border:'1px solid #0baf9a',borderRadius:'5px',backgroundColor:'#0baf9a',color:'white',fontWeight:'bold'}}>Shop Now</button>
          </div>
        </div>
   </div>
   </>
  )
}

export default Section