


import React, { useState, useEffect } from 'react';
import { addHotelData } from '../Reducer/hotelResgisterReducer';
import { useDispatch } from 'react-redux';
import reg from '../images/reg.png'
import backgroundImage from '../images/homebg.png'; // Import your background image here
import {setDefaultValues} from '../Reducer/defaultValuesReducer '

const Customer = () => {
  const [shopName, setShopName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [bbmp, setBbmp] = useState('');
  const [image, setImage] = useState(null);
  const [locationInfo, setLocationInfo] = useState('');

  const[error,setError]=useState(false)

  const dispatch = useDispatch();

  const handleShopName = (e) => {
    const inputValue = e.target.value;
  
    // Regular expression pattern to allow only alphabets and spaces
    const pattern = /^[A-Za-z\s]*$/;
  
    if (inputValue.match(pattern)) {
      setShopName(inputValue);
      setError(''); // Clear any previous error message
    } else {
      setError('Only alphabets and spaces are allowed in the Shop Name');
    }
  };
  
  
  

  const handleOwnerName = (e) => {
    const inputValue = e.target.value;
  
    // Regular expression pattern to allow only alphabets and spaces
    const pattern = /^[A-Za-z\s]*$/;
  
    if (inputValue.match(pattern)) {
      setOwnerName(inputValue);
      setError(''); // Clear any previous error message
    } else {
      setError('Only alphabets and spaces are allowed in the Owner Name');
    }
  };
  

  const handlePhone = (e) => {
    const inputValue = e.target.value;
  
    // Regular expression pattern to allow only numbers
    const pattern = /^[0-9]*$/;
  
    if (inputValue.match(pattern) && inputValue.length <= 10) {
      setPhone(inputValue);
      if (inputValue.length === 10) {
        setError('');
      } else {
        setError('Please enter a 10-digit phone number');
      }
    } else {
      setError('Please enter a valid phone number (numeric and up to 10 digits)');
    }
  };
  
  

 const handleEmail = (e) => {
  const inputValue = e.target.value;

  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  setEmail(inputValue);

  if (!pattern.test(inputValue) && inputValue.trim() !== '') {
    setError('Please enter a valid email address');
  } else {
    setError(''); // Clear any previous error message
  }
};

const handleRegisterNumber = (e) => {
  const inputValue = e.target.value;

  // Regular expression pattern for numeric input
  const pattern = /^[0-9]*$/;

  setRegisterNumber(inputValue);

  if (inputValue.length < 8 && inputValue.trim() !== '') {
    setError('Registration Number must be at least 8 digits');
  } else if (!pattern.test(inputValue) && inputValue.trim() !== '') {
    setError('Please enter only numbers for the Registration Number');
  } else {
    setError(''); // Clear any previous error message
  }
};




const handleBbmp = (e) => {
  const inputValue = e.target.value;

  // Regular expression pattern for numeric input
  const pattern = /^[0-9]*$/;

  setBbmp(inputValue);

  if (!pattern.test(inputValue)) {
    setError('Please enter only numbers for the BBMP Certificate');
  } else if (inputValue.length < 6 && inputValue.trim() !== '') {
    setError('BBMP Certificate must be at least 6 digits');
  } else {
    setError(''); // Clear any previous error message
  }
};


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      // Set the image state with the selected file
      setImage(event.target.files[0]);
    }
  };
  
  const handleLocationClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
            const data = await response.json();
            const city = data.address.city || data.address.town || data.address.village || 'Unknown';
            const area = data.address.suburb || data.address.neighbourhood || 'Unknown';
            setLocationInfo(`Area: ${area}, City: ${city}`);
          } catch (error) {
            console.error('Error fetching location:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation not available');
    }
  };

  const handleSubmit = () => {
    if (!shopName || !ownerName || !phone || !email || !registerNumber || !bbmp || !image || !locationInfo) {
      setError('Please fill in all fields');
      return;
    } else {
      setError('');
  
      const formdata = new FormData();
      formdata.append('shopName', shopName);
      formdata.append('ownerName', ownerName);
      formdata.append('phone', phone);
      formdata.append('email', email);
      formdata.append('gstRegistrationNo', registerNumber);
      formdata.append('BbmpCertificateNo', bbmp);
      formdata.append('image', image);
      formdata.append('locationInfo', locationInfo); // Add locationInfo here
  
      const apiUrl = 'https://postlogin.onrender.com/customerLogin'; // Replace with your API endpoint
  
      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };
  
      fetch(apiUrl, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
  
          dispatch(
            setDefaultValues({
              name: shopName,
              image: image,
              location: locationInfo,
            })
          );
  
          // Reset the form fields after a successful submission if needed
          setShopName('');
          setOwnerName('');
          setPhone('');
          setEmail('');
          setRegisterNumber('');
          setBbmp('');
          setImage(null);
          setLocationInfo(''); // Clear locationInfo
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
  };
  

  // const handleSubmit = () => {
  //   if (!shopName || !ownerName || !phone || !email || !registerNumber || !bbmp || !image) {
  //     setError('Please fill in all fields');
  //     return; // Don't submit the form if any field is empty
  //   }else{
  //     debugger
  //    dispatch(addHotelData({"name":shopName,"image":image}))
     
  //     setError(''); // Clear the error message
  //   const formdata = new FormData();
  //   formdata.append('shopName', shopName);
  //   formdata.append('ownerName', ownerName);
  //   formdata.append('phone', phone);
  //   formdata.append('email', email);
  //   formdata.append('gstRegistrationNo', registerNumber);
  //   formdata.append('BbmpCertificateNo', bbmp);
  //   formdata.append('image', image); // You should have the image data in your state

  //   const apiUrl = 'https://customer-login.onrender.com/customerLogin';

  //   const requestOptions = {
  //     method: 'POST',
  //     body: formdata,
  //     redirect: 'follow',
  //   };

  //   fetch(apiUrl, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       console.log(result,"mm");

  //         // Dispatch an action to set default values in the Redux store
  //     dispatch(
  //       setDefaultValues({
  //         name: shopName,
  //         image: image,
  //       })
  //     );
  //       // Reset the form fields after a successful submission if needed
  //       setShopName('');
  //       setOwnerName('');
  //       setPhone('');
  //       setEmail('');
  //       setRegisterNumber('');
  //       setBbmp('');
  //       setImage(null);
  //     })
  //     .catch((error) => {
  //       console.log('error', error);
  //     });
  //   }
  // };
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image URL here
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust the height as needed
  };

  return (
    <div style={backgroundStyle}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,90.7C384,107,480,181,576,218.7C672,256,768,256,864,218.7C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
      <center className='text-black mt-1'><h2>Shop Registration</h2></center>
      <div className='row' >
      <div className='col-lg-2'></div>
        <div className='col-lg-4 mt-5'>
          <img src={reg} className='mt-5'/>
        </div>
        <div className='col-lg-4 p-5 mt-3 bg-white' style={{border:'1px solid #0000001a',borderRadius:'10px'}}>
      
        <label className='m-1'>Shop Name</label>
      <input type="text" value={shopName} onChange={handleShopName} className='w-100 m-1'/>

       <label className='m-1'>Owner Name</label>
      <input type="text" value={ownerName} onChange={handleOwnerName} className='w-100 m-1'/>

       <label className='m-1'>Phone Number</label>
      <input type="text" value={phone} maxLength={10} onChange={handlePhone} className='w-100 m-1'/>

       <label className='m-1'>Email</label>
      <input type="email" value={email} onChange={handleEmail} className='w-100 m-1'/>

       <label className='m-1'>Registration Number</label>
      <input type="text" value={registerNumber} maxLength={8} onChange={handleRegisterNumber} className='w-100 m-1'/>

       <label className='m-1'>BBMP Certificate</label>
      <input type="text" value={bbmp} maxLength={6} onChange={handleBbmp} className='w-100 m-1'/>

      {/* <div>
      <label className='m-1'>Upload Shop Image</label><br/>
        <input type="file" onChange={onImageChange} className="filetype m-1" />
        <img alt="preview" src={image} />
      </div> */}
      <label className='m-1'>Upload Shop Image</label><br/>
<input type="file" onChange={onImageChange} className="filetype m-1" />
<img alt="preview" src={image ? URL.createObjectURL(image) : ''}  style={{width:'300px',height:'300px'}} />


<div >
      <h2>Select Your Location</h2>
      <div className='w-100'>
      <input className='w-100'
        type="text"
        placeholder="Enter your location"
        value={locationInfo}
        onChange={(e) => setLocationInfo(e.target.value)}
      />
      <button onClick={handleLocationClick}>
        <span role="img" aria-label="Location">📍</span> Get Current Area
      </button>
      </div>
    </div>


      <button onClick={handleSubmit} className='mt-3 w-100 bg-black text-white p-1' style={{border:'1px solid black',borderRadius:'10px',fontSize:'18px'}}>submit</button>
      {error && <div className="text-danger">{error}</div>}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
        <path fill="#fff" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,112C384,117,480,203,576,240C672,277,768,267,864,245.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,
      320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
};

export default Customer;
