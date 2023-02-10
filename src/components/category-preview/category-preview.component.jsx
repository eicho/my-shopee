import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-wrapper">
    <h2>
      <span className="title">{title.toUpperCase()}</span>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4) //(not use,index inside of the array)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;