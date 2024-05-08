import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Error404 = () => {
    return (
        <div className="error-404">
            <Nav />
            <main>
                <h1>Oops</h1>
                <h2>Il n'y a rien à voir par ici</h2>
                <NavLink to="/">Retour à l'accueil</NavLink>
            </main>
            <Footer />
        </div>
    );
};

export default Error404;