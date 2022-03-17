import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <div>LOGO</div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar