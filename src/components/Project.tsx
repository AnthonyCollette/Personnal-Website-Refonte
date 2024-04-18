import EffetAnimal from '../assets/images/sites/effetanimal.png';
import IdealZen from '../assets/images/sites/idealzen.png';

type Props = {
    title?: string,
    desc?: string,
    url?: string,
    types?: Array<string>
}

const Project = ({ title, desc, url, types }: Props) => {

    const getImg = () => {
        switch (title) {
            case 'Effet Animal':
                return EffetAnimal
            case 'Ideal Zen':
                return IdealZen
        }
    }

    const getClassName = () => {
        if (!types) {
            return "project"
        } else if (types?.length > 1) {
            return "project project--all-types"
        } else if (types?.includes('design')) {
            return "project project--design"
        } else if (types?.includes('dev')) {
            return "project project--dev"
        }
    }

    return (
        <div className={getClassName()}>
            <a href={url} target="_blank" rel='noreferrer' className="full-link">Accéder au site</a>
            <img src={getImg()} alt={"Projet pour " + title} />
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default Project;