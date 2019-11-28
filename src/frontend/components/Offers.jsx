import React from "react";
import "./styles/Offers.scss";

const Offers = ({ children, title }) => (
  <div className="offers">
    <h1>{title}</h1>
    <div className="offers__container">
      {children}
    </div>
  </div>
);

export default Offers;
