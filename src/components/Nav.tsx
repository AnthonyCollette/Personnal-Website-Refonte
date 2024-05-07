import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";

export default function Nav() {

    const links = [{text: "Home", url:"/"}, {text: "Contact", url: "/contact"}]
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false)

    return <nav>
        <Container>
            <NavLink to="/" className="logo">anthony collette</NavLink>
            <ul className="menu">
                {links.map((link, index) => {
                    return <li key={index}><NavLink to={link.url} className={({isActive}) => isActive ? 'active' : ''}>{link.text}</NavLink></li>
                })}
            </ul>
            {displayMobileMenu && <ul className="menu--mobile">
                {links.map((link, index) => {
                    return <li key={index}><NavLink to={link.url} className={({isActive}) => isActive ? 'active' : ''}>{link.text}</NavLink></li>
                })}
                <div className="close-btn" onClick={() => setDisplayMobileMenu(false)}></div>
            </ul>}
            <button className="mobile-menu-button" onClick={() => setDisplayMobileMenu(true)}>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </button>
        </Container>
    </nav>
}