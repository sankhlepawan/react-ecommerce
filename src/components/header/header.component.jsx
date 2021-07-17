import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase';
import './header.style.scss';
import { connect } from 'react-redux';

import CartIcon  from '../cart-icon/cart-icon.component';
import { CartDropdown } from '..';

const Header = ({ currentUser, hidden }) => {
    return (
    <div className="header">
        <Link to="/">
        <Logo className="logo"></Logo>
        </Link>
        <div className="options">
         <Link className="option" to="/shop"> SHOP</Link>
         <Link className="option" to="/contact"> CONTANCT</Link>
         { currentUser  ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
            <Link className="option" to="/signin">SIGN IN</Link>
         }
         <CartIcon />
        </div>
        { !hidden ? <CartDropdown /> : null }
    </div>
)}


const mapStateToProps = ({ user: { currentUser}, cart: { hidden }}) => ({
    currentUser: currentUser,
    hidden: hidden
});

export default connect(mapStateToProps)(Header);