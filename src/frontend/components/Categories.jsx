import React from "react";
import "./styles/Category.scss";

const Categories = ({ idcategory, children, title }) => (
  <div className="category">
    <h1>{title}</h1>
    <div className="category__container">
      {children}
    </div>
  </div>
);

export default Categories;
