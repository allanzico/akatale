import React from 'react'
import '../Header/Header.css';
import logo from '../../images/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Providers/StateProvider';
import { auth } from '../../firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to='/'>
                <img src={logo} alt={logo} className="header__logo" ></img>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__subOptionOne">Hello,{!user ? 'Guest' : user.email}</span>
                        <span className="header__subOptionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__subOptionOne">your</span>
                        <span className="header__subOptionTwo">Orders</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="header-optionBasket">
                        <ShoppingCartOutlinedIcon />
                        <span className="header__subOptionTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
