import Button from "./Button";
import { CartContext } from "../Store/shop-cart-context";
import { useContext } from "react";
export default function CartItem({id,image,title,price,rating,qty}){ 
 const CartCTX = useContext(CartContext)
    return <div className="Cartitem"> 
    <img src={image} alt="itemimage" />
    <div className="item-info"> 
        <p>{title}</p>
        <p>price: ${price}</p>
        <p>rating: {rating} ⭐</p>
    </div>
    <div className="quantity"> 
        <Button onClick={() => CartCTX.cart.decrement(id)}>-</Button>
        {qty}
        <Button onClick={() => CartCTX.cart.increment(id)}>+</Button>
    </div>
    </div>
}