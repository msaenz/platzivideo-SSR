import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerRequest } from "../actions";
import "../assets/styles/components/Register.scss";

const Register = (props) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: ""
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };
  return (
    <>
      <section className="register">
        <section className="register__container">
          <h2>Registrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button" type="submit">
              Registrarme
            </button>
            <div className="register__container--remember-me">
              <Link to="/login">Iniciar Sesión</Link>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

Register.propTypes = {
  registerRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Register);
