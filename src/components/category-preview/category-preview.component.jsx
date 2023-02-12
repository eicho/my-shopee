//shop page

// import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

// import "./category-preview.styles.scss";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
// (
//   <div className="category-preview-wrapper">
//     <h2>
//       <Link className="title" to={title}>
//         {title.toUpperCase()}
//       </Link>
//     </h2>
//     <div className="preview">
//       {products
//         .filter((_, idx) => idx < 4) //(not use,index inside of the array)
//         .map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//     </div>
//   </div>
// );

export default CategoryPreview;
