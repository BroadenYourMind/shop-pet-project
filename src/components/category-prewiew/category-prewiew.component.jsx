import "./category-preview.styles.scss";

import ProdactCard from "../prodact-card/prodact-card.component";
import { Link } from "react-router-dom";

const CategoryPriwiew = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${title.toLowerCase()}`} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProdactCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPriwiew;
