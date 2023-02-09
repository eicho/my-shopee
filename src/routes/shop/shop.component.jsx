import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
  //fetch those 'products' down from our outside third party API, and then access it in these different components that need them.
  //product context, to make this plural products context.
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        //'product' from 'product-card' component
        <ProductCard key={product.id} product={product} />
      ))}
      {/* 
      {products.map(({ id, name }) => (
        <div>
          <h1>{name}</h1>
        </div>
      ))}
      */}
    </div>
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
