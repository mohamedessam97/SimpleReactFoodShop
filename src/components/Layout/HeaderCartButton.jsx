import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

export default function HeaderCartButton(props) {
const cartCtx = useContext(CartContext)

const noOFCartItem =cartCtx.items.reduce((total, item)=>{
  return total + item.amount
},0)
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {noOFCartItem}
        </span>
    </button>
  )
}
