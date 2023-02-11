import { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
// import "./cart-dropdown.styles.scss";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  // console.log(cartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>

    // <div className="cart-dropdown-wrapper">
    //   <div className="cart-items">
    //     {cartItems.length ? (
    //       cartItems.map((cartItem) => (
    //         <CartItem key={cartItem.id} cartItem={cartItem} />
    //       ))
    //     ) : (
    //       <span className="empty-message">Your cart is empty</span>
    //     )}

    //     {/* {cartItems.map((cartItem) => (
    //       <CartItem key={cartItem.id} cartItem={cartItem} />
    //     ))}*/}
    //   </div>
    //   <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    // </div>
  );
};
export default CartDropdown;
