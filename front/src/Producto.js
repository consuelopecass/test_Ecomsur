import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Producto = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <div>
          <h1>Yo soy un lindo producto</h1>
          <div>
            <img src={"https://picsum.photos/id/237/200/300"} alt="producto" />
          </div>
          <Switch>
            <Route exact path="/producto" component={Producto} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Producto;
