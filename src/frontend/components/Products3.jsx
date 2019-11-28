import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProdCategory } from "../actions";
import "./styles/Products.scss";
import ProductsItem from "./ProductsItem";
import NotFound from "../containers/NotFound";

const Products = (props) => {
  const { id } = props.match.params;
  const hasProducts = Object.keys(props.products).length > 0;
  useEffect(() => {
    props.getProdCategory(id);
  }, []);
  return hasProducts ? (
    <div className="container__products">
      <h1>Productos</h1>
      <div className="products">
        { props.products.map((product) => (
          <ProductsItem
            product={product}
            key={product._id}
            _id={product._id}
            idproducto={product.idproducto}
            detail={product.detail}
            idcategory={product.idcategory}
            image={product.image}
            priceini={product.priceini}
            price={product.price}
            idmarca={product.idmarca}
          />
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
  };
};

const mapDispatchToProps = {
  getProdCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
