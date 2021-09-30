import React from 'react';
import image from '../../images/logo.png'
import './Header.css'
const Header = () => {


    return (
        <div>
            <div className="img-container">
                <img src={image} alt="" className="img" />
            </div>
            <div className="header">
                <nav className="nav">
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </nav>
                <div className="header-bottom">
                    <input type="text" placeholder="Search your products" /><i class="fas fa-shopping-cart"></i>
                </div>

            </div>
        </div>
    );
};

export default Header;