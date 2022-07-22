import { Fragment } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation-bar'>
                <Link className='logo-link' to='/'>
                    <CrwnLogo className='logo' />
                </Link>

                <div className='links-container'>
                    <Link className='nav-link' to='/'> Shop</Link>
                    <Link className='sign-in-link' to='/auth'> Sign In</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;