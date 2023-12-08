


import React, { useState, useEffect } from 'react';
import { storeTypes, secondaryDropdownData, imageData } from './env';
import CategoryProductList from './CategoryProductList';
import { useSelector } from 'react-redux';
import {isMobile} from "react-device-detect"
import { BsFillHouseFill } from "react-icons/bs";



const mobst={
  height: '200px', width: '100%'
}

const deskst={height: '200px', width: '50%'}

const PostCategoryForm = () => {
  
    const [postform, setPostForm] = useState({
      selectedCategory: '',
      selectoption: [],
      name: '',
      image: null, // Add image to the state
      location:'',
    });

  const [selectedProductListings, setSelectedProductListings] = useState([]);
  const [productListDetails, setProductListDetails] = useState({});

  const { name, image ,location} = useSelector((state) => state.defaultValues);

    useEffect(() => {
    setPostForm((prevForm) => ({
      ...prevForm,
      location: location || '', // Set location to the default value from the Redux store
    }));
  }, [location]);

  const handleSubmit = () => {
    const apiEndpoint = "https://postlogin.onrender.com/form/form"; // API endpoint
  
    const requestBody = {
      name: postform.name || name,
      image: postform.image
        ? URL.createObjectURL(postform.image)
        : "https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80", // Set a default image if no image is uploaded
      locationInfo: ` ${postform.location}`, // Use the location from the form
      offers: selectedProductListings.map((productListing) => ({
        enterPrice: productListDetails[productListing]?.price || "0",
        enterOffer: productListDetails[productListing]?.offer || "0",
        tagline: productListDetails[productListing]?.tagline || "fastmoving",
        image:
          productListDetails[productListing]?.image ||
          "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80", // Set a default image if no image is uploaded
      })),
      selecteCategories: postform.selectedCategory,
      selectProduct: postform.selectoption.join(","),
    };
  
    const requestOptions = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(requestBody),
      redirect: "follow",
    };
  
    fetch(apiEndpoint, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result)) // Handle the API response here
      .catch((error) => console.error("Error:", error)); // Handle errors here
  };
  
  // const handleSubmit = () => {
  
  //   const selectedImage = postform.image || image;

  //   const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : '';

  //   const myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');

  //   // Prepare the request body based on the form data and other values
  //   const requestBody = {
  //     name: postform.name || name,
  //     image: imageUrl || '', // Use the URL from above
  //     latitude: "40.7128",
  //     longitude: "-74.5667",
  //     offers: selectedProductListings.map((productListing) => ({
  //       enterPrice: productListDetails[productListing]?.price || '0',
  //       enterOffer: productListDetails[productListing]?.offer || '0',
  //       tagline: productListDetails[productListing]?.tagline || 'fastmoving',
  //       image: productListDetails[productListing]?.image || 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  //     })),
  //     selecteCategories: postform.selectedCategory,
  //     selectProduct: postform.selectoption.join(','),
  //   };

  //   const raw = JSON.stringify(requestBody);

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow',
  //   };

  //   // Send the POST request to the API endpoint
  //   fetch("https://postlogin.onrender.com/form/form", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       // Handle the API response here (e.g., show a success message)
  //       console.log('Success:', result);
  //       // You can update the UI or perform other actions based on the response
  //     })
  //     .catch((error) => {
  //       // Handle errors (e.g., display an error message)
  //       console.error('Error:', error);
  //       // You can update the UI to indicate an error occurred
  //     });
  // };


  // const handleSubmit = () => {
  //   // Create an array to hold offers
  //   const offers = selectedProductListings.map((productListing) => ({
  //     name: postform.selectedCategory,
  //     enterPrice: productListDetails[productListing]?.price || '',
  //     enterOffer: productListDetails[productListing]?.offer || '',
  //     tagline: productListDetails[productListing]?.tagline || '',
  //     image: productListDetails[productListing]?.image || null,
  //     selectProduct: productListing, // Use the productListing as the selectProduct value
  //     // You can add more fields as needed
  //   }));

  //   // Construct the request body
  //   const requestBody = {
  //     name: postform.name || name, // Use the "name" prop as the default name
  //     offers,
  //     selecteCategories: postform.selectedCategory,
  //     selectProduct: postform.selectoption.join(','), // Join selected products into a string
  //   };

  //   // Define the request options
  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   const raw = JSON.stringify(requestBody);

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow',
  //   };

  //   // Send the POST request to the new API endpoint
  //   fetch("https://postlogin.onrender.com/form/form", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       // Handle the API response here (e.g., show a success message)
  //       console.log('Success:', result);
  //       // You can update the UI or perform other actions based on the response
  //     })
  //     .catch((error) => {
  //       // Handle errors (e.g., display an error message)
  //       console.error('Error:', error);
  //       // You can update the UI to indicate an error occurred
  //     });
  // };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setPostForm((prevForm) => ({
      ...prevForm,
      selectedCategory: selectedCategory,
    }));
    setSelectedProductListings([]); // Reset selected product listings to an empty array
  };

  const handleProductListingChange = (option) => {
    let updatedSelectedProductListings;

    if (selectedProductListings.includes(option)) {
      // If the option is already selected, remove it
      updatedSelectedProductListings = selectedProductListings.filter(
        (item) => item !== option
      );
    } else {
      // If the option is not selected, add it
      updatedSelectedProductListings = [...selectedProductListings, option];
    }

    // Update selected product listings in the state
    setSelectedProductListings(updatedSelectedProductListings);

    // Update selectoption as an array of selected products
    setPostForm((prevForm) => ({
      ...prevForm,
      selectoption: updatedSelectedProductListings,
    }));
  };

  const handleImageChange = (event, selectedProductListing) => {
    const selectedImage = event.target.files[0];
  
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
  
      // Update the productListDetails state with the new image URL
      setProductListDetails((prevDetails) => ({
        ...prevDetails,
        [selectedProductListing]: {
          ...prevDetails[selectedProductListing],
          image: imageUrl, // Update the image URL for the selected product listing
        },
      }));
  
      // Update the postform state if needed (for example, to keep track of the selected image)
      setPostForm((prevForm) => ({
        ...prevForm,
        image: selectedImage, // Update the selected image in the postform state
      }));
    }
  };
  
  const handlePriceChange = (event, selectedProductListing) => {
    const { value } = event.target;
    setProductListDetails((prevDetails) => ({
      ...prevDetails,
      [selectedProductListing]: {
        ...prevDetails[selectedProductListing],
        price: value,
      },
    }));
  };

  const handleOfferChange = (event, selectedProductListing) => {
    const { value } = event.target;
    setProductListDetails((prevDetails) => ({
      ...prevDetails,
      [selectedProductListing]: {
        ...prevDetails[selectedProductListing],
        offer: value,
      },
    }));
  };

  const handleTaglineChange = (event, selectedProductListing) => {
    const { value } = event.target;
    setProductListDetails((prevDetails) => ({
      ...prevDetails,
      [selectedProductListing]: {
        ...prevDetails[selectedProductListing],
        tagline: value,
      },
    }));
  };

  const renderProductListDetails = () => {
    return selectedProductListings.map((selectedProductListing, index) => (
      <div key={index}>
        <h4>{selectedProductListing}</h4>
        {/* <p>edit</p> */}
        <div className='row'>
          <div className='col-lg-6'>
          <label>Price</label><br/>
        <input style={{width:'100%'}}
          type="text"
          value={productListDetails[selectedProductListing]?.price || ''}
          onChange={(event) => handlePriceChange(event, selectedProductListing)}
        />
          </div>
          <div className='col-lg-6'>
          <label>Offer:</label><br/>
        <input style={{width:'100%'}}
          type="text"
          value={productListDetails[selectedProductListing]?.offer || ''}
          onChange={(event) => handleOfferChange(event, selectedProductListing)}
        />
          </div>
        </div>
      
       <div className='row mt-3'>
        <div className='col-lg-6'>
        <label>Select a Tagline: </label><br/>
        <select style={{width:'100%'}}
          value={productListDetails[selectedProductListing]?.tagline || ''}
          onChange={(event) => handleTaglineChange(event, selectedProductListing)}
        >
          <option value="">Select a Tagline</option>
          <option value="fastmoving">Fast Moving</option>
          <option value="closingsoon">Closing Soon</option>
          <option value="todaysoffer">Today's Offer</option>
        </select>
        </div>
        <div className='col-lg-6 mt-3'>
        <label>Upload Image:</label>
        <input
          type="file"
          onChange={(event) => handleImageChange(event, selectedProductListing)}
        />
        </div>
        {/* <div className="col-lg-12">
        <label className="m-1">Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
        />
      </div> */}
       </div>
       
       <center>
        <img
          src={
            productListDetails[selectedProductListing]?.image ||
            imageData[selectedProductListing]?.[0] ||
            null
          }
          alt={selectedProductListing}
          style={isMobile?mobst:deskst}
          className='p-3'
        />
        </center>
      </div>
    ));
  };
  
  return (
    <>
     <div className="row" style={{border:'1px solid #f8f8f8',backgroundColor:'#f8f8f8'}}>
      <div className="d-flex justify-content-evenly">
      <h4 className="p-3">Become A Vendor</h4>
      <p className="p-3 " style={{fontSize:'18px'}}><BsFillHouseFill style={{marginTop:'-3px'}}/> become a vendor</p>
</div>
      </div>
    <div style={{backgroundColor:'#8080800d',height:'100vh',marginTop:'-10px'}}>
    <center><h3 className='mt-2'>Post Ads</h3></center>
      <div className="row" >
        <div className="col-lg-3"></div>
        <div className="col-lg-6 border" style={{backgroundColor:'white'}}>
          <div className="row">
            <div className="col-lg-12 ">
              <label className="m-1">Hotel Name</label>
   

<input
        type="text"
        placeholder="Hotel name by default value comes here"
        name="hotelName"
        value={postform.name === '' ? name : postform.name}
        onChange={(event) => setPostForm({ ...postform, name: event.target.value })}
        className="w-100 m-1"
      />



           

            </div>

          
           
              <div className="col-lg-12 ">
  <label className="m-1">image</label>
  <div  style={{
              border: "1px solid white",
              boxShadow: "rgba(13, 110, 253, 0.21) 0px 0px 2px 2px",
            }}>
              <center>
  {image && (
          <img src={URL.createObjectURL(image)} alt="Hotel Image" style={isMobile?mobst:deskst} />
        )}
        </center>
        </div>
  
</div>

<div className="col-lg-12 ">
              <label className="m-1">Hotel Name</label>
   

<input
        type="text"
        placeholder="Hotel name by default value comes here"
        name="hotelName"
        value={postform.location === '' ? name : postform.location}
        onChange={(event) => setPostForm({ ...postform, name: event.target.value })}
        className="w-100 m-1"
      />



           

            </div>


           

            <div className="col-lg-12">
              <div>
                <label className="m-1">Select Categories</label>
                <select
                  className="w-100 m-1"
                  value={postform.selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select a category</option>
                  {storeTypes.map((category, index) => (
                    <option key={index} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-lg-12">
              {postform.selectedCategory &&
                secondaryDropdownData[postform.selectedCategory] && (
                  <div>
                    <label className="m-1">Select Product List</label>

                    {secondaryDropdownData[postform.selectedCategory].map(
                      (option, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={`product-listing-${index}`}
                            value={postform.selectoption}
                            checked={selectedProductListings.includes(option)}
                            onChange={() =>
                              handleProductListingChange(option)
                            }
                          />
                          <label htmlFor={`product-listing-${index}`}>
                            {option}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                )}
            </div>

            <div className="col-lg-12">
              {selectedProductListings.length > 0 && (
                <div className="mt-5" style={{ border: '1px solid #adb5bd38' }}>
                  <h4>Details for selected product listings</h4>
                  {renderProductListDetails()}
                </div>
              )}
            </div>

            <center>
              <button onClick={handleSubmit} style={{
                          border: "1px solid #0baf9a",
                          borderRadius: "5px",
                          backgroundColor: "#0baf9a",
                          color: "white",
                          fontWeight: "bold",
                          width:'100%'
                        }} className='p-1 mt-2 mb-2'>Submit</button>
            </center>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PostCategoryForm;








