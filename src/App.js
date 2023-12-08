import React, { useState ,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Accounts/Registration";
import Home from "./Base/Home";
import Navbar from "./Base/Navbar";
import CustomerRegistration from "./Accounts/CustomerRegistration";
import HotelCategory from "./categorys/HotelCategory";
import PostCategoryForm from "./Base/PostCategoryForm";
import Cart from "./Base/Cart";
// import { Databycategory } from './categorys/Databycategory';
import ProductDetails from "./Base/ProductDetails";
import ProductDetailsPage from "./Base/ProductDetailsPage";
import Customer from "./Accounts/Customer";
import Check from "./Accounts/Check";
import ParentComponent from "./Base/ParentComponent";
import DeliveryAddress from "./Base/DeliveryAddress";

import PaymentForm from "./Base/PaymentForm";
import TrackingMap from "./Base/TrackingMap";
import MobileSidebar from "./Base/MobileSidebar";
import DeliveryForm from "./Accounts/DeliveryForm";
import DeliveryDashboard from "./Accounts/DeliveryDashboard";
// import { Provider } from "react-redux"; // Import Provider
// import { store } from "./rdx/store";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  
  return (
    // <Provider store={store}>
    <Router>
      <div className="App">
        {/* <Navbar userName={name} userEmail={email} /> */}
        <div
    className="d-none d-sm-block">
        <Navbar userName={userName} userEmail={userEmail} />
        </div>

        <div className="row d-lg-none">
        <MobileSidebar/>
        </div>
    
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/registration"
            element={
              <Registration
                setUserName={setUserName}
                setUserEmail={setUserEmail}
              />
            }
          ></Route>
          <Route
            path="/customerregistration"
            element={<Customer/>}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/cart/payments" element={<PaymentForm />}></Route>

          <Route path="/tracking" element={<TrackingMap />}></Route>

{/*           
          <Route path="/pro" element={<ParentComponent />}></Route> */}

          <Route path="/postads" element={<PostCategoryForm />}></Route>
          <Route path="/hotels" element={<HotelCategory />}></Route>

          <Route path="/delivery-address" element={<DeliveryAddress/>}></Route>
          <Route path="/delivery" element={<DeliveryForm/>}></Route>
          <Route path="/deliveryDashboard" element={<DeliveryDashboard/>}></Route>

          {/* <Route path="/product/:productName" element={<ProductDetails />}></Route> */}
          <Route path="/product/:productName/selecteCategories/:selecteCategories" element={<ProductDetails />} />


          <Route path="/productDetails/:_id" element={<ProductDetailsPage/>} ></Route>
          

            

                  

                  

        </Routes>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
