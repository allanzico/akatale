import React from 'react'
import '../Header/Header.css';
import logo from '../../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt={logo} className="header__logo" ></img>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__subOptionOne">Hello</span>
                    <span className="header__subOptionTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__subOptionOne">your</span>
                    <span className="header__subOptionTwo">Orders</span>
                </div>
                <div className="header-optionBasket">
                    <ShoppingCartOutlinedIcon />
                    <span className="header__subOptionTwo header__basketCount">
                        0
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Header
