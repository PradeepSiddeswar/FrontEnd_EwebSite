import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PostCategoryForm from '../Base/PostCategoryForm';

function CustomerRegistration() {
  const [registeredName, setRegisteredName] = useState('');
	// States for registration
    const [name, setName] = useState('');
    
    const [ownername, setOwnerName] = useState('');

  const [isValid, setIsValid] = useState(true);
  const [isValid1, setIsValid1] = useState(true);

  const [image, setImage] = useState(null); // New state for image

const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);	
  const [gstNumber, setGstNumber] = useState('');
  const [isValidGst, setIsValidGst] = useState(true);
  const [bbmpCertificate, setBbmpCertificate] = useState('');
  const [isValidBb, setIsValidBb] = useState(true);
	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change


    // const handleNameChange = (event) => {
    //     const newName = event.target.value;
    //     // Updated validation logic: only allow letters and spaces
    //     const isValidName = /^[A-Za-z\s]+$/.test(newName);
    
    //     setIsValid(isValidName);
    //     setName(newName);
    //   };

    const handleNameChange = (event) => {
      const newName = event.target.value;
      setName(newName);
    };
    

      const handleOwnerNameChange = (event) => {
        const newName1 = event.target.value;
        // Updated validation logic: only allow letters and spaces
        const isValidName1 = /^[A-Za-z\s]+$/.test(newName1);
    
        setIsValid1(isValidName1);
        setOwnerName(newName1);
      };

      const handlePhoneNumberChange = (event) => {
        const newPhoneNumber = event.target.value;
        // Updated validation logic: allow only numbers and optional plus sign at the beginning
        const isValidPhoneNumber = /^\+?\d+$/.test(newPhoneNumber);
    
        setIsValidPhone(isValidPhoneNumber);
        setPhoneNumber(newPhoneNumber);
      };

	// Handling the email change
	const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        // Basic email validation using a regular expression
        const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newEmail);
    
        setIsValidEmail(isValidEmail);
        setEmail(newEmail);
      };

      const handleGstNumberChange = (event) => {
        const newGstNumber = event.target.value;
        const isValidGstNumber = validateGstNumber(newGstNumber);
    
        setIsValidGst(isValidGstNumber);
        setGstNumber(newGstNumber);
      };
    
      const validateGstNumber = (number) => {
        // Basic validation for India's GSTIN format
        const regex = /^[0-9A-Za-z]{15}$/;
        if (!regex.test(number)) {
          return false;
        }
    
        // Additional validation logic for GSTIN checksum (last character)
        const lastCharacter = number.charAt(14);
        // Implement your own checksum validation logic here
    
        return true; // Replace with your actual validation
      };
	
      const handleBbmpCertificateChange = (event) => {
        const newBbmpCertificate = event.target.value;
        // Basic BBMP certificate validation using a regular expression
        const isValidBbmpCertificate = /^[A-Za-z0-9]{10}$/.test(newBbmpCertificate);
    
        setIsValidBb(isValidBbmpCertificate);
        setBbmpCertificate(newBbmpCertificate);
      };

        // Handling the image change
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };


	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === ''  || phoneNumber ==='' ) {
			setError(true);
		}
         else {
          const formdata = new FormData();
          formdata.append('name', name);
          formdata.append('phone', phoneNumber);
          formdata.append('email', email);
          formdata.append('gstRegistrationNo', gstNumber);
          formdata.append('BbmpCertificateNo', bbmpCertificate);
          formdata.append('latitude', '343434');
          formdata.append('longitude', '12121212');
          const registeredNameFromAPI = name;
          setRegisteredName(registeredNameFromAPI);
          console.log(registeredName,"registeredName")
          if (image) {
            formdata.append('image', image);
          }
    
          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };
    
          fetch('https://customer-wr5s.onrender.com/customerRegistration', requestOptions)
            .then(response => response.text())
            .then(result => {
              console.log(result);
              setSubmitted(true); // Show success message
              setError(false);
            })
            .catch(error => {
              console.log('error', error);
              setError(true);
            });
          
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<p className='text-success'>User <b>{name}</b> successfully registered!!</p>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h4 className='text-danger'>Please enter all the fields</h4>
			</div>
		);
	};

	return (
        <div className="background-container">
        <div className="form-container">
		<div className="form">
			

		

<div className='row'>
{/* <div className='col-lg-2 '></div> */}
{/* <div className=' col-lg-6 bg-dark border p-3' style={{borderRadius:'5px'}}>
<h5 className='mt-5'>"Your journey starts here"</h5>
<p>Register now to explore a world of benefits and opportunities</p>
</div> */}

    <div className='col-lg-6 border p-3 bg-white' style={{borderRadius:'5px'}}>
    <h5>User Registration</h5>
    <form>
   

				{/* Labels and inputs for form data */}
                <label className="label p-2" style={{float:'left'}}>Shop Name</label>
      <input
      className=" w-100 border"
        type="text"
        id="name"
        value={name}
        
        onChange={handleNameChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid name.</p>}

      <label className="label p-2" style={{float:'left'}}>Owner Name</label>
      <input
      className=" w-100 border"
        type="text"
        id="name"
        value={ownername}
        onChange={handleOwnerNameChange}
        style={{ borderColor: isValid1 ? 'initial' : 'red' }}
      />
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid name.</p>}



				
				


				

<label className="label p-2 " style={{float:'left',marginTop:'5px'}}>Phone Number</label>
      <input
       className=" w-100 border"
      maxLength={10}
        type="text"
        id="phone"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValidPhone && <p style={{ color: 'red' }}>Please enter a valid phone number.</p>}


			

<label className="label p-2" style={{float:'left',marginTop:'5px'}}>Email</label>
      <input
             className=" w-100 border"

        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValidEmail && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}

      <label className="label p-2" style={{float:'left',marginTop:'5px'}}>GST Registration Number:</label>
      <input
        className=" w-100 border"
        type="text"
        id="gstNumber"
        value={gstNumber}
        onChange={handleGstNumberChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValidGst && <p style={{ color: 'red' }}>Please enter a valid GST registration number.</p>}
    
      <label className="label p-2" style={{float:'left',marginTop:'5px'}}>BBMP Certificate Number:</label>
      <input
       className=" w-100 border"
        type="text"
        id="bbmpCertificate"
        value={bbmpCertificate}
        onChange={handleBbmpCertificateChange}
        style={{ borderColor: isValid ? 'initial' : 'red' }}
      />
      {!isValidBb && <p style={{ color: 'red' }}>Please enter a valid BBMP certificate number.</p>}


      <label className="label p-2" style={{float:'left',marginTop:'5px'}}>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

				<button onClick={handleSubmit} style={{border:'1px solid black',backgroundColor:'black',color:'white',width:'100%',borderRadius:'10px',marginTop:'20px',padding:'3px'}}
						type="submit">
					Submit
				</button>

                	{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>
			</form>
      <PostCategoryForm name={name} />
    </div>
</div>
			
		</div>
        </div>
        </div>
	);
}

export default CustomerRegistration