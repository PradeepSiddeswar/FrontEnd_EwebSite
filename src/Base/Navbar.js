import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsPatchPlus } from "react-icons/bs";

const Navbar = ({ userName, userEmail }) => {
  return (
    <div className='row p-2 ' style={{marginBottom:'-20px'}}>
      <div className='col-lg-1 mx-5'>
        {/* <p style={{width:'50px',height:'50px',borderRadius:'25px',border:'1px solid #0baf9a',backgroundColor:'#0baf9a',color:'white',}}>
        <center className='mt-2'>Logo</center></p> */}
        </div>
      <div className='col-lg-4 '></div>
      <div className='col-lg-6 '>
        <ul className='mt-2' style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
          <li><Link to='/' style={{textDecoration:'none',color:'#000000cf',fontWeight:'500',fontSize:'16px'}}>Home</Link></li>
          {userName ? <div><span>Welcome, {userName}!</span><br/>Email: {userEmail}</div>: <li><Link to='/registration' style={{textDecoration:'none',fontSize:'16px',color:'#000000cf',fontWeight:'500'}}>Signup</Link></li>}
      
          <li><Link to='/customerregistration' style={{textDecoration:'none',fontSize:'16px',color:'#000000cf',fontWeight:'500'}}>Shop registration</Link></li>
          <li><Link to='/delivery' style={{textDecoration:'none',fontSize:'16px',color:'#000000cf',fontWeight:'500'}}>Delivery Registration</Link></li>

          <li><Link to='/cart' style={{textDecoration:'none',color:'black',fontWeight:'500',fontSize:'16px'}}> Cart</Link></li>
          <button className='mb-2' style={{border:'1px solid #0baf9a',borderRadius:'5px',backgroundColor:'#0baf9a',color:'white',fontWeight:'500'}}>
            <Link to='/postads' style={{textDecoration:'none',color:'white',fontWeight:'500',fontSize:'16px'}}>post ads <BsPatchPlus/></Link></button> {/* Link to Wishlist */}
        </ul>
        {/* <div className="user-info">
        {userName && <span>Welcome, {userName}!</span>}
        {userEmail && <span>Email: {userEmail}</span>}
      </div> */}
      </div>
    </div>
  );
}

export default Navbar;
