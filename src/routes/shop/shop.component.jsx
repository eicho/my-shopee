import { useContext, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  //fetch those 'products' down from our outside third party API, and then access it in these different components that need them.
  //product context, to make this plural products context.
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    // iterate through this different items array to show the first four items for preview.
    <Fragment>
      {/* return back an array of the keys.*/}
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-wrapper">
            {/* to give the corresponding value of the associated array of products. */}
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

            {/* {products.map((product) => (
        //'product' from 'product-card' component
        <ProductCard key={product.id} product={product} />
      ))}*/}

            {/* 
      {products.map(({ id, name }) => (
        <div>
          <h1>{name}</h1>
        </div>
      ))}
      */}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};
// import SHOP_DATA from "../../shop-data.json";

// const Shop = () => {
//   return (
//     <div key="{id}">
//       {SHOP_DATA.map(({ id, name }) => (
//         <div>
//           <h1>{name}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };
export default Shop;
