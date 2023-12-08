import React from 'react'
import truck from '../images/truck.png'
import shiped from '../images/shiped.png'
import comp from '../images/comp.png'
import ShipTable from './ShipTable'
const Ship = () => {
  return (
    <div>
        <h3 style={{fontWeight:'500',fontSize:'22px'}}>Hii, Delivery Partner</h3>

        <div className='row m-1 '>
            <div className='col-lg-3'>
            <div className='d-flex justify-content-evenly mt-5 border' style={{backgroundColor:'rgb(255 0 0 / 17%)',borderRadius:'10px'}} >
                    <img src={truck} style={{width:'150px',height:'150px'}}/>
                   <div className='mt-5'>
                   <p>On Going</p>
                   <b>259</b>
                   </div>
            </div>
            </div>
            <div className='col-lg-3'>
            <div className='d-flex justify-content-evenly mt-5 border' style={{backgroundColor:'#8000805c',borderRadius:'10px'}}>
                    <img src={shiped} style={{width:'150px',height:'150px'}}/>
                   <div className='mt-5'>
                   <p>Shipped</p>
                   <b>320</b>
                   </div>
            </div>
            </div>
            <div className='col-lg-3'>
            <div className='d-flex justify-content-evenly mt-5 border' style={{backgroundColor:'#00800054',borderRadius:'10px'}}>
                    <img src={comp} style={{width:'100px',height:'132px'}} className='mt-3'/>
                   <div className='mt-5'>
                   <p>Completed</p>
                   <b>1,327</b>
                   </div>
            </div>
            </div>
        </div>

        <ShipTable/>
    </div>
  )
}

export default Ship