import React from "react";
import Footer from "../Components/Footer";
import Contacto from "../Components/Contacto";
import { Helmet } from "react-helmet";

function contact() {
  return (
    <>
      <Helmet>
        <title>Contáctanos | TodosUnidos</title>
        <meta
          name="description"
          content="Contáctanos en TodosUnidos. ¿Necesitas ayuda? Nosotros resolveremos tus dudas e inquietudes relacionadas con TodosUnidos. No dudes en llamarnos o escribirnos."
        />
        <link rel="canonical" href="https://todosunidos.com/contacto"></link>
      </Helmet>
      <div className="container" style={{ marginBottom: "110px" }}>
        <Contacto />
      </div>
      <Footer />
    </>
  );
}

export default contact;
