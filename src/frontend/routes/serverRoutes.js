import Home from "../containers/Home";
import Register from "../containers/Register";
import Login from "../containers/Login";
import Player from "../containers/Players";
import Products from "../components/Products";
import Product from "../components/Product";
import Tienda from "../components/Tienda";

import NotFound from "../containers/NotFound";

const serverRoutes = (isLogged) => {
  return [
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/player:id",
      component: Player,
      exact: true
    },
    {
      path: "/login",
      component: Login,
      exact: true
    },
    {
      path: "/register",
      component: Register,
      exact: true
    },
    {
      path: "/products/:id",
      component: Products,
      exact: true
    },
    {
      path: "/products",
      component: Products,
      exact: true
    },
    {
      path: "/product/:id",
      component: Product,
      exact: true
    },
    {
      path: "/tienda",
      component: Tienda,
      exact: true
    },
    {
      name: "NotFound",
      component: NotFound
    }
  ];
};

export default serverRoutes;
