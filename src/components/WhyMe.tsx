import Container from "./Container";
import Image from '../assets/images/whyme.svg';
import Communication from '../assets/images/communication.svg';
import Development from '../assets/images/development.svg';
import Service from "./Service";

const WhyMe = () => {

    const services = [{
        icon: Image,
        title: "Vision cohérente de votre projet ",
        desc: "En travaillant avec un seul freelance pour la conception graphique et le développement web, vous vous assurez une cohérence visuelle tout au long du processus. De la conception initiale de l'interface utilisateur à l'implémentation technique, je m'assure que chaque aspect de votre site web reflète fidèlement votre marque et votre vision."
    }, {
        icon: Communication,
        title: "Communication fluide et efficace",
        desc: "Travailler avec un seul interlocuteur simplifie grandement la communication. Au lieu de jongler entre plusieurs personnes, vous avez un point de contact unique pour discuter de vos idées, donner des retours et résoudre les problèmes éventuels. Cela garantit une collaboration fluide et une compréhension approfondie de vos besoins tout au long du processus de création."
    }, {
        icon: Development,
        title: "Flexibilité et agilité",
        desc: "En tant que freelance, je suis capable d'adapter rapidement mes compétences et mes ressources pour répondre à l'évolution de votre projet. Que vous ayez besoin de modifications de conception de dernière minute ou de fonctionnalités supplémentaires sur votre site web, je suis là pour vous accompagner à chaque étape, en vous offrant la flexibilité nécessaire pour faire évoluer votre présence en ligne selon vos besoins changeants."
    }]

    return (
        <section className="whyme">
            <Container>
                <h2>Pourquoi moi ?</h2>
                <p>En tant que freelance, je combine les compétences de développeur web et de graphiste pour vous offrir une approche intégrée répondant à l'ensemble de vos besoins en ligne. Voici pourquoi vous pourriez trouver avantageux de faire appel à un professionnel polyvalent comme moi :</p>
                <div className="services">
                    {services?.map(service => {
                        return <Service icon={service.icon} title={service.title} desc={service.desc} />
                    })}
                </div>
                <p>En somme, faire appel à un freelance offrant à la fois des compétences en développement web et en conception graphique vous permet de bénéficier d'une approche holistique, d'une communication efficace et d'une flexibilité accrue pour concrétiser votre vision en ligne de manière professionnelle et cohérente.</p>
            </Container>
        </section>
    );
};

export default WhyMe;