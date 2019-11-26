import React from "react";
import { connect } from "react-redux";
import "./styles/Categories.scss";
import ProductsItem from "./ProductsItem";

const Products = ({ children, title, products }) => (
  <>
    <div className="container__products">
      <h1>Productos</h1>
      <div className="products">
        {products.map((item) => (
          <ProductsItem
            idoffer={item.idproduct}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            priceorig={item.priceorig}
            price={item.price}
          />
        ))}
      </div>
    </div>
  </>
);

const mapStateToProps = (state) => {
  return {
    //elementos que se necesitan del estado
    products: state.products
  };
};
export default connect(mapStateToProps, null)(Products);
