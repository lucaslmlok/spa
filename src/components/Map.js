import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

const coordinate = { lat: 22.200335, lng: 114.017555 };

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={coordinate}
      options={{
        streetViewControl: false,
        zoomControl: false,
        mapTypeControl: false
      }}
    >
      <Marker position={coordinate} />
    </GoogleMap>
  ))
);

export default Map;
