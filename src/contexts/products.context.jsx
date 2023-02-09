import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: [], // initialize as an empty array of 'products'
});

//any context, need both the context value as well as the provider itself.
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  //'use effect' should fire only once.And what we fire is this 'addCollectionAndDocuments' with both the string of categories,
  // in 'firestore',will see different documents that reflect our different categories
  //delete this 'useEffect', because every time you run it, set new values inside of the database, which we don't want to do.
  // useEffect(() => {
  //   addCollectionAndDocuments("collections", SHOP_DATA);
  // }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
