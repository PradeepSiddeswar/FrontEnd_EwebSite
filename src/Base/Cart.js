// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux';

// const CartMain = ()=>{
//   const cartValue = useSelector((state) => state.cart);
//    useEffect(()=>{

//    },[cartValue])
//   return(
//     <>
//      {Object.keys(cartValue.value).map((key) => {
//           const item = cartValue.value[key].data; // Extract the inner data

//           return (
//             <div className='row'>
//             <div className='col-lg-2 border m-2' key={key}>
//               <h3>ID: {key}</h3>
//               <p>Count: {cartValue.value[key].count}</p>
//               <p>Price: {item.enterPrice}</p>
//               <p>Offer: {item.enterOffer}</p>
//               <p>Tagline: {item.tagline}</p>
//               {/* You can render the image here if you have the URL */}
//               <img src={item.image} alt={`Image for ${key}`} />
//             </div>
//             </div>
//           );
//         })}

//     </>
//   )
// }

// export default CartMain

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../Reducer/cartReducer";
import DeliveryAddress from "./DeliveryAddress";
import { setAddressFormData } from "../Reducer/deliveryAddressReducer"; // Import the action
import { BsMinecartLoaded,BsChevronRight } from "react-icons/bs";
import cafe from '../images/cafe.jpeg'
const CartMain = () => {
  const cartValue = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    // Dispatch the removeCart action with the itemId
    dispatch(removeCart(itemId));
  };

  useEffect(() => {
    // Your useEffect logic here
  }, [cartValue]);

  // Calculate total items in the cart
  const totalItems = Object.keys(cartValue.value).reduce(
    (accumulator, key) => accumulator + cartValue.value[key].count,
    0
  );

  // Calculate total price of items in the cart
  const totalPrice = Object.keys(cartValue.value).reduce((accumulator, key) => {
    const item = cartValue.value[key].data;
    const itemCount = cartValue.value[key].count;
    return accumulator + item.enterPrice * itemCount;
  }, 0);

  // Format the total price in INR (Indian Rupees)
  const formattedTotalPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(totalPrice);

  const handleAddressSubmit = (address) => {
   
    dispatch(setAddressFormData({ locationName: address }));
  };

  const rowStyle = {
    backgroundImage: `url("https://themes.pixelstrap.com/fastkart/assets/images/veg-3/home-bg.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // minHeight: '300px', 
    height:'auto',
    position: 'relative',
  };
  if (Object.keys(cartValue.value).length === 0) {
    return <div>
      <center>Your cart is empty!</center>
    </div>;
  }
  return (
    <>
   
      <div className="row" style={{border:'1px solid #f8f8f8',backgroundColor:'#f8f8f8'}}>
      <div className="d-flex justify-content-evenly">
      <h2 className="p-3">cart</h2>
      <p className="p-3 mt-2" style={{fontSize:'18px'}}><BsMinecartLoaded/> <BsChevronRight/> cart</p>
</div>
      </div>
     
      <div className="row " style={{backgroundColor:'#f8f8f8',height:'100vh'}}>
        <div className="col-lg-1"> </div>
        <div className="col-lg-3">
          {" "}
          <DeliveryAddress onAddressSubmit={handleAddressSubmit} />
        </div>
        <div className="col-lg-5 mt-1" >
          {Object.keys(cartValue.value).map((key) => {
            const item = cartValue.value[key].data; // Extract the inner data

            return (
              <div className="row" key={key} >
                  {/* <div
                  className="col-lg-1"></div> */}
                <div
                  className="col-lg-12 m-2"  
                 
                >
                  <div className="p-3 bg-white" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                  {/* <p>Selected Categories: {selectedCategories}</p>  */}

                 
              {/* <p>Count: {cartValue.value[key].count}</p> */}
                  {/* <img src={item.image} alt={`Image for ${key}`} /> */}
                  <div className="d-flex justify-content-between">
                    <div style={{border:'1px solid rgb(128 128 128 / 0%)',backgroundColor:'rgb(128 128 128 / 3%)'}} className="p-3"> 
                     <img src={cafe} style={{width:'160px',height:'90px'}} className="mt-3"/></div>
                    <div >
                    <h3 style={{fontSize:'16px'}}>ID: {key}</h3>
                      <p style={{textTransform:'capitalize'}}>totalItems :<span> {cartValue.value[key].count}</span><br/>
                      Price : <span >₹{item.enterPrice}</span><br/>
                       Offer : <span >{item.enterOffer}%</span></p>
                      <div >
                      <button className="mt-1"
                        onClick={() => handleRemoveItem(key)}
                        style={{
                          border: "1px solid #0baf9a",
                         
                          backgroundColor: "white",
                          color: "#0baf9a",
                          fontWeight: "500",
                          width:'100%'
                        }}
                      >
                        Remove
                      </button>{" "}
                      
                    </div>
                    </div>
                    {/* <div className="mt-3">
                      <button
                        onClick={() => handleRemoveItem(key)}
                        style={{
                          border: "1px solid #0baf9a",
                          borderRadius: "5px",
                          backgroundColor: "#0baf9a",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        Remove
                      </button>{" "}
                      
                    </div> */}
                    <div >
                      {" "}
                      <p>
                        Total Price :{" "}
                        <b>₹{item.enterPrice * cartValue.value[key].count}</b>
                      </p>{" "}
                      {/* Total price for this item */}
                    </div>
                  </div>
                  </div>

                  {/* You can render the image here if you have the URL */}
                </div>
                {/* <hr style={{color:'#0000004a'}} className="m-5"/> */}
              </div>
            );
          })}
        </div>
        <div className="col-lg-2 m-3">
          <div
            className="bg-white"
            style={{
              border: "1px solid white",
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            }}
          >
            <h4 className="m-2 p-1" style={{ color: "black",border:'1px solid #00000014',fontSize:'18px',backgroundColor:'#00000014'}}>
             <center> Cart Summary</center>
            </h4>
            {/* <hr className="m-2" /> */}
           
            <div className="d-flex justify-content-between m-2 mt-3">
              <p>Total Items in Cart: </p>
              <b>{totalItems}</b>
            </div>
            <div className="d-flex justify-content-between m-2">
              <p>Delivery Tip </p>
              <b style={{fontSize:'12px'}} className="text-danger">Add Tip</b>
            </div>
            <hr className="m-2" />
            <div className="d-flex justify-content-between m-2">
              <p>Total Price: </p>
              <b>{formattedTotalPrice}</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartMain;
