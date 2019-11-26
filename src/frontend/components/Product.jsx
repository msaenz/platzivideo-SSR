import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkProduct } from "../actions";
import NotFound from "../containers/NotFound";
import "./styles/ProductsItem.scss";

const Product = (props) => {
  const { id } = props.match.params;
  console.log("idpr ", id)
  useEffect(() => {
    props.checkProduct(id);
  }, []);
  const { _id, idproducto, detail, idcategory, image, priceini, price, idmarca } = props.prodbuy;
  console.log("props in check prod", props.prodbuy)
  // const hasProdBuy = Object.keys(props.prodbuy).length > 0;
  // console.log("hasProdBuy ", hasProdBuy)
  const hasProdBuy = true;
  return hasProdBuy ? (
    <div className="Product-container">
      <div className="Product-miniPic">
        <p>Imagenes en miniatura</p>
        <img src={image} alt={detail} />
        <img src={image} alt={detail} />
        <img src={image} alt={detail} />
        <img src={image} alt={detail} />
      </div>
      <img className="Product-mainImage" src={image} alt={detail} />
      <p>Imagen principal</p>
      <div className="Product-info">
        <h2>
          {detail}
          <span>{price}</span>
        </h2>
        <p>{idproducto}</p>
      </div>
      <Link to="/product">
        <button type="button" onClick="Comprar">
          Comprar
        </button>
      </Link>
      <div className="cart-info">
        <Link to="/">
          <button type="button" onClick="cart">Añadir al Carrito</button>
        </Link>
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
    products: state.products,
  };
};

const mapDispatchToProps = {
  checkProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
