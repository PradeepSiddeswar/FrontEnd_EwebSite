// import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import { useSelector } from 'react-redux';


import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { useSelector } from 'react-redux';
import axios from 'axios';

import './TrackingOrder.css';

const TrackingMap = () => {
  const locationInfo = useSelector((state) => state.location);
  const addressData = useSelector((state) => state.address);
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  const startLocationName = locationInfo;
  const endLocationName = addressData;
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  console.log(startLocation,"startLocation")
  console.log(endLocation,"endLocation")


  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2lkZGVzd2FyYSIsImEiOiJjbGx4amRpdGcwaXV1M2tzNmt4azUyMnpzIn0.v-xW5tMtS0-G2kXdDTZK_g'; // Replace with your Mapbox access token

    const geocode = async (locationName, setLocation) => {
      debugger
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=${mapboxgl.accessToken}`
        );
        const data = response.data;
        if (data.features.length > 0) {
          const [longitude, latitude] = data.features[0].center;
          setLocation({ lng: longitude, lat: latitude });
        }
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
         center: [startLocation?.lng || 77.6300, startLocation?.lat || 12.9315],

        zoom: 12,
      });

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling',
      });

      map.addControl(directions, 'top-left');

      setMap(map);
      setDirections(directions);

      map.on('load', () => {
         

console.log("startend and ending value",startLocation,endLocation)
        if (startLocation) {
          new mapboxgl.Marker({ color: 'blue' })
            .setLngLat([startLocation.lng, startLocation.lat])
            .addTo(map);
            console.log(startLocation.lng,startLocation.lat,'startLocation')
        }

        if (endLocation) {
          new mapboxgl.Marker({ color: 'red' })
            .setLngLat([endLocation.lng, endLocation.lat])
            .addTo(map);
            console.log(endLocation.lng,endLocation.lat,'endLocation')

        }

        if (startLocation && endLocation) {
          directions.setOrigin([startLocation.lng, startLocation.lat]);
          directions.setDestination([endLocation.lng, endLocation.lat]);
        }
      });
    };
  //   map.on('load', () => {
  //     // Add starting and ending markers
  //     new mapboxgl.Marker({ color: 'blue' })
  //       .setLngLat([77.6300, 12.9315]) // Replace with your desired start location coordinates
  //       .addTo(map);

  //     new mapboxgl.Marker({ color: 'red' })
  //       .setLngLat([77.6446, 12.9121]) // Replace with your desired end location coordinates
  //       .addTo(map);

  //     if (directions) {
  //       directions.setOrigin([77.6300, 12.9315]); // Replace with your desired start location coordinates
  //       directions.setDestination([77.6446, 12.9121]); // Replace with your desired end location coordinates
  //     }
  //   });
  // };

    geocode(startLocationName, setStartLocation);
    geocode(endLocationName, setEndLocation);

    if (!map) {
      initializeMap();
    }
  }, []);

  return (
    <div>
      <div>
        <label>Start Location:</label>
        <input type="text" value={startLocationName} readOnly />
      </div>
      <div>
        <label>Destination:</label>
        <input type="text" value={endLocationName.address} readOnly />
      </div>
      <div ref={mapContainerRef} className="map-container" style={{ width: '100%', height: '400px' }} />
      <div id="directions-container" style={{ display: 'none' }} />
    </div>
  );
};

export default TrackingMap;























































