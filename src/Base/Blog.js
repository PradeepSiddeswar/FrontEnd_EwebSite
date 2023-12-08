import React from 'react'

const Blog = () => {
    const arr=[
        {id:1,title:'The Art of Coffee: From Bean to Brew',description:'Dive into the fascinating world of coffee, from the origins of coffee beans to the intricate process of brewing the perfect cup',image:"https://images.pexels.com/photos/6231602/pexels-photo-6231602.jpeg?auto=compress&cs=tinysrgb&w=1600"},
        {id:2,title:'Exploring the Best Pet Shops in Your City',description:'Discover a world of wagging tails, playful purrs, and adorable companionship as we take you on a journey through the top pet shops in your city',image:"https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1600"},
{id:3,title:"Sweet Temptations Bakery: Indulge in Irresistible Delights",description:'Discover the magic of Sweet Temptations Bakery and treat yourself to a world of sweet indulgence',image:'https://images.pexels.com/photos/564883/pexels-photo-564883.jpeg?auto=compress&cs=tinysrgb&w=1600'},
{id:4,title:"Elegant Home Furnishings",description:'Discover the Perfect Blend of Style and Comfort',image:'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1600'},
{id:5,title:"A Taste of History: Staying in Historic Hotels",description:'Step back in time and immerse yourself in history by booking a stay at one of these charming historic hotels.',image:'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=1600'},
{id:6,title:'The Art of Wrapping: Creative Gift Presentation',description:'Offer tips and tricks for beautifully wrapping gifts, making the presentation just as exciting as the gift itself',image:'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=1600'}
    ]
  return (
    <div>
      
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10'>
            <h3 className='p-3'>Blog</h3>
            <div className='row'>
                {arr.map((val)=>{
                    return(
<div className='col-lg-4' >
    <div style={{border:'1px solid #0000000d',borderRadius:'10px'}}>
    <img src={val.image} style={{width:'100%',height:'300px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
    <b>{val.title}</b>
    <p>{val.description}</p>
    </div>
 </div>
                    )
                })}
            
           
                </div>
            </div>

        </div>
    </div>
  )
}

export default Blog