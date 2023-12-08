import React,{useState} from 'react';
import DistanceSelector from '../Base/DistanceSelector';
import ProductList from '../Base/ProductList';
const HotelCategory = () => {
  const [distanceRange, setDistanceRange] = useState(10); // Default distance range

  const handleDistanceChange = (newDistance) => {
    setDistanceRange(newDistance);
  };

  // Assuming you have a list of products
  const products = [
    { id: 1, name: 'Product 1', distance: 5 },
    { id: 2, name: 'Product 2', distance: 15 },
    { id: 3, name: 'Product 3', distance: 25 },
    // Add more products here
  ];

  const filteredProducts = products.filter((product) => product.distance <= distanceRange);
  // Load data related to the Hotel category, e.g., from an API or a static array


  return (
    <div>
       <DistanceSelector
        minDistance={0}
        maxDistance={50} // Change this based on your requirements
        distanceRange={distanceRange}
        onDistanceChange={handleDistanceChange}
      />
       <h2>Hotelshjhhhhhhhhhhhhhhhhhhhhhhh</h2>
      <ProductList products={filteredProducts} />
     
     
    </div>
  );
};

export default HotelCategory;
