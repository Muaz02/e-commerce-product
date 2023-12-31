import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header({ toggleCart, openMenu, isCartOpened }){

    return(
        <header>
            <nav className="header--navbar">
                <img src="/icon-menu.svg" className="nav--menu" onClick={openMenu}/>
                <img src="/logo.svg" className="nav--logo" />
                <ul className="desktop--menu">
                    <Link>Collections</Link>
                    <Link>Men</Link>
                    <Link>Women</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>                    
                </ul>
                <FontAwesomeIcon 
                    icon={faCartShopping} 
                    style={{color: "hsl(219, 9%, 45%)",}} 
                    className="nav--cart" 
                    onClick={isCartOpened? null:toggleCart}
                />
                <img src="image-avatar.png" className="nav--profile" />
            </nav>
        </header>
    )
}