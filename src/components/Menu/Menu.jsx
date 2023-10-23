import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'



export default function Menu(props){

    return(
        <nav className={`menu--container ${props.isMenuOpened? 'active':'inactive'}`} ref={props.refProp}>
            <button className="menu--close--btn" onClick={props.closeMenu}>
                <FontAwesomeIcon icon={faX}/>
            </button>
            <Link>Collections</Link>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>About</Link>
            <Link>Contact</Link>
        </nav>
    )
}
