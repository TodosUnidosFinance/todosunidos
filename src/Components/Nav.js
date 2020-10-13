import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="./images/logo.png"
              width="50"
              height="60"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            <span className="align-top"> TodosUnidos</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link text-white" to="covid19">
                  {" "}
                  Covid-19{" "}
                </Link> */}
                <Link className="nav-link text-white" to="/covid19">
                  {" "}
                  Covid-19{" "}
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-white" to="noticias"> Noticias </Link>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="https://tufi.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TUFi
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Aplicaciones
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="registra-tu-tienda">
                      Registra tu tienda
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="mapas-y-marcas">
                      Mapas y Marcas
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link text-white" to="acerca-de-nosotros">
                  Acerca de Nosotros
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link text-white" to="contacto">
                  {" "}
                  Contáctanos{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
