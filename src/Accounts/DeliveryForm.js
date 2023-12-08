// import React, { useState } from "react";
// import "./DeliveryForm.css";
// import backgroundImage from '../images/homebg.png'; // Import your background image here
// import del from '../images/del.png'


// function DeliveryForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
   
//     gender: "",
    
//     contactNumber: "",
  
//     currentAddress: "",
//     permanentAddress: "",
//     aadhaarCardNumber: "",
//     panCardNumber: "",
//     vehicleType: "",
//     vehicleRegistrationNumber: "",
//     vehicleInsuranceDetails: "",
 
//   });

//   const [errors, setErrors] = useState({
//     fullName: "",
//     contactNumber: "",
//     aadhaarCardNumber:'',
//     panCardNumber:'',
//     vehicleRegistrationNumber:'',
//     // Add other field errors here
//   });
  
//   const[error,setError]=useState(" ")

 

//   function isAlphabetsOnly(input) {
//     return /^[A-Za-z]+$/.test(input);
//   }
  
  



//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let error = "";
  
//     if (name === "fullName" && !isAlphabetsOnly(value)) {
//       error = "Only alphabets are allowed.";
//     } else if (name === "contactNumber" && !/^[0-9]{10}$/.test(value)) {
//       error = "Contact number must be 10 digits long and contain only numbers.";
//     }  else if (name === "aadhaarCardNumber" && !/^[0-9]{12}$/.test(value)) {
//       error = "aadhaar card number must be 12 digits numbers.";
//     } else if (name === "panCardNumber" && !/^[A-Z0-9]{10}$/.test(value)) {
//       error = "aadhaar card number must be  10 characters long and alphanumeric.";
//     }else if (name === "vehicleRegistrationNumber" && !/^[A-Z0-9]{10}$/.test(value)) {
//       error = "Vehicle registration number must be 10 characters long and alphanumeric.";
//     }
    
  
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
  
//     setErrors({
//       ...errors,
//       [name]: error,
//     });
//   };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if any required fields are empty
//     if (
//       !formData.fullName ||
//       !formData.gender ||
//       !formData.contactNumber ||
//       !formData.currentAddress ||
//       !formData.aadhaarCardNumber ||
//       !formData.panCardNumber ||
//       !formData.vehicleType ||
//       !formData.vehicleRegistrationNumber ||
//       !formData.vehicleInsuranceDetails
//     ) {
//       setErrors({
//         ...errors,
//         error: "Please fill in all the fields",
//       });
//       return; // Stop form submission
//     }

//     // Prepare the data to send to the API
//     const requestData = {
//       ShopListing: [
//         "Shop Name 1",
//         "Shop Name 2",
//         "Shop Name 3"
//       ],
//       FullName: formData.fullName,
//       Gender: formData.gender,
//       ContctNumber: formData.contactNumber,
//       CurrentAddres: formData.currentAddress,
//       AadhaarCardNumber: formData.aadhaarCardNumber,
//       PanCardNumber: formData.panCardNumber,
//       VehicleInsuranceDetails: formData.vehicleInsuranceDetails,
//       VehicleName: formData.vehicleType,
//       VehicleRegistrationNumber: formData.vehicleRegistrationNumber,
//     };

//     // Make the API request
//     fetch("https://postlogin.onrender.com/delivery-form", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(requestData),
//     })
//       .then((response) => response.text())
//       .then((result) => {
//         console.log(result);
//         // Handle the API response here, e.g., show a success message
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Handle the API error here, e.g., show an error message
//       });
//   };
  

//   const backgroundStyle = {
//     backgroundImage: `url(${backgroundImage})`, // Set the background image URL here
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     minHeight: '100vh', // Adjust the height as needed
//   };
//   return (
//     <div style={backgroundStyle}>
//       <center>
//         <h2 className="mb-5">Register as Delivery Partner</h2>
       
