import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
export default function Cart(props) {

    const cartCtx =useContext(CartContext)

    const totalAmount =`$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

  const cartItemAddHandler = (item) => {
      cartCtx.addItem(item)
  };

    const cartItem = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item => {
            // return <li key={item.id}>{item.name}</li>
            return <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        })}
    </ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} >Order</button>}
            </div>
        </Modal >
    )
}
