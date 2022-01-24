import React from "react"
import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <ul className="navBox">
            {/* <li><a className="navItems">Home</a></li> */}
            <Link to = "/home" className="navItems"> Home </Link>
            <li><a className="navItems">Contact Us</a></li>
            <li><a className="navItems">My Account</a></li>
            {/* <li><a className="navCart">My Cart</a></li> */}
            <Link to = "/cart" className="navCart"> My Cart </Link>
        </ul>
    )
}