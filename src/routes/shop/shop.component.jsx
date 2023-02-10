import { useContext, Fragment } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  //fetch those 'products' down from our outside third party API, and then access it in these different components that need them.
  //product context, to make this plural products context.
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-wrapper">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
