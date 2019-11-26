import React from "react";
import "./styles/Category.scss";
import { connect } from "react-redux";
import Card from "./Card";
import ProductsItem from "./ProductsItem";
import Categories from "./Categories";
import Offers from "./Offers";
import AsideNav from "./AsideNav"

const Category = ({ categories, offers }) => {
  console.log("Categorias 1 ", { categories })
  return (
    <>
      <div className="container__category">
        <AsideNav />
        <Categories title="Categorias">
          {categories.map((item) => (
            <Card key={item.idcategory} idcategory={item.idcategory} category={item.category} image={item.image} />
          ))}
        </Categories>
      </div>

      <Offers title="Ofertas Kuru">
        {offers.map((item) => (
          <ProductsItem
            idoffer={item.idoffer}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            priceorig={item.priceorig}
            price={item.price}
          />
        ))}
      </Offers>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    //elementos que se necesitan del estado
    categories: state.categories,
    offers: state.offers
  };
};
export default connect(
  mapStateToProps,
  null
)(Category);
