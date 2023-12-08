import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingProducts, setMatchingProducts] = useState([]);
  const apiUrl = "https://productlist-c8m5.onrender.com/add-cart/multiple";

  // ... Your API request code here
  const handleSearch = () => {
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

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.items && Array.isArray(result.items)) {
          const filteredProducts = result.items.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setMatchingProducts(filteredProducts);
        } else {
          console.error("Invalid data format in response:", result);
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display matching products here */}
      {matchingProducts.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
