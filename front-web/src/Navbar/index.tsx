import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from './logo.svg';
import './styles.css';

function Navbar(){

    return(
        <div className = "main-navbar">
        <Logo />
        <Link to = "/" href="home" className= "logo-text">DS Delivery</Link>
        </div>
     
    )
}

export default Navbar;