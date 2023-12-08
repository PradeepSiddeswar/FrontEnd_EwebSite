// OrderSummary.js (or any other relevant component)
import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const deliveryAddress = useSelector((state) => state.deliveryAddress);

  return (
    <div>
      <h2>Order Summary</h2>
      {deliveryAddress && (
        <div>
          <h3>Delivery Address:</h3>
          <p>Name: {deliveryAddress.name}</p>
          <p>Address: {deliveryAddress.addressLine1}</p>
          {/* Display other address fields */}
        </div>
      )}
      {/* Other order summary details */}
    </div>
  );
};

export default OrderSummary;
