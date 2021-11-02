import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Producto";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <div className="App">
          <h1>Hola Mundo</h1>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
