import React ,{useState} from 'react'
import { BsTruck,BsBoxSeam,BsGeoAlt ,BsStar,BsHeadset,BsChatRightText,BsBell, BsGrid1X2} from 'react-icons/bs'
import Ship from './Ship'
import OrderDetail from './OrderDetail'
import Notify from './Notify'
import Feedback from './Feedback'

const DeliveryDashboard = () => {
    const[ship,setShip]=useState(true)
    const[order,setOrder]=useState(false)
    const[track,setTrack]=useState(false)
    const[noti,setNoti]=useState(false)
    const[feed,setFeed]=useState(false)


    const shipFun = ()=>{
        setShip(true)
        setOrder(false)
        setTrack(false)
        setNoti(false)
        setFeed(false)

    }

    const orderFun = ()=>{
        setOrder(true)
        setShip(false)
        setTrack(false)
        setNoti(false)
        setFeed(false)

    }
    const trackFun = ()=>{
        setTrack(true)
        setShip(false)
        setOrder(false)
        setNoti(false)
        setFeed(false)

    } 
    const notiFun = ()=>{
        setNoti(true)
        setTrack(false)
        setShip(false)
        setOrder(false)
        setFeed(false)
    } 
    const feedFun = ()=>{
        setFeed(true)
        setNoti(false)
        setTrack(false)
        setShip(false)
        setOrder(false)
    }
  return (
    <div>
        <div className='row m-2'>
            <div className='col-lg-2 p-2 border' style={{height:'98vh',borderRadius:'10px'}}>
            
                <b className='mx-4' style={{fontSize:'20px',fontWeight:'500'}}>    <BsGrid1X2/>&nbsp;&nbsp;Dashboard</b>
                <hr />
                <div className='d-flex justify-content-start mt-4 m-3' onClick={shipFun}>
                &nbsp;&nbsp; &nbsp;&nbsp;
    <BsTruck style={{fontSize:'28px',color:ship ? '#e57588':'black'}}/>
    <b className='mx-5' style={{color:ship ? '#e57588':'black'}}> &nbsp;&nbsp; &nbsp;&nbsp;shipping</b>
</div>
<hr style={{color:'#00000036'}}/>

                <div className='d-flex justify-content-start mt-3 m-3' onClick={orderFun}>
                &nbsp;&nbsp; &nbsp;&nbsp;
                    <BsBoxSeam style={{fontSize:'28px',color:order?'#e57588':'black'}}/>
                    <b className='mx-5' style={{color:order?'#e57588':'black'}}>&nbsp;&nbsp; &nbsp;&nbsp;orders</b>
                </div>
                <hr style={{color:'#00000036'}}/>
                <div className='d-flex justify-content-start mt-3 m-3' onClick={notiFun}>
                &nbsp;&nbsp; &nbsp;&nbsp;
                    <BsBell style={{fontSize:'28px',color:noti?'#e57588':'black'}}/>
                    <b className='mx-5' style={{color:noti?'#e57588':'black'}}>&nbsp;&nbsp; &nbsp;&nbsp;Notification</b>
                </div>
                <hr style={{color:'#00000036'}}/>

                <div className='d-flex justify-content-start mt-3 m-3' onClick={trackFun}>
                &nbsp;&nbsp; &nbsp;&nbsp;
                    <BsGeoAlt style={{fontSize:'28px',color:track?'#e57588':'black'}}/>
                    <b className='mx-5' style={{color:track?'#e57588':'black'}}>&nbsp;&nbsp; &nbsp;&nbsp;tracking</b>
                </div>
                <hr style={{color:'#00000036'}}/>
                <div className='d-flex justify-content-start mt-3 m-3'  onClick={feedFun}>
                &nbsp;&nbsp; &nbsp;&nbsp;
                    <BsStar style={{fontSize:'28px',color:feed?'#e57588':'black'}}/>
                    <b className='mx-5' style={{color:feed?'#e57588':'black'}}>&nbsp;&nbsp; &nbsp;&nbsp;Feedback</b>
                </div>
                <hr style={{color:'#00000036'}}/>
                <div className='d-flex justify-content-start mt-3 m-3'>
                &nbsp;&nbsp; &nbsp;&nbsp;
                    <BsHeadset style={{fontSize:'28px'}}/>
                    <b className='mx-5'>&nbsp;&nbsp; &nbsp;&nbsp;Customers</b>
                </div>
                <hr style={{color:'#00000036'}}/>
                <div className='d-flex justify-content-start mt-3 mb-5 m-3'>
                &nbsp;&nbsp; &nbsp;&nbsp;
                    <BsChatRightText style={{fontSize:'28px'}}/>
                    <b className='mx-5'>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Messages</b>
                </div>
              
            </div>
            <div className='col-lg-10'>
{ship && <Ship/>}
{order && <OrderDetail/>}
{noti && <Notify/>}
{feed && <Feedback/>}
            </div>
           
        </div>
    </div>
  )
}

export default DeliveryDashboard