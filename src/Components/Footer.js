import React from "react";
import Social from "../Components/Social";

function Footer() {
  const fecha = new Date();
  return (
    <footer
      className="footer mt-auto py-3 bg-primary align- w-100"
      style={{ position: "absolute", bottom: 0 }}
    >
      <div className="container  align-middle">
        <div className="row">
          <div className="col-4 mr-auto">
            <img
              className="border-0"
              style={{ maxWidth: "50px" }}
              src="images/logo.png"
              alt=""
            />
          </div>
          <div className="col-4 text-center text-white">
            <h5>Todos los derechos reservados &copy; {fecha.getFullYear()}</h5>
          </div>
          <div className="col-4">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
