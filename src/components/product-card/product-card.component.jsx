import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

// import "./product-card.styles.scss";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
    // <div className="product-card-wrapper">
    //   <img src={imageUrl} alt={`${name}`} />
    //   <div className="footer">
    //     <span className="name">{name}</span>
    //     <span className="price">{price}</span>
    //   </div>
    //   <Button
    //     buttonType={BUTTON_TYPE_CLASSES.inverted}
    //     onClick={addProductToCart}
    //   >
    //     Add to card
    //   </Button>
    // </div>
  );
};

export default ProductCard;