//       </center>
//       <div className="row">
//       <div className="col-lg-2"></div>
//         <div
//           className="col-lg-4 p-2 bg-white"
//           style={{
//             border: "1px solid #80808036",
//             boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//           }}
//         >
//           <form onSubmit={handleSubmit}>
//             <div className="row ">
//             <div className="col-lg-12 mt-2">
//   <label>Full Name:</label>
//   <input
//     className="w-100"
//     type="text"
//     name="fullName"
//     value={formData.fullName}
//     onChange={handleInputChange}
//     required
//   />
//   {errors.fullName && (
//     <small className="error-message text-danger">{errors.fullName}</small>
//   )}
// </div>

             


//               <div className="col-lg-12 mt-2">
//                 <label>Gender:</label>
//                 <select
//                   className="w-100 p-1"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div className="col-lg-12 mt-2">
//   <label>Contact Number:</label>
//   <input
//     className="w-100"
//     type="text"
//     name="contactNumber"
//     value={formData.contactNumber}
//     onChange={handleInputChange}
//     required
//   />
//   {errors.contactNumber && (
//     <small className="error-message text-danger">{errors.contactNumber}</small>
//   )}
// </div>
            

//               <div className="col-lg-12 mt-2">
//                 <label>current address </label>
//                 <input
//                   className="w-100"
//                   type="text"
//                   name="currentAddress"
//                   value={formData.currentAddress}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="col-lg-12 mt-2">
//                 <label>Aadhaar Card Number </label>
//                 <input
//                   className="w-100"
//                   type="text"
//                   name="aadhaarCardNumber"
//                   value={formData.aadhaarCardNumber}
//                   onChange={handleInputChange}
//                   required
//                 />
//                  {errors.aadhaarCardNumber && (
//     <small className="error-message text-danger">{errors.aadhaarCardNumber}</small>
//   )}
//               </div>

//               <div className="col-lg-12 mt-2">
//                 <label>pan Card Number </label>
//                 <input
//                   className="w-100"
//                   type="text"
//                   name="panCardNumber"
//                   value={formData.panCardNumber}
//                   onChange={handleInputChange}
//                   required
//                 />
//                  {errors.panCardNumber && (
//     <small className="error-message text-danger">{errors.panCardNumber}</small>
//   )}
//               </div>
//               <div className="col-lg-12 mt-2">
//                 <label>vehicle Insurance Details </label>
//                 <input
//                   className="w-100"
//                   type="text"
//                   name="vehicleInsuranceDetails"
//                   value={formData.vehicleInsuranceDetails}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="col-lg-12 mt-2">
//                 <label>vehicle Name </label>
//                 <input
//                   className="w-100"
//                   type="text"
//                   name="vehicleType"
//                   value={formData.vehicleType}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="col-lg-12 mt-2">
//                 <label>vehicle Registration Number </label>
//                 <input
//                   className="w-100"
//                   type="text"
//                   name="vehicleRegistrationNumber"
//                   value={formData.vehicleRegistrationNumber}
//                   onChange={handleInputChange}
//                   required
//                 />
//                  {errors.vehicleRegistrationNumber && (
//     <small className="error-message text-danger">{errors.vehicleRegistrationNumber}</small>
//   )}
//               </div>

//               <div className="col-lg-12 mt-2">
//                 <label>select shop</label>
//                 <select className="w-100">
//                   <option>hye</option>
//                   <option>hye</option>
//                   <option>hye</option>
//                   <option>hye</option>
//                 </select>
//               </div>
            
//             </div>

//             <button
//               type="submit"
//               className="p-1 mt-3"
//               style={{
//                 border: "1px solid rgb(11, 175, 154)",
//                 borderRadius: "10px",
//                 width: "100%",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 backgroundColor: "rgb(11, 175, 154)",
//                 color: "white",
//               }}
//             >
//               Submit
//             </button>
//             <div className="text-danger">{error}</div> 
//           </form>
//         </div>
//         <div className="col-lg-4">
//         <div className="ride-in-container">
//   {/* Your elements go here */}
//   <img src={del} alt="Delivery" />
//   {/* Add other elements as needed */}
// </div>

