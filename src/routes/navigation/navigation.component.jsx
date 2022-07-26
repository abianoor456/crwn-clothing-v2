import { Fragment, useContext } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { userContext } from "../../contexts/user.contexts";
import './navigation.styles.scss'
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
    const { currentUser } = useContext(userContext);
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <div className='navigation-bar'>
                <Link className='logo-link' to='/'>
                    <CrwnLogo className='logo' />
                </Link>

                <div className='links-container'>
                    <Link className='nav-link' to='/shop'> Shop</Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser} >Sign out</span>
                        )
                            : (
                                <Link className='sign-in-link' to='/auth'> Sign In</Link>
                            )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;