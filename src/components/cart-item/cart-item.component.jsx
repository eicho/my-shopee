//cart items from cart dropdown

// import "./cart-item.styles.scss";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
    // <div className="cart-item-wrapper">
    //   <img src={imageUrl} alt={`${name}`} />
    //   <div className="item-details">
    //     <span className="name">{name}</span>
    //     <span className="price">
    //       {quantity} x ${price}
    //     </span>
    //   </div>
    // </div>
  );
};

export default CartItem;
