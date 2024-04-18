import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Technologies from "../components/Technologies";

export default function Homepage() {
    return (
        <>
            <Nav />
            <main>
                <Header />
                <Services />
                <Portfolio />
                <Technologies />
            </main>
            <Footer />
        </>
    );
}
