import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layout/layout";
import ShopPage from "./pages/shop/shop";
import Cart from "./components/cart/cart.component";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={ShopPage} />{" "}
      <Route path="/cart/" component={Cart} />
    </Layout>
  );
}

export default App;
