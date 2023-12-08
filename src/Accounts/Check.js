// import React, { useEffect, useState } from 'react';
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// const Check = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Define your API request options
//     const requestOptions = {
//       method: 'GET',
//       redirect: 'follow',
//     };

//     // Fetch the data from the API
//     fetch("https://postlogin.onrender.com/form/get", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []); // Empty dependency array to ensure the effect runs only once

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!Array.isArray(data)) {
//     return <div>Data is not an array</div>;
//   }
  
//   // Filter the data array to get items with "fastmoving" tagline
//   const filteredData = data.filter(
//     (offer) => offer.offers?.[0]?.tagline === "fastmoving"
//   );
//   // console.log(data,"fgh")
//   // // Filter the data array to get items with "fastmoving" tagline
//   // const filteredData = data.filter(
//   //   (offer) => offer.offers?.[0]?.tagline === "fastmoving"
//   // );


//   var settings = {
  

//     dots: false,
//       infinite: true,
//       speed: 500,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       slidesToShow: 5,
//       slidesToScroll: 2,
  
//     //   speed: 5000,
//     //   autoplaySpeed: 1000,
//     //   cssEase: "linear",
  
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 5,
//           infinite: true,
//           dots: false,
//           speed: 500,
//           autoplay: true,
//           autoplaySpeed: 3000,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 4,
//           initialSlide: 2,
//           speed: 500,
//           autoplay: true,
//           autoplaySpeed: 3000,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 1,
//           infinite: true,
//           speed: 500,
//           autoplay: true,
//           autoplaySpeed: 3000,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <center className='m-3' style={{ fontWeight: 'bold', fontSize: '32px' }}>fast moving products</center>
//       <div className='row'>
     
//         <div className='col-lg-1'></div>
//         <div className='col-lg-9'>
//         <Slider {...settings}>
//           {filteredData.map((offer) => (
//             <div className='col-lg-3 m-3 p-3' key={offer._id}>
//               <div style={{ color: 'black', border: '1px solid #0000002b', borderRadius: '10px' }}>

//               {/* <p>{offer.image}</p>
// <img src={offer.image}/>


// <p>{offer.offers[0].image}</p>
// <img src={offer.offers[0].image}/>
//                 <p>{offer.image}</p> */}
//                 <img src={offer.image} alt={`Image for ${offer.name}`} style={{ width: '100%', height: '150px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} onError={(e) => console.error('Image loading error:', e)} />
//                 <div className='d-flex justify-content-between p-1'>
//                   <p style={{ fontWeight: 'bold' }}> {offer.selectedCategories || "N/A"}</p>
//                   <p style={{ fontWeight: 'bold' }}> {offer.offers?.[0]?.tagline || "N/A"}</p>
//                 </div>
//                 <div className='d-flex justify-content-between p-1'>
//                   <p className='text-black'> Price: {offer.offers?.[0]?.enterPrice || "N/A"}</p>
//                   <p className='text-black'> Offer: {offer.offers?.[0]?.enterOffer || "N/A"}%</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//            </Slider>
//         </div>
       
//       </div>
//     </>
//   );
// };

// export default Check;


import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import chock from '../images/chock.png'

const Check = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define your API request options
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    // Fetch the data from the API
    fetch("https://postlogin.onrender.com/form/get", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Data is not an array</div>;
  }

  // Filter the data array to get items with "fastmoving" tagline
  const filteredData = data.filter(
    (offer) => offer.offers?.[0]?.tagline === "fastmoving"
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          initialSlide: 2,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <>
   
      <div className='row mb-5 '>
        <div className='col-lg-1'></div>
        <div className='col-lg-10 '>
          <h3 className='m-1 p-3 text-left'  style={{fontSize:'20px'}}>  Fast Moving Products</h3>
          <Slider {...settings}>
            {filteredData.map((offer) => (
              <div className='col-lg-3  p-2  ' key={offer._id}>
                <div style={{backgroundColor:'rgb(128 128 128 / 6%)'}} className='p-3'>
                <div className='position-relative' style={{ color: 'black', border: '1px solid white' ,backgroundColor:'white'}}>
                  {/* <img src={offer.image} alt={`Image for ${offer.name}`} 
                  style={{ width: '100%', height: '150px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} 
                  onError={(e) => console.error('Image loading error:', e)} /> */}
                  {/* <button type="button" className="btn btn-primary position-relative"> */}

  <span className="position-absolute top-0 end-50 translate-middle badge p-2" style={{backgroundColor:'rgb(11, 175, 154)',fontWeight:'bold',textTransform: 'capitalize'}}>
   {offer.offers?.[0]?.tagline || "N/A"}
    <span className="visually-hidden">unread messages</span>
  </span>
{/* </button> */}

                  <img src={chock} style={{width:'100%',height:'230px'}}/>
                  
                
                 
                </div>
                <div className='p-1'>
                  {/* <p style={{ fontWeight: 'bold' }}>{offer.selectedCategories ? offer.selectedCategories : "N/A"}</p> */}
                  <p className='p-1' style={{ fontWeight: 'bold',color:'black',fontWeight: '500',
   
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '.01em',
    color:' #121415',textTransform: 'capitalize' }}> {offer.name || "N/A"}</p>


                   
                  </div>
                  
                    <b className='p-2' style={{color:'#e25100'}}>  ₹{offer.offers?.[0]?.enterPrice || "N/A"} &nbsp;
                    <span  style={{fontSize:'12px',color:'#000000c4'}}> {offer.offers?.[0]?.enterOffer || "N/A"}% off</span></b>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Check;

