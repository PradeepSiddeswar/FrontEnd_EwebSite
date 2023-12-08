import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import './ProductDetailsPage.css'
import Cart from "./Cart";
import { addCart, removeCart } from "../Reducer/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import CartMain from "./Cart";
import cafe from '../images/cafe.jpeg'
function ProductDetailsPage() {
  const { _id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const dispatch = useDispatch();
  const cartValue = useSelector((state) => state.cart);
  const [value,setvalue]=useState(null)
  useEffect(() => {
    
setvalue(cartValue.value)
    console.log(value)
    if (_id) {
      // Define the API URL
      const apiUrl = `https://postlogin.onrender.com/form/items/${_id}`;

      // Make a GET request to the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Assuming the API response is an object with properties like 'name', 'selecteCategories', 'selectProduct', and 'offers'
          setItem(data);
          setLoading(false);
          console.log(item,"mn")
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [_id,cartValue["value"]]);

  const addToCart = (product, offer) => {
    // Check if the product is already in the cart
    const existingItemIndex = cart.findIndex((item) => item.product === product);

    if (existingItemIndex !== -1) {
      // If it exists, update the quantity by +1
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If it doesn't exist, add it to the cart with a quantity of 1
      const newItem = { product, offer, quantity: 1 };
      setCart([...cart, newItem]);
    }

    calculateTotalCart([...cart, existingItemIndex !== -1 ? cart[existingItemIndex] : { product, offer, quantity: 1 }]);
  };

  const removeFromCart = (product) => {
    // Find the index of the product in the cart
    const productIndex = cart.findIndex((item) => item.product === product);

    if (productIndex !== -1) {
      // If it exists in the cart, decrement the quantity by 1
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity -= 1;

      // Remove the item from the cart if quantity reaches 0
      if (updatedCart[productIndex].quantity === 0) {
        updatedCart.splice(productIndex, 1);
      }

      setCart(updatedCart);
      calculateTotalCart(updatedCart);
    }
  };

  const calculateTotalCart = (updatedCart) => {
    let total = 0;
    for (const item of updatedCart) {
      total += item.quantity * item.offer.enterPrice;
    }
    setTotalCart(total);
  };

  useEffect(() => {
    if (item) {
      console.log(item, "mn");
    }
  }, [item]);
  
  return (
    <>
    <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
      <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : item ? (
        <div>
          
          <h2 className="mt-3" style={{fontSize:'18px'}}>{item.selecteCategories || "N/A"}</h2>
          <hr style={{width:'100px'}}/>
          <h2 className="mt-3" style={{textTransform:'capitalize',fontSize:'26px'}}>{item.name}</h2>
         
          <p> {item.selectecategories}</p>
          {item.selectProduct ? (
            <div>
            
              <div className="row p-3">
                {item.selectProduct.map((product, index) => {
                  const productsArray = product.split(",");

                  return productsArray.map((category, itemIndex) => {
                    console.log(category.trim(), "hh");

                    // Ensure that the offers array has the same length as the productsArray
                    const categoryOffers =
                      Array.isArray(item.offers) &&
                      item.offers.length === productsArray.length
                        ? item.offers[itemIndex]
                        : {};

                    // Check if the product is already in the cart
                    const isProductInCart = cart.some(
                      (cartItem) => cartItem.product === category
                    );

                    return (
                      <div className="col-lg-3  m-2 p-2 position-relative" key={itemIndex} >
                         <div className='position-relative p-2' style={{ color: 'black', border: '1px solid #00000014' ,backgroundColor:'white'}}>
  <span className="position-absolute top-10 end-80 translate-start  p-1 text-white" style={{backgroundColor:'rgb(11, 175, 154)',fontWeight:'bold',textTransform: 'capitalize',fontSize:'12px'}}>
  {categoryOffers.tagline}
    <span className="visually-hidden">unread messages</span>
  </span>
                                <img src={cafe} style={{width:'100%',height:'150px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>

                        <p className='p-1' style={{ fontWeight: 'bold',color:'black',fontWeight: '500',
   
   fontSize: '18px',
   lineHeight: '24px',
   letterSpacing: '.01em',
   color:' #121415',textTransform: 'capitalize' }}>{category.trim()}</p>
  
                        {categoryOffers && (
  <div>
    <div className="d-flex justify-content-between" style={{marginTop:'-25px'}}>
    <b className='p-2' style={{color:'#e25100'}}>  ₹{categoryOffers.enterPrice}
    <span style={{fontSize:'12px',color:'black'}}> {categoryOffers.enterOffer}%</span></b>
    </div>
    <div className="mt-1">
  
    {String(categoryOffers._id) in cartValue.value ? (
  <div >
    <button className="p-2 " onClick={() => dispatch(addCart({ "id": categoryOffers._id, "data": categoryOffers }))} 
    style={{borderRightColor:'#0baf9a',border:'1px solid #0baf9a',borderRightColor:'#0baf9a',borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px',
    backgroundColor:'#0baf9a',color:'white',fontWeight:'bold'}}>+ &nbsp; {cartValue.value[categoryOffers._id].count}</button>
  
    <button className="p-2" onClick={() => dispatch(removeCart(categoryOffers._id))}
     style={{borderLeftColor:'#0baf9a',border:'1px solid #0baf9a',borderTopRightRadius:'5px',borderBottomRightRadius:'5px',backgroundColor:'#0baf9a',color:'white',fontWeight:'bold'}}>-</button>
  </div>
) : (
  <button onClick={() => dispatch(addCart({ "id": categoryOffers._id, "data": categoryOffers }))} 
  style={{border:'1px solid #0baf9a',borderLeftColor:'#0baf9a',backgroundColor:'white',color:'black',fontWeight:'500',width:'100%',textTransform:'capitalize',fontSize:'14px'}} className="p-1">add to cart</button>
)}
</div>

      {/* {String(categoryOffers._id) in cartValue.value?
       <div>
       <button onClick={() => dispatch(addCart({"id":categoryOffers._id,"data":categoryOffers}))}>+</button>
       <button onClick={() => dispatch(removeCart(categoryOffers._id))}>-</button>
       </div>:
     <button onClick={() => dispatch(addCart({"id":categoryOffers._id,"data":categoryOffers}))}>add</button>
      } */}
      
      
    {/* <button
      onClick={() => addToCart(category, categoryOffers)}
    >
      Add to Cart {isProductInCart ? cart.find((item) => item.product === category).quantity : null}
    </button> */}
    {/* {isProductInCart && (
      <button
        onClick={() => removeFromCart(category)}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    )} */}
  </div>
)}
</div>
                      </div>
                    );
                  });
                })}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <p>Item not found</p>
      )}

  
{cart.length > 0 && <Cart cart={cart} removeFromCart={removeFromCart} totalCart={totalCart} />}


          
{cart.length > 0 && (
        <div className="cart-container">
          <h3>Shopping Cart</h3>
          <div className="d-flex justify-content-between">
            <p>Total Items: {cart.length} | Total Count: {totalCart}</p>
            <Link to="/cart">View Cart</Link>
          </div>
         
        </div>
      )}

      {/* Shopping Cart */}
{/* <div className="cart-container">
  <h3>Shopping Cart</h3>
  <div className="d-flex justify-content-between">
 <p>   Total Items: {cart.length} | Total Count: {totalCart}</p>
    <Link to="/cart">View Cart</Link>
  </div>
  <ul>
    {cart.map((item, index) => (
      <li key={index}>
        {item.product} - Quantity: {item.quantity} - Price: {item.offer.enterPrice}{" "}
        <button onClick={() => removeFromCart(item.product)}>Remove</button>
      </li>
    ))}
  </ul>
  <p>Total Cart Value: {totalCart}</p>
</div> */}


    </div>
      </div>

    </div>
    
    </>
  );
}

export default ProductDetailsPage;