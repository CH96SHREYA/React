import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

const addItemToCartHandler = (item) => {cartCtx.addItem({...item,amount:1})};
  const removeItemFromCartHandler = (id) => {cartCtx.removeItem({id})};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemToCartHandler.bind(null, item)}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
        /> 
      ))}
    </ul>
  );
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
 const hasItem = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
