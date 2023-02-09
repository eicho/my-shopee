//to store some kind of true false state of whether or not the card is open or not.
import { createContext, useState, useEffect } from "react";

//to help me find inside of my existing array any items that exist that match the ID of this product.
export const addCartItem = (cartItems, productToAdd) => {
  //find if cart items contains 'productToAdd'.
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if same ID found,Increment quantity.
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cart items/ new cart item.
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  //initialize the cart items and then the set cart items.
  const [cartItems, setCartItems] = useState([]);

  const [cartItemCount, setCartItemCount] = useState(0); //default is 0

  //recounting the total quantity every time the cart items 'cartItems' changes.
  useEffect(() => {
    //reduce(callback,starting value)
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  //function that triggers whenever a user clicks on this add to cart.
  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
