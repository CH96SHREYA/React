import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 50 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick ={props.closeCart}>
      {cartItems}
      <div>
        <span className={classes.total}>Total Amount</span>
        <span>31.999</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick ={props.closeCart}>Close</button>
        <button className={classes["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
