import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./Pages/home";
import contact from "./Pages/contact";
import noticias from "./Pages/noticias";
import mapasMarcas from "./Pages/mapasMarcas";
import acerca from "./Pages/acerca";
import registraTienda from "./Pages/registraTienda";
import defi from "./Pages/defi";
import covid19 from "./Pages/covid19";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/contacto" component={contact} />
        <Route path="/noticias" component={noticias} />
        <Route path="/mapas-y-marcas" component={mapasMarcas} />
        <Route path="/acerca-de-nosotros" component={acerca} />
        <Route path="/registra-tu-tienda" component={registraTienda} />
        <Route path="/defi" component={defi} />
        <Route path="/covid19" component={covid19} />
      </Switch>
    </Router>
  );
}

export default App;
