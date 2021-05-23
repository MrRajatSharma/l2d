import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export default () => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '30em', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'asd' }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33
        }}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}