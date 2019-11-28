import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import Player from "../containers/Players";
import Layout from "../components/Layout";
import Products from "../components/Products";
import Product from "../components/Product";
import Checkout from "../components/Ckeckout";

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products/:id" component={Products} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/player/:id" component={Player} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
