import { useState } from "react";
import Container from "./Container";
import Project from "./Project";

const Portfolio = () => {

    const projects = [{
        title: 'Effet Animal',
        desc: 'Site vitrine pour une société de zoothérapie',
        url: 'https://effetanimal.fr',
        tags: ['design']
    },
    {
        title: 'Effet Animal',
        desc: 'Site vitrine pour une société de zoothérapie',
        url: 'https://effetanimal.fr',
        tags: ['design']
    },
    {
        title: 'Effet Animal',
        desc: 'Site vitrine pour une société de zoothérapie',
        url: 'https://effetanimal.fr',
        tags: ['design']
    },
    {
        title: 'Effet Animal',
        desc: 'Site vitrine pour une société de zoothérapie',
        url: 'https://effetanimal.fr',
        tags: ['design']
    },
    {
        title: 'Ideal Zen',
        desc: 'Site vitrine pour une société de Reiki',
        url: 'https://idealzen.fr',
        tags: ['dev']
    },
    {
        title: 'Effet Animal',
        desc: 'Site vitrine pour une société de zoothérapie',
        url: 'https://effetanimal.fr',
        tags: ['design']
    },
    {
        title: 'Ideal Zen',
        desc: 'Site vitrine pour une société de Reiki',
        url: 'https://idealzen.fr',
        tags: ['dev', 'design']
    },
    {
        title: 'Ideal Zen',
        desc: 'Site vitrine pour une société de Reiki',
        url: 'https://idealzen.fr',
        tags: ['dev', 'design']
    }]

    const [filteredProjects, setFilteredProjects] = useState<Array<{
        title: string,
        desc: string,
        url: string,
        tags: Array<string>
    }>>([])

    const filteringProjects = (type: string) => {
        switch (type) {
            case 'all':
                return setFilteredProjects(projects)
            default:
                return setFilteredProjects(projects.filter(project => { return project.tags.includes(type) }))
        }
    }

    const [allSelected, setAllSelected] = useState(false)
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