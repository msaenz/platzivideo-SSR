import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkProduct } from "../actions";
import "./styles/ProductsItem.scss";

const ProductsItem =  (props) => {
  const handleAddToBuy = (product) => {
    props.checkProduct(product);
  }
  const { _id, idproducto, detail, idcategory, image, priceini, price, idmarca } = props;
  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Products-item-info">
        <h2>
          {detail}
          {/* <span>{price}</span> */}
        </h2>
        <p>{priceini}</p>
        <p>{price}</p>
      </div>
      <Link to={`/product/${_id}`}>
        <button type="button" onClick={() => handleAddToBuy({ _id })}>
          Comprar
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //elementos que se necesitan del estado
    product: state.products,
    prodbuy: state.prodbuy
  };
};

const mapDispatchToProps = {
  checkProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsItem);
