import React from "react";
import "../App.css";
import Servicios from "../Components/Servicios";
import Porque from "../Components/Porque";
import Team from "../Components/Team";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

function home() {
  return (
    <div>
      <Banner />
      <Porque />
      <Servicios />
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 justify-content-md-center mb-5">
        <Team
          name="William J. Hernandez R."
          job="Founder"
          image="images/william.jpeg"
        />
        <Team name="Gustavo A. Martinez" job="CTO" image="images/gustavo.jpg" />
        <Team name="Luis Bauste" job="Lead Developer" image="images/luis.jpg" />
        <Team
          name="Abraham Pulido"
          job="Developer"
          image="images/abraham.jpg"
        />
        <Team name="Juan Guadama" job="Developer" image="images/juan.jpg" />
        <Team name="Michael Hernandez" job="Asesor" image="images/user.svg" />
        <Team
          name="Fernando Iturriza"
          job="Asesor"
          image="images/fernando.jpg"
        />
        <Team
          name="Franklin Sandoval R."
          job="Asesor"
          image="images/user.svg"
        />
        <Team name="Jean Paul Herrera" job="Asesor" image="images/jean.jpg" />
      </div>
      <Footer />
    </div>
  );
}

export default home;
