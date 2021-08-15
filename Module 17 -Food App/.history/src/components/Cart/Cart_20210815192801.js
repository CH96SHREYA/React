import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import FormikCheckout from "./FormikCheckout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorInSubmit, setSubmitError] = useState(null);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const BASE_URL =
    "https://react-http-7e4a5-default-rtdb.firebaseio.com/orders.jsons";

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const submitOrderHandler = async (userData) => {
    try {
      setIsSubmitting(true);
      console.log("received data", userData);
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          order: cartCtx.items,
        }),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
    } catch (error) {
      setSubmitError(error.message);
      setIsSubmitting(false);
    }
  };
  

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setFormVisible(true);
  };

 
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  const modalContent = (
    <React.Fragment>
      {isSubmitting && <p>Order placed</p>}
      {errorInSubmit && <p>Something went wrong </p>}
      {!isSubmitting && !errorInSubmit &&
      <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isFormVisible && (
        <FormikCheckout
          onClose={props.onClose}
          onConfirm={submitOrderHandler}
        />
      )}
      {!isFormVisible && modalActions}
      </div> }
    </React.Fragment>
  );

  return <Modal onClose={props.onClose}>
    {modalContent}
  </Modal>;
};

export default Cart;
