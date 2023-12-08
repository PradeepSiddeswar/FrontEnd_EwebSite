import React, { useEffect, useState } from 'react';

const OrderTrackingMap = ({ orderLocation }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Initialize the map using the Google Maps API
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://postlogin.onrender.com/userLocation`;
    googleMapScript.onload = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: orderLocation.lat, lng: orderLocation.lng },
        zoom: 12,
      });
      setMap(map);
    };
    document.head.appendChild(googleMapScript);
  }, []);

  useEffect(() => {
    // Update the map marker when the order location changes
    if (map) {
      const marker = new window.google.maps.Marker({
        position: { lat: orderLocation.lat, lng: orderLocation.lng },
        map: map,
      });
    }
  }, [orderLocation, map]);

  return <div id="map" style={{ height: '300px', width: '100%' }}></div>;
};

export default OrderTrackingMap;
