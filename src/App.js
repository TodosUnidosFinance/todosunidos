import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./Pages/home";
import contact from "./Pages/contact";
import noticias from "./Pages/noticias";
import mapasMarcas from "./Pages/mapasMarcas";
import acerca from "./Pages/acerca";
import registraTienda from "./Pages/registraTienda";
import defi from "./Pages/defi";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/contacto" component={contact} />
        <Route path="/noticias" component={noticias} />
        <Route path="/mapas-y-marcas" component={mapasMarcas} />
        <Route path="/acerca-de-nosotros" component={acerca} />
        <Route path="/registra-tu-tienda" component={registraTienda} />
        <Route path="/defi" component={defi} />
      </Switch>
    </Router>
  );
}

export default App;
