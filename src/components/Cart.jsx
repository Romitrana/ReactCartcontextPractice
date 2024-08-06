import { useContext } from "react";
import { CartContext } from "../Store/shop-cart-context";
import CartItem from "./CartItem";
import Button from "./Button";
export default function Cart({ onCheckOut }) {
  const CartCTX = useContext(CartContext);
  const total = CartCTX.cart.product.reduce((accumulator, item) => {
    return accumulator + (item.quantity || 0) * (item.price || 0);
  }, 0);
  return (
    <div className="cart">
        {CartCTX.cart.product.length===0 && <p id="empty">Your Cart is Empty</p>}
      <div className="items">
        {CartCTX.cart.product.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.images[0]}
            title={item.title}
            price={item.price}
            rating={item.rating}
            qty={item.quantity}
          />
        ))}
      </div>
      <p className="total">Total: ${total.toFixed(2)}</p>
      <Button id="checkoutbtn" onClick={onCheckOut}>
        {CartCTX.cart.product.length>0?'Checkout':"Close"}
      </Button>
    </div>
  );
}
