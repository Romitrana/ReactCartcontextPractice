import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../Store/shop-cart-context";
export default function Product({
  id,
  image,
  title,
  price,
  rating,
  description,
  stock,
}) {
  const cartCTX = useContext(CartContext);
  return (
    <div className="product">
      <img src={image} alt="product image" />
      <span className="title">{title}</span>
      <div className="price">
        <span>Price : ${price}</span>
        <span>Rating : {rating} ⭐</span>
      </div>
      <span id="stock">{stock}</span>
      <span id="des">Description</span>
      <p className="description">{description}</p>
      <Button onClick={() => cartCTX.cart.addProduct(id)}>Add to Cart</Button>
    </div>
  );
}
