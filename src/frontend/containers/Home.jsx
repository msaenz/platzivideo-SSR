import React from "react";
import { connect } from "react-redux";
import "../assets/styles/index.scss";
import "../components/styles/Home.scss";
import News from "../components/News";
import NewsItem from "../components/NewsItem";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import Card from "../components/Card";
import OffersItem from "../components/OffersItem";

const Home = ({ news, categories, offers, products }) => {
  return (
    <>
      <div className="container">
        <News title="Noticias Kuru Studio">
          {news.map((item) => (
            <NewsItem
              id={item.id}
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              cover={item.cover}
              type={item.type}
              origin={item.origin}
            />
          ))}
        </News>

        <Categories title="Categorias">
          {categories.map((item) => {
            return (<Card key={item.idcategory} idcategory={item.idcategory} category={item.category} image={item.image} />);
          })}
        </Categories>

        <Offers title="Ofertas Kuru">
          {offers.map((item) => (
            <OffersItem
              key={item.idoffer}
              idoffer={item.idoffer}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              priceorig={item.priceorig}
              price={item.price}
            />
          ))}
        </Offers>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    //elementos que se necesitan del estado
    news: state.news,
    categories: state.categories,
    offers: state.offers,
    products: state.products
  };
};
export default connect(mapStateToProps, null)(Home);
