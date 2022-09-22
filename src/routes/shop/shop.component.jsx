import { useContext } from "react";

import { ProdactsContext } from "../../contexts/prodacts.context";

import ProdactCard from "../../components/prodact-card/prodact-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { prodacts } = useContext(ProdactsContext);

  return (
    <div className="products-container">
      {prodacts.map((prodact) => (
        <ProdactCard key={prodact.id} prodact={prodact} />
      ))}
    </div>
  );
};

export default Shop;
