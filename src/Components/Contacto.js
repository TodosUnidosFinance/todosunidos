import React from "react";
import Credentials from "./Credentials";
import Mapas from "./Mapas";

function Contacto() {
  return (
    <div className="row my-5">
      <div className="col-sm">
        <img className="img-fluid border-0" src="images/contact.svg" alt="" />
      </div>
      <div className="col-sm">
        <h2>Contáctanos</h2>
        <p>
          ¿Necesitas ayuda? Nosotros resolveremos tus dudas e inquietudes
          relacionadas con TodosUnidos. No dudes en llamarnos o escribirnos.{" "}
        </p>
        <ul className="address">
          <li>
            <span> Oficina:</span> Tu Red Inalambrica CA
          </li>
          <li>
            <span> Dirección:</span> Puerto Cabello, Edo.Carabobo, Calle
            Valencia. Oficina Tu Red Inalambrica CA
          </li>
          <li>
            <span> Telefono Cel:</span> +58 (416) 733 15 13
          </li>
          <li>
            <span> Email:</span>
            <a href="mailto:info@todosunidos.com"> william@todosunidos.com </a>
          </li>
        </ul>
        <div className="col-12" style={{ display: "none" }}>
          <Mapas
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`}
            containerElement={<div style={{ height: "400px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<p>Cargando...</p>}
          />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
