import React from 'react';
import { ReactComponent as Logo} from './logo.svg';
import './styles.css';

function Navbar(){

    return(
        <div className = "main-navbar">
        <Logo />
        <a href="home" className= "logo-text">DS Delivery</a>
        </div>
     
    )
}

export default Navbar;