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
        { props.products.map((item) => (
          <ProductsItem
            key={item._id}
            _id={item._id}
            idproducto={item.idproducto}
            detail={item.detail}
            idcategory={item.idcategory}
            image={item.image}
            priceini={item.priceini}
            price={item.price}
            idmarca={item.idmarca}
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
