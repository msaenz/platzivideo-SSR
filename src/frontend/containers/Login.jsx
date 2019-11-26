import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../actions";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = (props) => {
  const [form, setValues] = useState({
    email: ""
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesións</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            aria-label="correo"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
            required
          />
          <input
            name="password"
            aria-label="contraseña"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
            required
          />
          <button className="button" type="submit">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label htmlFor="checkbox">
              <input type="checkbox" name="" id="cbox1" value="checkbox" />
              Recuérdame
            </label>
            <Link to="/register">Olvidé mi contraseña</Link>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="google" />
            {" "}
            Inicia sesión con google
          </div>
          <div>
            {" "}
            <img src={twitterIcon} alt="twitter" />
            {" "}
            Inicia sesión con twitter
          </div>
        </section>
        <p className="login_container--register">
          No tienes ninguna cuenta
          {" "}
          <Link to="/register">
            Regístrate
          </Link>
        </p>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  loginUser
};

export default connect(null, mapDispatchToProps)(Login);
