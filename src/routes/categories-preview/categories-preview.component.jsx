import {  Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPriwiew from "../../components/category-prewiew/category-prewiew.component";

const CategoriesPriwiew = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return <CategoryPriwiew key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPriwiew;