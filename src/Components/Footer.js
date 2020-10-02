import React from "react";
import Social from "../Components/Social";

function Footer() {
  const fecha = new Date();
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <Social />
          <p className="text-muted text-center">
            Todos los derechos reservados &copy; {fecha.getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
