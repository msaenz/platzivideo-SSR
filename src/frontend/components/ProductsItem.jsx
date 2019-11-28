import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkProduct } from "../actions";
import "./styles/ProductsItem.scss";

const ProductsItem =  (product) => {
  const { _id, idproducto, detail, idcategory, image, priceini, price, idmarca } = product;
  console.log("Product  in itemPord", product)
  // const { prodbuy } = props;
  const handleAddToBuy = (product) => {
    props.checkProduct(product);
    alert("aDICIONADO AL CARRITO")
  }
  // console.log("Pructo a comprar in BUY:", prodbuy)
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.detail} />
      <div className="Products-item-info">
        <h2>
          {product.detail}
        </h2>
        <p>{product.priceini}</p>
        <p>{product.price}</p>
      </div>
      {/* <Link to={`/product/${_id}`}> */}
      <button type="button" onClick={() => handleAddToBuy(product)}>
        Comprar
      </button>
      {/* </Link> */}
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
