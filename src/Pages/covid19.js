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
        <link rel="canonical" href="https://todosunidos.com/covid19"></link>
      </Helmet>
      <div className="container" style={{ marginBottom: "110px" }}>
        <Covid19 />
        <WorldTable />
      </div>
      <Footer />
    </>
  );
}

export default covid19;
