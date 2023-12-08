import React, { useState } from 'react';

const EditProductPopup = ({ productDetails, onSave, onClose }) => {
  const [editedDetails, setEditedDetails] = useState(productDetails);

  const handleSave = () => {
    onSave(editedDetails);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Edit Product</h2>
        <label>Price:</label>
        <input
          type="text"
          value={editedDetails.price || ''}
          onChange={(event) => setEditedDetails({ ...editedDetails, price: event.target.value })}
        />
        <label>Offer:</label>
        <input
          type="text"
          value={editedDetails.offer || ''}
          onChange={(event) => setEditedDetails({ ...editedDetails, offer: event.target.value })}
        />
        <label>Tagline:</label>
        <input
          type="text"
          value={editedDetails.tagline || ''}
          onChange={(event) => setEditedDetails({ ...editedDetails, tagline: event.target.value })}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditProductPopup;
