//cannot use a route component unless its immediate parent is a route component from React Router Dom.
import { Routes, Route } from "react-router";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  //fetch those 'products' down from our outside third party API, and then access it in these different components that need them.
  //product context, to make this plural products context.
  //const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Routes>
      {/* for any subsequent children routes that get nested */}
      <Route index element={<CategoriesPreview />} />
      {/* semicolon and then the name of the variable */}
      <Route path=":category" element={<Category />} />
    </Routes>

    // <div className="shop-wrapper">
    //   {Object.keys(categoriesMap).map((title) => {
    //     const products = categoriesMap[title];
    //     return (
    //       <CategoryPreview key={title} title={title} products={products} />
    //     );
    //   })}
    // </div>
  );
};

export default Shop;
