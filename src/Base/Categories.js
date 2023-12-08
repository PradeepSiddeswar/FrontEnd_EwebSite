import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { category } from './env';
import './Categories.css'

const Categories = () => {
  const [category1, setCategory1] = useState(null);
  const [data, setData] = useState([]);

  const functioncalling = (e) => {
    console.log("value is there ", e.target.value, e);
    myFun(e.target.value);
  }

  const myFun = (val) => {
    setCategory1(val);
    console.log(category1,"category1")
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

  // Define the background image style
  const rowStyle = {
    backgroundImage: `url("https://themes.pixelstrap.com/fastkart/assets/images/veg-3/home-bg.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '300px', // Adjust the height as needed
    position: 'relative',
  };

  return (
    <div >
   
      <div className='row p-3 mt-3'  >
      <div className='col-lg-1'></div>
      <div className='col-lg-11'>
      <h3 className='m-1 mb-3 text-left' style={{fontSize:'20px'}}>Shop By Categories</h3>
      <div className='row'  >
      {category.map((val) => (
          <div className='col-lg-1 m-2  ' key={val.name} >
            <div className='catHov' style={{ border: '1px solid rgba(149, 157, 165, 0.2)', borderRadius: '50px',width:'100px',height:'100px' ,backgroundColor:'rgb(11 175 154 / 12%)'}}>
            <Link to={`/product/${val.name}/selecteCategories/${val.name}`} style={{ textDecoration: 'none' ,color:'black'}}>
              
             <center ><img src={val.imageSrc} style={{ width: '50px', height: '50px' }} className='mt-4'/></center>
             
            </Link>
            </div>
            <center><p className='mt-1' style={{textTransform: 'capitalize',fontWeight:'500'}}>{val.name}</p></center>
          </div>
         

        ))}
      </div>
      </div>
       
        {data
          .filter(item => category1 != null ? item.name === category1 : item.name != "null")
          .map((item, index) => (
            <div className='col-lg-2 border m-2' key={index}>
              <Link to="productDetails">
                <p>image</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
