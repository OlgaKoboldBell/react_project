import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

function Menu() {
    return (
<div className="nav">
<h2>Компанія "Майстер" - швидкість, якість, гарантія</h2>
<ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/guarantees">Guarantees</Link>
                </li>
                <li>
                    <Link to="/accessories">Accessories</Link>
                </li>
                <li>
                    <Link to="/prices">Prices</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>
            </ul>
</div>

    );
}

export default Menu;

