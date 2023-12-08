import React from 'react'
import { Link } from 'react-router-dom'
import { category } from './env'

const Footer = () => {
  return (
    <div>
        <div className='row bg-dark p-3'>
            <div className='col-lg-2'></div>
            <div className='col-lg-2 p-3'>
                <b className='text-white mx-4'>Our Quick Links</b>
                <ul className='text-white mt-2' style={{textTransform:'capitalize',listStyleType: 'none',textAlign:'left'}}>
                    <Link to='/registration' className='text-white' style={{textDecoration:'none'}}><li>user registration</li></Link>
                    <Link to='/customerregistration' className='text-white' style={{textDecoration:'none'}}><li>shop registration</li></Link>
                    <Link to='/delivery' className='text-white' style={{textDecoration:'none'}}><li>delivery boy registration</li></Link>
                    <Link to='/postads' className='text-white' style={{textDecoration:'none'}}> <li>post ads</li></Link>
                    <Link to='/cart' className='text-white' style={{textDecoration:'none'}}><li>cart</li></Link>
                </ul>
            </div>
            <div className='col-lg-2 p-3'> 
            <b className='text-white'>Address Information</b>
            <p className='text-white mt-2'> RMN Towers, No.11, 4/1, 1st Floor, Old Madras Road, New, Old Baiyyappanahalli, Extension, Bengaluru, Karnataka 560033</p>
            </div>
            <div className='col-lg-4 p-3'>
            <b className='text-white '>Our Categories</b><br/>
            {category.map((val)=>{
                return(
                    <Link to={`/product/${val.name}/selecteCategories/${val.name}`} style={{ textDecoration: 'none' ,color:'black'}}>
                    <button style={{border:'1px solid #ffc500',borderRadius:'5px',backgroundColor:'#ffc500',fontWieght:'500'}} className='m-1 p-1 mt-1'>{val.name}</button>
                  </Link>
                )
            })}
            </div>
            <div className='col-lg-2'></div>

        </div>
    </div>
  )
}

export default Footer