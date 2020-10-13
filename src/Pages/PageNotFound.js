import React from "react";

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
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
