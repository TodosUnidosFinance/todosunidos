import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-sm-6 mb-10">
        <div className="col-sm">
          <img className="img-fluid border-0" src="images/404.png" alt="" />
        </div>
        <div className="col-sm">
          <h2>Oops! Página no encontrada</h2>
          <p>La paǵina o ruta que deseas ingresar no existe.</p>
          <p style={{ textAlign: "center" }}>
            <Link to="/">Ir al inicio </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
