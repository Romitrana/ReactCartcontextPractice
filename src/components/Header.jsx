import Button from "./Button";
import { useContext, useRef } from "react";
import { CartContext } from "../Store/shop-cart-context";
import Modal from "./Modal";
export default function Header() {
  const dialog = useRef();
  function handleShowModel() {
    dialog.current.showModal();
  }
  function closeModal(){ 
    dialog.current.close();
  }
  const CartCTX = useContext(CartContext);
  return (
    <header>
      <Modal ref={dialog} oncheckOut={closeModal}/>
      <h2>ReactShop</h2>
      <Button onClick={handleShowModel}>
        Cart ({CartCTX.cart.product.length})
      </Button>
    </header>
  );
}
