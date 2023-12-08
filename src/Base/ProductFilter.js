import React, { useState, useEffect } from 'react';

function ProductFilter() {
  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchClicked, setSearchClicked] = useState(false); // New state variable

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  useEffect(() => {
    if (searchClicked) { // Only trigger the API call when search is clicked
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
        .then(response => response.json())
        .then(result => {
          if (result.items && Array.isArray(result.items)) {
            // Apply filters based on minPrice and maxPrice
            let filteredItems = result.items.filter(item => {
              const price = item.price;
              return (minPrice === '' || price >= parseFloat(minPrice)) &&
                     (maxPrice === '' || price <= parseFloat(maxPrice));
            });
            setData(filteredItems);
          } else {
            console.error("Invalid data format in response:", result);
          }
        })
        .catch(error => console.log('error', error));

      setSearchClicked(false); // Reset searchClicked
    }
  }, [searchClicked, minPrice, maxPrice]);

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button> {/* New button */}
      </div>
      <div>
        {/* Render your filtered data */}
        {data.map(item => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;



















// import React, { useState } from 'react';
// import {products} from './env'


// const ProductFilter = () => {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [showFilteredResults, setShowFilteredResults] = useState(false);

//   const handleFilter = () => {
//     const filtered = products.filter(
//       (product) => product.price >= parseFloat(minPrice) && product.price <= parseFloat(maxPrice)
//     );
//     setFilteredProducts(filtered);
//     setShowFilteredResults(true);
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="minPrice">Min Price:</label>
//         <input
//           type="number"
//           id="minPrice"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="maxPrice">Max Price:</label>
//         <input
//           type="number"
//           id="maxPrice"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//         />
//       </div>
//       <button onClick={handleFilter}>Apply Filter</button>

//       {showFilteredResults && (
//         <ul>
//           {filteredProducts.map((product) => (
//             <li key={product.id}>
//               {product.name} - {product.category} - ${product.price}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ProductFilter;



