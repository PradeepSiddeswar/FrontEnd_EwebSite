






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBank2, BsCartCheck, BsCashCoin, BsPaypal, BsPlusCircle } from 'react-icons/bs';
import pay from '../images/pay.png'
import './PaymentForm.css'

const PaymentForm = () => {
  const locationInfo = useSelector((state) => state.location);

  const addressData = useSelector((state) => state.address);
  // const cartValue = useSelector((state) => state.cart.value);
  const cartValue = useSelector((state) => state.cart.value) || {};

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handlePaymentMethod = (method) => {
    if (method === 'COD') {
      setShowPopup(true);
    }
  };

  const navigateToTracking = () => {
    setShowPopup(false);

   

    const payload = Object.keys(cartValue).map((key) => {
      const item = cartValue[key];
    
      // Check if item and its properties are valid
      if (
        item &&
        item.id &&
        item.image &&
        item.name &&
        typeof item.price === 'number'
      ) {
        return {
          id: item.id,
          image: item.image,
          name: item.name,
          price: item.price,
          // Add other properties as needed
        };
      } else {
        // Handle invalid data or log the error
        console.error(`Invalid data for item with key ${key}`);
        return null; // Skip this item in the payload
      }
    });
    
    

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(payload);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

  //   fetch("https://postlogin.onrender.com/cart-total-price", requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log("API Response:", result);
  //       // Handle the API response here
  //     })
  //     .catch(error => console.log('API Error:', error));

  //   navigate('/tracking');
  // };

  fetch("https://postlogin.onrender.com/cart-total-price", requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(result => {
    console.log("API Response:", result);
    // Handle the API response here
  })
  .catch(error => console.error('API Error:', error));
  navigate('/tracking')
}

  const totalItems = Object.keys(cartValue).reduce(
    (accumulator, key) => accumulator + cartValue[key].count,
    0
  );
  
  const totalPrice = Object.keys(cartValue).reduce((accumulator, key) => {
    const item = cartValue[key].data;
    const itemCount = cartValue[key].count;
  
    // Ensure item.enterPrice is a valid string with a number and remove currency symbol
    const price = parseFloat(item?.enterPrice?.replace('₹', '')) || 0; // Remove ₹ and convert to float
    const count = parseInt(itemCount);
  
    if (!isNaN(price) && !isNaN(count)) {
      return accumulator + price * count;
    } else {
      // Handle invalid data or logging for debugging
      console.error(`Invalid price or count for item with key ${key}`);
      return accumulator;
    }
  }, 0);
  
  
  console.log('Cart Value:', cartValue);
  

  

  return (
    <div className="row">
      <center>
        <h4 className='mt-5'>Select Payment Method</h4>
      </center>
      <div className="col-lg-1"></div>
      <div className="col-lg-5 mt-5">
  <img
    src={pay}
    className="mt-5"
    style={{
      animation: 'moveImage 4s linear infinite', /* Adjust duration and iteration count as needed */
    }}
  />
</div>


      <div
        className="col-lg-5 mt-3"
        
      >
         <div className="d-flex justify-content-between p-2 "
          style={{border:'1px solid rgb(11 175 154 / 56%)',backgroundColor:'rgb(11 175 154)',height:'45px',borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px'}}>
          <p className='text-white '>Total Items in Cart <BsCartCheck/> : {totalItems}</p>
          {/* <p> &nbsp; &nbsp;Total Price: ₹{totalPrice}</p> */}
          <p className='text-white '>
  &nbsp; &nbsp;Total Price : ₹{isNaN(totalPrice) ? "Invalid Price" : totalPrice}
</p>

        </div>
        <div style={{
          // border: '1px solid #8080802e',
           backgroundColor: 'rgb(128 128 128 / 8%)',
          boxShadow: 'rgb(13 110 253 / 4%)',
          height:'70vh'
        }}>
       
        <div className='p-2'>
          {locationInfo && (
  <div>
    <p>
      <b>Hotel Location</b>: {locationInfo}
    </p>
  </div>
)}
          {addressData && (
            <div>
              <p>
                <b>User Location</b>: {addressData.address}, {addressData.City}, {addressData.PostalCode}
              </p>
            </div>
          )}
        </div>

        <div className="row m-3">
          <b>UPI</b>
          <div
            className="col-lg-12  mt-3 m-2"
            style={{
              border: '1px solid white',
              borderRadius:'10px',
              backgroundColor: 'white',
              boxShadow: 'rgb(13 110 253 / 4%)',
            }}
          >
             <div className='d-flex justify-content-between'>
            <p onClick={() => handlePaymentMethod('Credit Card')} className='pt-2 mt-1'>Add New UPI ID</p>
            <BsPlusCircle className='mt-3 m-2' style={{fontSize:'18px',color:'#0baf9a'}}/>
            </div>
          </div>
          <b className='mt-3'>Credit & Debit cards</b>
          <div
            className="col-lg-12  mt-3 m-2"
            style={{
              border: '1px solid white',
              borderRadius:'10px',
              backgroundColor: 'white',
              boxShadow: 'rgb(13 110 253 / 4%)',
            }}
          >
             <div className='d-flex justify-content-between'>
            <p onClick={() => handlePaymentMethod('Credit Card')} className='pt-2 mt-1'>Add New Card</p>
            <BsPlusCircle className='mt-3 m-2' style={{fontSize:'18px',color:'#0baf9a'}}/>
            </div>
          </div>
          <b className='mt-3'>More Payment Options</b>
          <div className='row bg-white mt-3 m-1' style={{borderRadius:'10px'}}>
          <div
            className="col-lg-12   "
            style={{
              border: '1px solid white',
              borderRadius:'10px',
              backgroundColor: 'white',
              boxShadow: 'rgb(13 110 253 / 4%)',
            }}
          >
            <div className='d-flex justify-content-between'>
            <p onClick={() => handlePaymentMethod('Credit Card')} className='pt-2 mt-1'>Net Banking</p>
            <BsBank2 className='mt-3' style={{fontSize:'18px',color:'#0baf9a'}}/>
            </div>
            <hr style={{border:'1px dotted black',marginTop:'-3px'}}/>
          </div>
         
          <div
            className="col-lg-12  "
            style={{
              border: '1px solid white',
              borderRadius:'10px',
              backgroundColor: 'white',
              boxShadow: 'rgb(13 110 253 / 4%)',
             
            }}
          >
             <div className='d-flex justify-content-between'>
            <p onClick={() => handlePaymentMethod('PayPal')} >Pay Later</p>
            <BsPaypal style={{fontSize:'18px',color:'#0baf9a'}}/>
            </div>
            <hr style={{border:'1px dotted black',marginTop:'-3px'}}/>
          </div>
         
          <div
            className="col-lg-12 "
            style={{
              border: '1px solid white',
              borderRadius:'10px',
              backgroundColor: 'white',
              boxShadow: 'rgb(13 110 253 / 4%)',
            }}
          >
             <div className='d-flex justify-content-between'>
            <p onClick={() => handlePaymentMethod('COD')} >Cash on Delivery</p>
            <BsCashCoin style={{fontSize:'18px',color:'#0baf9a'}}/>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>

      {/* Popup/Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className='p-3' style={{
              border: '1px solid rgb(5 230 255 / 30%)',
              borderRadius:'5px',
              position: 'fixed',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              zIndex: 999,
              boxShadow:' 0px 9px 30px rgb(5 138 255 / 21%)'
            }}>
              <p>Your order is placed. Redirecting to tracking...</p>
              <center>  <button onClick={navigateToTracking}
               style={{border:'1px solid #0baf9a',borderRadius:'5px',backgroundColor:'#0baf9a',color:'white',fontWeight:'bold'}}>Continue</button> </center>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PaymentForm;




