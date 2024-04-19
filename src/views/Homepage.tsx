import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Technologies from "../components/Technologies";
import About from "../components/About";
import WhyMe from "../components/WhyMe";

export default function Homepage() {
    return (
        <>
            <Nav />
            <main>
                <Header />
                <About />
                <Services />
                <Portfolio />
                <Technologies />
                <WhyMe />
            </main>
            <Footer />
        </>
    );
}
