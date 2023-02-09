import React from "react";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown-wrapper">
    <div className="cart-items" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
