import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProdCategory, checkProduct } from "../actions";
import "./styles/Products.scss";
import NotFound from "../containers/NotFound";

const Products = (props) => {
  const { products } = props;
  const { id } = props.match.params;
  const handleAddToBuy = (product) => {
    props.checkProduct(product);
  };

  const hasProducts = Object.keys(products).length > 0;
  useEffect(() => {
    props.getProdCategory(id);
  }, []);

  return hasProducts ? (
    <div className="container__products">
      <div className="products">
        {products.map((product) => (
          <div className="Products-item" key={product.idproducto}>
            <img src={product.image} alt={product.detail} />
            <div className="Products-item-info">
              <h3>{product.detail}</h3>
              <p className="Price-normal">
                Precio Normal $
                {Number(product.priceini).toLocaleString('es')}
              </p>
              <p className="Price-hoy">
                Hoy $
                {Number(product.price).toLocaleString('es')}
              </p>
            </div>
            <Link to={`/product/${id}`}>
              <button className="Products-buttom" type="button" onClick={() => handleAddToBuy(product)}>Comprar</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    prodbuy: state.prodbuy,
  };
};

const mapDispatchToProps = {
  getProdCategory,
  checkProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
