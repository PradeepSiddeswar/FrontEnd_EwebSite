import React from 'react';

const DistanceSelector = ({ minDistance, maxDistance, distanceRange, onDistanceChange }) => {
  return (
    <div>
      <input
        type="range"
        min={minDistance}
        max={maxDistance}
        value={distanceRange}
        onChange={(e) => onDistanceChange(parseInt(e.target.value))}
      />
      <p>Distance: {distanceRange} km</p>
    </div>
  );
};

export default DistanceSelector;
