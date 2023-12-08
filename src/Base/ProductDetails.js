import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Map from "./Map";
import ProductFilter from "./ProductFilter";
import { category } from "./env";
import cafe from "../images/cafe.jpeg";
import { useDispatch } from 'react-redux';
import { setLocationInfo } from "../Reducer/locationSlice";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const { productName, selecteCategories } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    // Use the category parameter in the URL
    fetch(
      `https://postlogin.onrender.com/form/get?category=${selecteCategories}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "mm"); // Log the API response for debugging
        setData(result);
      })
      .catch((error) => console.log("error", error));
  }, [selecteCategories]); // Include category as a dependency

  // const filteredData = data.filter(
  //   (item) => item.name === productName && item.category === selecteCategories
  // );

  // Add the filtering logic here
const filteredData = data.filter(item => {
  const itemName = item.name ? item.name.toLowerCase() : "";
  const itemCategory = item.category ? item.category.toLowerCase() : "";
  const productNameLowerCase = productName ? productName.toLowerCase() : "";
  const selecteCategoriesLowerCase = selecteCategories ? selecteCategories.toLowerCase() : "";
  
  return itemName === productNameLowerCase && itemCategory === selecteCategoriesLowerCase;
});

  console.log("productName:", productName);
  console.log("selecteCategories:", selecteCategories);
  console.log("filteredData:", filteredData);

  return (
    <div>
      <h1 className="p-3"> {productName}</h1>

      <div className="row m-2">
        <div
          className="col-lg-2"
          style={{
            border: "1px solid #0baf9a",
            borderRadius: "10px",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          {category.map((val) => (
            <div className="col-lg-12 p-2" key={val.name}>
              <Link
                to={`/product/${val.name}/selecteCategories/${val.name}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="d-flex justify-content-between">
                  <img
                    src={val.imageSrc}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <br />
                  <p
                    className="text-black"
                    style={{ textTransform: "capitalize" }}
                  >
                    {val.name}
                  </p>
                </div>
              </Link>
              <hr style={{ color: "#00000040" }} />
            </div>
          ))}
        </div>
        <div className="col-lg-10">
          <div className="row">
            {/* {data
              .filter((item) => item.selecteCategories === selecteCategories)
              .map((item, index) => (
                <div
                  className="col-lg-3  m-3 p-2"
                  key={index}
                  style={{ border: "1px solid #8080802b" }}
                >
                  <Link
                    to={`/productDetails/${item._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="position-relative p-1">
                 
                      {item.offers?.[0] && (
                        <span
                          className="position-absolute top-10 end-80 translate-start badge p-2"
                          style={{
                            backgroundColor: "rgb(11, 175, 154)",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                          }}
                        >
                          {item.offers[0].tagline}
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      )}
                      <img src={cafe} style={{width:'100%',height:'230px'}}/>

                     
                      <div className="d-flex justify-content-between p-2">
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            textTransform: "capitalize",
                          }}
                        >
                          {" "}
                          {item.name || "N/A"}
                        </p>
                     
                          {item.locationInfo && (
                        <p style={{ fontWeight: 'bold', color: 'black' }}>
                          {item.locationInfo}
                        </p>
                      )}

                        </div>
                      <div>
                        <b className="p-2 " style={{ color: "#e25100" }}>
                          {" "}
                          ₹{item.offers?.[0]?.enterPrice || "N/A"}
                          <span
                            className="text-black p-1"
                            style={{ fontSize: "12px" }}
                          >
                            {" "}
                            {item.offers?.[0]?.enterOffer || "N/A"}%
                          </span>
                        </b>
                      </div>
                    </div>
                  </Link>
                </div>
              ))} */}
               {data
        .filter((item) => item.selecteCategories === selecteCategories)
        .map((item, index) => {
          if (item.locationInfo) {
            dispatch(setLocationInfo(item.locationInfo));
          }
          return (
            <div
              className="col-lg-3  m-3 p-2"
              key={index}
              style={{ border: "1px solid #8080802b" }}
            >
               <Link
                    to={`/productDetails/${item._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="position-relative p-1">
                 
                      {item.offers?.[0] && (
                        <span
                          className="position-absolute top-10 end-80 translate-start badge p-2"
                          style={{
                            backgroundColor: "rgb(11, 175, 154)",
                            fontWeight: "bold",
                            textTransform: "capitalize",
                          }}
                        >
                          {item.offers[0].tagline}
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      )}
                      <img src={cafe} style={{width:'100%',height:'230px'}}/>

                     
                      <div className="d-flex justify-content-between p-2">
                        <p
                          style={{
                            fontWeight: "bold",
                            color: "black",
                            textTransform: "capitalize",
                          }}
                        >
                          {" "}
                          {item.name || "N/A"}
                        </p>
                     
                          {item.locationInfo && (
                        <p style={{ fontWeight: 'bold', color: 'black' }}>
                          {item.locationInfo}
                        </p>
                      )}

                        </div>
                      <div>
                        <b className="p-2 " style={{ color: "#e25100" }}>
                          {" "}
                          ₹{item.offers?.[0]?.enterPrice || "N/A"}
                          <span
                            className="text-black p-1"
                            style={{ fontSize: "12px" }}
                          >
                            {" "}
                            {item.offers?.[0]?.enterOffer || "N/A"}%
                          </span>
                        </b>
                      </div>
                    </div>
                  </Link>
              {/* ... rest of the mapping logic ... */}
              {/* Add your JSX here related to the mapping logic */}
            </div>
          );
        })}
          </div>
        </div>
        {/* <div className='col-lg-4'>
  <Map/>
  </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
