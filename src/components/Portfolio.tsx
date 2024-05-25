import { useState } from "react";
import Container from "./Container";
import Project from "./Project";

const Portfolio = () => {

    const projects = [{
        title: 'Avocajust',
        desc: "Logo pour une société d'avocats",
        url: 'https://avocajust.com/',
        tags: ['design']
    }, {
        title: 'Effet Animal',
        desc: 'Site vitrine pour une société de zoothérapie',
        url: 'https://effetanimal.fr',
        tags: ['design', 'dev']
    }, {
        title: "Hozu",
        desc: "Logo pour un restaurant asiatique",
        url: 'https://www.hozusushi.com/',
        tags: ['design']
    }, {
        title: "Montlhery conduite",
        desc: "Dépliant commercial pour une auto-école",
        url: "https://www.instagram.com/p/CA2z6yygktA/?img_index=1",
        tags: ['design']
    }, {
        title: 'Victoria Thibault',
        desc: 'Logo pour un mariage',
        url: 'https://www.instagram.com/p/B1MIsLbhz_3/',
        tags: ['design']
    }, {
        title: 'Starsheep',
        desc: 'Logo pour une association venant en aide aux enfants malades',
        url: 'https://www.instagram.com/p/B_ANDJig4Yh/',
        tags: ['design']
    },
    {
        title: 'Ideal Zen',
        desc: 'Site vitrine pour une société de Reiki',
        url: 'https://idealzen.fr',
        tags: ['dev']
    }, {
        title: "Opal'lien",
        desc: 'Logo pour une entreprise de zoothérapie',
        url: 'https://www.instagram.com/p/B-KLi8zgloE/?img_index=1',
        tags: ['design']
    }, {
        title: 'Bibi300 Logo',
        desc: 'Logo pour le vidéaste Bibi300',
        url: 'https://www.youtube.com/@Bibi300',
        tags: ['design']
    }, {
        title: 'Isabelle Usclade',
        desc: 'Site vitrine pour une société de sophrologie',
        url: 'http://isabelleusclade.fr/',
        tags: ['dev']
    }, {
        title: 'Adaf',
        desc: "Logo pour l'association animale ADAF",
        url: "https://www.instagram.com/p/B0Qbt5ihUYE/",
        tags: ['design']
    }, {
        title: 'Bibi300 Bannière',
        desc: 'Bannière pour la chaîne Youtube du vidéaste Bibi300',
        url: 'https://www.youtube.com/@Bibi300',
        tags: ['design']
    }, {
        title: 'Isolabel',
        desc: "Logo pour société d'isolation",
        url: 'https://www.instagram.com/p/Bt9ME9jHaWv/',
        tags: ['design']
    }, {
        title: 'Geneapro',
        desc: "Flyer de présentation d'activité de généalogiste",
        url: 'https://www.instagram.com/p/CBOX_-FAm5O/',
        tags: ['design']
    }, {
        title: 'ADAF',
        desc: "Logo pour l'association animale ADAF",
        url: 'https://www.instagram.com/p/B0T9Pr5BFzw/',
        tags: ['design']
    }, {
        title: 'Lionheart',
        desc: "Logo pour une marque de frites",
        url: 'https://www.instagram.com/p/Bt9L_3XnVAm/',
        tags: ['design']
    }]

    const [filteredProjects, setFilteredProjects] = useState<Array<{
        title: string,
        desc: string,
        url: string,
        tags: Array<string>
    }>>(projects)

    const filteringProjects = (type: string) => {
        switch (type) {
            case 'all':
                return setFilteredProjects(projects)
            default:
                return setFilteredProjects(projects.filter(project => { return project.tags.includes(type) }))
        }
    }

    const [allSelected, setAllSelected] = useState(true)
    const [designSelected, setDesignSelected] = useState(false)
    const [devSelected, setDevSelected] = useState(false)

    const filter = (type: string) => {
        switch (type) {
            case 'all':
                setAllSelected(true)
                setDesignSelected(false)
                setDevSelected(false)
                return filteringProjects('all')
            case 'design':
                setAllSelected(false)
                setDesignSelected(true)
                setDevSelected(false)
                return filteringProjects('design')
            case 'dev':
                setAllSelected(false)
                setDesignSelected(false)
                setDevSelected(true)
                return filteringProjects('dev')
        }
    }

    return (
        <section className="portfolio">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <Container>
                <h2>projets</h2>
                <p>Une partie des projets que j'ai mené à bien</p>
                <div className="filters">
                    <button className={allSelected ? "btn btn--primary-outline filter project--all-types active" : "btn btn--primary-outline filter project--all-types"} onClick={() => filter('all')}>Tout</button>
                    <button className={designSelected ? "btn btn--primary-outline filter project--design active" : "btn btn--primary-outline filter project--design"} onClick={() => filter('design')}>Design</button>
                    <button className={devSelected ? "btn btn--primary-outline filter project--dev active" : "btn btn--primary-outline filter project--dev"} onClick={() => filter('dev')}>Développement</button>
                </div>
                <div className="results">
                    {filteredProjects.map((project, index) => {
                        return <Project key={index} title={project.title} desc={project.desc} url={project.url} types={project.tags} />
                    })}

                </div>
            </Container>
        </section>
    );
};

export default Portfolio;