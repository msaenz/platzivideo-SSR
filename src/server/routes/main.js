import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StaticRouter } from "react-router";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import Routes from "../../frontend/routes/serverRoutes";
import Layout from "../../frontend/components/Layout";
import reducer from "../../frontend/reducers";
import render from "../render";

require("dotenv").config();

const main = async (req, res, next) => {
  try {
    let initialState;
    try {
      const { token, email, name, id } = req.cookies;
      let user = {};
      if (email || name || id) {
        user = {
          id,
          email,
          name,
        };
      }
      let news = await axios({
        url: `${process.env.API_URL}/api/news`,
        headers: { Authorization: `Bearer ${token}` },
        method: "get"
      });
      let offers = await axios({
        url: `${process.env.API_URL}/api/offers`,
        headers: { Authorization: `Bearer ${token}` },
        method: "get"
      });
      let categories = await axios({
        url: `${process.env.API_URL}/api/categories`,
        headers: { Authorization: `Bearer ${token}` },
        method: "get"
      });
      // let products = await axios({
      //   url: `${process.env.API_URL}/api/products`,
      //   headers: { Authorization: `Bearer ${token}` },
      //   method: "get"
      // });
      news = news.data.data;
      offers = offers.data.data;
      categories = categories.data.data;
      // products = products.data.data;

      initialState = {
        user,
        cart: [],
        prodbuy: {},
        playing: {},
        news,
        offers,
        products: [],
        categories,
      };
    } catch (err) {
      initialState = {
        user: {},
        cart: [],
        prodbuy: {},
        playing: {},
        news: [],
        offers: [],
        products: [],
        categories: [],
      };
    }

    // const isLogged = (initialState.user.id);
    const isLogged = false;
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes(isLogged))}</Layout>
        </StaticRouter>
      </Provider>
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
