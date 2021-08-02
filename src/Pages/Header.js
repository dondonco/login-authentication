import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';


function Header() {

    const[{user}, dispatch] = useStateValue();

    const authentication = () => {
        if(auth){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <div className="welcome__message">
                Welcome {user?  user.email.substring(0, user.email.indexOf("@")):"Guest"}
            </div>
            <div className="navigation">
                <NavLink to="/" exact activeClassName="navigation__active">
                    <div className="navigation__items">
                        Home
                    </div>
                </NavLink>
                <NavLink onClick={authentication} to={!user && "/Login"} activeClassName="navigation__active">
                    <div className="navigation__items">
                        {user ? "Logout": "Login"}
                    </div>
                </NavLink>
                <NavLink to="/About" activeClassName="navigation__active">
                    <div className="navigation__items">
                        About
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header
