import React from "react";
import "./styles/Offers.scss";

const Offers = ({ children, title }) => (
  <div className="offers">
    <h1>{title}</h1>
    {children}
  </div>
);

export default Offers;
