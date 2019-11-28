import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import axios from 'axios';
import passport from "passport";
import boom from "@hapi/boom";
import cookieParser from "cookie-parser";
import path from "path";
import main from "./routes/main";

dotenv.config();

const ENV = process.env.NODE_ENV;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize())
app.use(passport.session())
// app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));

if (ENV === "development") {
  console.log("Loading Development config");
  const webPackConfig = require("../../webpack.config.js");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webPackConfig);

  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webPackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Loading ${ENV} config`);
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable("x-powered-by");
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,X-CSRFToken"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("*.js", (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set("Content-Encoding", "gzip");
  next();
});

app.get("*.css", (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set("Content-Encoding", "gzip");
  next();
});

// basic strategic
require("./utils/auth/strategies/basic");

app.post("/api/auth/sign-in", async (req, res, next) => {
  passport.authenticate("basic", async (error, data) => {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }
      req.login(data, { session: false }, async (error) => {
        if (error) {
          next(error);
        }
        const { token, ...user } = data;
        res.cookie("token", token, {
          httpOnly: !(ENV === "development"),
          secure: !(ENV === "development"),
        });
        res.status(200).json(user.user);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

// app.post("/api/auth/sign-up", async (req, res, next) => {
app.post("/auth/sign-up", async (req, res, next) => {
  const { body: user } = req;
  try {
    const userData = await axios({
      url: `${process.env.API_URL}/api/auth/sign-up`,
      method: "post",
      data: user
    });
    res.status(201).json({
      name: req.body.name,
      email: req.body.email,
      id: userData.data.data,
      message: "user created"
    });
  } catch (error) {
    next(error);

  }
});

app.get("/products/category/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const prodCatg = await axios({
      url: `${process.env.API_URL}/api/products/category/${id}`,
      method: "get",
    });
    const { data } = prodCatg.data;
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

app.get("*", main);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server Running on port ${PORT}`);
});
