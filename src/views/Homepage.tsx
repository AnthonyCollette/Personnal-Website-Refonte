import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Technologies from "../components/Technologies";
import About from "../components/About";
import WhyMe from "../components/WhyMe";
import RedirectToContact from "../components/RedirectToContact";
import Contact from "../components/Contact";

export default function Homepage() {
    return (
        <>
            <Nav />
            <main>
                <Header />
                <About />
                <Services />
                <RedirectToContact text="Contactez-moi" />
                <Portfolio />
                <Technologies />
                <WhyMe />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
