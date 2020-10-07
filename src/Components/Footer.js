import React from "react";
import Social from "../Components/Social";

function Footer() {
  const fecha = new Date();
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-auto mr-auto">
            <img
              className="border-0"
              style={{ maxWidth: "50px" }}
              src="images/logo.png"
            />
          </div>
          <div className="col-auto">
            <Social />
          </div>
        </div>
        <p className="text-muted text-center">
          Todos los derechos reservados &copy; {fecha.getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
