import { useContext } from "react";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

//context is going to contain the information regarding the items into the cart, as well as whether or not it's open or not.
import { CartContext } from "../../contexts/cart.context";

// import "./cart-icon.styles.scss";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
    // <div className="cart-icon-wrapper" onClick={toggleIsCartOpen}>
    //   <ShoppingIcon className="shopping-icon" />
    //   <span className="item-count">{cartItemCount}</span>
    // </div>
  );
};

export default CartIcon;
