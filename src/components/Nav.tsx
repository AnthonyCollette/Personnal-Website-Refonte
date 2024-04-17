import { NavLink } from "react-router-dom";
import Container from "./Container";

export default function Nav() {

    const links = [{text: "Home", url:"/"}, {text: "Contact", url: "/contact"}]

    return <nav>
        <Container>
            <NavLink to="/" className="logo">anthony collette</NavLink>
            <ul>
                {links.map((link, index) => {
                    return <li key={index}><NavLink to={link.url} className={({isActive}) => isActive ? 'active' : ''}>{link.text}</NavLink></li>
                })}
            </ul>
        </Container>
    </nav>
}