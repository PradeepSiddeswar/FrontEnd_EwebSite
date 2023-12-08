import React, { useState } from 'react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const handleInputChange = (e) => {
    setOrderId(e.target.value);
  };

  const trackOrder = () => {
    // Implement logic to fetch order status based on orderId
    // For example, you can make an API call to retrieve the status
    // Update the orderStatus state accordingly
  };

  return (
    <div>
      <h2>Order Tracking</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={handleInputChange}
      />
      <button onClick={trackOrder}>Track</button>
      <div>
        {orderStatus && (
          <p>
            Order ID: {orderId} - Status: {orderStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
