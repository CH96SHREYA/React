import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

/* Lecture 104-- Working with portals
Req: When we want our element to be rendered to a different location then the regular flow.
For eg: Here modal and backdrop(div that prevents interaction with the background when error modal is displayed)

What to do:
1) declare a location (in index html )where the element has to be rendered 
2) ReactDOM.portal(<element>,<location>)
*/
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.heading}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
      <footer className={styles.footer}>
        <Button onClick={props.onConfirm}>OK</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Modal
          heading={props.heading}
          content={props.content}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
