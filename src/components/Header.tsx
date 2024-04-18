import Container from "./Container"
import ImageWrapper from "./ImageWrapper"
// import computer from '../assets/images/computer.png';
import computer from '../assets/images/computer3.png';
import screen from '../assets/images/screen.png';
import displayingScreen from '../assets/images/screen2.png';
import Triangle from "./Triangle";
import Overlay from "./Overlay";
// import { Link } from "react-router-dom";



export default function Header() {


    return <header>
            <div className="computer-header">
                <img src={computer} alt="Ordinateur portable" className="computer" />
                <img src={screen} alt="Ecran d'ordinateur" className="screen" />
                <img src={displayingScreen} alt="Affichage d'écran d'ordinateur" className="display-screen" /></div>

            <Triangle width={700} />
                <Container>
                    <h1>
                        anthony collette
                    </h1>
                    <p>
                        Concevoir l&apos;<strong>interface</strong>, créer l&apos;<strong>expérience</strong>.
                    </p>
                    <p>Votre entreprise mérite une présence en ligne à la hauteur de son ambition. Je suis là pour concrétiser cette vision. <br />Passionné de développement et de design graphique, je vous accompagne dans chaque étape de <strong>votre transformation digitale</strong>. <br />De la refonte graphique de votre site web à l&apos;optimisation de son expérience utilisateur, je mets mon expertise au service de votre succès.</p>
                    <button onClick={() => document.getElementById('services')?.scrollIntoView()} className="btn btn--primary-outline">
                        Démarrez votre transformation digitale
                    </button>
                </Container>
    </header>
}