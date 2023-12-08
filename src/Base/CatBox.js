import React from 'react'
import CatScroll from './CatScroll'
import Cat1Scroll from './Cat1Scroll'

const CatBox = () => {
  return (
    <>
     <div >
   
   <div className='row  mt-3'  >
   <div className='col-lg-1'></div>
   <div className='col-lg-10  '>
    <div className='row'>
    <div className='col-lg-6 p-3'><CatScroll/></div>
    <div className='col-lg-6 p-3'><Cat1Scroll/></div>
    </div>
   </div>
   </div>
   </div>
    </>
  )
}

export default CatBox