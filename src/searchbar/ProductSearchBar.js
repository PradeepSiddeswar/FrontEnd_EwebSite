// import React, { useState } from 'react';
// import './ProductSearchBar.css'
// import { products } from '../Base/env';



// function ProductSearchBar() {
//     const [searchValue, setSearchValue] = useState('');
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);
  
//     const handleSearchChange = (event) => {
//       const value = event.target.value;
//       setSearchValue(value);
//     };
  
//     const handleSearchClick = () => {
//       const filtered = products.filter(
//         (product) =>
//           product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//           product.category.toLowerCase().includes(searchValue.toLowerCase())
//       );
  
//       setFilteredProducts(filtered);
//       setShowNoResultsMessage(filtered.length === 0);
//     };
  
//     const handleBackspace = (event) => {
//       if (event.key === 'Backspace') {
//         setSearchValue('');
//         setFilteredProducts([]);
//         setShowNoResultsMessage(false);
//       }
//     };
  
//     return (
//       <>
//       <div className="search-bar">
//         <div className="search-input">
//           <input
//             type="text"
//             placeholder="Search for products..."
//             value={searchValue}
//             onChange={handleSearchChange}
//             onKeyDown={handleBackspace}
//           />
//           <button onClick={handleSearchClick}>Search</button>
//         </div>
//         </div>
//         <div className="search-results">
//           {filteredProducts.map((product) => (
//             <p key={product.id}>
//               {product.name} - {product.category}
//             </p>
//           ))}
//           {showNoResultsMessage && <p>No matching products found.</p>}
//         </div>
//         </>
     
//     );
//   }
  
//   export default ProductSearchBar;


// import React, { useState, useEffect } from 'react';

// const ProductSearchBar = () => {
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);
//   const [showResults, setShowResults] = useState(false); // Control whether to show results

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//       "products": [
//         {
//           "name": "caffe",
//           "price": 6
//         },
//         {
//           "name": "juice center",
//           "price": 8
//         },
//         {
//           "name": "caffe",
//           "price": 7
//         }
//       ]
//     });

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };

//     fetch("https://productlist-c8m5.onrender.com/add-cart/multiple", requestOptions)
//       .then(response => response.json()) // Parse response as JSON
//       .then(result => {
//         if (result.items && Array.isArray(result.items)) {
//           setData(result.items);
//           console.log(result.items)
//         } else {
//           console.error("Invalid data format in response:", result);
//         }
//       })
//       .catch(error => console.log('error', error));
//   }, []);

//   useEffect(() => {
//     // Filter the data based on the search query
//     const filteredResults = data.filter(item =>
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredData(filteredResults);
//   }, [searchQuery, data]);

//   const handleSearchClick = () => {
//     setShowResults(true);
//   };

//   const handleInputChange = event => {
//     setSearchQuery(event.target.value);
//     setShowResults(false); // Hide results when search query changes
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleSearchClick}>Search</button>
//       </div>
    
//       {showResults && (
//         <ul>
//           {filteredData.length > 0 ? (
//             filteredData.map((item, index) => (
//               <li key={index}>
//                 {item.name} - ${item.price}
//               </li>
//             ))
//           ) : (
//             <p>Data not found.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductSearchBar;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductSearchBar = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "products": [
        {
          "name": "caffe",
          "price": 6
        },
        {
          "name": "juice center",
          "price": 8
        },
        {
          "name": "caffe",
          "price": 7
        }
      ]
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://productlist-c8m5.onrender.com/add-cart/multiple", requestOptions)
      .then(response => response.json()) // Parse response as JSON
      .then(result => {
        if (result.items && Array.isArray(result.items)) {
          setData(result.items);
          console.log(result.items)
        } else {
          console.error("Invalid data format in response:", result);
        }
      })
      .catch(error => console.log('error', error));
  }, []);

  useEffect(() => {
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchQuery, data]);

  const handleSearchClick = () => {
    setShowResults(true);
    // Use the history object to navigate to the search category
    // history.push(`/category/${searchQuery}`);
    navigate(`/category/${searchQuery}`);

  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
    setShowResults(false);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
    
      {showResults && (
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))
          ) : (
            <p>Data not found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default ProductSearchBar;






  
  


