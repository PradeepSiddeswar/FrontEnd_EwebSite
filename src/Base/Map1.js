// src/components/Map.js
import React from 'react';
import ReactMapGL from 'react-map-gl';

const Map1 = ({ orderLocation }) => {
  const [viewport, setViewport] = React.useState({
    width: '100%',
    height: '400px',
    latitude: orderLocation.lat,
    longitude: orderLocation.lng,
    zoom: 10,
  });

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} // Set your Mapbox API token here
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {/* Mark the order location on the map */}
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            width: 30,
            height: 30,
            background: 'red',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            left: `${viewport.width / 2}px`,
            top: `${viewport.height / 2}px`,
          }}
        ></div>
      </ReactMapGL>
    </div>
  );
};

export default Map1;
