import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

//Coordenadas de la Torre Ejecutiva: 10.473090, -68.011076

const Mapas = (props) => {
  return (
    <div>
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 10.47309, lng: -68.011076 }}
      >
        <Marker lat="10.47309" lng="-68.011076" />
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Mapas));
