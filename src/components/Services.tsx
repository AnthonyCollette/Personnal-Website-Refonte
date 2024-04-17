import Container from './Container';
import Service from './Service';
import Triangle from './Triangle';

const Services = () => {

    const design = [{ text: "Création de logos et d'identités visuelles uniques" }, { text: "Conception de supports de communication (brochures, flyers, cartes de visite, etc.)" }, { text: "Réalisation d'illustrations et d'infographies personnalisées" }, { text: "Développement de maquettes et de prototypes pour vos projets" }]
    const dev = [{ text: "Conception et développement de sites web responsives et optimisés pour tous les appareils" }, { text: "Intégration de fonctionnalités avancées telles que les formulaires de contact, les galeries d'images, etc." }, { text: "Personnalisation de thèmes et de templates pour les plateformes CMS (WordPress, Shopify, etc.)" }, { text: "Optimisation SEO pour améliorer la visibilité de votre site sur les moteurs de recherche" }]
    
    return (
        <section className='services' id="services">
            <Triangle width={600} />
            <Container>
                <h2>Services</h2>
                <p>En tant que graphiste et développeur freelance, je propose une gamme de services pour répondre à vos besoins créatifs et techniques. Que vous recherchiez un design graphique percutant ou une solution de développement web sur mesure, je suis là pour vous aider à concrétiser vos idées. Voici quelques-uns des services que je propose :</p>

                <div className='services-wrapper'>
                    <Service icon="design" title="Design Graphique" list={design} />
                    <Service icon="dev" title="Développement Web" list={dev} />
                </div>
            </Container>
        </section>
    );
};

export default Services;