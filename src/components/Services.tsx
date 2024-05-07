import Container from './Container';
import Service from './Service';
import Triangle from './Triangle';
import designIcon from '../assets/images/design-icon.svg';
import devIcon from '../assets/images/dev-icon.svg';

const Services = () => {

    const services = [{ icon: designIcon, title: "Design Graphique", list: [{ icon: designIcon, text: "Création de logos et d'identités visuelles uniques" }, { text: "Conception de supports de communication (brochures, flyers, cartes de visite, etc.)" }, { text: "Réalisation d'illustrations et d'infographies personnalisées" }, { text: "Développement de maquettes et de prototypes pour vos projets" }] }, {
        icon: devIcon, title: "Développement Web", list: [{ icon: devIcon, text: "Conception et développement de sites web responsives et optimisés pour tous les appareils" }, { text: "Intégration de fonctionnalités avancées telles que les formulaires de contact, les galeries d'images, etc." }, { text: "Personnalisation de thèmes et de templates pour les plateformes CMS (WordPress, Shopify, etc.)" }, { text: "Optimisation SEO pour améliorer la visibilité de votre site sur les moteurs de recherche" }]
    }]

    return (
        <section className='services' id="services">
            <Triangle />
            <Container>
                <h2>Services</h2>
                <p>En tant que graphiste et développeur freelance, je propose une gamme de services pour répondre à vos besoins créatifs et techniques. Que vous recherchiez un design graphique percutant ou une solution de développement web sur mesure, je suis là pour vous aider à concrétiser vos idées. Voici quelques-uns des services que je propose :</p>

                <div className='services-wrapper'>
                    {services.map((service) => {
                        return <Service icon={service.icon} title={service.title} list={service.list} />
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Services;