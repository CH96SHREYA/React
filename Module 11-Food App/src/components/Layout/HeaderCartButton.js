import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from "../Cart/CartIcon";
import classes from "./HearderCartButton.module.css"
const HeaderCartButton = (props)=>{
    const cartCtx =useContext(CartContext);    
    const numberOfItems= cartCtx.items.reduce((currNumber,item)=>{
        return currNumber+item.amount
    },0);
    return (
        <button className={classes.button} onClick ={props.onClick}>
            <span className ={classes.icon}><CartIcon /></span>
            <span >Your Cart</span>
            <span className ={classes.badge}>{numberOfItems}</span>
        </button>
    );
}

export default HeaderCartButton