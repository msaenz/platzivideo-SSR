import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from '../actions';
import NotFound from "../containers/NotFound";
import "./styles/Product.scss";

const Product = (props) => {
  const { prodbuy, cart } = props
  const { id } = props.match.params;
  const handleAddToCart = (prodbuy) => {
    console.log("Seleccion", prodbuy)
    console.log("Carrito: ", cart)
    props.addToCart(prodbuy);
  }
  const {  idproducto, detail, idcategory, image, priceini, price, idmarca } = props.prodbuy;
  const hasProdBuy = Object.keys(props.prodbuy).length > 0;
  return hasProdBuy ? (
    <div className="Product">
      <h1>{detail}</h1>
      <div className="Product-container">
        <div className="Product-miniPic">
          <img src={image} alt={detail} />
          <img src={image} alt={detail} />
        </div>
        <img className="Product-mainImage" src={image} alt={detail} />
        <div className="Product-info">
          <p className="Price-normal">
            Precio Normal $
            {Number(priceini).toLocaleString('es')}
          </p>
          <h3 className="Price-hoy">
            Hoy $
            {Number(price).toLocaleString('es')}
          </h3>
          <p></p>
          <p>Cantidad </p>
          <input className="Product-qty" type="number" name="quanty" min="1" max="20" defaultValue="1"/>
          <button className="cart-buttom" type="button" onClick={() => handleAddToCart(prodbuy)}>Agregar al Carrito</button>
          <div className="Product-data-sheet">
            <ul>
              <h2>Caracteristicas</h2>
              <li>Procesador</li>
              <li>.Sistema Operativo</li>
              <li>.Memoria Ram</li>
              <li>.Pantalla 8</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    //elementos que se necesitan del estado
    prodbuy: state.prodbuy,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
