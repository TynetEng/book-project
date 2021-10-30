import {Link} from "react-router-dom";
import { useState } from "react";
import './Nav.css'

const Nav = () => {
    return(
        <>
            <ul className="nav">
                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="about">About</Link>
                </li>
                <li className="nav-link">
                    <Link to="contact">Contact</Link>
                </li>
                <li className="nav-link">
                    <Link to="user">User</Link>
                </li>
                <li className="nav-link">
                    <Link to="sticky">Sticky Note</Link>
                </li>
            </ul>
        </>
    )
}
export default Nav


