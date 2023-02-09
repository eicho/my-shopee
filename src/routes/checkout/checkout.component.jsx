//import in the cart context as well as the use context hook so that we can access
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

// import CheckoutItem from "../../components/checkout/checkout.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-wrapper">
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
