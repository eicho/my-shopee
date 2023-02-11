import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// export const ProductsContext = createContext({
//   products: [], // initialize as an empty array of 'products'
// });

export const CategoriesContext = createContext({
  categoriesMap: {}, //maps empty state is when there are no categories to show.
});

//any context, need both the context value as well as the provider itself.
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({}); //instead of showing null, show an empty object

  //'use effect' should fire only once.And what we fire is this 'addCollectionAndDocuments' with both the string of categories,
  // in 'firestore',will see different documents that reflect our different categories
  //delete this 'useEffect', because every time you run it, set new values inside of the database, which we don't want to do.
  // useEffect(() => {
  //   addCollectionAndDocuments("collections", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("collections"); //get products and categories from firestore
      setCategoriesMap(categoryMap);
      // console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
