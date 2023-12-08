

// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const Map = () => {
//   const [position, setPosition] = useState([28.6139, 77.2090]); // Default position (New Delhi, India)
//   const [locationText, setLocationText] = useState(''); // State to store the location text

//   // Function to handle map move events
//   const handleMapMove = (e) => {
//     const map = e.target;
//     const newPosition = map.getCenter(); // Get the new map center
//     setPosition(newPosition); // Update the marker position based on the map center
//     setLocationText(`Latitude: ${newPosition.lat.toFixed(4)}, Longitude: ${newPosition.lng.toFixed(4)}`);
//   };

//   return (
//     <div>
//       <MapContainer
//         center={position}
//         zoom={12}
//         style={{ height: '400px', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={position}>
//           <Popup>Your Location</Popup>
//         </Marker>
//         {/* Add a hook to listen for map move events */}
//         <MapMoveHandler onMove={handleMapMove} />
//       </MapContainer>
//       <input type="text" value={locationText} readOnly />
//     </div>
//   );
// };

// // Custom hook to add map move event listener
// function MapMoveHandler({ onMove }) {
//   const map = useMap();

//   useEffect(() => {
//     map.on('move', onMove); // Attach the event listener to the map
//     return () => {
//       map.off('move', onMove); // Remove the event listener when the component unmounts
//     };
//   }, [map, onMove]);

//   return null; // This component doesn't render anything in the DOM
// }

// export default Map;

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [position, setPosition] = useState([12.9716, 77.5946]); // Default position (Bangalore, India)
  const [locationText, setLocationText] = useState(''); // State to store the location text

  // Function to handle map move events
  const handleMapMove = (e) => {
    const map = e.target;
    const newPosition = map.getCenter(); // Get the new map center
    setPosition(newPosition); // Update the marker position based on the map center
    setLocationText(`Latitude: ${newPosition.lat.toFixed(4)}, Longitude: ${newPosition.lng.toFixed(4)}`);
  };

  return (
    <div>
      <MapContainer
        center={position}
        zoom={12}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Your Location</Popup>
        </Marker>
        {/* Add a hook to listen for map move events */}
        <MapMoveHandler onMove={handleMapMove} />
      </MapContainer>
      <div className='col-lg-12 mt-2'>
      <label style={{textTransform:'capitalize'}}>address</label>
      <input type="text" value={locationText} readOnly  className='mt-1' style={{width:'100%',border:'1px solid #0baf9a',}}/>
      </div>
    </div>
    
  );
};

// Custom hook to add map move event listener
function MapMoveHandler({ onMove }) {
  const map = useMap();

  useEffect(() => {
    map.on('move', onMove); // Attach the event listener to the map
    return () => {
      map.off('move', onMove); // Remove the event listener when the component unmounts
    };
  }, [map, onMove]);

  return null; // This component doesn't render anything in the DOM
}

export default Map;



// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const Map = () => {
//   const defaultPosition = [28.6139, 77.2090]; // Default position (New Delhi, India)
//   const [position, setPosition] = useState(defaultPosition);
//   const [locationText, setLocationText] = useState(`Latitude: ${defaultPosition[0].toFixed(4)}, Longitude: ${defaultPosition[1].toFixed(4)}`);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (location) => {
//         const { latitude, longitude } = location.coords;
//         const initialPosition = [latitude, longitude];
//         setPosition(initialPosition);
//         setLocationText(`Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`);
//       },
//       (error) => {
//         console.error('Error getting location:', error);
//       }
//     );
//   }, []);

//   const handleMarkerDragEnd = (e) => {
//     const marker = e.target;
//     const newPosition = marker.getLatLng();
//     setPosition([newPosition.lat, newPosition.lng]);
//     setLocationText(`Latitude: ${newPosition.lat.toFixed(4)}, Longitude: ${newPosition.lng.toFixed(4)}`);
//   };

//   return (
//     <div>
//       <MapContainer
//         center={position}
//         zoom={12}
//         style={{ height: '400px', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker
//           position={position}
//           draggable={true}
//           onDragend={handleMarkerDragEnd}
//         >
//           <Popup>Your Location</Popup>
//         </Marker>
//         <MapMoveHandler />
//       </MapContainer>
//       <input type="text" value={locationText} readOnly />
//     </div>
//   );
// };

// function MapMoveHandler() {
//   const map = useMap();

//   useEffect(() => {
//     map.on('move', () => {
//       // Handle map move events if needed
//     });
//     return () => {
//       map.off('move');
//     };
//   }, [map]);

//   return null;
// }

// export default Map;






