import passport from "passport";
import { BasicStrategy } from "passport-http";
import boom from "@hapi/boom";
import dotenv from 'dotenv';
import axios from "axios";
dotenv.config();
// import config from "../../../config";
// import "regenerator-runtime/runtime";

console.log( `Ruta-basic---${process.env.API_URL}/api/auth/sign-in`)
passport.use(
  new BasicStrategy(async (email, password, cb) => {
    try {
      const { data, status } = await axios({
        url: `${process.env.API_URL}/api/auth/sign-in`,
        method: "post",
        auth: {
          password,
          username: email,
        },
        data: {
          apiKeyToken: process.env.API_KEY_TOKEN, 
        }
      });
      console.log("Respuesta", data) 
      if (!data || status !== 200) {
        return cb(boom.unauthorized("Autenticacion rechazada"), false);
      }
      return cb(null, data);
    } catch (error) {
      return cb(error);
    }
  })
);