// </div>

//       </div>
//     </div>
//   );
// }

// export default DeliveryForm;



import React, { useState, useEffect } from "react";
import "./DeliveryForm.css";
import backgroundImage from '../images/homebg.png'; // Import your background image here
import del from '../images/del.png'
import { useNavigate } from "react-router-dom";

function DeliveryForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    contactNumber: "",
    currentAddress: "",
    permanentAddress: "",
    aadhaarCardNumber: "",
    panCardNumber: "",
    vehicleType: "",
    vehicleRegistrationNumber: "",
    vehicleInsuranceDetails: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    contactNumber: "",
    aadhaarCardNumber:'',
    panCardNumber:'',
    vehicleRegistrationNumber:'',
    // Add other field errors here
  });

  const [popupVisible, setPopupVisible] = useState(false); // State to control popup visibility
  const [error, setError] = useState(" ");

  function isAlphabetsOnly(input) {
    return /^[A-Za-z]+$/.test(input);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "fullName" && !isAlphabetsOnly(value)) {
      error = "Only alphabets are allowed.";
    } else if (name === "contactNumber" && !/^[0-9]{10}$/.test(value)) {
      error = "Contact number must be 10 digits long and contain only numbers.";
    }  else if (name === "aadhaarCardNumber" && !/^[0-9]{12}$/.test(value)) {
      error = "Aadhaar card number must be 12 digits numbers.";
    } else if (name === "panCardNumber" && !/^[A-Z0-9]{10}$/.test(value)) {
      error = "Pan card number must be 10 characters long and alphanumeric.";
    } else if (name === "vehicleRegistrationNumber" && !/^[A-Z0-9]{10}$/.test(value)) {
      error = "Vehicle registration number must be 10 characters long and alphanumeric.";
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (
      !formData.fullName ||
      !formData.gender ||
      !formData.contactNumber ||
      !formData.currentAddress ||
      !formData.aadhaarCardNumber ||
      !formData.panCardNumber ||
      !formData.vehicleType ||
      !formData.vehicleRegistrationNumber ||
      !formData.vehicleInsuranceDetails
    ) {
      setErrors({
        ...errors,
        error: "Please fill in all the fields",
      });
      return; // Stop form submission
    }

    // Prepare the data to send to the API
    const requestData = {
      ShopListing: [
        "Shop Name 1",
        "Shop Name 2",
        "Shop Name 3"
      ],
      FullName: formData.fullName,
      Gender: formData.gender,
      ContctNumber: formData.contactNumber,
      CurrentAddres: formData.currentAddress,
      AadhaarCardNumber: formData.aadhaarCardNumber,
      PanCardNumber: formData.panCardNumber,
      VehicleInsuranceDetails: formData.vehicleInsuranceDetails,
      VehicleName: formData.vehicleType,
      VehicleRegistrationNumber: formData.vehicleRegistrationNumber,
    };

    // Make the API request
    fetch("https://postlogin.onrender.com/delivery-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Handle the API response here, e.g., show a success message

        // Set popupVisible to true only after API request success
        setPopupVisible(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the API error here, e.g., show an error message
      });
  };

  const handlePopupButtonClick = () => {
    setPopupVisible(false); // Close the popup
    navigate('/deliveryDashboard'); // Redirect to dashboard
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image URL here
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust the height as needed
  };

  return (
    <div style={backgroundStyle}>
      <center>
        <h2 className="mb-5">Register as Delivery Partner</h2>
      </center>
      <div className="row">
        {/* ... (your form and other elements) */}
        <div className="col-lg-2"></div>
        <div
          className="col-lg-4 p-2 bg-white"
          style={{
            border: "1px solid #80808036",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row ">
            <div className="col-lg-12 mt-2">
  <label>Full Name:</label>
  <input
    className="w-100"
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handleInputChange}
    required
  />
  {errors.fullName && (
    <small className="error-message text-danger">{errors.fullName}</small>
  )}
</div>

             


              <div className="col-lg-12 mt-2">
                <label>Gender:</label>
                <select
                  className="w-100 p-1"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-lg-12 mt-2">
  <label>Contact Number:</label>
  <input
    className="w-100"
    type="text"
    name="contactNumber"
    value={formData.contactNumber}
    onChange={handleInputChange}
    required
  />
  {errors.contactNumber && (
    <small className="error-message text-danger">{errors.contactNumber}</small>
  )}
</div>
            

              <div className="col-lg-12 mt-2">
                <label>current address </label>
                <input
                  className="w-100"
                  type="text"
                  name="currentAddress"
                  value={formData.currentAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-lg-12 mt-2">
                <label>Aadhaar Card Number </label>
                <input
                  className="w-100"
                  type="text"
                  name="aadhaarCardNumber"
                  value={formData.aadhaarCardNumber}
                  onChange={handleInputChange}
                  required
                />
                 {errors.aadhaarCardNumber && (
    <small className="error-message text-danger">{errors.aadhaarCardNumber}</small>
  )}
              </div>

              <div className="col-lg-12 mt-2">
                <label>pan Card Number </label>
                <input
                  className="w-100"
                  type="text"
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleInputChange}
                  required
                />
                 {errors.panCardNumber && (
    <small className="error-message text-danger">{errors.panCardNumber}</small>
  )}
              </div>
              <div className="col-lg-12 mt-2">
                <label>vehicle Insurance Details </label>
                <input
                  className="w-100"
                  type="text"
                  name="vehicleInsuranceDetails"
                  value={formData.vehicleInsuranceDetails}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-12 mt-2">
                <label>vehicle Name </label>
                <input
                  className="w-100"
                  type="text"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-lg-12 mt-2">
                <label>vehicle Registration Number </label>
                <input
                  className="w-100"
                  type="text"
                  name="vehicleRegistrationNumber"
                  value={formData.vehicleRegistrationNumber}
                  onChange={handleInputChange}
                  required
                />
                 {errors.vehicleRegistrationNumber && (
    <small className="error-message text-danger">{errors.vehicleRegistrationNumber}</small>
  )}
              </div>

              <div className="col-lg-12 mt-2">
                <label>select shop</label>
                <select className="w-100">
                  <option>hye</option>
                  <option>hye</option>
                  <option>hye</option>
                  <option>hye</option>
                </select>
              </div>
            
            </div>
        <button
          type="submit"
          className="p-1 mt-3"
          style={{
            border: "1px solid rgb(11, 175, 154)",
            borderRadius: "10px",
            width: "100%",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "rgb(11, 175, 154)",
            color: "white",
          }}
        >
          Submit
        </button>

        {/* Popup */}
        {popupVisible && (
          <div className="popup">
            <div className="popup-content">
              <div
                className="p-3"
                style={{
                  border: '1px solid rgb(5 230 255 / 30%)',
                  borderRadius:'5px',
                  position: 'fixed',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'white',
                  zIndex: 999,
                  boxShadow:' 0px 9px 30px rgb(5 138 255 / 21%)'
                }}
              >
                <p>Your Profile Was Approved !</p>
                <center>
                  <button
                    onClick={handlePopupButtonClick}
                    style={{border:'1px solid #0baf9a',borderRadius:'5px',backgroundColor:'#0baf9a',color:'white',fontWeight:'bold'}}
                  >
                    Continue to Dashboard
                  </button>
                </center>
              </div>
            </div>
          </div>
        )}
</form>
</div>
         <div className="col-lg-4">
         <div className="ride-in-container">
   {/* Your elements go here */}
   <img src={del} alt="Delivery" />
   {/* Add other elements as needed */}
 </div>

 </div>

       </div>
     </div>
        
  );
}

export default DeliveryForm;
