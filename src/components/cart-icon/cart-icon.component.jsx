import './cart-icon.styles.scss'
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>{totalItems}</span>
        </div>
    )
}

export default CartIcon;
