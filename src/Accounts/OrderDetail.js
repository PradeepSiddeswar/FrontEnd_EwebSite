import React, { useEffect,useState } from 'react'

const OrderDetail = () => {
  const[data,setData]=useState([])

  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://postlogin.onrender.com/orders-details/getAll", requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error));
  })

  return (
    <div>
<div className='row'>
    <div className='col-lg-2'></div>
    <div className='col-lg-8'>
        {data.map((val)=>{
            return(
<div className='d-flex justify-content-evenly border m-3 p-3' style={{borderRadius:'10px'}}>
       <img src={val.im} style={{width:'60px',height:'60px'}}/>
       <p>{val.image}</p>     
       <p>{val.productName} </p>
       <p>{val.quantity} </p>
       <p>{val.price} </p>
            </div>
            )
        })}
        
    </div>
    <div className='col-lg-8'>
    <div className='d-flex justify-content-evenly border m-3 p-3' style={{borderRadius:'10px'}}>
      <div>
        <h3>Order Details</h3>
        <p>Invoice Number : 788152</p>
        <p>Invoice Date : 22 Dec,2019</p>
        <p>Recepits Voucher : 18KU-62IIK</p>
      </div>
      <div>
        <p>Total <span>$898.00</span></p>
        <p>Discount $19.00</p>
        <p>GST 18% 123</p>
        <p>Delivery Charges Free</p>
      </div>
        </div>
        </div>

</div>
    </div>
  )
}

export default OrderDetail