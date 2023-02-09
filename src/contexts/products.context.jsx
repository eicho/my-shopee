import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [], // initialize as an empty array of 'products'
});

//any context, need both the context value as well as the provider itself.
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
