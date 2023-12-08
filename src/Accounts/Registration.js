import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Registration.css'
import backgroundImage from '../images/homebg.png';

function Registration({ setUserName, setUserEmail }) {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
	// States for registration
    const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);
    
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);	
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
    const [errorpas, setErrorpas] = useState(false);


	// Handling the name change
   const handleNameChange = (event) => {
      const newName = event.target.value;
      const isValidName = /^[A-Za-z\s]+$/.test(newName) || newName === ''; // Reset if empty
    
      setIsValid(isValidName);
      setName(newName);
    };
    const handlePhoneNumberChange = (event) => {
      const newPhoneNumber = event.target.value;
      const isValidPhoneNumber = /^\+?\d+$/.test(newPhoneNumber) || newPhoneNumber === ''; // Reset if empty
    
      setIsValidPhone(isValidPhoneNumber);
      setPhoneNumber(newPhoneNumber);
    };

	// Handling the email change
	const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        // Basic email validation using a regular expression
        const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newEmail) || newEmail === '';
    
        setIsValidEmail(isValidEmail);
        setEmail(newEmail);
      };

	// Handling the password change

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setPasswordsMatch(newPassword === confirmPassword);
      };
    
      const handleConfirmPasswordChange = (event) => {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordsMatch(newConfirmPassword === password);
      };
    
      const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };

	// Handling the form submission
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (name === '' || email === '' || password === '' || confirmPassword==='' || phoneNumber ===''  ) {
	// 		setError(true);
	// 	}else if(password !== confirmPassword){
  //           setErrorpas(true);

  //       }
  //        else {
	// 		setSubmitted(true);
	// 		setError(false);
	// 	}
	// };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (name === '' || email === '' || password === '' || confirmPassword === '' || phoneNumber === '') {
      setError(true);
    } else if (password !== confirmPassword) {
      setErrorpas(true);
    } else {
      // All validations passed, submit the form data to the API
      const apiData = new URLSearchParams();
      apiData.append("name", name);
      apiData.append("email", email);
      apiData.append("phoneNumber", phoneNumber);
      apiData.append("password", password);
      apiData.append("confirmPassword", confirmPassword);
  
      const requestOptions = {
        method: 'POST',
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: apiData,
        redirect: 'follow'
      };
  
      fetch("https://customersignup.onrender.com/customersignup/create", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result,"result"); // Handle the API response as needed
          setSubmitted(true);
          setError(false);
          if (!error && !errorpas) {
            setUserName(name);
            setUserEmail(email);
          }
        })
        .catch(error => {
          console.log('error', error);
          // Handle API error here
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
          <center>
				<small className='text-danger'>Please enter all the fields</small>
        </center>
            {/* // <div>
            //     {errorpas?<p>password must be same</p>:error?	<h4 className='text-danger'>Please enter all the fields</h4>:"null"} */}
			</div>
		);
	};

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image URL here
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Adjust the height as needed
  };

	return (
   <>
   <div className='row' style={backgroundStyle}>
    <div className='col-lg-1'></div>
    <div className='col-lg-10' style={{marginTop:'90px'}}>
    <div className='row mt-5'>
    <div className='col-lg-1'></div>
      <div className='col-lg-4 border ' style={{borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px',backgroundColor:'#0baf9a'}}>
      <div className="vertical-center">
    <h3 className='text-white'>Welcome Back !</h3>
    <p className='text-white mt-2' style={{textTransform:'capitalize'}}> to keep connected with us please register with your personal info</p>
    <button style={{border:'1px solid white',
        backgroundColor:'#0baf9a',color:'white',width:'30%',borderRadius:'15px',marginTop:'10px',padding:'3px'}}>signup</button>
  </div>
      </div>
      

      <div className='col-lg-6 border p-5 bg-white' style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}>
      
      <form className='p-3' >
      <center> <h4 style={{color:'#0baf9a'}}>Create Account</h4></center>
      <div >
				{/* Labels and inputs for form data */}
                {/* <label className="label p-2" style={{float:'left'}}>Name</label> */}
      <input
      placeholder="Name"
      className=" w-100 border p-2 mt-3"
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        style={{ borderColor: isValid ? 'initial' : 'red',borderRadius:'10px' }}
      />
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid name.</p>}


				
				


				

      <input 
      placeholder='Phone Number'
       className=" w-100 border mt-3 p-2"
      maxLength={10}
        type="text"
        id="phone"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        style={{ borderColor: isValid ? 'initial' : 'red',borderRadius:'10px' }}
      />
      {!isValidPhone && <p style={{ color: 'red' }}>Please enter a valid phone number.</p>}


			

      <input
            className=" w-100 border mt-3 p-2"
placeholder='Email'
        type="text"
        id="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isValid ? 'initial' : 'red',borderRadius:'10px' }}
      />
      {!isValidEmail && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}

      <label className="label p-2 " style={{float:'left',marginTop:'5px'}}>Password:</label>
      <div className=" w-100 border d-flex">
        <input  className='w-100 border border-white'
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <b onClick={toggleShowPassword}>  {showPassword ? <FaEye />:<FaEyeSlash />}</b>
        {/* <span className="password-toggle-icon" onClick={toggleShowPassword}>
          {showPassword ? <FaEyeSlash/> : <FaEye />}
        </span> */}
      </div>
      <label className="label p-2 " style={{float:'left',marginTop:'5px'}}>Confirm Password:</label>
      <div  className=" w-100 border d-flex">
        <input className='w-100 border border-white'
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: passwordsMatch ? 'initial' : 'red' }}
        />
        <b onClick={toggleShowConfirmPassword}>
        {showConfirmPassword ?   <FaEye />:<FaEyeSlash />}</b>
        {/* <span className="password-toggle-icon" onClick={toggleShowConfirmPassword}>
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </span> */}
      </div>
      {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match.</p>}
