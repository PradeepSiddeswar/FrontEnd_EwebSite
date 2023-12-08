import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="row d-lg-none " >
    <div className='row d-flex mb-5 ' >
    <div className="m-3"><Link to="/">logo</Link></div>
    <div>
      {/* Menu Icon */}
      <div onClick={handleToggleSidebar} style={{position:'absolute',right:'10px',top:'15px',color:'black !important',zIndex:'1',width:'50px'}} >
        {isOpen ? (
          <AiOutlineClose className="menu-icon" style={{width:'50px',height:'25px'}}/>
        ) : (
          <AiOutlineMenu className="menu-icon" style={{width:'50px',height:'25px'}}/>
        )}
      </div>

      {/* Sidebar Content */}
      {isOpen && (
        <div className="sidebar" style={{marginBottom:'-45px',backgroundColor:'rgb(222 226 230 / 2%)'}}>
          {/* Sidebar content goes here */}
          <div className=" p-3 w-100">
            <center >
              <Link
                className="navLink mt-1"
                to="/"
                onClick={handleMenuItemClick}
              >
                <b className="text-dark" style={{ fontSize: "14px" }}>
                  HOME
                </b>
              </Link>
            </center>
            <center className="mt-2">
              <Link
                className="navLink mt-1"
                to='/registration'
                onClick={handleMenuItemClick}
              >
                <b className="text-dark" style={{ fontSize: "14px" }}>
               SIGNUP
                </b>
              </Link>
            </center>
            <center className="mt-2">
              <Link
                className="navLink mt-1"
                to="/customerregistration"
                onClick={handleMenuItemClick}
              >
                <b className="text-dark" style={{ fontSize: "14px" }}>
                 CUSTOMER REGISTRATION
                </b>
              </Link>
            </center>
            <center className="mt-2">
              <Link
                className="navLink mt-1"
                to="/cart"
                onClick={handleMenuItemClick}
              >
                <b className="text-dark" style={{ fontSize: "14px" }}>
                 CART
                </b>
              </Link>
            </center>
            <center className="mt-2">
              <Link
                className="navLink mt-1"
                to="/postads"
                onClick={handleMenuItemClick}
              >
                <b className="text-dark" style={{ fontSize: "14px" }}>
                  POST ADS
                </b>
              </Link>
            </center>
          
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default MobileSidebar;



