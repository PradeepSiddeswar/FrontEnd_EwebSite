



// import React, { useState } from 'react';

// const LocationInputField = () => {
//   const [city, setCity] = useState('');

//   const handleLocationClick = () => {
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           try {
//             const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
//             const data = await response.json();
//             const cityName = data.address.city || data.address.town || data.address.village || 'Unknown';
//             setCity(cityName);
//           } catch (error) {
//             console.error('Error fetching city:', error);
//           }
//         },
//         (error) => {
//           console.error('Error getting location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation not available');
//     }
//   };

//   return (
//     <div>
//       <h2>Select Your Location</h2>
//       <input
//         type="text"
//         placeholder="Enter your location"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={handleLocationClick}>
//         <span role="img" aria-label="Location">📍</span> Get Current City
//       </button>
//     </div>
//   );
// };

// export default LocationInputField;


import React, { useState } from 'react';

const LocationInputField = () => {
  const [locationInfo, setLocationInfo] = useState('');

  const handleLocationClick = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
            const data = await response.json();
            const city = data.address.city || data.address.town || data.address.village || 'Unknown';
            const area = data.address.suburb || data.address.neighbourhood || 'Unknown';
            setLocationInfo(`Area: ${area}, City: ${city}`);
          } catch (error) {
            console.error('Error fetching location:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation not available');
    }
  };

  return (
    <div>
      <h2>Select Your Location</h2>
      <input
        type="text"
        placeholder="Enter your location"
        value={locationInfo}
        onChange={(e) => setLocationInfo(e.target.value)}
      />
      <button onClick={handleLocationClick}>
        <span role="img" aria-label="Location">📍</span> Get Current Area
      </button>
    </div>
  );
};

export default LocationInputField;


