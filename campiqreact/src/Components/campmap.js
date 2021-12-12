import React, { Component } from "react";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import GoogleMapReact from "google-map-react";

function Marker() {
  return <RoomSharpIcon name="marker" size="big" color="error" />;
}

export default function CampMap({ lat, lng }) {
  const defaultProps = {
    center: {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "35vh", width: "35vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBjmuuI57Q4EXQOVw7bnWsT9FEw8tu-Waw" }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
}
