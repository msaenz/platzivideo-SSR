import React from "react";
import { connect } from "react-redux";
import { deleteToCart } from "../actions";
import "./styles/Checkout.scss";

const Checkout = (props) => {
  const { cart } = props;
  console.log("Carrito:", { cart });
  const handleDeleteToCart = (itemId) => {
    props.deleteToCart(itemId);
  };
  const handlePayCart = (itemId) => {
    // (initialState.user.id)
    props.deleteToCart(itemId);
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Productos en el Carrito</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item) => (
          <div key="{index}" className="Checkout-item">
            <div className="Checkout-element">
              <img className="Checkout-img" src={item.image} alt={item.detail} />
              <h4>{item.detail}</h4>
              <span>
                $
                {Number(item.price).toLocaleString('es')}
              </span>
              <i
                role="presentation"
                className="fas fa-trash-alt"
                onClick={() => handleDeleteToCart(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total</h3>
          <h1>
            $
            {
              Number(cart.reduce((sum, { price }) => {
                return sum + price
              }, 0)).toLocaleString('es')
            }
            {/* {cart.reduce((sum, { price }) => {
              return sum + price
            }, 0)} */}
          </h1>
          <button type="button" onClick={() => handlePayCart(prodbuy)}>Ir a Pagar</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = {
  deleteToCart
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
