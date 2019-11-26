import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkProduct } from "../actions";
import "./styles/OffersItem.scss";

const OffersItem = (props) => {
  const handleAddToBuy = (product) => {
    console.log("Se activo boton")
    props.checkProduct(product);
  }
  const { _id, idoffer, title, subtitle, image, priceorig, price } = props;
  return (
    <div className="Offers-item">
      <img src={image} alt={title} />
      <div className="Offers-item-info">
        <h3>
          {title}
        </h3>
        <p>{priceorig}</p>
        <p>{price}</p>
        <p>{subtitle}</p>
      </div>
      <Link to={`/product/${_id}`}>
        <button type="button" onClick={() => handleAddToBuy({ _id })}>
          Comprar {idoffer }
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //elementos que se necesitan del estado
    offers: state.offers,
    prodbuy: state.prodbuy
  };
};

const mapDispatchToProps = {
  checkProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(OffersItem);
