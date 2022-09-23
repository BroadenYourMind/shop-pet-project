import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProdactCard from "../../components/prodact-card/prodact-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProdactCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
