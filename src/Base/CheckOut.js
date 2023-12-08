import React from 'react';
import './CheckOut.css'; // Import your CSS file with the styles
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import the useSelector hook

const CheckOut = () => {
    // Access address data from the Redux store
    const addressData = useSelector((state) => state.address);
    
    return (
      <div>
        <div className='row'>
          <div className='col-lg-12 widget  bg-white' style={{border:'1px solid white',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <h4  style={{ color: "black",border:'1px solid #00000014',fontSize:'18px',backgroundColor:'#00000014'}} className='p-1'>
              <center>Delivery Address </center>
            </h4>
          
            {addressData && (
              <div className='mt-3'>
                <p>Street Address : <b style={{color:'rgb(74, 85, 104)'}}>{addressData.address}</b></p>
                <p>City : <b style={{color:'rgb(74, 85, 104)'}}>{addressData.City}</b></p>
                <p>Postal Code : <b style={{color:'rgb(74, 85, 104)'}}>{addressData.PostalCode}</b></p>
              </div>
            )}
          </div>
          
          <div className='col-lg-12 widget bg-white'  style={{border:'1px solid white',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
           <center><h5 style={{fontSize:'16px'}}>Choose Payment Method</h5></center> 
            <Link to="/cart/payments">
              <button className='p-2 w-100 mt-4'  style={{backgroundColor:'#0baf9a',border:'1px solid #0baf9a',
              color:'white',borderRadius:'5px',fontWeight:'500'}}>Proceed To Pay</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default CheckOut;
