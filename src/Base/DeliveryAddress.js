// import React, { useState } from 'react';
// import Map from './Map';

// function DeliveryAddressForm() {
//   const [formData, setFormData] = useState({
//     city: '',
//     streetAddress: '',
//     postalCode: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process the form data, e.g., send it to a server or store it in state.
//     console.log(formData);
//   };

//   return (
//     <div className='m-2'>
//     <form onSubmit={handleSubmit}>
//       <h5>select your address</h5>
//       <Map/>
//       <div className='col-lg-12 '>
//         <label htmlFor="city">City:</label>
//         <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required style={{width:'100%'}}/>
//       </div>
//      <div className='col-lg-12 '>
//         <label htmlFor="streetAddress">Street Address:</label>
//         <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required style={{width:'100%'}}/>
//       </div>
//      <div className='col-lg-12 '>
//         <label htmlFor="postalCode">Postal Code:</label>
//         <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange}  style={{width:'100%'}}/>
//       </div>
//       <div className='m-2'>
//         <button type="submit">save address and proceed</button>
//       </div>
//     </form>
//     </div>
//   );
// }

// export default DeliveryAddressForm;


// import React, { useState } from 'react';
// import Map from './Map';
// import CheckOut from './CheckOut';

// function DeliveryAddressForm() {
//   const [formData, setFormData] = useState({
//     city: '',
//     streetAddress: '',
//     postalCode: '',
//   });

//   const [addressSaved, setAddressSaved] = useState(false); // State variable to track if the address has been saved

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process the form data, e.g., send it to a server or store it in state.
//     console.log(formData);

//     // Set the addressSaved state to true after saving the address
//     setAddressSaved(true);
//   };

//   return (
//     <div className='m-2'>
//       {!addressSaved ? ( // Render the address form if addressSaved is false
//         <form onSubmit={handleSubmit}>
//           <h5>select your address</h5>
//           <Map />
//           <div className='col-lg-12 '>
//         <label htmlFor="city">City:</label>
//         <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required style={{width:'100%'}}/>
//       </div>
//      <div className='col-lg-12 '>
//         <label htmlFor="streetAddress">Street Address:</label>
//         <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required style={{width:'100%'}}/>
//       </div>
//      <div className='col-lg-12 '>
//         <label htmlFor="postalCode">Postal Code:</label>
//         <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange}  style={{width:'100%'}}/>
//       </div>
//           <div className='m-2'>
//             <button type="submit">save address and proceed</button>
//           </div>
//         </form>
//       ) : (
//         <div className='col-lg-12 '>
//         <CheckOut/> 
//         </div>
//       )}
//     </div>
//   );
// }

// export default DeliveryAddressForm;



import React, { useState, useEffect } from 'react';
import Map from './Map';
import CheckOut from './CheckOut';
import axios from 'axios'; // Import Axios or your preferred HTTP client library
import { useDispatch } from 'react-redux';

import { setAddress } from '../Reducer/addressSlice';



function DeliveryAddressForm() {
  const [formData, setFormData] = useState({
    city: '',
    streetAddress: '',
    postalCode: '',
    // locationName: '', 
  });

  const [addressSaved, setAddressSaved] = useState(false);
    // Add this line to get access to the dispatch function
    const dispatch = useDispatch();

  useEffect(() => {
    // Perform reverse geocoding when formData's latitude and longitude change
    if (formData.latitude && formData.longitude) {
      reverseGeocode(formData.latitude, formData.longitude)
        .then((locationName) => {
          setFormData({
            ...formData,
            locationName,
          });
        })
        .catch((error) => {
          console.error('Error geocoding:', error);
        });
    }
  }, [formData.latitude, formData.longitude]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const postData = {
      address: formData.streetAddress,
      City: formData.city,
      StreetAddress: formData.streetAddress,
      PostalCode: formData.postalCode,
    };

    // Make a POST request to your API
  //   axios
  //     .post("https://postlogin.onrender.com/userLocation", postData)
  //     .then((response) => {
  //       // Handle the API response, e.g., display a success message
  //       console.log('API Response:', response.data);
  // // Dispatch the address data to the Redux store
  // dispatch(setAddress(response.data)); // Assuming response.data contains the address details

  //       setAddressSaved(true);
  //     })
  //     .catch((error) => {
  //       // Handle API error, e.g., display an error message
  //       console.error('API Error:', error);
  //     });
  // };

  axios
  .post("https://postlogin.onrender.com/userLocation", postData)
  .then((response) => {
    // Dispatch the address data to the Redux store
    dispatch(setAddress(response.data)); // Assuming response.data contains the address details
    setAddressSaved(true);
  })
  .catch((error) => {
    // Handle API error, e.g., display an error message
    console.error('API Error:', error);
  });
}




  const reverseGeocode = async (latitude, longitude) => {
    const apiKey = 'AIzaSyA8kCQR1zNhh2ZIX9RgnHWi16WnkyZE-wY';
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    
  
    try {
      const response = await axios.get(apiUrl);
      console.log('Geocoding API Response:', response.data);
      if (response.data && response.data.results.length > 0) {
        return response.data.results[0].formatted_address;
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      console.error('Error during geocoding:', error);
      throw error;
    }
  };
  

  return (
    <div className='m-2 p-2'  >
      {!addressSaved ? (
        <form onSubmit={handleSubmit} className='p-4 bg-white' style={{border:'1px solid white',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
          <h5 className='mb-2' style={{textTransform:'capitalize'}}>select your address</h5>
          <Map
            onLocationChange={(latitude, longitude) => {
              setFormData({
                ...formData,
                latitude,
                longitude,
              });
            }}
          />
          
          <div className='col-lg-12 mt-2'>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className='mt-1'
              style={{ width: '100%',border:'1px solid #0baf9a', }}
            />
          </div>
          <div className='col-lg-12 mt-2'>
            <label htmlFor="streetAddress" style={{textTransform:'capitalize'}}>Street Address</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
              className='mt-1'
              style={{ width: '100%' ,border:'1px solid #0baf9a',}}
            />
          </div>
          <div className='col-lg-12 mt-2'>
            <label htmlFor="postalCode" style={{textTransform:'capitalize'}}>Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className='mt-1'
              style={{ width: '100%',border:'1px solid #0baf9a', }}
            />
          </div>
          <div className='mt-2'>
            <button type="submit" className='p-1 mt-2' 
            style={{border:'1px solid #0baf9a',width:'100%',borderRadius:'5px', fontWeight: "500",backgroundColor:'#0baf9a',color:'white',
           }}>Save Address and Proceed</button>
          </div>
        </form>
      ) : (
        <div className='col-lg-12 '>
          <CheckOut />
        </div>
      )}
    </div>
  );
}

export default DeliveryAddressForm;

