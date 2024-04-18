import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";

export default function Homepage() {
    return (
        <>
            <Nav />
            <main>
                <Header />
                <Services />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}
