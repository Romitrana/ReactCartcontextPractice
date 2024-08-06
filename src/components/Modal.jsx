import Button from "./Button";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
const Modal = forwardRef(function Modal({oncheckOut},ref) { //recieve exactly 2 parameters
  return createPortal(
    <dialog className="dialog" ref={ref}>
      <Cart onCheckOut={oncheckOut}/>
      <form method="dialog">
        <Button className="closebtn">x</Button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
