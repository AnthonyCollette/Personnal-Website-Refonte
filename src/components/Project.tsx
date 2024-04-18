import EffetAnimal from '../assets/images/sites/effetanimal.png';
import IdealZen from '../assets/images/sites/idealzen.png';

type Props = {
    title?: string,
    desc?: string,
    url?: string
}

const Project = ({ title, desc, url }: Props) => {

    const getImg = () => {
        switch (title) {
            case 'Effet Animal':
                return EffetAnimal
            case 'Ideal Zen':
                return IdealZen
        }
    }

    return (
        <div className="project">
            <a href={url} target="_blank" className="full-link" />
            <img src={getImg()} alt={"Projet pour " + title} />
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default Project;