<center>
				<button onClick={handleSubmit} style={{border:'1px solid #0baf9a',
        backgroundColor:'#0baf9a',color:'white',width:'50%',borderRadius:'10px',marginTop:'50px',padding:'3px'}}
						type="submit">
					Submit
				</button>
        </center>

                	{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>
      </div>
			</form>
      </div>
    </div>
    </div>

   </div>
   </>    
       
// 		<div className="form">
			

		

// <div className='row'>
// {/* <div className='col-lg-2 '></div> */}
// <div className='back col-lg-6 bg-white border p-3' style={{borderRadius:'5px'}}>
// <h5 className='mt-5'>"Your journey starts here"</h5>
// <p>Register now to explore a world of benefits and opportunities</p>
// </div>

//     <div className='col-lg-6 border p-3 bg-white' style={{borderRadius:'5px'}}>
//     <h5>User Registration</h5>
//     <form>
// 				{/* Labels and inputs for form data */}
//                 <label className="label p-2" style={{float:'left'}}>Name</label>
//       <input
//       className=" w-100 border"
//         type="text"
//         id="name"
//         value={name}
//         onChange={handleNameChange}
//         style={{ borderColor: isValid ? 'initial' : 'red' }}
//       />
//       {!isValid && <p style={{ color: 'red' }}>Please enter a valid name.</p>}


				
				


				

// <label className="label p-2 " style={{float:'left',marginTop:'5px'}}>Phone Number</label>
//       <input
//        className=" w-100 border"
//       maxLength={10}
//         type="text"
//         id="phone"
//         value={phoneNumber}
//         onChange={handlePhoneNumberChange}
//         style={{ borderColor: isValid ? 'initial' : 'red' }}
//       />
//       {!isValidPhone && <p style={{ color: 'red' }}>Please enter a valid phone number.</p>}


			

// <label className="label p-2" style={{float:'left',marginTop:'5px'}}>Email</label>
//       <input
//              className=" w-100 border"

//         type="text"
//         id="email"
//         value={email}
//         onChange={handleEmailChange}
//         style={{ borderColor: isValid ? 'initial' : 'red' }}
//       />
//       {!isValidEmail && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}

//       <label className="label p-2 " style={{float:'left',marginTop:'5px'}}>Password:</label>
//       <div className=" w-100 border d-flex">
//         <input  className='w-100 border border-white'
//           type={showPassword ? 'text' : 'password'}
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <b onClick={toggleShowPassword}>  {showPassword ? <FaEye />:<FaEyeSlash />}</b>
//         {/* <span className="password-toggle-icon" onClick={toggleShowPassword}>
//           {showPassword ? <FaEyeSlash/> : <FaEye />}
//         </span> */}
//       </div>
//       <label className="label p-2 " style={{float:'left',marginTop:'5px'}}>Confirm Password:</label>
//       <div  className=" w-100 border d-flex">
//         <input className='w-100 border border-white'
//           type={showConfirmPassword ? 'text' : 'password'}
//           id="confirmPassword"
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//           style={{ borderColor: passwordsMatch ? 'initial' : 'red' }}
//         />
//         <b onClick={toggleShowConfirmPassword}>
//         {showConfirmPassword ?   <FaEye />:<FaEyeSlash />}</b>
//         {/* <span className="password-toggle-icon" onClick={toggleShowConfirmPassword}>
//           {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//         </span> */}
//       </div>
//       {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match.</p>}

// 				<button onClick={handleSubmit} style={{border:'1px solid black',backgroundColor:'black',color:'white',width:'100%',borderRadius:'10px',marginTop:'20px',padding:'3px'}}
// 						type="submit">
// 					Submit
// 				</button>

//                 	{/* Calling to the methods */}
// 			<div className="messages">
// 				{errorMessage()}
// 				{successMessage()}
// 			</div>
// 			</form>
//     </div>
// </div>
			
// 		</div>
       
	);
}

export default Registration







