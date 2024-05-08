import { NavLink } from 'react-router-dom';
import Container from './Container';

const Footer = () => {
    return (
        <footer>
            <Container>
                Copyright Anthony Collette, 2024
                <NavLink to="/mentions-légales">Mentions légales</NavLink>
            </Container>
        </footer>
    );
};

export default Footer;