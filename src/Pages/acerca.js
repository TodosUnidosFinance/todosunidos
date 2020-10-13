import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../Components/Footer";
import UnderConstruction from "../Components/UnderConstruction";

function acerca() {
  return (
    <>
      <Helmet>
        <title>Acerca de | TodosUnidos</title>
        <meta name="description" content="Quienes somos TodosUnidos." />
      </Helmet>
      <div>
        <UnderConstruction />
        <Footer />
      </div>
    </>
  );
}

export default acerca;
