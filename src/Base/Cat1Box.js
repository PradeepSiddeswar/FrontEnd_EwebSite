import React from 'react'
import Cat2Scroll from './Cat2Scroll'
import Cat3Scroll from './Cat3Scroll'

const Cat1Box = () => {
  return (
    <>
     <div >
   
   <div className='row '  >
   <div className='col-lg-1'></div>
   <div className='col-lg-10  '>
    <div className='row'>
    <div className='col-lg-6 p-3' ><Cat2Scroll/></div>
    <div className='col-lg-6 p-3'><Cat3Scroll/></div>
    </div>
   </div>
   </div>
   </div>
    </>
  )
}

export default Cat1Box