import React from "react";

function Banner() {
  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded-bottom bg-dark mb-5">
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">
          Un Portal a la descentralización
        </h1>
        <p className="lead my-3">
          TodosUnidos es un Portal Abierto y Descentralizado con la visión de
          exponenciar y masificar la utilización de la tecnología para el
          beneficio de nuestra sociedad, y trasladar todo los beneficios que
          esta poderosa herramienta nos proporcionan a nuestros usuarios.
        </p>
        <p className="lead mb-0">
          {/* <a href="#" className="text-white font-weight-bold">
            Conoce mas...
          </a> */}
        </p>
      </div>
    </div>
  );
}

export default Banner;
