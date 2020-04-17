import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/layout";
import Products from "./components/products/products.component"
import Cart from "./components/cart/cart.component";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Products} />{" "}
      <Route path="/cart/" component={Cart} />
    </Layout>
  );
}

export default App;
