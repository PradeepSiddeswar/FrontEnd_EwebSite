


// CategoryProductList.js
import React, { useState } from 'react';

function CategoryProductList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCategoryChange = (e) => {
    const categoryId = parseInt(e.target.value);
    setSelectedCategory(categoryId);
    setSelectedProducts([]);
  };

  const toggleProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

     // data.js
 const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    // Add more categories as needed
  ];
  
   const products = [
    { id: 1, categoryId: 1, name: 'Product 1' },
    { id: 2, categoryId: 1, name: 'Product 2' },
    { id: 3, categoryId: 2, name: 'Product 3' },
    // Add more products with corresponding categoryIds
  ];

  return (
    <div>
      <h2>Category and Product List</h2>
      <div>
        <label htmlFor="categorySelect">Select a Category:</label>
        <select
          id="categorySelect"
          value={selectedCategory || ''}
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory && (
        <div>
          <h3>Selected Category: {selectedCategory}</h3>
          <h3>Selected Products:</h3>
          <ul>
            {products
              .filter((product) => product.categoryId === selectedCategory)
              .map((product) => (
                <li key={product.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={product.id}
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => toggleProduct(product.id)}
                    />
                    {product.name}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoryProductList;

