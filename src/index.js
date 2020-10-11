import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Home from "./pages/home";
import Categorias from "./pages/categorias";
import Error from "./pages/error";
import Cucuruchos from "./pages/cucuruchos";
import Pago from "./pages/pago";
import Producto from "./pages/producto";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/categorias">
        <Categorias />
      </Route>
      <Route exact path="/cucuruchos">
        <Cucuruchos />
      </Route>
      <Route exact path="/pago">
        <Pago />
      </Route>
      <Route exact path="/producto">
        <Producto />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
