import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
// import { getProdCategory } from "../actions";

import "./styles/Card.scss";

const Card = (props) => {
  const {_id, idcategory, category, image } = props;
  return (
    <article key={idcategory} className="Card">
      <Link to={`/products/${idcategory}`}>
        <img src={image} alt={category} />
      </Link>
      <h2>{category}</h2>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    //elementos que se necesitan del estado
    categories: state.categories
  };
};

export default connect(mapStateToProps, null)(Card);
