import React from "react";

function Servicios() {
  return (
    <div>
      <div className="row mb-5">
        <div className="col col-sm">
          <div className="card">
            <img
              src="images/undraw_crypto_portfolio_2jy5.svg"
              className="card-img-top"
              alt="Ayuda Social"
            />
            <div className="card-body">
              <h5 className="card-title">Finanzas Descentralizadas</h5>
              <p className="card-text">
                DEFI o sistemas monetarios que utilizan blockchains públicas.
              </p>
              <a
                href="https://tufi.finance"
                target="_blank"
                className="btn btn-warning text-dark font-weight-bold"
              >
                TuFi.finance
              </a>
            </div>
          </div>
        </div>

        <div className="col col-sm">
          <div className="card">
            <img
              src="images/undraw_programming_2svr.svg"
              className="card-img-top"
              alt="Ayuda Social"
            />
            <div className="card-body">
              <h5 className="card-title">Investigacion y Desarrollo</h5>
              <p className="card-text">
                Creando dApps y Contratos Inteligentes, facilitando el
                desarrollo de aplicaciones descentralizadas
              </p>
              <a href="#" className="btn btn-primary">
                Conoce mas
              </a>
            </div>
          </div>
        </div>

        <div className="col col-sm">
          <div className="card">
            <img
              src="images/undraw_at_home_octe.svg"
              className="card-img-top"
              alt="Ayuda Social"
            />
            <div className="card-body">
              <h5 className="card-title">Ayuda Social</h5>
              <p className="card-text">
                Enfocandonos siempre en lo social, el 10% de nuestros ingresos
                seran dedicados a obras sociales que seran validadas,
                verificadas y programadas por la comunidad
              </p>
              <a href="#" className="btn btn-primary">
                Conoce mas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
