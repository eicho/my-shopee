//import in the cart context as well as the use context hook so that we can access
import { useContext } from "react";
import CartItem from "../../components/cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

// import CheckoutItem from "../../components/checkout/checkout.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart, cartTotal } =
    useContext(CartContext);

  return (
    <div className="checkout-wrapper">
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
