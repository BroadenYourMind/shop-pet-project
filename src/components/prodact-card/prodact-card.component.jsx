import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProdactCard = ({ prodact }) => {
  const { name, price, imageUrl } = prodact;
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(prodact);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
    </div>
  );
};

export default ProdactCard;
