import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const MapContainer: React.FC = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 24.9357698, lng: 66.9392326 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(MapContainer));

export default WrappedMap;
