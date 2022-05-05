import React, { Fragment } from 'react'
import classes from './Header.module.css'
import image from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals Shop</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="" />
            </div>
        </Fragment>
    )
}
