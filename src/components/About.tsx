import Container from "./Container";
import desktop from '../assets/images/desktop.svg'

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <div className="columns">
                    <div className="column__left">
                        <img src={desktop} alt="Homme travaillant à son bureau" />
                    </div>
                    <div className="column__right">
                        <h2>Qui suis-je ?</h2>
                        <p>Passionné de graphisme depuis plus de 10 ans ainsi que de développement web depuis 3 ans, c’est tout naturellement que j’ai décidé de vous proposer mes services en tant que freelance !</p>
                        <p>Depuis 2017, j’ai eu l’occasion de collaborer avec des entreprises à taille humaine placées sur des secteurs d’activité variés dans le but de les aider à améliorer leur présence en ligne. Aujourd’hui encore, j’ai pour ambition de vous proposer mes services de création de sites internet pour que vous aussi puissiez développer votre marque, activité ou entreprise !</p>
                        <p>Votre satisfaction étant ma priorité, je prends en compte vos idées et vos objectifs jusqu’à créer un site internet sur mesure. Il peut s’agir d’un e-commerce, de la prestation de service, d’une vitrine, d’un blog, d’un forum ou bien d’un portfolio.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;