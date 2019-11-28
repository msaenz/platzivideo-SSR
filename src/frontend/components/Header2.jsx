import React from "react";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import logo from "../assets/static/logo_kuru.png";
import adduser from "../assets/static/add-user.png";
import login from "../assets/static/log-in.png";
import cart from "../assets/static/cart.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__content">
          <Link to="/">
            <img
              className="header__content-logo"
              src={logo}
              alt="Logo e-commerce"
            />
          </Link>
          <div className="header__content__search">
            <input
              className="header__content__search--input"
              type="text"
              placeholder="Qué estas buscando?"
            />
          </div>
          <div className="header__content__profile">
            <img src={adduser} alt="icono de Registro" />
            <img src={login} alt="icono de Login" />
            <div className="Header-checkout">
              <Link to="/checkout">
                <i className="fas fa-shopping-basket" />
                <img src={cart} alt="icono de Carrito" />
              </Link>
              {props.cart.length > 0 &&
                <div className="Header-alert">{props.cart.length}</div>}
            </div>
          </div>
        </div>
        <ul className="header__content__menu">
          <li className="header__content__menu-item">
            <Link to="/Category">
              <a
                className="App-link"
                href="/category.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eventos
              </a>
            </Link>
          </li>
          <li className="header__content__menu-item">Música</li>
          <li className="header__content__menu-item">
            <Link to="/Tienda">
              <a
                className="App-link"
                href="/category.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tienda
              </a>
            </Link>
          </li>
          <li className="header__content__menu-item">Contact</li>
        </ul>
      </header>
    );
  }
}

export default Header;
