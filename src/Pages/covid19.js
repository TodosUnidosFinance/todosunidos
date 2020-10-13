import React from "react";
import Covid19 from "../Components/Covid19";
import WorldTable from "../Components/WorldTable";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

function covid19() {
  return (
    <>
      <Helmet>
        <title>Covid-19 | TodosUnidos</title>
        <meta
          name="description"
          content="Estadísticas en el mundo del Covid19."
        />
      </Helmet>
      <div>
        <Covid19 />
        <WorldTable />
        <Footer />
      </div>
    </>
  );
}

export default covid19;
